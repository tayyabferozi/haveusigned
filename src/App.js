import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { setAuth } from "./store/authSlice";
import getAccessToken from "./utils/getAccessToken";
import Routes from "./Routes";
import FullPageLoader from "./components/FullPageLoader";

function App() {
  const { isAuthSet } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    getAccessToken()
      .then((data) => {
        dispatch(setAuth({ ...data, isAuthSet: true }));
      })
      .catch((err) => {
        dispatch(setAuth({ isAuthSet: true }));
      });
  }, [dispatch]);

  if (isAuthSet) {
    return <Routes />;
  } else {
    return <FullPageLoader />;
  }
}

export default App;
