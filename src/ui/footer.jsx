import React from 'react';

export default function Footer() {
  return (
    <>
      <div className='mx-8 mt-5 mb-8  p-14 flex justify-between bg-neutral-100 rounded-[40px]'>
        <div className='flex justify-center'>
          <p className='font-[500] self-center'>© Talup 2024. All rights reserved</p>
        </div>
        <div className='space-x-6'>
          <a href='#' className='self-center underline decoration-1 underline-offset-2'>Terms & Conditions</a>
          <a href='#' className='self-center underline decoration-1 underline-offset-2'>Privacy Policy</a>
        </div>
      </div>
    </>
  );
}
