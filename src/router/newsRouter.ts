import express from 'express'
import { NewsController } from '../controller/NewsController'
import { NewsBusiness } from '../business/NewsBusiness'
import { NewsDatabase } from '../database/NewsDatabase'
import { AuthorDatabase } from '../database/AuthorDatabase'

export const newsRouter = express.Router()

const newNewsController = new NewsController(
    new NewsBusiness(
        new NewsDatabase(),
        new AuthorDatabase()
    )
)
newsRouter.get('/', newNewsController.getNews)
newsRouter.post('/', newNewsController.createNews)
newsRouter.put('/:id', newNewsController.editNews)