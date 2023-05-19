import React from 'react';

const Footer = () => {
  return (
    <footer className='pt-16 bg-slate-400'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h2 className='h2 uppercase mb-6 font-semibold'>
            Subscribe to our newsletter
          </h2>
          <p className='text-white/70 text-lg'>
           Get the latet updates in your inbox
          </p>
        </div>
        {/* form */}
        <form className='w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-14'>
          <input
            type='text'
            placeholder='Enter your E-mail'
            className='input'
          />
          <button className='btn btn-accent min-w-[150px]'>Subscribe</button>
        </form>
      </div>
      {/* copyright */}
      <div className='py-10 border-t border-t-white/30'>
        <div className='container mx-auto'>
          <div className='text-center text-sm text-white '>
             &copy;2023 Odan Infotech LLP
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
