import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import CardTitle from '@/components/CardTitle'
import { ArrowRight, CalendarSync } from 'lucide-react'
import PostItem from '@/components/PostItem'
import SocialIcon from '@/components/social-icons'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="w-full">
        <CardTitle title="最新的" icon={<CalendarSync size={20} />}>
          <p className="dark:text-xyz-200 text-lg leading-7 text-gray-500">
            {siteMetadata.description}
          </p>
        </CardTitle>
        <ul className="dark:divide-xyz-900 divide-y divide-violet-100 px-9 pt-1 pb-3">
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

      <div className="dark:border-xyz-900 dark:bg-xyz-900/40 flex items-center justify-center rounded-b-2xl border-t border-violet-100 bg-gray-50 px-9 py-6">
        <div className="flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="juejin" href={siteMetadata.juejin} size={6} />
          {/* <SocialIcon kind="medium" href={siteMetadata.medium} size={6} /> */}
        </div>
      </div>
    </>
  )
}
