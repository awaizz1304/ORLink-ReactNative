/*
    Login
*/

// Fetching dependencies.
import React , {Component} from 'react'
import {Platform, StyleSheet, Text, View,Dimensions,Button} from 'react-native'

// Third Parties Dependencies.
import { TextField } from 'react-native-material-textfield'
import { Checkbox } from '../UIComponents/Checkbox' // Custom Checkbox Component.

// Creating Stateless Component.
const Login = () => {
    return (
        // Main layout container
        <View style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor:"#fafbfd"
          }}>
            
            {/* Top Heading View */}
            <View style={{flex:0.3}}>
            
                {/* Text Views Container  */}
                <View
                    style=
                    {{
                        flex:1,
                        flexDirection:'column'
                    }}
                >

                    {/* Offset View */}
                    <View style={{flex:0.35,flexDirection:"row"}}/>

                    {/* Heading */}
                    <Text style={{fontSize:40,fontWeight:'bold',textAlign:'center'}}>
                        ORLINK
                    </Text>
                    
                    {/* Description */}
                    <Text style={{fontSize:20,fontWeight:'300',textAlign:'center'}}>
                        An intuitive surgical{"\n"}
                        workflow platform
                    </Text>

                </View>

            </View>

            {/* Login Container */}
            <View style={{flex:0.7}}>

                {/* Setting up the login fields container */}
                <View style={{flex:1,flexDirection:"column",justifyContent:"flex-start",alignItems:"center"}}>
                    
                    {/* Username Field */}
                    <View style={{width:'85%'}}>
                        
                        <TextField
                            label='Username'
                        />

                    </View>

                    {/* Password Field */}
                    <View style={{width:'85%'}}>
                        
                        <TextField
                            label='Password'
                        />

                    </View>

                    {/* Remember/Forgot links */}
                    <View
                        style=
                        {{
                           width:"85%",
                           flexDirection:"column"
                        }}
                    >

                        <View
                            style=
                            {{
                                flexDirection:"row",
                                justifyContent:"space-between",
                                paddingTop:10,
                                paddingBottom:30
                            }}
                        >
                        
                            {/* Remember Me Checkbox */}
                            <Checkbox
                                marked = {true}
                                iconSize = {18}
                                iconColor = "#b3bfd0"
                                message = "Remember me"
                                messageColor="#a6a6a6"
                            />

                            {/* Forgot password field. */}
                            <Text
                                style=
                                {{
                                    color: "#4a90e2",
                                    textAlignVertical:"center"
                                }}
                            >
                                Forgot password?
                            </Text>

                            

                        </View>

                    </View>

                    {/* Login Button */}
                    <View style=
                    {{
                        width:'85%',
                        height:50,
                        backgroundColor:"#4a90e2",
                        borderRadius: 6,
                        shadowColor: "#00000019.8",
                        elevation:2,
                        shadowOffset: {
                            width: 0,
                            height: 5
                        },
                        shadowRadius: 65,
                        shadowOpacity: 1
                    }}>

                        {/* Text Component */}
                        <Text style={{flex:1,textAlign:"center",textAlignVertical:"center",fontSize:15,fontWeight:'900',color:'white'}}>
                            LOGIN
                        </Text>

                    </View>
                    
                    {/* New user signup & terms/conditions */}
                    <View
                        style=
                        {{
                            flex:1,
                            flexDirection:"column",
                            justifyContent:"space-between",
                        }}
                    >

                        <View style={{paddingTop:44,flexDirection:"row"}}>
                            <Text style={{color:"#4a4a4a",fontFamily: "Avenir"}}>New user? </Text>
                            <Text style={{color:"#4a90e2"}}>Sign Up</Text>
                        </View>

                        <Text style={{color: "#a6a6a6",paddingBottom:18}}>Terms & Condition</Text>

                    </View>

                </View>

            </View>
        </View>
    );
};

// Exporting Component.
module.exports = {Login}