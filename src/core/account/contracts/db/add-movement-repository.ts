import { MovementManager } from "../movement-manager";

export interface AddMovementRepository {
  addMovement(request: AddMovementRepository.Request): Promise<any>;
}

export namespace AddMovementRepository {
  export type Request = MovementManager.AddMovementRequest;
}
