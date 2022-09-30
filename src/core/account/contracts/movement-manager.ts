export interface MovementManager {
  addMovement(request: MovementManager.AddMovementRequest): Promise<boolean>;
  removeMovement(
    request: MovementManager.RemoveMovementRequest
  ): Promise<boolean>;
}

export namespace MovementManager {
  export type AddMovementRequest = {
    userId: number;
    accountId: number;
    value: number;
  };
  export type RemoveMovementRequest = {
    userId: number;
    accountId: number;
    movementId: number;
  };
}
