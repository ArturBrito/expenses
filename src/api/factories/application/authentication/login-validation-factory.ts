import { Validation } from "@/core/authentication/contracts/validation";
import { EmailValidatorAdapter } from "@/core/authentication/infrastructure/email-validator-adapter";
import { EmailValidation } from "@/libs/validators/email-validation";
import { RequiredFieldValidation } from "@/libs/validators/required-filed-validation";
import { ValidationComposite } from "@/libs/validators/validation-composite";

export const makeLoginValidation = (): ValidationComposite => {
    const validations: Validation[] = [];
    for (const field of ['email', 'password']) {
        validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
    
    return new ValidationComposite(validations)
}