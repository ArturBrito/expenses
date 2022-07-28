export interface TokenRefresher{
    refresh(refreshParams: TokenRefresher.Params): Promise<TokenRefresher.Result>
}

export namespace TokenRefresher{
    export type Params = {
        userId: number
        accessToken: string
        refreshToken: string
    }

    export type Result = {
        userId: number
        accessToken: string
        refreshToken: string
    }
}