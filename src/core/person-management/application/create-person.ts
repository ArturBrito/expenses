import {
  Controller,
  ControllerRequest,
  ControllerResponse,
} from '@src/libs/ddd/base-classes/controllers';
import { AddPerson } from '../contracts/add-person';
import { userSuccessResponse } from '../dtos/user-response';

export class CreatePerson implements Controller {
  constructor(private readonly addPerson: AddPerson) {}

  async handle(
    controllerRequest: ControllerRequest
  ): Promise<ControllerResponse> {
    const { name, email } = controllerRequest.body;

    const person = await this.addPerson.add({ name, email });

    return userSuccessResponse(person);
  }
}
