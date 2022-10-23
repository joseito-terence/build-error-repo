import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from '../config';
import Platform from '../utils/Platform';

let TOKEN = '';

export const setToken = (token) => TOKEN = token;

const axiosInstance = axios.create({
  baseURL: Config.BACKEND_URL
})

axiosInstance.interceptors.request.use(async (config) => {
  config.params = config.params || {};

  const isNative = Boolean(Platform.OS.match(/android|ios/g))
  const isBrowser = (Platform.OS === 'web') && (typeof window !== 'undefined');
  let token = null;

  if(isNative || isBrowser) {
    const localAuth = await AsyncStorage.getItem('auth')
    
    if(localAuth) 
      token = JSON.parse(localAuth).token;
  } 
  // console.log(TOKEN)
  if(!config?.data?.access_token) {
    if(token)
      config.headers['Authorization'] = `Bearer ${token || TOKEN}`;
    else
      config.params['access_token'] = Config.MASTER_KEY;    // for auth, Can't assign MASTER_KEY to authorization header since it contains user's credentials 
  }

  return config;
})

export default axiosInstance;
