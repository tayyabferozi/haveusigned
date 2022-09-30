import axios from "axios";

const getAccessToken = async function () {
  try {
    const storedData = JSON.parse(localStorage.getItem("HYS_AUTH_DATA"));
    if (storedData) {
      const tokenTimeObj = new Date(storedData.time);
      const tokenTime = tokenTimeObj.getTime();
      const tokenTimeMin = tokenTime / (1000 * 60);

      const tokenValidityTimeMin = tokenTimeMin + 15;
      const tokenValidityTimeObj = new Date(tokenValidityTimeMin * (1000 * 60));
      const tokenValidityTime = tokenValidityTimeObj.getTime();

      const nowTimeObj = new Date();
      const nowTime = nowTimeObj.getTime();

      if (nowTime < tokenValidityTime) {
        return storedData.data;
      }
    }

    const { data } = await axios.get(
      `/token?clientId=${process.env.REACT_APP_CLIENT_ID}&clientName=${process.env.REACT_APP_CLIENT_NAME}`
    );

    localStorage.setItem(
      "HYS_AUTH_DATA",
      JSON.stringify({
        data,
        time: new Date(),
      })
    );

    return data;
  } catch (err) {
    console.log(err);
  }
};

export default getAccessToken;
