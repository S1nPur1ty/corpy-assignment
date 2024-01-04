type File = {
    name: string,
    rows: number,
    cols: number,
    createdAt: string,
    updatedAt: string,
    status: string
}

type Language = 'en' | 'jp'

type Theme = 'light' | 'dark'

export { type File, type Language, type Theme }