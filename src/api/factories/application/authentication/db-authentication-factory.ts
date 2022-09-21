import { BcryptAdapter } from "@/core/authentication/infrastructure/cryptography/bcrypt-adapter";
import { JwtAdapter } from "@/core/authentication/infrastructure/cryptography/jwt-adapter";
import { StringGeneratorAdapter } from "@/core/authentication/infrastructure/cryptography/string-generator-adapter";
import { UserPrismaRepository } from "@/core/authentication/infrastructure/db/user-prisma-repository";
import { DbAuthentication } from "@/core/authentication/infrastructure/dbAuthentication";

export const makeDbAuthentication = (): DbAuthentication => {
    const stringGeneratorAdapter = new StringGeneratorAdapter();
    const jwtAdapter = new JwtAdapter(stringGeneratorAdapter);
    const hashComparer = new BcryptAdapter(12);
    const prismaRepository = new UserPrismaRepository();
    return new DbAuthentication(prismaRepository, prismaRepository, hashComparer, jwtAdapter);
}