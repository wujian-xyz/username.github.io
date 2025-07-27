'use client'

import { useEffect } from 'react'

const handleWindowScroll = () => {
  const header = document.getElementById('header')
  const headerChild = header?.querySelector('header')

  if (window.scrollY > 20) {
    header?.classList.remove('border-violet-100')
    header?.classList.add('bg-white/95', 'border-violet-200')

    header?.classList.add('dark:bg-xyz-700/95')

    header?.classList.add('shadow-xs')

    headerChild?.classList.remove('max-w-2xl')
    headerChild?.classList.add('max-w-6xl')
  } else {
    header?.classList.add('border-violet-200')
    header?.classList.remove('bg-white/95', 'border-violet-100')

    header?.classList.remove('dark:bg-xyz-700/95')

    header?.classList.remove('shadow-xs')

    headerChild?.classList.add('max-w-2xl')
    headerChild?.classList.remove('max-w-6xl')
  }
}

const HomeHeaderScrollInit = () => {
  const header = document.getElementById('header')
  const headerChild = header?.querySelector('header')
  headerChild?.classList.remove('max-w-2xl')
  headerChild?.classList.add('max-w-6xl')
}

const HeaderScroll = () => {
  useEffect(() => {
    console.log(window.location, '==')
    if (window.location.pathname === '/' || window.location.pathname === '/home') {
      HomeHeaderScrollInit()
    }
    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  return <></>
}

export default HeaderScroll
