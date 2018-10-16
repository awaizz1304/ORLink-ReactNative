import React , {Component} from 'react'
import {Platform, StyleSheet, Text, View, TouchableOpacity,TextInput,Image,FlatList,ActivityIndicator} from 'react-native';
import ClientLayer from '../Components/Layers/ClientLayer';
import TopComponent from '../UIComponents/TopComponent';
import { WScale,HScale } from '../Modules/Multi-Resolution/MultiResolution'
import CustomListItem from '../UIComponents/CustomListItem'
import VideoDataModel from '../Components/Services/DataService/DataModels/VideoDataModel'
import Video from 'react-native-video'

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

class VideoPlayer extends Component {
    dummyVideosData = []
    constructor (props){
        super(props)
        this.state = {
            videoData : null,
            name : "",
            url : '',
            duration : "",
            description : "",
            videoPaused : true,
            videoLoaded : false,
        }
    }
    componentDidMount () {
        const data = this.props.navigation.getParam('videoData',null)
        this.setState({videoData : data,url : data.url,name : data.name,duration : data.duration,description : data.description})
    }
    OnPressBack = () => {
        this.props.navigation.goBack()
    }
    OnPressPlayVideo = () => {
        this.setState({videoPaused : false})
        this.Player.presentFullscreenPlayer()
    }
    OnVideoPlayerDismissed = () => {
        this.setState({videoPaused : true})
    }
    OnVideoLoaded = () => {
        this.setState({videoLoaded : true})
    }

    renderVideoPlayButton = () =>{
        if(this.state.videoLoaded){
            return(
                <TouchableOpacity onPress = {this.OnPressPlayVideo}>
                <Image style = {styles.playIcon} source = {require('../assets/Common/PlayIcon/group3x.png')} />
                </TouchableOpacity>
            )
        }
        else{
            return(
                <ActivityIndicator size = "small" color = "#fff" />
            )
           
        }
        
    }
    render () {
        if(this.state.videoData == null){
            return null
        }

        return(
            <View style = {styles.container}>
                <View style = {styles.topBar}>
                    <TopComponent
                        heading = {this.state.name}
                        leftButton = "Back"
                        leftButtonAction = {this.OnPressBack}
                    />
                </View>
                <View style = {styles.videoPlayerContainer}>
                    <Video
                        source = {{uri : this.state.url}}
                        style = {styles.videoPlayer}
                        paused = {this.state.videoPaused}
                        repeat = {false}
                        onLoad = {this.OnVideoLoaded}
                        onFullscreenPlayerDidDismiss = {this.OnVideoPlayerDismissed}
                        ref = {(player) => this.Player = player}
                    >
                    <TouchableOpacity onPress = {this.OnPressPlayVideo} />
                    </Video>
                </View>
                <View style = {styles.desciptionUpperContentContainer}>
                    <View style = {styles.descriptionFirstLine}>
                    <Text style = {styles.videoName}>{this.state.name}</Text>
                    <View style = {styles.socialIconContainer}>
                        <TouchableOpacity>
                        <Image source = {require('../assets/Common/ShareIcon/share3x.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image source = {require('../assets/Common/LikeIcon/heart3x.png')} />
                        </TouchableOpacity>
                    </View>
                    </View>
                    <Text style = {styles.durationText}>Duration : {this.state.duration}</Text>
                </View>
                <View style = {styles.separatorStyle} />
                <View style = {styles.desciptionLowerContentContainer}>
                    <Text style = {styles.descriptionText}>{this.state.description}</Text>
                </View>
            </View>
        )
    }
}
export default VideoPlayer

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fff",
        alignItems : 'center'
    },
    topBar : {
        flex : 0.11,
        width : '100%'
    },
    videoPlayerContainer : {
        flex : 0.45,
        justifyContent : 'center',
        alignItems : 'center',
    },
    desciptionUpperContentContainer : {
        flex : 0.1,
        width: WScale(300),
    },
    desciptionLowerContentContainer : {
        flex : 0.49,
        width: WScale(300),
    },
    videoPlayer : {
        width: WScale(351),
        height: WScale(220),
        borderRadius : WScale(10),
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        backgroundColor : "#fff",
        shadowOpacity: 0.5,
        shadowRadius : 20,
        elevation : 3,
        backgroundColor : "#000"
    },
    playIcon : {
        width: WScale(64),
        height: WScale(64),
    },
    descriptionFirstLine : {
        
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    socialIconContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : WScale(80)
    },
    videoName : {
        width: WScale(103),
        height: WScale(22),
        fontFamily: "Avenir",
        fontSize: WScale(16),
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#020202"
    },
    durationText : {
        marginTop : WScale(3),
        marginBottom : WScale(5),
        width: WScale(100),
        height: WScale(16),
        fontFamily: "Avenir",
        fontSize: WScale(12),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#a6a6a6"
    },
    separatorStyle : {
        flex : 0.005,
        marginBottom: WScale(5),
        backgroundColor: 'rgb(248, 248, 248)',
        width: window.width,
    },
    descriptionText : {
        marginTop : WScale(5),
        width: WScale(306),
        height: WScale(243),
        fontFamily: "Avenir",
        fontSize: WScale(12),
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: WScale(21),
        letterSpacing: 0,
        color: "#929292"
    },
})