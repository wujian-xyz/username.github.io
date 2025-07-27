import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import CardTitle from '@/components/CardTitle'
import { FolderGit2 } from 'lucide-react'
import MainContainer from '@/layouts/MainContainer'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <MainContainer>
      <div className="w-full">
        <CardTitle title="项目" icon={<FolderGit2 size={20} />}>
          <p className="dark:text-xyz-200 text-lg leading-7 text-gray-500">开源项目</p>
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
    </MainContainer>
  )
}
