import axios from "axios";

const getAccessToken = async function () {
  try {
    const { data } = await axios.get(
      `/token?clientId=${process.env.REACT_APP_CLIENT_ID}&clientName=${process.env.REACT_APP_CLIENT_NAME}`
    );

    return data;
  } catch (err) {
    console.log(err);
  }
};

export default getAccessToken;
