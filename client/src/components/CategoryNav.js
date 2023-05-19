import React from 'react';
// useFetch hook
import useFetch from '../hooks/useFetch';
// link
import { Link } from 'react-router-dom';

const CategoryNav = () => {
  const { data } = useFetch('/categories');
  return (
    <aside className=' hidden xl:flex '>
      <div className='bg-white flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden'>
        <div className='bg-slate-400 py-4 text-white uppercase font-bold flex items-center justify-center text-lg'>
          Collection
        </div>
        <div className='flex flex-col gap-y-6 p-6'>
          {data?.map((category) => {
            return (
              <Link
                to={`/products/${category.id}`}
                className='cursor-pointer capitalize text-primary font-semibold hover:text-slate-700 text-lg'
                key={category.id}
              >
                {category.attributes.title}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default CategoryNav;
