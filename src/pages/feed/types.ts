interface Author {
    _id: string
    avatar: string
    name: string
    isInNetwork?: boolean
}

export interface Post {
    author: Author
    createdAt: string
    content: string
    images?: string[]
}