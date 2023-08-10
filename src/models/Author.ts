
export class Author {
    constructor(
        private id: string,
        private name: string,
        private cpf: string
    ){}

    public getId = (): string => {
        return this.id
    }
    public getName = (): string => {
        return this.name
    }
    public getCpf = (): string => {
        return this.cpf
    }

    public setName = (newName: string): void => {
        this.name = newName
    }
}