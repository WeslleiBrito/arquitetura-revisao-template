import { AuthorDatabase } from "../database/AuthorDatabase";
import { Author } from "../models/Author";

export class AuthorBusiness {

    constructor(
        private authorDatabase: AuthorDatabase
    ) { }

    public getAuthor = async (): Promise<Author[]> => {

        return await this.authorDatabase.getAuthor()
    }
}