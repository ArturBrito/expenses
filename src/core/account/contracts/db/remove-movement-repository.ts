import { MovementManager } from "../movement-manager";

export interface RemoveMovementRepository {
  removeMovement(request: RemoveMovementRepository.Request): Promise<any>;
}

export namespace RemoveMovementRepository {
  export type Request = MovementManager.RemoveMovementRequest;
}
