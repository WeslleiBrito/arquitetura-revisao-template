import express from 'express'
import { NewsController } from '../controller/NewsController'
import { NewsBusiness } from '../business/NewsBusiness'
import { NewsDatabase } from '../database/NewsDatabase'

export const newsRouter = express.Router()

const newNewsController = new NewsController(
    new NewsBusiness(
        new NewsDatabase()
    )
)
newsRouter.get('/', newNewsController.getAllNews)