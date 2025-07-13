import { ReactNode } from 'react'

interface Props {
  title: string
  icon?: ReactNode
  children?: ReactNode
}

const CardTitle = ({ children, title, icon }: Props) => {
  return (
    <div className="w-full border-b border-violet-100 px-9 pt-6 pb-4 dark:border-gray-700">
      <header className="flex items-center">
        {icon && (
          <span className="mr-1 flex size-6 items-center justify-center text-violet-500">
            {icon}
          </span>
        )}
        <h1 className="text-xl font-extrabold tracking-tight text-gray-900 sm:leading-10 dark:text-gray-100">
          {title}
        </h1>
      </header>
      {children}
    </div>
  )
}

export default CardTitle
