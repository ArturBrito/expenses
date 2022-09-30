import { Validation } from "@/core/authentication/contracts/validation";
import { RequiredFieldValidation } from "@/libs/ddd/base-classes/validators/required-filed-validation";
import { ValidationComposite } from "@/libs/ddd/base-classes/validators/validation-composite";

export const makeCreateAccountValidation = (): ValidationComposite => {
    const validations: Validation[] = [];
    for (const field of ['userId', 'accountName']) {
        validations.push(new RequiredFieldValidation(field))
    }
    
    return new ValidationComposite(validations)
}