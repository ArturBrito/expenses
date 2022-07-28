export interface SaveRefreshTokenRepository{
    saveRefreshToken(user_id: number, refresh_token: string): Promise<void>
}