import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import CardTitle from '@/components/CardTitle'
import { FolderGit2 } from 'lucide-react'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="w-full">
        <CardTitle title="项目" icon={<FolderGit2 size={20} />}>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">开源项目</p>
        </CardTitle>
        <div className="container px-9 py-8">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
