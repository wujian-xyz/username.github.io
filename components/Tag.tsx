import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="hover:text-primary-600 dark:hover:text-primary-500 dark:text-xyz-100 mr-3 text-sm font-medium text-gray-600 uppercase"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
