import { api } from "./config";
import Axios from "axios";

export const CallAPI = (uri, method = "GET", body, headers) => {
  return Axios({
    method,
    url: `${api}/${uri}`,
    data: body,
    headers
  });
};
