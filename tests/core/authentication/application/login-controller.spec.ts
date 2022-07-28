import { LoginController } from "@/core/authentication/application/login-controller"
import { Authentication } from '@/core/authentication/contracts/authentication'
import { badRequest, serverError, unauthorized } from "@/libs/ddd/base-classes/helpers/http-helper";
import { faker } from '@faker-js/faker';
import { ok } from "assert";
import { Validation } from "../contracts/validation";

const mockRequest = (): LoginController.Request => ({
    email: faker.internet.email(),
    password: faker.internet.password()
})

const makeAuthenticationStub = (): Authentication => {
    class AuthenticationStub implements Authentication {
        async auth(authenticationParams: Authentication.Params): Promise<Authentication.Result> {
            return new Promise(resolve => resolve({
                accessToken: 'any_token',
                refreshToken: 'any_refresh_token',
                name: 'any_name',
                userId: 1
            }))
        }

    }

    return new AuthenticationStub();
}

const makeValidationCompositeStub = (): Validation => {
    class ValdiationStub implements Validation {
        validate(input: any): Error {
            return null;
        }
    }

    return new ValdiationStub();
}

type SutTypes = {
    sut: LoginController
    authenticationStub: Authentication
    validationStub: Validation
}

const makeSut = (): SutTypes => {
    const authenticationStub = makeAuthenticationStub();
    const validationStub = makeValidationCompositeStub();
    const sut = new LoginController(authenticationStub, validationStub);

    return {
        sut,
        authenticationStub,
        validationStub
    }

}

describe('Login Controller', () => {
    test('Should call Authentication with correct values', async () => {
        const { sut, authenticationStub } = makeSut();
        const execSpy = jest.spyOn(authenticationStub, 'auth');
        const request = mockRequest()
        await sut.exec(request)

        expect(execSpy).toHaveBeenCalledWith({
            email: request.email,
            password: request.password
        })
    })

    test('Should call Validation with correct values', async () => {
        const { sut, validationStub } = makeSut();
        const execSpy = jest.spyOn(validationStub, 'validate');
        const request = mockRequest()
        await sut.exec(request)

        expect(execSpy).toHaveBeenCalledWith({
            email: request.email,
            password: request.password
        })
    })

    test('Should return 500 if Authentication throws', async () => {
        const { sut, authenticationStub } = makeSut();
        jest.spyOn(authenticationStub, 'auth').mockImplementationOnce(() => new Promise((resolve, reject) => {
            throw new Error();
        }))
        const httpResponse = await sut.exec(mockRequest());

        expect(httpResponse).toEqual(serverError(new Error()))
    })

    test('Should return 400 if Validation returns an error', async () => {
        const { sut, validationStub } = makeSut();

        jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new Error())
        const httpResponse = await sut.exec(mockRequest())

        expect(httpResponse).toEqual(badRequest(new Error()))
    })

    test('Should return 401 if user does not exist', async () => {
        const { sut, authenticationStub } = makeSut();

        jest.spyOn(authenticationStub, 'auth').mockReturnValueOnce(null)
        const httpResponse = await sut.exec(mockRequest())

        expect(httpResponse).toEqual(unauthorized())
    })

    test('Should return 200 if valid credentials are provided', async () => {
        const { sut } = makeSut();
        const request = mockRequest();
        const httpResponse = await sut.exec(request);
   
        expect(httpResponse).toEqual({
            statusCode: 200,
            body: {
                accessToken: 'any_token',
                refreshToken: 'any_refresh_token',
                name: 'any_name',
                userId: 1
            }
        })
    })
})