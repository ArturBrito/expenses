import { TokenRefresher } from "@/core/authentication/contracts/token-refresher";
import { JwtAdapter } from "@/core/authentication/infrastructure/cryptography/jwt-adapter";
import { StringGeneratorAdapter } from "@/core/authentication/infrastructure/cryptography/string-generator-adapter";
import { DbRefreshToken } from "@/core/authentication/infrastructure/db-refresh-token";
import { AccountPrismaRepository } from "@/core/authentication/infrastructure/db/account-prisma-repository";

export const makeDbTokenRefresher = (): TokenRefresher => {
    const prismaRepository = new AccountPrismaRepository();
    const stringGeneratorAdapter = new StringGeneratorAdapter();
    const jwtAdapter = new JwtAdapter(stringGeneratorAdapter);
    
    const tokenRefresher = new DbRefreshToken(prismaRepository, jwtAdapter, prismaRepository)

    return tokenRefresher
}