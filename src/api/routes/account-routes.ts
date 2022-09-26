import { Router } from "express"
import { adaptMiddleware } from "../adapters/express-middleware-adapter"
import { adaptRoute } from "../adapters/express-route-adapter"
import { makeAddMovementController } from "../factories/application/account/add-movement-controller-factory"
import { makeCreateAccountController } from "../factories/application/account/create-account-controller-factory"
import { makeAuthMiddleware } from "../factories/application/auth-middleware-factory"

export default (router: Router): void => {
    router.post('/account', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeCreateAccountController()))
    router.post('/account/movement', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeAddMovementController()))
}