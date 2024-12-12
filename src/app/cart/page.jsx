import HighlightedText from '@/Components/HighlightedText'
import SectionHeading from '@/Components/SectionHeading'
import { Trash } from 'lucide-react'
import { Heart } from 'lucide-react'
import React from 'react'

export default function Page() {
  return (
    <section className='lg:px-20 my-20 grid grid-cols-3 gap-10'>
      <div className='col-span-2'>
        <ColumnOne />
      </div>
      <ColumnTwo />
    </section>
  )
}

function ColumnOne() {
  return (
    <>
      <div className='px-10 py-4 text-sm mb-4'>
        <p className='font-semibold'>Free Delivery</p>
        <p>Applies to orders of Rs. 14,000.00 or more. <HighlightedText>View Details</HighlightedText></p>
      </div>
      <div>
        <SectionHeading text={"Bag"} />
        <div className='mt-6'>
          <div className='flex flex-col gap-6'>
            <CartItem 
            imgUrl={"products/1.png"}
            />
            <div className="divider"></div>
            <CartItem 
              imgUrl={"/shoes/1.png"}
            />
          </div>
        </div>
      </div>
    </>
  )
}

function CartItem({imgUrl}) {
  return (
    <div className='flex gap-6'>
      <img className='h-[164px] object-cover' src={`${imgUrl ? imgUrl : "https://placehold.co/164"}`} alt="" />
      <div className='flex-grow flex justify-between'>
        <div>
          <div className='flex flex-col gap-4'>
            <p className='font-bold'>Nike Dri-FIT ADV TechKnit Ultra</p>
            <p className='opacity-60' >Men's Short-Sleeve Running Top</p>
            <p className='opacity-60' >Ashen Slate/Cobalt Bliss</p>
            <div className='opacity-60 flex justify-between'>
              <p>Size L</p>
              <p>Quantity 1</p>
            </div>
            <div className='mt-4 flex gap-6'>
              <Heart />
              <Trash />
            </div>
          </div>
        </div>
        <p className='font-semibold'>Rs. 3,895.00</p>
      </div>

    </div>
  )
}

function ColumnTwo() {
  return (
    <div>
      <SectionHeading text={"Summary"} />
      <div className='mt-4 flex flex-col gap-4 text-sm font-medium'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>Rs. 20,890.00</p>
        </div>
        <div className='flex justify-between'>
          <p>Estimated Delivery & Handling</p>
          <p>Free</p>
        </div>
        <div className='divider'></div>
        <div className="flex justify-between">
          <p>Total</p>
          <p>Rs. 20,890</p>
        </div>
      </div>
      <button className='mt-4 w-full btn bg-black text-white rounded-full font-medium'>Member Checkout</button>

    </div>
  )
}