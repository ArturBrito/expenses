import { Controller, HttpResponse } from "@/libs/ddd/base-classes/controllers";
import { badRequest, ok, serverError, unauthorized } from "@/libs/ddd/base-classes/helpers/http-helper";
import { Authentication } from "../contracts/authentication";
import { Validation } from "../contracts/validation";

export class LoginController implements Controller {
    constructor(
        private readonly authentication: Authentication,
        private readonly validation: Validation
    ) { }

    async exec(request: LoginController.Request): Promise<HttpResponse> {

        try {
            const error = this.validation.validate(request);

            if (error) {
                return badRequest(error)
            }

            const authenticationModel = await this.authentication.auth(request)

            if(!authenticationModel){
                return unauthorized()
            }

            return ok(authenticationModel)
        } catch (error) {
            console.log(error)
            return serverError(error);
        }
    }

}

export namespace LoginController {
    export type Request = {
        email: string;
        password: string;
    }
}