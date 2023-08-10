import { NewsDatabase } from "../database/NewsDatabase";
import { News } from "../models/News";

export class NewsBusiness {

    constructor(
        private newDatabase: NewsDatabase
    ){}

    public getAllNews = async (): Promise<News[]> => {
        
        const resultDB = await this.newDatabase.getAllNews()

        const news: News[] = resultDB.map((news) => {
            return new News(
                news.id,
                news.title,
                news.description,
                news.published_at,
                news.author
            )
        })

        return news
    }
}