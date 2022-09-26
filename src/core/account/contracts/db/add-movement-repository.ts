export interface AddMovementRepository {
  addMovement(request: AddMovementRepository.Request): Promise<void>;
}

export namespace AddMovementRepository {
  export type Request = {
    accountId: number;
    value: number;
  };
}
