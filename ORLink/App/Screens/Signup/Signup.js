/*
    Login
*/

// Fetching dependencies.
import React , {Component} from 'react'
import {Text, View, ScrollView} from 'react-native'

// Third Parties Dependencies.
import  Textinput  from 'react-native-material-textinput'
import { Dropdown } from 'react-native-material-dropdown'

// Custom Components
import { Checkbox } from '../../UIComponents/Checkbox'
import { WScale,HScale } from '../../Modules/Multi-Resolution/MultiResolution'

// Creating Stateless Component.
const Signup = () => {
    return (
        // Main layout container
        <View style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor:"#fafbfd"
          }}>
            

            {/* Signup Fields Container */}
            <View style={{flex:0.95}}>
            <ScrollView style={{width:"100%",height:"100%"}}>
                {/* Setting up the login fields container */}
                <View style={{flex:1,flexDirection:"column",justifyContent:"flex-start",alignItems:"center"}}>
                
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

                {/* Heading */}
                <Text style={{paddingTop:WScale(26),fontSize:WScale(21),fontWeight:'bold',textAlign:'center'}}>
                    ORLINK
                </Text>
                
                {/* Description */}
                <Text style={{fontSize:WScale(12),fontWeight:'300',textAlign:'center'}}>
                    An intuitive surgical{"\n"}
                    workflow platform
                </Text>

                {/* Sign up signature */}
                <Text style={{paddingTop:WScale(26),paddingBottom:WScale(33),fontSize:WScale(16),fontWeight:'900',textAlign:'center',color: '#4a4a4a'}}>
                    SIGN UP
                </Text>

            </View>

        </View>

                    {/* First Name Field */}
                    <View style={{width:'85%'}}>
                        
                        <Textinput
                            label='First Name'
                            labelColor="#a6a6a6"
                            labelActiveColor="#a6a6a6"
                            labelActiveScale={WScale(0.6)}
                            underlineColor="#d3dfef"
                            underlineActiveColor="#00a0e3"
                            fontSize={WScale(12)}
                            labelActiveTop={-30}
                            color="#4a4a4a"
                            paddingBottom={WScale(25)}
                            marginBottom={WScale(27)}
                        />

                    </View>
                     {/* Last Name Field */}
                     <View style={{width:'85%'}}>
                        
                        <Textinput
                            label='Last Name'
                            labelColor="#a6a6a6"
                            labelActiveColor="#a6a6a6"
                            labelActiveScale={WScale(0.6)}
                            underlineColor="#d3dfef"
                            underlineActiveColor="#00a0e3"
                            fontSize={WScale(12)}
                            labelActiveTop={-30}
                            color="#4a4a4a"
                            paddingBottom={WScale(25)}
                            marginBottom={WScale(27)}
                        />

                    </View>

                    {/* Phone Number Field */}
                    <View style={{width:'85%'}}>
                        
                        <Textinput
                            label='Phone Number'
                            labelColor="#a6a6a6"
                            labelActiveColor="#a6a6a6"
                            labelActiveScale={WScale(0.6)}
                            underlineColor="#d3dfef"
                            underlineActiveColor="#00a0e3"
                            fontSize={WScale(12)}
                            labelActiveTop={-30}
                            color="#4a4a4a"
                            paddingBottom={WScale(25)}
                            marginBottom={WScale(27)}
                        />

                    </View>

                    {/* Email Id Field */}
                    <View style={{width:'85%'}}>
                        
                        <Textinput
                            label='Email Id'
                            labelColor="#a6a6a6"
                            labelActiveColor="#a6a6a6"
                            labelActiveScale={WScale(0.6)}
                            underlineColor="#d3dfef"
                            underlineActiveColor="#00a0e3"
                            fontSize={WScale(12)}
                            labelActiveTop={-30}
                            color="#4a4a4a"
                            paddingBottom={WScale(25)}
                            marginBottom={WScale(27)}
                        />

                    </View>

                    {/* Password Field */}
                    <View style={{width:'85%'}}>
                        
                        <Textinput
                            label='Password'
                            labelColor="#a6a6a6"
                            labelActiveColor="#a6a6a6"
                            labelActiveScale={WScale(0.6)}
                            underlineColor="#d3dfef"
                            underlineActiveColor="#00a0e3"
                            fontSize={WScale(12)}
                            labelActiveTop={-30}
                            color="#4a4a4a"
                            paddingBottom={WScale(25)}
                            marginBottom={WScale(27)}
                        />

                    </View>

                    {/* Confirm Password Field */}
                    <View style={{width:'85%'}}>
                        
                        <Textinput
                            label='Confirm Password'
                            labelColor="#a6a6a6"
                            labelActiveColor="#a6a6a6"
                            labelActiveScale={WScale(0.6)}
                            underlineColor="#d3dfef"
                            underlineActiveColor="#00a0e3"
                            fontSize={WScale(12)}
                            labelActiveTop={-30}
                            color="#4a4a4a"
                            paddingBottom={WScale(25)}
                            marginBottom={WScale(27)}
                        />

                    </View>

                    {/* I am */}
                    <View style={{width:'85%'}}>
                        
                    <Dropdown
                        label='I am'
                        labelFontSize={WScale(12)}
                        textColor="#a6a6a6"
                        value={"Choose Option"}
                        fontSize={WScale(14)}
                        data={[{
                            value: 'Banana',
                          }, {
                            value: 'Mango',
                          }, {
                            value: 'Pear',
                          }]}
                    />

                    </View>

                    {/* Terms/Aggrement */}
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
                                message = "I acknowledge the terms & conditions"
                                messageColor="#a6a6a6"
                            />

                        </View>

                    </View>

                    

                </View>
                </ScrollView>
            </View>

            {/* Button Container */}
            <View style={{alignItems:"center"}}>
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
                            SIGN UP
                        </Text>

                </View>
            </View>

        </View>
    );
};

// Exporting Component.
module.exports = {Signup}