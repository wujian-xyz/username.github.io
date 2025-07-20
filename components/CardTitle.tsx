import { ReactNode } from 'react'

interface Props {
  title: string
  icon?: ReactNode
  children?: ReactNode
}

const CardTitle = ({ children, title, icon }: Props) => {
  return (
    <div className="dark:border-xyz-900 w-full border-b border-violet-100 px-9 pt-6 pb-4">
      <header className="flex items-center">
        {icon && (
          <span className="mr-1 flex size-6 items-center justify-center text-violet-500">
            {icon}
          </span>
        )}
        <h1 className="dark:text-xyz-200 text-xl font-extrabold tracking-tight text-gray-600 sm:leading-10">
          {title}
        </h1>
      </header>
      {children}
    </div>
  )
}

export default CardTitle
