export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
export const validatePassword = (password: string) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\S]{8,}$/;
  return passwordRegex.test(password);
};
export const validateNewReactLookFor = (input: string) => {
  return input.length > 0 && input.length <= 12;
};

export const validateNewReactMessage = () => {
  return;
};
export const validateNewReactReactTo = () => {
  return;
};
