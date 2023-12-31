import * as SecureStore from "expo-secure-store";
import jwt_decode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error to get the auth token", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error in deleting the secure token ", error);
  }
};

const getUser = async () => {
  try {
    const token = await getToken();
    return token ? jwt_decode(token) : null;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getUser,
  removeToken,
  storeToken,
  getToken,
};
