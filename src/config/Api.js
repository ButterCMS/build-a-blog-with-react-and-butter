import React from "react";
import axios from "axios";

const read_token = "your read token";

export const blogList = async () => {
  const url = `
  https://api.buttercms.com/v2/posts?auth_token=${read_token}`;
  return axios.get(url).then((res) => {
    return res.data.data;
    // console.log(res.data.data);
  });
};







