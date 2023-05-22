import * as zod from 'zod';
import { toFormValidator } from '@vee-validate/zod'
import { useForm, useField } from 'vee-validate';

export const useMainFormPage = () => {
  const currentResult = ref('');

  const mainValidator = zod.object({
    email: zod.string()
      .email('email format')
      .min(1, 'email required'),
    password: zod.string()
      .min(1, 'password required'),
    confirmPassword: zod.string()
      .min(1, 'confirm password required')
      .refine((val) => {
        return password.value === val;
      }, { message: 'password != confirm password'}),
    isChecked: zod.boolean(),
  });

  const validationSchema = toFormValidator(mainValidator);
  
  const initialValues: zod.infer<typeof mainValidator> = {
    email: '',
    password: '',
    confirmPassword: '',
    isChecked: false,
  }

  const { handleSubmit, resetForm, errors } = useForm({
    validationSchema,
    initialValues,
  });

  const allMaps = Object.entries(mainValidator.shape);
  const allKeys = allMaps.flatMap(([key]) => key);
  console.log(allKeys);

  const { value: email } = useField('email');
  const { value: password } = useField('password');
  const { value: confirmPassword } = useField('confirmPassword');
  const { value: isChecked } = useField('isChecked');

  const submitForm = handleSubmit(result => {
    console.log(result);
    currentResult.value = JSON.stringify(result, null, 2);
    const allMaps = Object.entries(mainValidator.shape);
    const allKeys = allMaps.flatMap(([key]) => key);
    console.log(allKeys);
  });

  return {
    email,
    password,
    confirmPassword,
    isChecked,
    errors,
    submitForm,
    resetForm,
    currentResult,
  }
}
