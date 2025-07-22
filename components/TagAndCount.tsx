import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
  count: number
}

const TagAndCount = ({ text, count }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="dark:text-xyz-20 dark:border-xyz-800 dark:hover:border-xyz-900 flex space-x-2 rounded-lg border border-violet-100 px-4 py-2 text-sm font-semibold text-gray-600 uppercase hover:border-violet-200 hover:text-violet-600"
      aria-label={`View posts tagged ${text}`}
    >
      <span className="flex-1">{text.split(' ').join('-')}</span>
      <span>{`(${count})`}</span>
    </Link>
  )
}

export default TagAndCount
