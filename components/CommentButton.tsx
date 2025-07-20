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
      className="dark:bg-xyz-300 dark:text-xyz-100 dark:hover:bg-xyz-200 rounded-full bg-gray-300 p-2 text-gray-600 transition-all hover:bg-gray-400"
    >
      <MessageCircleMore size={20} />
    </button>
  )
}

export default CommentButton
