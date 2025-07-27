interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Gif Parser',
    description: `Javascript 实现Gif图片文件流解析器（git-parser），gif图片播放器（gif-player）。`,
    imgSrc: '/static/images/projects/gif-parser-thumb.png',
    href: 'https://github.com/wujian-xyz/gif',
  },
  {
    title: 'PSD Parser',
    description: `这是一个基于ES6编写的通用PSD解析器，继承自PSD.rb和PSD.js项目。它能够将Photoshop文档转换为可操作的树状结构。`,
    imgSrc: '/static/images/projects/psd-parser-thumb.png',
    href: 'https://github.com/wujian-xyz/psd',
  },
]

export default projectsData
