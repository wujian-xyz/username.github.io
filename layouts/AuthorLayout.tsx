import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import CardTitle from '@/components/CardTitle'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, github, juejin } = content

  return (
    <>
      <div className="w-full">
        <CardTitle title="关于" />
        <div className="items-start space-y-2 px-9 sm:grid sm:grid-cols-3 sm:gap-x-8 sm:space-y-0">
          <div className="flex flex-col items-center space-x-2 py-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={178}
                height={178}
                className="h-44 w-44 rounded-full object-cover"
              />
            )}
            <h3 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="juejin" href={juejin} />
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none pt-8 pb-8 sm:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
