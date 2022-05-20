import React from 'react';
import Home from "./screens/Home";
import { Platform } from "react-native";



const App = () => {
  const running_on_android_tv = Platform.isTV;
  console.log(running_on_android_tv)
  return (
       <Home/>
  );
};

export default App;
