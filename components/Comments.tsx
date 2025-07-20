'use client'

import siteMetadata from '@/data/siteMetadata'
import Script from 'next/script'
import '@/css/comments.css'

type Repo = `${string}/${string}`
const repo = process.env.NEXT_PUBLIC_GISCUS_REPO as Repo
const repoId = process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!
const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY
const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID

export default function Comments({ slug }: { slug: string }) {
  if (!siteMetadata.comments?.provider) {
    return null
  }

  return (
    <>
      <div className="giscus"></div>
      <Script
        src="https://giscus.app/client.js"
        data-repo={repo}
        data-repo-id={repoId}
        data-category={category}
        data-category-id={categoryId}
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang={siteMetadata.locale}
        crossOrigin="anonymous"
        async
      ></Script>
    </>
  )

  //   return (
  //     <Giscus
  //       id="comments"
  //       repo={repo}
  //       repoId={repoId}
  //       category={category}
  //       categoryId={categoryId}
  //       mapping="pathname"
  //       term="Welcome to @giscus/react component!"
  //       reactionsEnabled="1"
  //       emitMetadata="0"
  //       inputPosition="top"
  //       theme="preferred_color_scheme"
  //       lang="zh-CN"
  //       loading="lazy"
  //     />
  //   )
}
