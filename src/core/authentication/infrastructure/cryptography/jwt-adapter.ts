import { Encrypter } from "../../contracts/cryptography/encrypter";

import { sign, SignOptions, verify, VerifyOptions } from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';
import { StringGenerator } from "../../contracts/cryptography/string-generator";
import { Decrypter } from "../../contracts/cryptography/decrypter";


export class JwtAdapter implements Encrypter, Decrypter {
    constructor(private readonly stringGenerator: StringGenerator) { }

    async encrypt(payload: any): Promise<Encrypter.tokens> {
        // read private key value
        const privateKey = fs.readFileSync(path.join(__dirname, './../../../../../private.key'), 'utf-8');
        const signInOptions: SignOptions = {
            // RS256 uses a public/private key pair. The API provides the private key
            // to generate the JWT. The client gets a public key to validate the
            // signature
            algorithm: 'RS256',
            expiresIn: '20s'
        };

        // generate JWT
        const token = sign(payload, { key: privateKey, passphrase: process.env.jwtSecret }, signInOptions);

        const refreshToken = this.stringGenerator.generate(64);
        return { token: token, refreshToken: refreshToken }
    }

    async decrypt(ciphertext: string): Promise<Decrypter.Result> {
        const publicKey = fs.readFileSync(path.join(__dirname, './../../../../../public.key'), 'utf-8');

        const verifyOptions: VerifyOptions = {
            algorithms: ['RS256'],
        };

        return new Promise((resolve, reject) => {
            verify(ciphertext, publicKey, verifyOptions, (error, decoded: Decrypter.Result) => {
              if (error) return reject(error);
        
              resolve(decoded);
            })
          });
    }

}