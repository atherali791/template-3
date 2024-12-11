import AllCapsHeading from '@/Components/AllCapsHeading'
import Button from '@/Components/Button'
import SectionHeading from '@/Components/SectionHeading'
import { ChevronRight } from 'lucide-react'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
      <Hero />
      <FirstLook />
      <BestProducts />
      <Featured />
      <GearUp />
      <DontMiss />
      <Essentials />
      <BottomLinks />
    </>
  )
}

function Hero() {
  return (
    <div className='flex flex-col items-center justify-start gap-3'>
      <h2 className='font-semibold'>Hello Nike App</h2>
      <p className='text-sm'>Download the app to access Nike. <Link href={""} className='link font-bold underline'>Get Your Great</Link></p>
      <img className='h-full w-full object-cover' src="/banner/1.png" alt="" />
    </div>
  )
}

function FirstLook() {
  return (
    <div className='my-20 flex flex-col items-center gap-6'>
      <h4 className='text-sm font-semibold'>First Look</h4>
      <AllCapsHeading text={"nike air max pulse"} />
      <p className='lg:w-[550px] text-sm text-center'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—designed to push you past your limits and help you go to the max.</p>
      <div className='flex gap-3'>
        <Button text={"Notify Me"} />
        <Button text={"Shop Air Max"} />
      </div>
    </div>
  )
}

function BestProducts() {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <SectionHeading text={"Best of Air Max"} />
        <div className='flex gap-6 items-center'>
          <p className='font-semibold'>Shop</p>
          <div>
            <button className='btn btn-circle opacity-60'><ChevronLeft /></button>
            <button className='btn btn-circle btn-active'><ChevronRight /></button>
          </div>
        </div>
      </div>
      <div id='card-container' className='mt-6 flex flex-col md:flex-row gap-6 overflow-x-scroll'>
        <ProductCard
          prodTitle={"Nike Air Max Pulse"}
          prodCategory={"Women's Shoes"}
          prodPrice={13995}
          imgUrl={"/shoes/1.png"}
        />
        <ProductCard
          prodTitle={"Nike Air Max Pulse"}
          prodCategory={"Men's Shoes"}
          prodPrice={13995}
          imgUrl={"/shoes/2.png"}
        />
        <ProductCard
          prodTitle={"Nike Air Max 97 SE"}
          prodCategory={"Men's Shoes"}
          prodPrice={16995}
          imgUrl={"/shoes/3.png"}
        />
        <ProductCard
          prodTitle={"Nike Air Max SYSTM"}
          prodCategory={"Men's Shoes"}
          prodPrice={16995}
          imgUrl={"/shoes/4.png"}
        />

      </div>
    </div>
  )
}

function ProductCard({ prodTitle, imgUrl, prodCategory, prodPrice }) {
  return (
    <div className='w-full lg:w-[320px] flex flex-col gap-6 justify-between'>
      <img className='mx-auto lg:h-[280px] lg:w-[380px] object-contain' src={`${imgUrl ? imgUrl : "https://placehold.co/380x280"}`} alt="product image" />
      <div className='flex justify-between'>
        <div>
          <h4 className='text-sm font-semibold'>{prodTitle ? prodTitle : "Product Title"}</h4>
          <p className='text-sm opacity-60'>{prodCategory ? prodCategory : "Product Category"}</p>
        </div>
        <div className='text-sm font-semibold'>
          {`Rs. ${prodPrice ? prodPrice.toLocaleString() : "0000.00"}`}
        </div>
      </div>
    </div>
  )
}

function Featured() {
  return (
    <section className='my-20 flex flex-col gap-3'>
      <SectionHeading text={"Featured"} />
      <img className='block object-cover' src="/banner/2.png" alt="" />
      <div className='mt-6 flex flex-col gap-4 items-center'>
        <AllCapsHeading text={"Step into what feels good"} />
        <p className=''>Cause everyone should know the feeling of running in that perfect pair.</p>
        <Button text={"Find Your Shoe"} />
      </div>
    </section>
  )
}

