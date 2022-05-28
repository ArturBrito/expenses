import { PersonModel } from '../domain/entities/person';

export interface AddPersonModel {
  name: string;
  email: string;
}

export interface AddPerson {
  add(person: AddPersonModel): Promise<PersonModel>;
}
