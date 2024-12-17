import HighlightedText from '@/Components/HighlightedText'
import SectionHeading from '@/Components/SectionHeading'
import { Package2 } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <section className='lg:px-40 grid grid-cols-1 lg:grid-cols-2 gap-10'>
      <ColumnOne />
      <ColumnTwo />
    </section>
  )
}

function ColumnOne() {
  return (
    <div className='flex flex-col gap-6'>
      <h2 className='font-medium text-xl'>How would you like to get your order?</h2>
      <p className='opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nisi in eos distinctio laboriosam tempore delectus modi nobis ut explicabo enim, amet rerum? Est quod facilis, nemo accusamus, voluptatibus sunt dolor ipsam repellendus alias magni quisquam quae in ab quos eveniet laborum explicabo repudiandae deleniti. Dolorum ratione harum debitis delectus! <HighlightedText>Learn More</HighlightedText></p>

      <div className='flex gap-4 rounded-xl border-2 border-black px-4 py-6'>
        <Package2 />
        <p className='font-medium'>Deliver It</p>
      </div>
      <div className='flex flex-col'>
        <SectionHeading text={"Enter your name and address:"} />
        <div className='flex flex-col gap-6 w-full opacity-100 *:text-black'>
          <input type="email" placeholder="First Name" className="input input-bordered w-full" />
          <input type="text" placeholder="Last Name" className="input input-bordered w-full" />
          <input type="text" placeholder="Address Line 1" className="input input-bordered w-full" />
          <p className='opacity-60 text-xs'>We do not ship to P. O. Boxes</p>
          <input type="text" placeholder="Address Line 2" className="input input-bordered w-full" />
          <input type="text" placeholder="Address Line 3" className="input input-bordered w-full" />
          <div className='flex gap-4'>
            <p className='w-1/2 border rounded-md p-3 border-gray-300 text-gray-400 flex-grow'>Postal Code</p>
            <p className='w-1/2 border rounded-md p-3 border-gray-300 text-gray-400 flex-grow'>Locality</p>
          </div>
          <div className='flex gap-4'>
            <select className="w-1/2 select select-bordered opacity-90 text-gray-400 text-base">
              <option>State/Territory</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <p className='w-1/2 border rounded-md p-3 border-gray-300 text-gray-400 flex-grow'>Pakistan</p>
          </div>

          <label className="label cursor-pointer justify-start gap-3">
            <input type="checkbox" className="checkbox" />
            <span className="label-text opacity-60 text-sm">Save this address to my profile</span>
          </label>
          <label className="label cursor-pointer justify-start gap-3">
            <input type="checkbox" className="checkbox" />
            <span className="label-text opacity-60 text-sm">Make this my proffered address</span>
          </label>

          <div>
            <SectionHeading text={"What's your contact information?"} />
          </div>
          <input type="text" placeholder="Email" className="input input-bordered w-full" />
          <p className='opacity-60 text-xs'>A confirmation email will be sent after checkout.</p>

          <input type="text" placeholder="Phone Number" className="input input-bordered w-full" />
          <p className='opacity-60 text-xs'>A carrier might contact you to confirm delivery.</p>

          <SectionHeading text={"What's your PAN?"} />
          <input type="text" placeholder="PAN" className="input input-bordered w-full" />
          <p className='opacity-60 text-xs'>Enter your PAN to enable payment with UPI, Net Banking or Local Card Methods</p>
          <label className="label cursor-pointer justify-start gap-3">
            <input type="checkbox" className="checkbox" />
            <span className="label-text opacity-60 text-sm">Save PAN details to Nike Profile</span>
          </label>

          <label className="label cursor-pointer justify-start gap-3">
            <input type="checkbox" className="checkbox" />
            <span className="label-text opacity-60 text-sm">I have read and consent to eShopWorld processing my information in accordance with the <HighlightedText>Privacy Statement</HighlightedText> and <HighlightedText>Cookie Policy</HighlightedText>. eShopWorld is a trusted Nike partner.</span>
          </label>
          <button className='btn btn-wide btn-disabled'>Continue</button>
        </div>
        <div className='mt-4 font-semibold flex flex-col gap-6 opacity-60'>
          <p className='border-t border-t-gray-300 py-3 text-black'>Delivery</p>
          <p className='border-t border-t-gray-300 py-3 '>Shipping</p>
          <p className='border-t border-t-gray-300 py-3 '>Billing</p>
          <p className='border-t border-t-gray-300 py-3 '>Payment</p>
        </div>
      </div>
    </div>
  )
}

function ColumnTwo() {
  return (
    <section>
      <SectionHeading text={"Order Summary"} />
      <div className='opacity-60 last:opacity-100'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>Rs. 20,890.00</p>
        </div>
        <div className='flex justify-between'>
          <p>Deliver/Shipping</p>
          <p>Free</p>
        </div>
        <div className="divider"></div>
        <div className='flex justify-between font-semibold'>
          <p className='text-black'>Total</p>
          <p className='text-black'>Rs. 20,890.00</p>
        </div>
        <div className="divider"></div>
        <p className='text-sm'>(The total reflects the price of your order, including all duties and taxes)</p>
      </div>

      <section className='mt-6 flex flex-col gap-6'>
        <h4 className='font-bold'>Arrives Mon, 27 Mar - Wed, 12 Apr</h4>
        <div className='w-full lg:w-[420px] flex gap-4 justify-between'>
          <img className='mx-auto lg:w-[320px] object-contain' src={"/checkout/1.png"} alt="product image" />
          <div className='flex flex-col'>
            <div>
              <h4 className='text-sm'>{"Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top"}</h4>
              <p className='text-sm'>{"Product Category"}</p>
            </div>
            <div className='text-sm opacity-60'>
              <p>Qty. 1</p>
              <p>Size L</p>
              {`Rs. ${"3,895.00"}`}
            </div>
          </div>
        </div>

        <div className='w-full lg:w-[420px] flex gap-4 justify-between'>
          <img className='mx-auto lg:w-[320px] object-contain' src={"/checkout/2.png"} alt="product image" />
          <div className='flex flex-col'>
            <div>
              <h4 className='text-sm'>{"Nike Air Max 97 SE Men's Shoes"}</h4>
              <p className='text-sm'>{"Product Category"}</p>
            </div>
            <div className='text-sm opacity-60'>
              <p>Qty. 1</p>
              <p>Size L</p>
              {`Rs. ${"16,995.00"}`}
            </div>
          </div>
        </div>

      </section>
    </section>
  )
}
