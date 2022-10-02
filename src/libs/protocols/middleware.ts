import { HttpResponse } from '../controllers';

export interface Middleware {
  exec(request: any): Promise<HttpResponse>;
}
