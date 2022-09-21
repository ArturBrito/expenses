export interface GetUser {
    get(userId: number): Promise<boolean>
}