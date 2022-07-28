import { Decrypter } from "../contracts/cryptography/decrypter";
import { Encrypter } from "../contracts/cryptography/encrypter";
import { LoadTokenByIdRepository } from "../contracts/db/load-token-by-id-repository";
import { SaveRefreshTokenRepository } from "../contracts/db/save-refresh-token-repository";
import { TokenRefresher } from "../contracts/token-refresher";

export class DbRefreshToken implements TokenRefresher {
    constructor(
        private readonly loadTokenByIdRepository: LoadTokenByIdRepository,
        private readonly encrypter: Encrypter,
        private readonly saveRefreshTokenRepository: SaveRefreshTokenRepository
    ) { }

    async refresh(refreshParams: TokenRefresher.Params): Promise<TokenRefresher.Result> {

        const result = await this.loadTokenByIdRepository.loadTokenById(refreshParams.userId);

        if (result) {

            if (result.refreshToken === refreshParams.refreshToken) {

                const accessToken = await this.encrypter.encrypt({
                    userId: refreshParams.userId
                })

                await this.saveRefreshTokenRepository.saveRefreshToken(refreshParams.userId, accessToken.refreshToken)

                return {
                    accessToken: accessToken.token,
                    refreshToken: accessToken.refreshToken,
                    userId: refreshParams.userId
                }


            }


        }



    }

}