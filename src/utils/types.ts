export interface ProjectData {
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
  links?: {
    live?: string
    github?: string
    demo?: string
  }
  featured: boolean
  createdAt: Date
}

export type AnimationDirection = 'up' | 'down' | 'left' | 'right'
export type ThemeMode = 'light' | 'dark' | 'system'
