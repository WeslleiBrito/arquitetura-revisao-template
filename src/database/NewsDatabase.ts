import { createNewsInputDTO } from "../dtos/createNews.dto";
import { NewsDBModel } from "../types/type";
import { BaseDatabase } from "./BaseDatabase";

export class NewsDatabase extends BaseDatabase {

    public static TABLE_NEWS = "news"

    public getNews = async (id?: string): Promise<NewsDBModel[]> => {

        if (id) {
            const result: NewsDBModel[] = await BaseDatabase.connection(NewsDatabase.TABLE_NEWS).where('id', id)

            return result
        }

        const result: NewsDBModel[] = await BaseDatabase.connection(NewsDatabase.TABLE_NEWS)

        return result
    }

    public createNews = async (input: createNewsInputDTO) => {

        const result = await BaseDatabase.connection(NewsDatabase.TABLE_NEWS).returning("*").insert(input)

        console.log("Linha 20 - NewsDatadase:", result)

        return result
    }
}