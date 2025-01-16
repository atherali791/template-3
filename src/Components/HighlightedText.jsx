import React from 'react'

export default function HighlightedText({children}) {
  return (
    <span className='underline font-semibold'>{children}</span>
  )
}
