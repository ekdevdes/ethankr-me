export type Experience = {
  jobs: Job[]
}

export type Job = {
  id: number
  position: string
  company: string
  year_from: number
  year_to?: number
  type?: string
  skills: string[]
  duties?: string[]
}
