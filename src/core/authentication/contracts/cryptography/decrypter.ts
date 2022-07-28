export interface Decrypter {
    decrypt(ciphertext: string): Promise<Decrypter.Result>
}

export namespace Decrypter {
    export type Result = {
        name: string,
        userId: number
    }
}