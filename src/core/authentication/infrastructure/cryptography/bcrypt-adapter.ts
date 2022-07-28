import { HashComparer } from "../../contracts/cryptography/hash-comparer";

import bcrypt from 'bcrypt'
import { Hasher } from "../../contracts/cryptography/hasher";

export class BcryptAdapter implements HashComparer, Hasher {
    constructor(private readonly salt: number){}
    
    async compare(plaitext: string, digest: string): Promise<boolean> {
        return bcrypt.compare(plaitext, digest)
    }

    async hash(plaintext: string): Promise<string> {
        return bcrypt.hash(plaintext, this.salt)
    }
}