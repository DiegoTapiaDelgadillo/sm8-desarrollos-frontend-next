export interface ProjectStat {
  value: string
  label: string
}

export interface Project {
  id: string
  title: string
  description: string
  units?: string
  location?: string
  heroImage: string
  heroImageAlt: string
  thumbnailImage: string
  images: string[]
  href: string
  stats?: ProjectStat[]
}

export interface NavLink {
  text: string
  href: string
}

export interface SocialLink {
  name: string
  href: string
  iconPath: string
}
