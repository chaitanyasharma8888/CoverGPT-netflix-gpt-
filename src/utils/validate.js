export const checkValidData = ({nameData = "", emailData, passwordData},isSignInForm=true ) => {
  // Skip name validation if in Sign In mode
  if (!isSignInForm) {
    if (nameData.length === 0) {
      return "Name is required";
    }
    if (!/([a-zA-Z0-9_\s]+)/.test(nameData)) {
      return "Name is not valid";
    }
  }
  const isMailValid = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(
    emailData
  ); //if this pass it will return true or false in it

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/.test(passwordData); //if pass return true or false

  //   if (!isNameValid) return "Name is not valid";
  if (!isMailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
