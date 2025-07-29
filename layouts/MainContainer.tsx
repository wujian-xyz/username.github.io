import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function MainContainer({ children }: Props) {
  return (
    <div className="min-h-[calc(100vh-64px)] pt-20 pb-6">
      <main className="dark:border-xyz-900 dark:bg-xyz-700 relative mx-auto max-w-2xl rounded-2xl border border-violet-200 bg-white shadow-xs">
        {children}
      </main>
    </div>
  )
}
