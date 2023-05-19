('use strict');

const stripe = require("stripe")('sk_test_51N194zSAVquUtGp2J9G03jxJq2KK91D02ncOdXKHHjjHKT0A7cNzWp6BVKA3pUu8OZ4yKj3ehUSDZC2q9zrFMAxn00MuxAPSEy');

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order',({strapi})=>({
    async create(ctx){
        const {cart}=ctx.request.body;
        if(!cart){
            ctx.response.status=400;
            return{error:"Cart not found in request body"};
        }
        const lineItems= await Promise.all(
            cart.map(async(product)=>{
                const item =await strapi
                .service('api::product.product')
                .findOne(product.id);
                return{
                    price_data:{
                        currency:"inr",
                        product_data:{
                            name:item.title
                        },
                        unit_amount:item.price*100,
                    },
                    quantity:product.amount,
                };
            })
        );
        try{
            const session = await stripe.checkout.sessions.create({
                mode:"payment",
                success_url:`${process.env.CLIENT_URL}?success=true`,
                cancel_url:`${process.env.CLIENT_URL}?success=false`,
                line_items:lineItems,
                shipping_address_collection:{allowed_countries:["IN"]},
                payment_method_types:["card"],
            });
            await strapi
            .service('api::order.order')
            .create({
                data:{
                    products:cart,
                    stripeId:session.id,
                },
            });
            return{stripeSession:session};
        }catch(error){
            ctx.response.status=500;
            return error;
        }
    },
}));
