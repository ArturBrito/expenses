import { ControllerRequest, ControllerResponse } from './';

export interface Controller {
  handle(controllerRequest: ControllerRequest): Promise<ControllerResponse>;
}
