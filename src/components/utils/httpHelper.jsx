import * as SecureStore from "expo-secure-store";

const httpHelper = {
  get: async url => {
    //console.log("mykey", await SecureStore.getItemAsync("@myKey"));
    try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (e) {
      throw e;
    }
  },
  post: async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accecpt: "application/json"
        },
        body: JSON.stringify(data)
      });
      const json = await response.json();
      return json;
    } catch (e) {
      throw e;
    }
  }
};
export default httpHelper;
