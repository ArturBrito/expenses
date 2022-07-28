export interface Encrypter {
    encrypt(payload: any): Promise<Encrypter.tokens>
}

export namespace Encrypter {
    export type tokens = {
        token: string,
        refreshToken: string
    }
}