import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function MainContainer({ children }: Props) {
  return (
    <main className="dark:border-xyz-900 dark:bg-xyz-700 relative mx-auto mt-20 mb-6 max-w-2xl rounded-2xl border border-violet-200 bg-white shadow-xs">
      {children}
    </main>
  )
}
