'use client'
import Link from 'next/link'

interface TocMenuItem {
  value: string
  url: string
  depth: number
}

interface Props {
  menuList: TocMenuItem[]
}

function getFontSize(depth: number) {
  switch (depth) {
    case 1:
    case 2:
      return 'text-base'
    case 3:
    case 4:
      return 'text-sm'
    case 5:
    case 6:
      return 'text-xs'
    default:
      return 'text-sm'
  }
}

export default function TocMenu({ menuList }: Props) {
  return (
    <div className={`absolute top-0 bottom-0 z-10 h-full w-60 rounded-2xl p-6`}>
      <ul className="xyz-scrollbar h-full w-full overflow-x-hidden">
        {menuList.map((item, key) => {
          return (
            <li key={key} className="w-full py-1">
              <Link
                href={item.url}
                className={
                  'dark:text-xyz-300 block truncate text-gray-600 hover:text-violet-600' +
                  ' ' +
                  getFontSize(item.depth)
                }
              >
                {item.value}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
