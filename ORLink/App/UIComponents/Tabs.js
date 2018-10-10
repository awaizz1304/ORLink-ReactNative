'use strict'

import React, { Component } from 'react';
import{
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
const Dimensions = require('Dimensions');
const window = Dimensions.get('window');
import { WScale,HScale } from '../Modules/MultiResolution'

export default class Tabs extends Component {
  state = {
    activeTab : 0
  }
  // Pull children out of props passed from App component
  render ({children} = this.props) {
    return(
      <View style = {styles.container}>
          <View style = {styles.tabsContainer}>
            {/*Populate all tabs and get their title*/}
            {children.map(({ props: { title,id=0 } }, index) => 
              <TouchableOpacity
                style = {[
                  styles.tabContainer,
                  // merge default style with active tab style
                  id == 1 ? styles.leftBorderRadius : styles.rightBorderRadius,
                  index === this.state.activeTab ? styles.activeTabContainer : styles.inActiveTabConatiner
                ]}
                onPress = {() => this.setState({activeTab : index})}
                key = {index}
              >
                <Text style = {this.state.activeTab == index ? styles.tabTextActive : styles.tabTextInActive}> {title} </Text>
              </TouchableOpacity>
            )}
          </View>
          <View style = {styles.contentContainer}>
                {children[this.state.activeTab]}
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
  },
  tabsContainer : {
    flexDirection : 'row',
    flex : 1,
  },
  tabContainer : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center",
    // paddingVertical : 15,
    // borderBottomWidth: 3,
    // borderBottomColor: 'transparent',
  },
  leftBorderRadius : {
    borderTopLeftRadius : 8,
    borderBottomLeftRadius : 8,
  },
  rightBorderRadius : {
    borderTopRightRadius : 8,
    borderBottomRightRadius : 8,
  },
  activeTabContainer : {
    backgroundColor : '#4a90e2',
    
  },
  inActiveTabConatiner : {
    borderWidth : 1.5,
    borderColor : '#4a90e2',
    
  },
  tabTextActive: {
    color: '#fff',
    fontFamily: 'Avenir',
    fontWeight: '500',
    fontStyle : 'normal',
    textAlign: 'center',
    fontSize : WScale(15),
  },
  tabTextInActive: {
    color: 'rgba(74,144,226,1)',
    fontFamily: 'Avenir',
    fontWeight: '500',
    fontStyle : 'normal',
    textAlign: 'center',
    fontSize : WScale(15),
  },
  contentContainer: {
    flex: 1,                           
  },
});


