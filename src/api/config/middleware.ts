import { Express } from 'express'
import { bodyParser } from '@/api/middlewares/body-parser'
import { cors } from '@/api/middlewares/cors'
import { contentType } from '@/api/middlewares/content-type'

export default (app: Express): void => {
    app.use(bodyParser)
    app.use(cors)
    app.use(contentType)
  }