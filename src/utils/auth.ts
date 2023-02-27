import axios from 'axios';
import Cookies from 'js-cookie';

interface LoginData {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
}

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post<AuthResponse>(`http://localhost:3100/users`, {
      email,
      password,
    });

    const { token } = response.data;
    console.log(token);
    

    Cookies.set('token', token, { expires: 7 });

    return true;
  } catch (error) {
    console.error(error);

    return false;
  }
};

export const logout = () => {
  Cookies.remove('token');
};
