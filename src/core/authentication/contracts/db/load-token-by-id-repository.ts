export interface LoadTokenByIdRepository{
    loadTokenById(userId: number): Promise<LoadTokenByIdRepository.Result>
}

export namespace LoadTokenByIdRepository{
    export type Result = {
        userId: number
        refreshToken: string
    }
}