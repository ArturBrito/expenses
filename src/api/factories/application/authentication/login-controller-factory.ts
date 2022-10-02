import { LoginController } from "@/core/authentication/application/login-controller"
import { Controller } from "@/libs/controllers"
import { makeDbAuthentication } from "./db-authentication-factory"
import { makeLoginValidation } from "./login-validation-factory"


export const makeLoginController = (): Controller => {
    const controller = new LoginController(makeDbAuthentication(), makeLoginValidation())

    return controller;
}