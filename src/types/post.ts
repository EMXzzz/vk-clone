import { Dispatch, SetStateAction } from "react"

export type TypeSetState<T> = Dispatch<SetStateAction<T>>

export interface User {
    _id: string
    avatar: string
    name: string
    isInNetwork?: boolean
}

export interface Post {
    author: User
    createdAt: string
    content: string
    images?: string[]
}