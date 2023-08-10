import { Response, Request } from "express"
import { AuthorBusiness } from "../business/AuthorBusiness";


export class AuthorController {

    constructor(
        private authorBusiness: AuthorBusiness
    ){}

    public getAllAuthor = async (req: Request, res: Response) => {
        try {
            const result = await this.authorBusiness.getAllAuthor()

            res.status(200).send(result)
            
        } catch (error) {
            res.status(500).send(error)
        }
    }
}