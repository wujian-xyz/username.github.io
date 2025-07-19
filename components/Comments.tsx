'use client'

import siteMetadata from '@/data/siteMetadata'
import Giscus from '@giscus/react'
type Repo = `${string}/${string}`
const repo = process.env.NEXT_PUBLIC_GISCUS_REPO as Repo
const repoId = process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!
const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY
const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID

export default function Comments({ slug }: { slug: string }) {
  if (!siteMetadata.comments?.provider) {
    return null
  }
  console.log('slug', slug)
  return (
    <Giscus
      id="comments"
      repo={repo}
      repoId={repoId}
      category={category}
      categoryId={categoryId}
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="zh-CN"
      loading="lazy"
    />
  )
}
