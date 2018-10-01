import React , {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';


const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class FirstLaunchScreen extends Component {
    render(){
        return(
        <View style = {styles.swiperContainer}>
            <Swiper loop = {false} paginationStyle = {styles.swiperPaginationStyle}>
            <View style={styles.slide1}>
            <Text style={styles.text}>Image 1</Text>
            </View>
            <View style={styles.slide2}>
            <Text style={styles.text}>Image 2</Text>
            </View>
            <View style={styles.slide3}>
            <Text style={styles.text}>Image 3</Text>
            </View>
            </Swiper>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    swiperContainer: {
      width : window.width,
      height : window.height * 0.7,
      marginTop : 20,
      backgroundColor : '#92BBD9',
    },
    swiperPaginationStyle: {
      bottom: -23,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
  });