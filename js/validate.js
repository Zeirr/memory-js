function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/.test(
    password
  );
}
function faiblePasswords(password) {
  return /^.{1,5}$/.test(password);
}
function moyenPasswords(password) {
  return /^(?=.*[0-9]|.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{7,}$/.test(password);
}
function fortPasswords(password) {
  return /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{10,}$/.test(password);
}

function validateUser(username) {
  return /^.{3,}$/.test(username);
}

export {
  validateEmail,
  validatePassword,
  validateUser,
  faiblePasswords,
  moyenPasswords,
  fortPasswords
};
