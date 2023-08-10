import { Response, Request } from "express"
import { NewsBusiness } from "../business/NewsBusiness"


export class NewsController {

    constructor(
        private newsBusiness : NewsBusiness
    ){}
    public getAllNews = async (Req: Request, res: Response): Promise<void> => {
        
        try {
            const result = await this.newsBusiness.getAllNews()
            res.status(200).send(result)
        } catch (error) {
            res.send(error)
        }
    }
}
