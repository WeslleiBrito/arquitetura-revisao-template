import { Author } from "../models/Author";
import { BaseDatabase } from "./BaseDatabase";

export class AuthorDatabase extends BaseDatabase {

    public static TABLE_AUTHOR = "authors"

    public getAuthor = async (id?: string | undefined): Promise<Author[]> => {

        if (id) {

            const result: Author[] = await BaseDatabase.connection(AuthorDatabase.TABLE_AUTHOR).where(id)
            return result
        }

        const result: Author[] = await BaseDatabase.connection(AuthorDatabase.TABLE_AUTHOR)

        return result
    }
}