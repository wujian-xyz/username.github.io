import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="dark:text-xyz-20 mr-4 flex rounded-lg py-2 text-sm font-semibold text-gray-600 uppercase hover:text-violet-600"
      aria-label={`View posts tagged ${text}`}
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
