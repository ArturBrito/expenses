export interface GetUserRepository{
    get(userId: number): Promise<boolean>
}