import Button from '@/Components/Button'
import React from 'react'

export default function Page() {
  return (
    <div className='mt-10 mb-20 w-[380px] mx-auto flex items-center justify-center flex-col gap-6'>
      <img className='w-[64px]' src="/logo.png" alt="" />
      <h4 className='text-center uppercase text-lg font-bold w-[180px]'>Your Account For Everything Nike</h4>
      <div className='flex flex-col gap-3 w-full'>
        <input type="email" placeholder="Email" className="input input-bordered w-full" />
        <input type="text" placeholder="Password" className="input input-bordered w-full" />
      </div>
      <div className='w-full flex justify-between items-center'>
        <div className="form-control flex-row justify-between items-center">
          <label className="label cursor-pointer justify-start gap-3">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text opacity-80 text-sm">Keep me signed in</span>
          </label>
        </div>
        <p className='opacity-60 text-sm'>Forgotten your password?</p>
      </div>
      <p className='lg:w-[280px] text-sm opacity-60 text-center'>By logging in, you agree to Nike's <span className='underline'>Privacy Policy</span> and <span className='underline'>Terms of Use</span>.</p>
      <button className='w-full btn uppercase bg-black text-white font-light'>
        Sign In
      </button>
      <div className='flex text-sm gap-2'>
        <p className='opacity-60'>Not a Member?</p>
        <span className='opacity-100 underline'>Join Us.</span>
      </div>

    </div>
  )
}
