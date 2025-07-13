import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import CardTitle from '@/components/CardTitle'
import { ArrowRight, CalendarSync } from 'lucide-react'
import PostItem from '@/components/PostItem'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="w-full">
        <CardTitle title="最新的" icon={<CalendarSync size={20} />}>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </CardTitle>
        <ul className="divide-y divide-violet-100 px-9 dark:divide-gray-700">
          {!posts.length && '未找到帖子。'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, ...other } = post
            return (
              <li key={slug} className="py-4">
                <PostItem {...other} path={`blog/${slug}`} />
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end px-9 py-4 text-sm leading-6 font-medium">
          <Link
            href="/blog"
            className="hover:text-primary-600 dark:hover:text-primary-400 flex items-center text-gray-500"
            aria-label="所有帖子"
          >
            <ArrowRight size={16} />
            <span>所有帖子</span>
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center border-t border-violet-100 bg-gray-50 px-9 py-6 dark:border-gray-700 dark:bg-gray-900/50">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
