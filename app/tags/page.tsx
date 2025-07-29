import Link from '@/components/Link'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'
import { Rss } from 'lucide-react'
import CardTitle from '@/components/CardTitle'
import TagAndCount from '@/components/TagAndCount'
import MainContainer from '@/layouts/MainContainer'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  return (
    <MainContainer>
      <div className="flex w-full flex-col">
        <CardTitle title="标签" icon={<Rss size={22} />} />
        <div className="px-9 py-8">
          {tagKeys.length === 0 && 'No tags found.'}
          <div className="grid w-full grid-cols-3 gap-5 max-sm:grid-cols-2">
            {sortedTags.map((t) => {
              return (
                <div key={t}>
                  <TagAndCount count={tagCounts[t]} text={t} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </MainContainer>
  )
}
