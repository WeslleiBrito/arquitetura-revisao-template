import { NewsDBModel } from "../types/type";
import { BaseDatabase } from "./BaseDatabase";

export class NewsDatabase extends BaseDatabase {

    public static TABLE_NEWS = "news"

    public getAllNews = async (): Promise<NewsDBModel[]> => {

        const result: NewsDBModel[] = await BaseDatabase.connection(NewsDatabase.TABLE_NEWS)

        return result
    }
}