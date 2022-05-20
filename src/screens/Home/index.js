import * as React from 'react';
import { View } from "react-native";
import { ImageWithText } from "../../components/ImageWithText/index";
import Images from '@assets';
import { useState } from "react";
import { styles } from "./styles";


function Home (){
  const [anotherToggle,setAnotherToggle] = useState(false)
  const [toggle,SetToggle] = useState(false)

  const preventFirstMovieSubmit=()=> {
    SetToggle(!toggle)
    if (preventFirstMovieSubmit === true) {
      SetToggle(true);
    } else {
      setAnotherToggle(false);
    }
  }

  const preventSecondMovieSubmit=()=> {
    setAnotherToggle(!anotherToggle)
    if (preventSecondMovieSubmit === true) {
      setAnotherToggle(true);
    } else {
      SetToggle(false);
    }
  }

  return (
    <View style={styles.container}>
      <ImageWithText handlePress={preventFirstMovieSubmit} pressed={toggle} image={Images.MOVIE1} title={"I'm a legend"}/>
      <ImageWithText handlePress={preventSecondMovieSubmit} pressed={anotherToggle} image={Images.MOVIE2} title={"The lost city"}/>
    </View>
  )
}

export default Home;
