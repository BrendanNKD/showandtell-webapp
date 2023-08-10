const passwordValidation = (password: string) => {
  const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*#^?&]{8,}$/i;

  if (!pattern.test(password)) {
    return "Password need to have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
  }

  return true;
};

export default passwordValidation;
