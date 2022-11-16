import axios from "axios";
import AppConfig from "../_constants/appConfig";

export const userLogin = async ({ username, password }) => {
  try {
    const response = await axios.post(`${AppConfig.baseUrl}/auth/local`, {
      identifier: username,
      password: password,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getUser = async ({ jwt }) => {
  try {
    const user = await axios.get(`${AppConfig.baseUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return user;
  } catch (error) {
    return error;
  }
};

export const registerUser = async (values) => {
  try {
    const response = await axios.post(
      `${AppConfig.baseUrl}/auth/local/register`,
      {
        username: values.username,
        email: values.email,
        password: values.password,
        mobile: values.mobile,
        userRole: "public",
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};
