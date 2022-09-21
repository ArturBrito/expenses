import { Router } from "express"
import { adaptMiddleware } from "../adapters/express-middleware-adapter"
import { adaptRoute } from "../adapters/express-route-adapter"
import { makeCreateAccountController } from "../factories/application/account/create-account-controller-factory"
import { makeAuthMiddleware } from "../factories/application/auth-middleware-factory"

export default (router: Router): void => {
    router.post('/teste', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeCreateAccountController()))
}