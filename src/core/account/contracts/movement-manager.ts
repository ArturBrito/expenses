export interface MovementManager {
  addMovement(request: MovementManager.Request): Promise<boolean>;
}

export namespace MovementManager {
  export type Request = {
    userId: number,
    accountId: number,
    value: number
  }
}