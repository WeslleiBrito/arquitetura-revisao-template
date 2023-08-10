import { AuthorDatabase } from "../database/AuthorDatabase";
import { Author } from "../models/Author";

export class AuthorBusiness {

    constructor(
        private authorDatabase: AuthorDatabase
    ){}

    public getAllAuthor = async (): Promise<Author[]> => {
        
        return await this.authorDatabase.getAllAuthor()
    }
}