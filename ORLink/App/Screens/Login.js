/*
    Login
*/

// Fetching dependencies.
import React , {Component} from 'react'
import {Text, View} from 'react-native'

// Third Parties Dependencies.
import { TextField } from 'react-native-material-textfield'

// Custom Components
import { Checkbox } from '../UIComponents/Checkbox'
import { WScale,HScale } from '../Modules/MultiResolution'

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
                    <Text style={{fontSize:WScale(40),fontWeight:'bold',textAlign:'center'}}>
                        ORLINK
                    </Text>
                    
                    {/* Description */}
                    <Text style={{fontSize:WScale(20),fontWeight:'300',textAlign:'center'}}>
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
                            labelFontSize={WScale(12)}
                            fontSize={WScale(16)}
                        />

                    </View>

                    {/* Password Field */}
                    <View style={{width:'85%'}}>
                        
                        <TextField
                            label='Password'
                            labelFontSize={WScale(12)}
                            fontSize={WScale(16)}
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
                                paddingTop:WScale(16.5),
                                paddingBottom:WScale(36)
                            }}
                        >
                        
                            {/* Remember Me Checkbox */}
                            <Checkbox
                                marked = {true}
                                iconSize = {WScale(18)}
                                fontSize = {WScale(12)}
                                interPadding = { WScale(6.1) }
                                iconColor = "#b3bfd0"
                                message = "Remember me"
                                messageColor="#a6a6a6"
                            />

                            {/* Forgot password field. */}
                            <Text
                                style=
                                {{
                                    color: "#4a90e2",
                                    textAlignVertical:"center",
                                    fontSize:WScale(12)
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
                        height:WScale(45),
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
                        <Text style={{flex:1,textAlign:"center",textAlignVertical:"center",fontSize:WScale(15),fontWeight:'900',color:'white'}}>
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

                        <View style={{paddingTop:WScale(44),flexDirection:"row"}}>
                            <Text style={{color:"#4a4a4a",fontSize:WScale(14)}}>New user? </Text>
                            <Text style={{color:"#4a90e2",fontSize:WScale(14)}}>Sign Up</Text>
                        </View>

                        <Text style={{color: "#a6a6a6",paddingBottom:WScale(18),fontSize:WScale(12)}}>Terms & Condition</Text>

                    </View>

                </View>

            </View>
        </View>
    );
};

// Exporting Component.
module.exports = {Login}