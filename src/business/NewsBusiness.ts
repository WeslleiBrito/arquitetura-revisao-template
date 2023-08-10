import { AuthorDatabase } from "../database/AuthorDatabase";
import { NewsDatabase } from "../database/NewsDatabase";
import { createNewsInputDTO } from "../dtos/createNews.dto";
import { ConflictError } from "../errors/ConflictError";
import { NotFoundError } from "../errors/NotFoundError";
import { News } from "../models/News";

export class NewsBusiness {

    constructor(
        private newDatabase: NewsDatabase,
        private authorDataase: AuthorDatabase
    ) { }

    public getNews = async (): Promise<News[]> => {

        const resultDB = await this.newDatabase.getNews()

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

    public createNews = async (input: createNewsInputDTO) => {

        const [idExist] = await this.newDatabase.getNews(input.id)

        if (idExist) {
            throw new ConflictError("O id informado já existe.")
        }

        const [authorExist] = await this.authorDataase.getAuthor(input.author)

        if (!authorExist) {
            throw new NotFoundError("O autor informado não existe.")
        }

        const result = await this.newDatabase.createNews(input)

        return result
    }
}