import { Controller, HttpResponse } from "@/libs/controllers";
import { badRequest, ok, serverError, unauthorized } from "@/libs/helpers/http-helper";
import { TokenRefresher } from "../contracts/token-refresher";
import { Validation } from "../contracts/validation";

export class RefreshTokenController implements Controller {

    constructor(
        private readonly validation: Validation,
        private readonly tokenRefresher: TokenRefresher
    ) { }

    async exec(request: any): Promise<HttpResponse> {
        try {
            
            const error = this.validation.validate(request)
            if (error) {
                return badRequest(error)
            }

            const tokens = await this.tokenRefresher.refresh(request)

            if (!tokens) {
                return unauthorized()
            }

            return ok(tokens)
        } catch (error) {
            console.log(error)
            return serverError(error)
        }
    }

}