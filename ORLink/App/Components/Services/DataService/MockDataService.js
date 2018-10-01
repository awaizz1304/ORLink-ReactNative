import HttpError from "../../HttpClient/HttpError";
import ReferralsData from "./DataModels/ReferralsData";
import RewardsDataModel from "./DataModels/RewardsDataModel";

class MockDataService {
    
    getDashboardRecords(type,successCallBack,errorCallBack){
        listOfData = []
        setTimeout(() => {
            successCallBack(listOfData)
        }, 2000);
    }
    
    referFriend(referDataModel,successCallBack,errorCallBack){
        setTimeout(() => {
            successCallBack()
        },2000)
    }
    getRewards(successCallBack,errorCallBack){
        listOfData = []
        setTimeout(() => {
            successCallBack(listOfData)
        },2000)
    }
}
export default MockDataService