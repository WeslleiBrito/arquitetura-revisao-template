import { AuthorDatabase } from "../database/AuthorDatabase";
import { NewsDatabase } from "../database/NewsDatabase";
import { createNewsInputDTO } from "../dtos/createNews.dto";
import { editNewsInputDTO } from "../dtos/editNews.dto";
import { ConflictError } from "../errors/ConflictError";
import { NotFoundError } from "../errors/NotFoundError";
import { News } from "../models/News";

export class NewsBusiness {

    constructor(
        private newsDatabase: NewsDatabase,
        private authorDatabase: AuthorDatabase
    ) { }

    public getNews = async (): Promise<News[]> => {

        const resultDB = await this.newsDatabase.getNews()

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

    public createNews = async (input: createNewsInputDTO): Promise<News> => {
        const [idExist] = await this.newsDatabase.getNews(input.id)
        

        if (idExist) {
            throw new ConflictError("O id informado já existe.")
        }

        const [authorExist] = await this.authorDatabase.getAuthor(input.author)

        if (!authorExist) {
            throw new NotFoundError("O autor informado não existe.")
        }
      
        const [result] = await this.newsDatabase.createNews(input)

        return new News(
            result.id,
            result.title,
            result.description,
            result.published_at,
            result.author
        )
    }

    public editNews = async (input: editNewsInputDTO): Promise<News> => {
        
        const [newsDB] = await this.newsDatabase.getNews(input.idNews)

        if(!newsDB){
            throw new NotFoundError("O 'id' informado não existe.")
        }
        
        const updateElements: editNewsInputDTO = {
            idNews: input.idNews,
            title: input.title || newsDB.title,
            description: input.description || newsDB.description
        } 

        const [update] = await this.newsDatabase.editNews(updateElements)

        return new News(
            update.id,
            update.title,
            update.description,
            update.published_at,
            update.author
        )
    }
}