const confirmPasswordValidation = (
  password: string,
  confirmPassword: string
) => {
  if (confirmPassword !== password) {
    return "Your passwords do no match";
  }

  return true;
};

export default confirmPasswordValidation;
