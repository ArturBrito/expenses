import { RefreshTokenController } from "@/core/authentication/application/refresh-token-controller";
import { Controller } from "@/libs/ddd/base-classes/controllers";
import { makeRefreshTokenValidation } from "./refresh-validation-factory";
import { makeDbTokenRefresher } from "./db-token-refresher-factory";

export const makeRefreshTokenController = (): Controller => {

    const controller = new RefreshTokenController(makeRefreshTokenValidation(), makeDbTokenRefresher())

    return controller
} 