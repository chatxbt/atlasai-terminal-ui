import axios from "axios";

const BaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!BaseUrl) throw new Error("BaseUrl to server is required");

const _axios = axios.create({
  baseURL: BaseUrl,
  timeout: 60000, // 1 minutes
});

export default _axios;
