import Button from '@/Components/Button'
import { ShoppingCart } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <section className='my-20 flex flex-col md:flex-row w-full justify-between gap-10'>
      <div className='lg:w-1/2'>
        <img className='w-full h-[480px] object-contain' src="/shoes/5.png" alt="product image" />
      </div>
      <div className='lg:w-1/2 flex flex-col gap-4 justify-start items-start'>
        <h1 className='text-4xl font-semibold'>Nike Air Force 1 PLT.AF.ORM</h1>
        <p>Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
        <h4 className='text-3xl font-semibold'>Rs. 8,995.00</h4>
        <Button>
          <ShoppingCart />
          Add to Cart
        </Button>
      </div>
    </section>
  )
}
