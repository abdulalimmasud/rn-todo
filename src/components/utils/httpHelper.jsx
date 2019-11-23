import React from "react";

const httpHelper = {
  get: async url => {
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
