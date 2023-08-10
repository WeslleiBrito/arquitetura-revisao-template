import { Response, Request } from "express"
import { NewsBusiness } from "../business/NewsBusiness"
import { createNewsInputDTO } from "../dtos/createNews.dto"
import { ZodError } from "zod";

export class NewsController {

    constructor(
        private newsBusiness: NewsBusiness
    ) { }

    public getNews = async (req: Request, res: Response): Promise<void> => {

        try {
            const result = await this.newsBusiness.getNews()
            res.status(200).send(result)
        } catch (error) {
            res.send(error)
        }
    }
    public createNews = async (req: Request, res: Response) => {

        try {

            const input: createNewsInputDTO = {
                id: req.body.id,
                title: req.body.title,
                description: req.body.description,
                author: req.body.author
            }

            const result = await this.newsBusiness.createNews(input)

            res.status(200).send(result)
        } catch (error) {

            if (error instanceof ZodError) {
                res.status(400).send(error.issues)
            } else {
                res.send(error)
            }

        }
    }
}
