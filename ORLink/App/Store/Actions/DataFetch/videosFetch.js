import { LoadingVideosData , VideosDataLoaded } from "../../../Components/Common/Constants";
import VideoDataModel from '../../../Components/Services/DataService/DataModels/VideoDataModel';
import ClientLayer from '../../../Components/Layers/ClientLayer';

export const getAllVideos = () => {
    return (dispatch) => {
        dispatch(loadingVideos(true))

        ClientLayer.getInstance().getDataService().GetVideosData((videosData)=>{
            dispatch(loadingVideosSuccess(false,videosData))
        },(error)=>{

        })
        
        // setTimeout(()=>{
        //     dispatch(loadingVideosSuccess(false,videosData))
        // },2000)
    }
}

export const loadingVideos = (loading) => {
    return{
        type : LoadingVideosData,
        payload : {loading}
    }
}

export const loadingVideosSuccess = (loading,data) => {
    return {
        type : VideosDataLoaded,
        payload : {loading,data}
    }
}
