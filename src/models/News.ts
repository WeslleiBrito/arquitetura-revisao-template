
export class News {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private publishedAt: string,
        private author: string
    ){}

    public getId = (): string => {
        return this.id
    }
    public getTitle = (): string => {
        return this.title
    }
    public getDescription = (): string => {
        return this.description
    }
    public getPublishedAt = (): string => {
        return this.publishedAt
    }
    public getAuthor = (): string => {
        return this.author
    }

    public setTitle = (newTitle: string): void => {
        this.title = newTitle
    }
    public setDescription = (newDescription: string): void => {
        this.description = newDescription
    }
    public setPublishedAt = (newPublishedAt: string): void => {
        this.publishedAt = newPublishedAt
    }
    public setAuthor = (newAuthor: string): void => {
        this.author = newAuthor
    }


}