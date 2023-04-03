import React from "react";
import {Text , StyleSheet, ImageBackground, View , TouchableOpacity} from "react-native";

const Home =()=>{
    const img_path = require('../assets/foodimg.png');
    return(
       <ImageBackground source = {img_path} style = {stylse.imageStyle} >
         

        </ImageBackground>
    )
       

}

export default Home;

const stylse = StyleSheet.create({
    imageStyle: {
        width: '100%',
        height : 350,
        resizeMode: 'contain'
    }
})