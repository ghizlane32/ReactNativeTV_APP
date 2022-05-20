import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";


export const ImageWithText = ({image,title,handlePress,pressed}) =>{

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.container,pressed && styles.borderClick]}>
      <Image style={styles.logo} source={image} />
      {pressed && <Text style={styles.title}>{title}</Text>}
    </TouchableOpacity>
  )
}

