import { v4 as uuid } from 'uuid';
import { Identifier } from './identifier.base';


export class UniqueEntityID extends Identifier<string | number> {
  constructor(id?: string | number) {
    super(id ? id : uuid());
  }
}