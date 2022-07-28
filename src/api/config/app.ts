import express, { Express } from 'express'
import setupRoutes from '@/api/config/routes';
import setupMiddlewares from '@/api/config/middleware';

export const setupApp = async (): Promise<Express> => {
    const app = express()

    setupMiddlewares(app)
    setupRoutes(app)

    return app
}