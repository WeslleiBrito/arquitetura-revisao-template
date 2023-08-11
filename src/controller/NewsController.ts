import { Response, Request } from "express"
import { NewsBusiness } from "../business/NewsBusiness"
import { createNewsInputDTO, createNewsSchema } from "../dtos/createNews.dto"
import { ZodError } from "zod";
import { BaseError } from "../errors/BaseError";
import { News } from "../models/News";
import { editNewsInputDTO, editNewsSchema } from "../dtos/editNews.dto";

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
            const input = createNewsSchema.parse(

                {
                    id: req.body.id,
                    title: req.body.title,
                    description: req.body.description,
                    author: req.body.author
                }
            )
            

            const output: News = await this.newsBusiness.createNews(input)

            res.status(201).send(output)
        } catch (error) {
            
            if (error instanceof ZodError) {
                res.status(400).send(error.issues)
            } else if(error instanceof BaseError){
                res.status(error.statusCode).send(error.message)
            }
            else {
                res.send(error)
            }

        }
    }

    public editNews = async (req: Request, res: Response) => {

        try {

            const input = editNewsSchema.parse(
                {
                    idNews: req.params.id,
                    title: req.body.title,
                    description: req.body.description
                }
            ) 

            const output: News = await this.newsBusiness.editNews(input)

            res.status(201).send(output)
        } catch (error) {
            
            if (error instanceof ZodError) {
                res.status(400).send(error.issues)
            } else if(error instanceof BaseError){
                res.status(error.statusCode).send(error.message)
            }
            else {
                res.send(error)
            }

        }
    }
}
