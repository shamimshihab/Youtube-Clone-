import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "048d4ce2a2mshb33458dfc8ebb74p14d02ajsn6c255ea5159e",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

console.log("optionns", options);
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  console.log("${BASE_URL}/${url}`", `${BASE_URL}/${url}`);
  return data;
};
