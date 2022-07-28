import { Authentication } from "../contracts/authentication";
import { Encrypter } from "../contracts/cryptography/encrypter";
import { HashComparer } from "../contracts/cryptography/hash-comparer";
import { LoadAccountByEmailRepository } from "../contracts/db/load-account-by-email-repository";
import { SaveRefreshTokenRepository } from "../contracts/db/save-refresh-token-repository";

export class DbAuthentication implements Authentication {
    constructor(
        private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository,
        private readonly saveRefreshTokenRepository: SaveRefreshTokenRepository,
        private readonly hashComparer: HashComparer,
        private readonly encrypter: Encrypter
    ) { }

    async auth(authenticationParams: Authentication.Params): Promise<Authentication.Result> {
        const account = await this.loadAccountByEmailRepository.loadByEmail(authenticationParams.email);

        if (account) {
            const isValid = await this.hashComparer.compare(authenticationParams.password, account.password);
            
            if (isValid) {
                // information to be encoded in the JWT
                const payload = {
                    //name: account.name,
                    userId: account.id,
                    /*accessTypes: [
                        'getTeams',
                        'addTeams',
                        'updateTeams',
                        'deleteTeams'
                    ]*/
                };

                const accessToken = await this.encrypter.encrypt(payload)

                await this.saveRefreshTokenRepository.saveRefreshToken(account.id, accessToken.refreshToken);
                
                return {
                    accessToken: accessToken.token,
                    refreshToken: accessToken.refreshToken,
                    name: account.name,
                    userId: account.id
                }
            }
        }
        return null;
        
    }

}