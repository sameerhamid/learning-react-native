import axios from 'axios';

const API_KEY = 'AIzaSyACZ9Pq8YMXe1JKz_41ybz57CQ71f0q-P4';
enum AuthMode {
  SIGN_UP = 'signUp',
  SIGN_IN = 'signInWithPassword',
}
async function authenticate(mode: AuthMode, email: string, password: string) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
  console.log('response>>>', response.data.idToken);
}
export async function createUser(email: string, password: string) {
  const response = await authenticate(AuthMode.SIGN_UP, email, password);
}

export async function loginUser(email: string, password: string) {
  const response = await authenticate(AuthMode.SIGN_IN, email, password);
}