function GearUp() {
  return (
    <>
      <SectionHeading text={"Gear Up"} />
      <section className='my-5 flex flex-col lg:flex-row gap-4'>
        <div>
          <div className='flex justify-end items-center'>
            <div className='flex gap-6 items-center'>
              <p className='font-semibold'>Shop Men's</p>
              <div>
                <button className='btn btn-circle opacity-60'><ChevronLeft /></button>
                <button className='btn btn-circle btn-active'><ChevronRight /></button>
              </div>
            </div>
          </div>
          <div id='card-container' className='mt-6 flex gap-6 overflow-x-scroll'>
            <ProductCard
              prodTitle={"Nike Dri-FIT ADV TechKnit Ultra"}
              prodCategory={"Men's Short-Sleeve Running Top"}
              prodPrice={3895}
              imgUrl={"/clothing/1.png"}
            />
            <ProductCard
              prodTitle={"Nike Dri-FIT Challenger"}
              prodCategory={"Men's 18cm (approx.) 2-in-1 Versatile Shorts"}
              prodPrice={2495}
              imgUrl={"/clothing/2.png"}
            />
          </div>
        </div>

        <div>
          <div className='flex justify-end items-center'>
            <div className='flex gap-6 items-center'>
              <p className='font-semibold'>Shop Women's</p>
              <div>
                <button className='btn btn-circle opacity-60'><ChevronLeft /></button>
                <button className='btn btn-circle btn-active'><ChevronRight /></button>
              </div>
            </div>
          </div>
          <div id='card-container' className='mt-6 flex gap-6 overflow-x-scroll'>
            <ProductCard
              prodTitle={"Nike Dri-FIT ADV Run Division"}
              prodCategory={"Women's Long-Sleeve Running Top"}
              prodPrice={5295}
              imgUrl={"/clothing/3.png"}
            />
            <ProductCard
              prodTitle={"Nike Fast"}
              prodCategory={"Women's Mid-Rise 7/8 Running Leggings with Pockets"}
              prodPrice={3795}
              imgUrl={"/clothing/4.png"}
            />
          </div>
        </div>
      </section>
    </>
  )
}

function DontMiss() {
  return (
    <section className='flex flex-col gap-6 my-20'>
      <SectionHeading text={"Don't Miss"} />
      <div className='w-full mt-6 flex gap-4'>
        <img className='w-full' src="/banner/3.png" alt="product image" />
      </div>
      <div className='flex flex-col items-center gap-4'>
        <AllCapsHeading text={"flight essentials"} />
        <p className='text-sm'>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
        <Button text={"Shop"} />
      </div>
    </section>
  )
}

function Essentials() {
  return (
    <section className=''>
      <SectionHeading text={"The Essentials"} />
      <div className='flex flex-col lg:flex-row gap-4'>
        <EssentialsCard
          buttonText={"Men's"}
          imgUrl={"/shoot/1.png"}
        />
        <EssentialsCard
          buttonText={"Women's"}
          imgUrl={"/shoot/2.png"}
        />
        <EssentialsCard
          buttonText={"Kid's"}
          imgUrl={"/shoot/3.png"}
        />
      </div>
    </section>
  )
}

function EssentialsCard({ buttonText, imgUrl }) {
  return (
    <div className='relative h-[540px] aspect-[3/4] flex-grow'>
      <img className='w-full h-full object-cover' src={`${imgUrl ? imgUrl : "https://placehold.co/300x400"}`} alt="essentials image" />
      <button className='absolute bottom-10 left-10 bg-white btn rounded-full'>{buttonText}</button>
    </div>
  )
}

function BottomLinks() {
  return (
    <div className='my-20 grid grid-cols-2 lg:grid-cols-4 justify-items-start lg:justify-items-center'>
      <div>
        <h2 className='font-medium mb-6'>Icons</h2>
        {["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"].map((item, index) => {
          return <p key={index} className='opacity-70 mb-3'>{item}</p>
        })}
      </div>

      <div>
        <h2 className='font-medium mb-6'>Shoes</h2>
        {["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"].map((item, index) => {
          return <p key={index} className='opacity-70 mb-3'>{item}</p>
        })}
      </div>

      <div>
        <h2 className='font-medium mb-6'>Clothing</h2>
        {["All Clothing", "Modest Wear", "Hoodies & Pullovers", "Shirts & Tops"].map((item, index) => {
          return <p key={index} className='opacity-70 mb-3'>{item}</p>
        })}
      </div>

      <div>
        <h2 className='font-medium mb-6'>Kids'</h2>
        {["Infant & Toddler Shoes", "Kids' Shoes", "Kids' Jordan Shoes", "Kids' Basketball Shoes"].map((item, index) => {
          return <p key={index} className='opacity-70 mb-3'>{item}</p>
        })}
      </div>
    </div>
  )
}