// import appLogo from "../../assets/app/appLogo.jpg";
import appLogoTrans from "../assets/app/Hello.png";
import appFavicon from "../assets/app/Hello.png";
import { getCurrentUser } from "../utils/additonalFunc";
import axios from "axios";
export const MainContent = {
  appName: "Zcoin",
  appLogo: appLogoTrans,
  appLogoTrans: appLogoTrans,
  appFavicon: appFavicon,
  appURL: "",
  contactNo: "+9876324862552",
  email: "info@example.com",
  address: "India",
};

export const backendConfig = {
  // base: "http://192.168.1.70:6074/api",
  // origin: "http://192.168.1.70:6074",
  // base: "http://192.168.1.59:6074/api",
  // origin: "http://192.168.1.59:6074",
  // base: " http://192.168.85.24:6074/api",
  // origin: " http://192.168.85.24:6074",

  
  base: "https://z-coin.onrender.com/api",
  origin: "https://z-coin.onrender.com/",
};


const user = getCurrentUser();
const token = user?.token;

export const Axios = axios.create({
  baseURL: backendConfig.base,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const marketApi =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
