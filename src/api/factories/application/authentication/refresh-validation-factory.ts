import { Validation } from "@/core/authentication/contracts/validation";
import { RequiredFieldValidation } from "@/libs/validators/required-filed-validation";
import { ValidationComposite } from "@/libs/validators/validation-composite";

export const makeRefreshTokenValidation = (): ValidationComposite => {
    const validations: Validation[] = [];
    for(const field of ['userId', 'refreshToken', 'accessToken']){
        validations.push(new RequiredFieldValidation(field))
    }
    
    return new ValidationComposite(validations);
}