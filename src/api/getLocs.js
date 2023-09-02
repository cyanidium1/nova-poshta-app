import axios from "axios";

// Define the request data

const apiKey = "89301ad477e2d7083bc3979ca065aba0"; // Replace with your NovaPoshta API key

const apiUrl = "https://api.novaposhta.ua/v2.0/json/";

// Define the request data

const getLocs = (pageNumber = 1) => {
  const pageSize = 10;

  const requestData = {
    apiKey: apiKey,
    modelName: "AddressGeneral",
    calledMethod: "getWarehouses",
    methodProperties: {
      Page: pageNumber,
      Limit: pageSize,
      Language: "en",
    },
  };

  return axios
    .post(apiUrl, requestData)
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export default getLocs;
