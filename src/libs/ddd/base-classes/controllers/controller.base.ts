import { HttpResponse } from './controller-response';

export interface Controller<T = any> {
  exec(request: T): Promise<HttpResponse>;
}
