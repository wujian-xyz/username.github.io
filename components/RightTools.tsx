'use client'
import Link from 'next/link'
import Image from 'next/image'
import type { CoreContent } from 'pliny/utils/contentlayer'
import type { Authors } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopButton from '@/components/ScrollTopButton'
import { ArrowLeft } from 'lucide-react'
import { Github } from '@/components/social-icons/icons'
import { useState, useEffect } from 'react'
import CommentButton from './CommentButton'

const editUrl = (path: string) => `${siteMetadata.siteRepo}/blob/main/data/${path}`

interface Props {
  filePath: string
  authorDetails: CoreContent<Authors>[]
}

export default function RightTools({ authorDetails, filePath }: Props) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 })
  }
  const handleScrollToComment = () => {
    document.getElementById('comment')?.scrollIntoView()
  }
  return (
    <div className="fixed top-0 z-0 hidden h-screen w-4xl xl:block">
      <div className="absolute right-0 flex h-full w-50 items-center py-16">
        <ul className="block h-48 gap-4 space-y-4 px-4">
          {authorDetails.map((author) => (
            <li className="flex items-center space-x-2" key={author.name}>
              {author.avatar && (
                <Image
                  src={author.avatar}
                  width={36}
                  height={36}
                  alt="头像"
                  className="size-9 rounded-full object-cover"
                />
              )}
              <dl className="text-sm leading-5 font-medium whitespace-nowrap">
                <dt className="sr-only">Name</dt>
                <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                <dt className="sr-only">Twitter</dt>
                {/* <dd>
                              {author.twitter && (
                                <Link
                                  href={author.twitter}
                                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                >
                                  {author.twitter
                                    .replace('https://twitter.com/', '@')
                                    .replace('https://x.com/', '@')}
                                </Link>
                              )}
                            </dd> */}
              </dl>
            </li>
          ))}
          <li className="w-full">
            <Link
              className="flex items-center space-x-2 text-sm hover:text-violet-500"
              href={editUrl(filePath)}
            >
              <span className="dark:bg-xyz-300 dark:text-xyz-100 dark:hover:bg-xyz-200 rounded-full bg-gray-300 p-2 text-gray-600 transition-all hover:bg-gray-400">
                <Github className="size-5" />
              </span>
              <span className="text-sm">在GitHub上查看</span>
            </Link>
          </li>
          {siteMetadata.comments?.provider && (
            <li className={show ? 'block' : 'hidden'}>
              <CommentButton />
            </li>
          )}
          <li className={show ? 'block' : 'hidden'}>
            <ScrollTopButton />
          </li>
        </ul>
      </div>
    </div>
  )
}
