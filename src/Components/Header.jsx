import { Heart } from 'lucide-react'
import { ShoppingBag } from 'lucide-react'
import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='pb-4 flex flex-col'>
      <div className=' flex justify-between items-center'>
        <img className='w-7' src="/small_logo.png" alt="brand image" />
        <div className='flex gap-4 items-center text-sm'>
          <Link href={""}>Find a Store</Link>
          <div className="divider"></div>
          <Link href={""}>Help</Link>
          <div className="divider"></div>
          <Link href={""}>Join Us</Link>
          <div className="divider"></div>
          <Link href={""}>Sign In</Link>
          <div className="divider"></div>
        </div>
      </div>

      <nav className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
        <img className='mx-auto lg:m-0 w-16' src="/logo.png" alt="" />
        <div id='nav-links' className='font-semibold flex gap-6 items-center justify-center'>
          <Link href={""}>New & Featured</Link>
          <Link href={""}>Men</Link>
          <Link href={""}>Women</Link>
          <Link href={""}>Kids</Link>
          <Link href={""}>Sale</Link>
          <Link href={""}>SNKRS</Link>
        </div>
        <div className='flex gap-4 items-center justify-center lg:justify-end'>
          <label className="input input-bordered flex items-center gap-2">
            <Search />
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <Heart />
          <ShoppingBag />
        </div>
      </nav>
    </header>
  )
}