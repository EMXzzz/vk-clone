import { Dispatch, SetStateAction } from "react"

export type TypeSetState<T> = Dispatch<SetStateAction<T>>

export interface Author {
    _id: string
    avatar: string
    name: string | null
    isInNetwork?: boolean
}

export interface Post {
    author: Author
    createdAt: string
    content: string
    images?: string[]
}