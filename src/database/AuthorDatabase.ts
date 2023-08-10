import { Author } from "../models/Author";
import { BaseDatabase } from "./BaseDatabase";

export class AuthorDatabase extends BaseDatabase {

    public static TABLE_AUTHOR = "authors"

    public getAllAuthor = async (): Promise<Author[]> => {
        
        const result: Author[] = await BaseDatabase.connection(AuthorDatabase.TABLE_AUTHOR)

        return result
    }
}