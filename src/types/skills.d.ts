export type Skills = {
  skills: Skill[]
}

export type Skill = {
  name: string
  id: IconType | string
}

export type IconType =
  | 'aws'
  | 'circleci'
  | 'cypress'
  | 'github'
  | 'graphql'
  | 'go'
  | 'jest'
  | 'js'
  | 'laravel'
  | 'mocha'
  | 'mongodb'
  | 'mysql'
  | 'next'
  | 'node'
  | 'nuxt'
  | 'php'
  | 'postgres'
  | 'react'
  | 'redux'
  | 'scss'
  | 'swagger'
  | 'tailwinds'
  | 'terraform'
  | 'typescript'
  | 'vite'
  | 'vue'
  | 'webpack'
  | 'wordpress'
  | 'linkedin'
