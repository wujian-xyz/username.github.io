'use client'

import { MessageCircleMore } from 'lucide-react'

const CommentButton = () => {
  const handleScrollToComment = () => {
    document.getElementById('comment')?.scrollIntoView()
  }
  return (
    <button
      aria-label="Scroll To Comment"
      onClick={handleScrollToComment}
      className="dark:bg-xyz-700 dark:border-xyz-900 cursor-pointer rounded-full border border-violet-200 bg-white p-2 text-gray-500 shadow-xs transition-all hover:border-violet-500 hover:text-violet-500"
    >
      <MessageCircleMore size={20} />
    </button>
  )
}

export default CommentButton
