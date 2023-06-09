import React from 'react';
// icons
import { FiX } from 'react-icons/fi';
// link
import { Link } from 'react-router-dom';
// useFecth hook
import useFetch from '../hooks/useFetch';

const CategoryNavMobile = ({ setCatnavMobile }) => {
  // get categories
  const { data } = useFetch('/categories');

  return (
    <div className='w-full h-full bg-slate-200 p-8'>
      {/* close icon */}
      <div
        onClick={() => setCatnavMobile(false)}
        className='flex justify-end mb-8 cursor-pointer text-black'
      >
        <FiX className='text-3xl' />
      </div>
      <div className='flex flex-col gap-y-8'>
        {data?.map((category) => {
          return (
            <Link
              to={`products/${category.id}`}
              className='uppercase font-medium text-black'
              key={category.id}
            >
              {category.attributes.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryNavMobile;
