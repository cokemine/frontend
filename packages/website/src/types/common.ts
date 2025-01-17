import { User } from './user'

// using camelcase api
type infoBox = Array<{
  key: string
  value: string | Array<{
    k?: string
    v: string
  }>
}>

interface images {
  large: string
  common: string
  medium: string
  small: string
  grid: string
}

interface count {
  '1': number
  '2': number
  '3': number
  '4': number
  '5': number
  '6': number
  '7': number
  '8': number
  '9': number
  '10': number
}

interface rating {
  rank: number
  total: number
  count: count
  score: number
}

interface collection {
  wish: number
  collect: number
  doing: number
  onHold: number
  dropped: number
}

interface tag {
  name: string
  count: number
}

export interface CharacterDetail {
  id: number
  name: string
  type: number
  images: {
    large: string
    medium: string
    small: string
    grid: string
  }
  summary: string
  locked: boolean
  infobox: infoBox
  gender: string
  blooType: number
  birthYear: number
  birthMon: number
  birthDay: number
  stat: {
    comments: number
    collects: number
  }
}

export interface Subject {
  id: number
  name: string
  type: number
  nameCn: string
  summary: string
  nsfw: boolean
  locked: boolean
  date: string // YYYY-MM-DD format
  platform: string
  images: images
  infobox: infoBox
  volumes: number
  eps: number
  totalEpisodes: number
  rating: rating
  collection: collection
  tags: tag[]
}

export interface AvatarSet {
  large: string
  medium: string
  small: string
}

export interface Group {
  title: string
  created_at: string
  description: string
  total_members: number
  icon: string
  new_members: Member[]
}

export interface Topic {
  created_at: string
  updated_at: string
  title: string
  creator: User
  id: 371781
  reply_count: 10
}

export interface Member {
  joined_at: string
  avatar: AvatarSet
  username: string
  nickname: string
  id: number
}

export interface Pagination {
  total: number
  limit: number
  offset: number
}

export interface ResponseWithPagination<T> extends Pagination {
  data: T
}
