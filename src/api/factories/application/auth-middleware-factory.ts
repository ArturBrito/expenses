import { AuthMiddleware } from '@/api/middlewares/auth-middleware';
import { JwtAdapter } from '@/core/authentication/infrastructure/cryptography/jwt-adapter';
import { StringGeneratorAdapter } from '@/core/authentication/infrastructure/cryptography/string-generator-adapter';
import { Middleware } from '@/libs/protocols/middleware';

export const makeAuthMiddleware = (): Middleware => {
  const stringGeneratorAdapter = new StringGeneratorAdapter();
  const jwtAdapter = new JwtAdapter(stringGeneratorAdapter);
  return new AuthMiddleware(jwtAdapter);
};
