'use client'
import { ArrowUp } from 'lucide-react'

const ScrollTopButton = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <button
      aria-label="Scroll To Top"
      onClick={handleScrollTop}
      className="dark:bg-xyz-700 dark:border-xyz-900 cursor-pointer rounded-full border border-violet-200 bg-white p-2 text-gray-500 shadow-xs transition-all hover:border-violet-500 hover:text-violet-500"
    >
      <ArrowUp size={20} />
    </button>
  )
}

export default ScrollTopButton
