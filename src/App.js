import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { getAccessToken } from "./store/slices/auth";
import Routes from "./Routes";
import FullPageLoader from "./components/FullPageLoader";
import STASUSES from "./store/slices/enums";

function App() {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    dispatch(getAccessToken());
  }, [dispatch]);

  if (status === STASUSES.SUCCESS) {
    return <Routes />;
  } else {
    return <FullPageLoader />;
  }
}

export default App;
