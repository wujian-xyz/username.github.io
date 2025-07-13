import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-16">
      <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
        404
      </h1>
      <div className="flex max-w-md flex-col items-center">
        <p className="mb-4 text-xl leading-normal font-bold">很抱歉，我们找不到此页面。</p>
        <p className="mb-8">但别担心，你可以在我们的主页上找到很多其他东西。</p>
        <Link
          href="/"
          className="focus:shadow-outline-blue inline rounded border border-transparent bg-violet-500 px-4 py-2 text-sm leading-5 font-medium text-white shadow-xs transition-colors duration-150 hover:bg-violet-700 focus:outline-hidden dark:hover:bg-blue-500"
        >
          返回首页
        </Link>
      </div>
    </div>
  )
}
