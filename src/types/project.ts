import { ReactNode } from 'react'

export interface Project {
  title: string
  description: string
  image: string
  icon: ReactNode
  technologies: string[]
  links: {
    github: string
    live: string
  }
} 