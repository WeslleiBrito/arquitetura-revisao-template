import express from 'express'
import { AuthorController } from '../controller/AuthorController'
import { AuthorBusiness } from '../business/AuthorBusiness'
import { AuthorDatabase } from '../database/AuthorDatabase'


export const authorRouter = express.Router()

const newAuthorControler = new AuthorController(
    new AuthorBusiness(
        new AuthorDatabase()
    )
)

authorRouter.get('/', newAuthorControler.getAuthor)