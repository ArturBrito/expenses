import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeLoginController } from "../factories/application/authentication/login-controller-factory";
import { makeRefreshTokenController } from "../factories/application/authentication/refresh-token-controller-factory";

export default (router: Router): void => {
    router.post('/login', adaptRoute(makeLoginController()))
    router.post('/refresh_token', adaptRoute(makeRefreshTokenController()))
}