export interface ControllerResponse {
  body: any;
}

export interface ControllerHttpResponse extends ControllerResponse {
  statusCode: number;
}
