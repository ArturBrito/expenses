import { prismaClient } from "@/core/infrastructure/db/prisma-helper";
import { CreateUserRepository } from "../../contracts/db/create-user-repository";
import { LoadAccountByEmailRepository } from "../../contracts/db/load-account-by-email-repository";
import { LoadTokenByIdRepository } from "../../contracts/db/load-token-by-id-repository";
import { RemoveAllUsersRepository } from "../../contracts/db/remove-all-users-repository";
import { SaveRefreshTokenRepository } from "../../contracts/db/save-refresh-token-repository";


export class AccountPrismaRepository implements LoadAccountByEmailRepository, SaveRefreshTokenRepository, LoadTokenByIdRepository, RemoveAllUsersRepository, CreateUserRepository {
    
    async loadByEmail(email: string): Promise<LoadAccountByEmailRepository.Result> {
        const user = await prismaClient.user.findUnique({
            where: {
                email: email
            }
        })

        if (!user) return null;

        return {
            id: user.user_id,
            name: user.name,
            password: user.password
        };
    }

    async saveRefreshToken(user_id: number, refresh_token: string): Promise<void> {
        const user = await prismaClient.login.findFirst({
            where: {
                user_id: user_id
            }
        })

        if (!user) {
            await prismaClient.login.create({
                data: {
                    user_id: user_id,
                    refresh_token: refresh_token
                }
            })

            return;
        }

        await prismaClient.login.update({
            where: {
                user_id: user_id
            },
            data: {
                refresh_token: refresh_token
            }
        })

    }

    async loadTokenById(userId: number): Promise<LoadTokenByIdRepository.Result> {
        const refreshToken = await prismaClient.login.findFirst({
            where: {
                user_id: userId
            }
        })

        return {
            userId: refreshToken.user_id,
            refreshToken: refreshToken.refresh_token
        }

    }

    async removeAllUsers(): Promise<void> {
        await prismaClient.user.deleteMany({})
    }

    async createUser(name: string, email: string, password: string): Promise<void>{
        await prismaClient.user.create({
            data: {
              name: name,
              email: email,
              password: password
            },
          })
    }

}