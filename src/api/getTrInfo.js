import axios from "axios";

//track no ex "20400349126274"

const apiKey = "89301ad477e2d7083bc3979ca065aba0";

const apiUrl = "https://api.novaposhta.ua/v2.0/json/";

const getTrInfo = (req) => {
  const requestData = {
    apiKey: apiKey,
    modelName: "TrackingDocument",
    calledMethod: "getStatusDocuments",
    methodProperties: {
      Documents: [
        {
          DocumentNumber: req + "",
          Phone: "",
        },
      ],
    },
  };

  return axios
    .post(apiUrl, requestData)
    .then((response) => {
      const data = response.data;
      return data.data[0];
    })
    .catch((error) => {
      console.error(error);
    });
};

export default getTrInfo;
