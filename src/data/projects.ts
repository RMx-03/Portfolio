import { ProjectData } from '@/utils/types'

export const projects: ProjectData[] = [
  {
    id: '1',
    title: 'Example Project',
    description: 'A sample project to get you started',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: true,
    createdAt: new Date('2024-01-01'),
    links: {
      github: 'https://github.com',
      live: 'https://example.com',
    },
  },
]
