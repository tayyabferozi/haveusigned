import axios from "axios";

const getAccessToken = async function () {
  try {
    const storedData = JSON.parse(localStorage.getItem("HYS_AUTH_DATA"));

    const storedDataTime = new Date(storedData.time);
    const timeNow = new Date();
    // const validityTime = new Date()

    // if (storedDataTime.getTime() < timeNow.getTime()) {
    //   return storedData.token;
    // }

    // console.log(storedDataTime.getTime() - timeNow.getTime());

    const { data } = await axios.get(
      `/token?clientId=${process.env.REACT_APP_CLIENT_ID}&clientName=${process.env.REACT_APP_CLIENT_NAME}`
    );

    localStorage.setItem(
      "HYS_AUTH_DATA",
      JSON.stringify({
        accessToken: data.accessToken,
        time: new Date(),
      })
    );

    return data;
  } catch (err) {
    console.log(err);
  }
};

export default getAccessToken;
