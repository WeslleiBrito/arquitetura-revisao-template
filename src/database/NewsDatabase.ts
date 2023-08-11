import { createNewsInputDTO } from "../dtos/createNews.dto";
import { editNewsInputDTO } from "../dtos/editNews.dto";
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

    public createNews = async (input: createNewsInputDTO): Promise<NewsDBModel[]> => {
        
        const result: NewsDBModel[] = await BaseDatabase.connection(NewsDatabase.TABLE_NEWS).returning("*").insert(input)

        return result
    }

    public editNews = async (input: editNewsInputDTO): Promise<NewsDBModel[]> => {
        
        const update: NewsDBModel[] = await BaseDatabase.connection(NewsDatabase.TABLE_NEWS).update(
            {
                title: input.title,
                description: input.description
            }
        ).where({id: input.idNews}).returning("*")

        return update
    }
}