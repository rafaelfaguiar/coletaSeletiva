import Axios from "axios";
import React from "react";

const api = Axios.create({
  baseURL: "http://localhost:3333",
});

export default api;
