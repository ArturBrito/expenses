import { Decrypter } from '@/core/authentication/contracts/cryptography/decrypter';
import { HttpResponse } from '@/libs/controllers';
import { AccessDeniedError } from '@/libs/errors/access-denied-error';
import {
  forbidden,
  ok,
  serverError,
  unauthorized,
} from '@/libs/helpers/http-helper';
import { Middleware } from '@/libs/protocols/middleware';

export class AuthMiddleware implements Middleware {
  constructor(private readonly decrypter: Decrypter) {}

  async exec(request: AuthMiddleware.Request): Promise<HttpResponse> {
    try {
      const { accessToken } = request;
      
      if (accessToken) {
        const decryptedToken = await this.decrypter.decrypt(accessToken);

        if (decryptedToken) {
          return ok({ userId: decryptedToken.userId });
        }
      }
      return forbidden(new AccessDeniedError());
    } catch (error) {
      if (error.message === 'jwt expired') return unauthorized();
      return serverError(error);
    }
  }
}

export namespace AuthMiddleware {
  export type Request = {
    accessToken?: string;
  };
}
