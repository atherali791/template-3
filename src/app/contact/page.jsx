import AllCapsHeading from '@/Components/AllCapsHeading'
import Button from '@/Components/Button'
import HighlightedText from '@/Components/HighlightedText'
import SectionHeading from '@/Components/SectionHeading'
import { Mail } from 'lucide-react'
import { MessageSquareMore } from 'lucide-react'
import { ThumbsUp } from 'lucide-react'
import { Smartphone } from 'lucide-react'
import { ThumbsDown } from 'lucide-react'
import { Search } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <>
      <div className='flex flex-col items-center gap-4 my-10'>
        <AllCapsHeading text={"Get Help"} />
        <label className="input input-bordered flex items-center gap-2">
          <Search />
          <input type="text" className="grow  lg:w-[450px]" placeholder="Search" />
        </label>
      </div>

      <div className='my-10 grid grid-cols-1 lg:grid-cols-3 gap-10'>
        <div className='lg:col-span-2'>
          <ColumnOne />
        </div>
        <ColumnTwo />
      </div>

    </>
  )
}


function ColumnOne() {
  return (
    <section className='flex flex-col gap-6'>
      <PaymentOptions />
      <FAQ />
    </section>
  )
}

function PaymentOptions() {
  return (
    <section className='flex flex-col gap-4'>
      <SectionHeading text={"WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?"} />
      <div className='flex flex-col gap-4'>
        <p>We want to make buying your favorite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
        <ul>
          <li className='ps-6 py-2'>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
          <li className='ps-6 py-2'>If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</li>
          <li className='ps-6 py-2'>Apple Pay</li>
        </ul>
        <p>
          <HighlightedText>
            Nike Members
          </HighlightedText>
          can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member,
          <HighlightedText>
            join us today
          </HighlightedText>.
        </p>
        <div className='flex gap-4'>
          <Button>JOIN US</Button>
          <Button>SHOP MORE</Button>
        </div>
      </div>

    </section>
  )
}

function FAQ() {
  return (
    <section className='flex flex-col gap-4'>
      <SectionHeading text={"FAQs"} />
      <div>
        <p className='font-bold'>Does my card need international purchase enabled?</p>

        <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
        <p>Please note, some banks may charge
          <HighlightedText> a small transaction fee</HighlightedText> for international orders.</p>
      </div>

      <div>
        <p className='font-bold'>Can I pay for my orders with multiple methods?</p>

        <p>No, payment for Nike orders can't be split between multiple payment methods.</p>
      </div>


      <div>
        <p className='font-bold'>What payment method is accepted for SNKRS orders?</p>

        <p>You can use any accepted credit card to pay for your SNKRS order.</p>
      </div>

      <div>
        <p className='font-bold'>Why don't I see Apple Pay as an option?</p>

        <p>To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
      </div>

      <div>
        <p>Was this answer helpful?</p>
        <div className='flex gap-2'>
          <ThumbsUp />
          <ThumbsDown />
        </div>
      </div>

      <div>
        <p className='uppercase opacity-60'>Related</p>
        <p className='ps-6 uppercase underline font-semibold'>What are Nike's Delivery Service options?</p>
        <p className='ps-6 uppercase underline font-semibold'>How do i Get free delivery on nike orders?</p>
      </div>
    </section>
  )
}

function ColumnTwo() {
  return (
    <section className='flex flex-col gap-8 items-center'>
      <SectionHeading text={"CONTACT US"} />
      <div className='flex items-center flex-col gap-1'>
        <Smartphone size={64} />
        <p className='font-semibold'>000 800 929 0566</p>
        <p>Products & Orders: 24 Hours a day, 7 Days a week</p>
        <p>Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
      </div>
      <div className='flex flex-col items-center gap-1'>
        <MessageSquareMore size={64} />
        <p className='font-semibold'>24 Hours a Day</p>
        <p>7 days a week</p>
      </div>
      <div className='flex flex-col items-center gap-1'>
        <Mail size={64} />
        <p className='font-semibold'>We'll reply within</p>
        <p>five business days</p>
      </div>
      <div className='flex flex-col items-center gap-1'>
        <Mail size={64} />
        <p className='font-semibold'>Store Locator</p>
        <p>Find Nike retails stores near you</p>
      </div>

    </section>
  )
}