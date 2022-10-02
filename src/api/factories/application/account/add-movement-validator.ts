import { Validation } from '@/core/authentication/contracts/validation';
import { RequiredFieldValidation } from '@/libs/validators/required-filed-validation';
import { ValidationComposite } from '@/libs/validators/validation-composite';

export const makeAddMovementValidation = (): Validation => {
  const validations: Validation[] = [];
  for (const field of ['accountId', 'value']) {
    validations.push(new RequiredFieldValidation(field))
}

return new ValidationComposite(validations)
};
