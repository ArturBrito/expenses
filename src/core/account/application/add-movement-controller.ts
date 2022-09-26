import { Validation } from '@/core/authentication/contracts/validation';
import { Controller, HttpResponse } from '@/libs/ddd/base-classes/controllers';
import {
  badRequest,
  ok,
  serverError,
  unauthorized,
} from '@/libs/ddd/base-classes/helpers/http-helper';
import { MovementManager } from '../contracts/movement-manager';

export class AddMovementController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly movementManager: MovementManager
  ) {}

  async exec(request: any): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request);

      if (error) {
        return badRequest(error);
      }

      const movementAdded = await this.movementManager.addMovement(request);

      if (!movementAdded) {
        return unauthorized();
      }

      // descontar saldo na conta

      return ok('Movement added');
    } catch (e) {
      console.log(e);
      return serverError(e);
    }
  }
}
