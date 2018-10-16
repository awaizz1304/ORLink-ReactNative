import { LoadingVideosData , VideosDataLoaded } from "../../../Components/Common/Constants";
const DataLoadingState = {
    loadingData : false,
    data : null
}

const videosDataReducer = (state=DataLoadingState,action) => 
{
    switch (action.type) {
        case LoadingVideosData : 
            return{
                ...state,
                loadingData : action.payload.loading
            }
        case VideosDataLoaded : 
            return{
                ...state,
                loadingData : action.payload.loading,
                data : action.payload.data
            }
        default :
            return state
    }
}
export default videosDataReducer