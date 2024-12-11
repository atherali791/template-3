import { MapPin } from 'lucide-react'
import React from 'react'
import ContentWrapper from './ContentWrapper'
import { Twitter } from 'lucide-react'
import { Facebook } from 'lucide-react'
import { Youtube } from 'lucide-react'
import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='px-6 lg:px-10 bg-black flex flex-col'>
      <div className='py-10 flex flex-col lg:flex-row justify-between'>
        <FooterRight />
        <FooterLeft />
      </div>
      <div className='text-white py-4 flex flex-col lg:flex-row justify-between font-light'>
        <div className='flex gap-6 flex-col md:flex-row'>
          <p className='flex gap-3'><MapPin /> Tando Adam, PK</p>
          <p className='opacity-40'>&copy; 2023 Nike, Inc. All Rights Reserved</p>
        </div>
        <div className='flex gap-6 opacity-40'>
          <p>Guides</p>
          <p>Terms of Sale</p>
          <p>Terms of Use</p>
          <p>Nike Privacy Policy</p>
        </div>
      </div>
    </footer>
  )
}

function FooterRight() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
      <div className='flex flex-col gap-4 uppercase text-white font-light text-xs'>
        <p>Find a store</p>
        <p>become a member</p>
        <p>sign up for email</p>
        <p>send us feedback</p>
        <p>student discounts</p>
      </div>
      <div className='flex flex-col gap-4 font-light text-xs text-white'>
        <h4 className='uppercase text-white'>Get Help</h4>
        {["Order Status", "Delivery", "Returns", "Payment Options", "Contact Us on Nike.com Inquiries", "Contact Us on All Other Inquiries"].map((item, index) => {
          return <p key={index} className='text-sm opacity-40'>{item}</p>
        })}
      </div>
      <div className='flex flex-col gap-4 font-light text-xs text-white'>
        <h4 className='uppercase text-white'>About Nike</h4>
        {["News", "Careers", "Investors", "Sustainability"].map((item, index) => {
          return <p key={index} className='text-sm opacity-40'>{item}</p>
        })}
      </div>

    </section>
  )
}

function FooterLeft(){
  return (
    <div className='flex gap-3 text-white'>
    <Twitter />
    <Facebook />
    <Youtube />
    <Instagram />
    </div>
  )
}