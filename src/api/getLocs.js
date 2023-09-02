import axios from "axios";

// Define the request data

const apiKey = "89301ad477e2d7083bc3979ca065aba0"; // Replace with your NovaPoshta API key

const apiUrl = "https://api.novaposhta.ua/v2.0/json/";

// Define the request data

const getLocs = () => {
  const requestData = {
    apiKey: apiKey,
    modelName: "AddressGeneral",
    calledMethod: "getWarehouses",
    methodProperties: {
      Language: "en", // Language of the response (you can change it)
    },
  };

  // Make the API request
  return axios
    .post(apiUrl, requestData)
    .then((response) => {
      const data = response.data;
      // Handle the response data here
      return data;
    })
    .catch((error) => {
      // Handle any errors that occur during the request
      console.error(error);
    });
};

export default getLocs;
