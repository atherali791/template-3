import SectionHeading from '@/Components/SectionHeading'
import { SlidersHorizontal } from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import { Filter } from 'lucide-react'
import { ChevronUp } from 'lucide-react'
import React from 'react'

export default function Page() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
      <div className=''>
        <FirstColumn />
      </div>
      <div className='lg:col-span-3'>
        <SecondColumn />
      </div>
    </div>
  )
}

function FirstColumn() {
  return (
    <>
      <SectionHeading text={"New (500)"} />
      <div className='mt-6 flex flex-col gap-4 text-sm font-semibold'>
        <p>Shoes</p>
        <p>Sports Bras</p>
        <p>Tops & T-Shirts</p>
        <p>Hoodies & Sweatshirt</p>
        <p>Jackets</p>
        <p>Trousers & Tights</p>
        <p>Shorts</p>
        <p>Tracksuits</p>
        <p>Jumpsuits & Rompers</p>
        <p>Skirts & Dresses</p>
        <p>Socks</p>
        <p>Accessories & Equipment</p>
      </div>

      <div>
        <p className='flex justify-between font-medium'>Gender <ChevronUp /></p>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-3">
            <input type="checkbox" className="checkbox" />
            <span className="label-text">Men</span>
          </label>
        </div>

        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-3">
            <input type="checkbox" className="checkbox" />
            <span className="label-text">Women</span>
          </label>
        </div>

        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-3">
            <input type="checkbox" className="checkbox" />
            <span className="label-text">Unisex</span>
          </label>
        </div>

      </div>

      <div>
        <p className='flex justify-between font-medium'>Kids <ChevronUp /></p>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-3">
            <input type="checkbox" className="checkbox" />
            <span className="label-text">Boys</span>
          </label>
        </div>

        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-3">
            <input type="checkbox" className="checkbox" />
            <span className="label-text">Girls</span>
          </label>
        </div>
      </div>

      <div>
        <p className='flex justify-between font-medium'>Shop By Price <ChevronUp /></p>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-3">
            <input type="checkbox" className="checkbox" />
            <span className="label-text">Under Rs. 2,500.00</span>
          </label>
        </div>

        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-3">
            <input type="checkbox" className="checkbox" />
            <span className="label-text">Rs. 2,501.00 - Rs. 5,000.00</span>
          </label>
        </div>
      </div>

    </>
  )
}

function SecondColumn() {
  return (
    <section className='flex flex-col gap-6'>
      <div className='flex justify-end gap-4'>
        <p className='flex gap-4 items-center text-sm'>Hide Filters <SlidersHorizontal size={16}/></p>
        <p className='flex gap-4 items-center text-sm'>Sort By <ChevronDown /></p>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <LargeProductCard />
        <LargeProductCard />
        <LargeProductCard />
        <LargeProductCard />
        <LargeProductCard />
        <LargeProductCard />
        <LargeProductCard />
        <LargeProductCard />
        <LargeProductCard />
        <LargeProductCard />
        <LargeProductCard />
      </div>

      <div className='my-20'>
        <SectionHeading text={"Related Categories"} />
        <div className='mt-5 flex flex-wrap gap-4'>
          <Category categoryText={"Best Selling Products"} />
          <Category categoryText={"Best Shoes"} />
          <Category categoryText={"New Basketball Shoes"} />
          <Category categoryText={"New Football Shoes"} />
          <Category categoryText={"New Men's Shoes"} />
          <Category categoryText={"New Running Shoes"} />
          <Category categoryText={"Best Men's Shoes"} />
          <Category categoryText={"New Jordan Shoes"} />
          <Category categoryText={"Best Women's Shoes"} />
          <Category categoryText={"Best Training & Gym"} />
        </div>
      </div>
    </section>
  )
}

function LargeProductCard() {
  return (
    <div className='flex flex-col gap-4 justify-between'>
      <img className='w-[380px] object-contain' src="https://placehold.co/380x280" alt="product image" />
      <div className='text-sm'>
        <p className='font-medium text-red-700'>Just In</p>
        <p className='font-semibold'>Nike Air Force 1 Mid '07</p>
        <p className='opacity-60'>Men's Shoes</p>
        <p className='opacity-60'>1 Color</p>
        <p className='font-semibold mt-4'>Rs. 10,795.00</p>
      </div>
    </div>
  )
}

function Category({ categoryText }) {
  return (
    <>
      <div className='w-fit px-8 py-2 text-sm border border-gray-300 rounded-full'>{categoryText}</div>
    </>
  )
}