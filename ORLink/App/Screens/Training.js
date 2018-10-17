import React , {Component} from 'react'
import {Platform, StyleSheet, Text, View, TouchableOpacity,TextInput,Image,FlatList} from 'react-native';
import ClientLayer from '../Components/Layers/ClientLayer';
import TopComponent from '../UIComponents/TopComponent';
import { WScale,HScale } from '../Modules/Multi-Resolution/MultiResolution'
import CustomListItem from '../UIComponents/CustomListItem'
import VideoDataModel from '../Components/Services/DataService/DataModels/VideoDataModel'
import { connect } from 'react-redux'
import { getAllVideos , loadingVideos} from '../Store/Actions/DataFetch/videosFetch';
import CustomPopup, { PopupType } from '../UIComponents/CustomPopup';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');


class Training extends Component {
    arrayHolder = []
    dummyVideosData = []
    constructor (props){
        super(props)
        this.state = {
            videosData : null,
            value : false
        }
    }
    componentDidUpdate(){
        if(this.state.videosData != this.props.videosData)
            this.setState({videosData : this.props.videosData})
    }
    componentDidMount () {
        // videoData = new VideoDataModel()
        // videoData.name = "AngioPlasty"
        // videoData.category = "Heart Operation"
        // videoData.url = 'https://www.youtube.com/watch?v=gMrl27dbT_Y'
        // videoData.duration = "2.2 Hrs"
        // videoData.description = "During your angioplasty, a doctor inserts a thin tube called a catheter into a blood vessel in your groin or wrist. The catheter is pushed through your blood vessel to a blocked area in one of your heart’s arteries. The doctor inflates a tiny balloon at the tip of the catheter and stretches the blocked vessel so blood can flow freely. The balloon is then deflated and removed with the catheter. The doctor may also insert a metal mesh tube called a stent in the blocked vessel. The stent helps the vessel stay open. You may get several stents if you have blockages in more than one of your arteries."
        // this.dummyVideosData.push(videoData)

        // this.setState({videosData : this.dummyVideosData })

        this.props.onGetAllVideos()
    }
    OnPressMovieItem(item)  {
        this.props.navigation.navigate('VideoPlayerScreen',{
            videoData : item,
        })
    }
    searchFilterFunction = text => {
        
        const newData = this.props.videosData.filter(item => {
            const itemData = item.name
            const textData = text
            return itemData.indexOf(textData) > -1
        })
        this.setState({videosData : newData})
    }
    ListItem = (props) => {
        const item = props.item
        const index = props.index
        return (
            <TouchableOpacity onPress = {()=>this.OnPressMovieItem(item)}>
            <View style = {styles.listItem}>
                <View style = {styles.imageView}>
                </View>
                <View style = {styles.rowItemTextContainer}>
                    <Text style = {styles.nameStyle}>{item.name}</Text>
                    <Text style = {styles.catergoryStyle}>{item.category}</Text>
                    <Text />
                    <View style = {styles.separatorStyle} />
                    <Text></Text>
                    <View style = {styles.listItemBottomContainer}>
                        <Text style = {styles.headingsTextSmall} >
                            <Text>Duration : </Text>
                            <Text style = {styles.durationVal} > {item.duration} </Text>
                        </Text>
                    </View>
                    
                </View> 
            </View>
            </TouchableOpacity>
        )
    }
    renderVideosList = () => {
        return(
            <FlatList 
            scrollsToTop = {false}
            data = {this.state.videosData}
            extraData={this.state}
            renderItem={({item,index}) =>
                <CustomListItem
                 content = {<this.ListItem item = {item} index = {index}/>}
                 />
            }
            keyExtractor={item => item.url}
            /> 
        )
    }
    render () {
        return(
            <View style = {styles.container}>
                <View style = {styles.topBar}>
                    <TopComponent
                        heading = "Training Videos"
                    />
                </View>
                <View style = {styles.emptyArea}/>
                <View style = {styles.searchArea}>
                    <View style = {styles.searchAreaContent}>
                        <TextInput
                            style = {styles.searchInput}
                            placeholder = "Search Videos"
                            onChangeText = {(text) => this.searchFilterFunction(text)}
                        />
                        <TouchableOpacity>
                        <View style = {styles.filterIconContainer}>
                            <Image style = {styles.filerIcon} source = {(require('../assets/Common/FilterIcon/filterCopy3x.png'))} />
                            <Text style = {styles.filterText}>Filter</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.headingTextContainer}>
                    <Text style = {styles.headingText}>Popular Videos</Text>
                </View>
                <View style = {styles.listContainer}>
                    <this.renderVideosList />
                </View>
                {this.props.loadingVideos ? <CustomPopup
                    type = {PopupType.Loading}
                    loadingText = "Getting videos list"
                    popupOpen = {this.props.loadingVideos}
                /> : null }
            </View>
        )
    }
}
const mapStateToProps = state => {
    this.arrayHolder = state.videoData.data
    return{
        loadingVideos : state.videoData.loadingData,
        videosData : state.videoData.data,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onGetAllVideos:() => 
            dispatch(getAllVideos())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Training)

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fafbfd"
    },
    topBar : {
        flex : 0.11,
    },
    emptyArea : {
        flex : 0.006,
    },
    searchArea : {
        flex : 0.09,
        backgroundColor : "#fff",
        justifyContent : 'center',
        alignItems : "center"
    },
    searchAreaContent: {
        width : window.width * 0.85,
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row'
    },
    searchInput : {
        width: WScale(266),
        height: WScale(37),
        borderRadius: WScale(18.6),
        borderStyle: "solid",
        borderWidth: WScale(1),
        borderColor: "#e8e8e8",
    },
    filterText : {
        width: WScale(36),
        height: WScale(20),
        fontFamily: "Avenir",
        fontSize: WScale(15),
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4a90e2",
        marginLeft : WScale(3)
    },
    filerIcon : {
        width: WScale(14),
        height: WScale(13)
    },
    filterIconContainer : {
        marginLeft : WScale(20),
        flexDirection : 'row',
        alignItems : 'center'

    },
    headingTextContainer : {
        flex : 0.08,
        justifyContent : 'flex-end',
        alignItems : 'center'
    },
    headingText : {
        width : window.width * 0.8,
        height: WScale(25),
        fontFamily: "Avenir",
        fontSize: WScale(18),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4a4a4a"
    },
    listContainer : {
        flex : 0.714,
        marginTop : WScale(10)
    },
    listItem : {
        width : window.width * 0.9,
        borderRadius : 10,
        height : WScale(100),
        backgroundColor : "#fff",
        shadowOffset:{  width: 2.5,  height: 2.5,  },
        shadowColor: 'black',
        backgroundColor : "#fff",
        shadowOpacity: 0.1,
        shadowRadius : 10,
        elevation : 8,
        marginTop : WScale(5),
        marginBottom : WScale(12),
        
        justifyContent : 'flex-start',
        alignItems : 'center',
        flexDirection : 'row',
    },
    imageView : {
        width : WScale(67),
        height : WScale(67),
        marginLeft : WScale(16),
        borderRadius : WScale(67)/2,
        borderWidth : 1.5,
        borderColor : "rgb(211,223,239)",
        justifyContent : 'center',
        alignItems : 'center',
    },
    
    rowItemTextContainer : {
        marginLeft : WScale(20),
        // width : '100%'
        flex : 1,
    },
    nameStyle : {
        fontSize : 16,
        color : 'rgb(166, 166, 166)'
    },
    catergoryStyle : {
        fontSize : 12,
        color : 'rgb(166, 166, 166)'
    },
    separatorStyle : {
        marginTop: 1,
        marginBottom: 1,
        backgroundColor: 'rgb(248, 248, 248)',
        width: '100%', 
        height: 1
    },
    listItemBottomContainer : {
        flexDirection : 'row',
    },
    headingsTextSmall : {
        fontFamily: "Avenir",
        fontSize: WScale(14),
        fontWeight: "300",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#a6a6a6"
    },
    durationVal : {
        width: WScale(38),
        height: WScale(16),
        fontFamily: "Avenir",
        fontSize: WScale(12),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4a4a4a"
    }
})