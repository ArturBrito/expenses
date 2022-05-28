import { ControllerHttpResponse, ControllerResponse } from "@src/libs/ddd/base-classes/controllers";

export const userSuccessResponse = (data: any): ControllerResponse => ({
    body: data
})

export const userHttpSuccessResponse = (data: any): ControllerHttpResponse => ({
    statusCode: 200,
    body: data
})