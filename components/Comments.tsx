'use client'

import siteMetadata from '@/data/siteMetadata'
// import Script from 'next/script'
import '@/css/comments.css'
import { useEffect, useState } from 'react'
import Giscus from '@giscus/react'

type Repo = `${string}/${string}`
const repo = process.env.NEXT_PUBLIC_GISCUS_REPO as Repo
const repoId = process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!
const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY
const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID
const themeUrl = process.env.NEXT_PUBLIC_GISCUS_THEME_URL

const id = 'inject-comments'
const DARK_THEME_NAME = 'noborder_dark'
const LIGHT_THEME_NAME = 'noborder_light'

// 获取 localStorage 中 theme 的值
function getSavedTheme() {
  return window.localStorage.getItem('theme') || ''
}

// 获取系统主题
function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function Comments({ slug }: { slug: string }) {
  if (!siteMetadata.comments?.provider) {
    return null
  }

  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState(LIGHT_THEME_NAME)

  useEffect(() => {
    setMounted(true)
    const _theme = getSavedTheme() || getSystemTheme()
    setTheme(_theme === 'dark' ? DARK_THEME_NAME : LIGHT_THEME_NAME)
    // 监听主题变化

    const target = document.documentElement
    const observer = new MutationObserver((mutations) => {
      const mutation = mutations[0]
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        const currentStyle = target.classList
        if (currentStyle && currentStyle.contains('dark')) {
          setTheme(DARK_THEME_NAME)
        } else {
          setTheme(LIGHT_THEME_NAME)
        }
      }
    })
    observer.observe(target, { attributes: true, attributeFilter: ['class'] })

    // 取消监听
    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div id={id} className="w-full">
      {mounted ? (
        <Giscus
          id={id}
          repo={repo}
          repoId={repoId}
          category={category}
          categoryId={categoryId}
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          lang={siteMetadata.locale}
          loading="lazy"
          theme={theme}
        />
      ) : null}
    </div>
  )
}
