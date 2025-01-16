import React from 'react'

export default function Button({ children }) {
  return (
    <button className='btn bg-black text-white rounded-full font-normal'>{children}</button>
  )
}
