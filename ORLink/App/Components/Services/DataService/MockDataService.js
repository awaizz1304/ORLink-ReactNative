import HttpError from "../../HttpClient/HttpError";

class MockDataService {
    InviteMembers (members,successCallback,errorCallback){
        setTimeout(() => {
            successCallback()
        }, 2000);
    }
    SingleInvite (memberData, successCallback,errorCallback){
        setTimeout(() => {
            successCallback()
        }, 2000);
    }
    CreateTeam (teamData , successCallback , errorCallback){
        setTimeout(() => {
            date = new Date()
            successCallback(date)
        }, 2000);
    }
    
}
export default MockDataService