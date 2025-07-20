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
      className="dark:bg-xyz-300 dark:text-xyz-100 dark:hover:bg-xyz-200 rounded-full bg-gray-300 p-2 text-gray-600 transition-all hover:bg-gray-400"
    >
      <ArrowUp size={20} />
    </button>
  )
}

export default ScrollTopButton
