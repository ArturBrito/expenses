import jwt from 'jsonwebtoken'
import { JwtAdapter } from './jwt-adapter'

jest.mock('jsonwebtoken', () => ({
    async sign (): Promise<string> {
      return 'any_token'
    },
  
    async verify (): Promise<string> {
      return 'any_value'
    }
  }))
  

describe('Jwt Adapter', () => {

    describe('sign', () => {
       
    })

})