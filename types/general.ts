type File = {
    name: string,
    rows: number,
    cols: number,
    createdAt: string,
    updatedAt: string,
    status: string
}

type Language = 'en' | 'jp'

export { type File, type Language }
