export interface JokeInterface {
    icon_url: string,
    value: string
}

export interface JokesInterface {
    categories: Array<string> | undefined,
    joke: JokeInterface | undefined
    isLoading: boolean
}

export interface CategoryInterface {
    title: string
}
