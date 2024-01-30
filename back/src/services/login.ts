export function login(email: string, pw: string): boolean {
  const user = login(email, pw);
  if (user === undefined) {
    return false;
  } else {
    return true;
  }
}
