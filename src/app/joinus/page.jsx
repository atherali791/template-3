import React from 'react'

export default function page() {
  return (
    <div className='mt-10 mb-20 w-[380px] mx-auto flex items-center justify-center flex-col gap-6'>
      <img className='w-[64px]' src="/logo.png" alt="" />
      <h4 className='text-center uppercase text-lg font-bold w-[180px]'>Become a Nike member</h4>
      <p className='text-center text-sm opacity-60'>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
      <div className='flex flex-col gap-3 w-full'>
        <input type="email" placeholder="Email" className="input input-bordered w-full" />
        <input type="text" placeholder="Password" className="input input-bordered w-full" />
        <input type="text" placeholder="First Name" className="input input-bordered w-full" />
        <input type="text" placeholder="Last Name" className="input input-bordered w-full" />
        <input type="text" placeholder="Date of Birth" className="input input-bordered w-full" />
        <p className='opacity-60 text-xs'>Get a Nike Member Reward every year on your Birthday.</p>
        <select className="select select-bordered w-full opacity-90 text-gray-400 text-base">
          <option>Who shot first?</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <div className='flex gap-4'>
          <p className='border rounded-md p-3 border-gray-300 text-gray-400 flex-grow text-center'>Male</p>
          <p className='border rounded-md p-3 border-gray-300 text-gray-400 flex-grow text-center'>Female</p>
        </div>
        <label className="label cursor-pointer justify-start gap-3">
          <input type="checkbox" className="checkbox" />
          <span className="label-text opacity-60 text-sm">Sign up for emails to get updates from Nike on products, offers and your Member benefits</span>
        </label>
        <p className='text-sm opacity-60 text-center'>By creating an account, you agree to Nike's <span className='underline font-semibold'>Privacy Policy</span> and <span className='underline font-semibold'>Terms of Use</span>.</p>
      </div>

      <button className='w-full btn uppercase bg-black text-white font-light'>
        Join Us
      </button>
      <div className='flex text-sm gap-2'>
        <p className='opacity-60'>Already a Member?</p>
        <span className='opacity-100 underline font-semibold'>Sign In.</span>
      </div>

    </div>
  )
}
