import HttpError from "../../HttpClient/HttpError";
import VideoDataModel from '../../../Components/Services/DataService/DataModels/VideoDataModel';
import TeamDataModel from './DataModels/TeamDataModel'
import { formatDate } from "../../Utilities/Utilities";
import TeamMemberDataModel, { InviteStatus } from "./DataModels/TeamMemberDataModel"

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
            date = formatDate(new Date())
            teamData.creationTime = date
            successCallback(teamData)
        }, 2000);
    }
    GetVideosData (successCallback,errorCallback) {
        videosData = []

        videoData = new VideoDataModel()
        videoData.name = "AngioPlasty"
        videoData.category = "Heart Operation"
        videoData.url = 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'
        videoData.duration = "2.2 Hrs"
        videoData.description = "During your angioplasty, a doctor inserts a thin tube called a catheter into a blood vessel in your groin or wrist. The catheter is pushed through your blood vessel to a blocked area in one of your heart’s arteries. The doctor inflates a tiny balloon at the tip of the catheter and stretches the blocked vessel so blood can flow freely. The balloon is then deflated and removed with the catheter. The doctor may also insert a metal mesh tube called a stent in the blocked vessel. The stent helps the vessel stay open. You may get several stents if you have blockages in more than one of your arteries."
        
        videosData.push(videoData)

        videoData = new VideoDataModel()
        videoData.name = "AngioPlasty"
        videoData.category = "Heart Operation"
        videoData.url = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        videoData.duration = "2.2 Hrs"
        videoData.description = "During your angioplasty, a doctor inserts a thin tube called a catheter into a blood vessel in your groin or wrist. The catheter is pushed through your blood vessel to a blocked area in one of your heart’s arteries. The doctor inflates a tiny balloon at the tip of the catheter and stretches the blocked vessel so blood can flow freely. The balloon is then deflated and removed with the catheter. The doctor may also insert a metal mesh tube called a stent in the blocked vessel. The stent helps the vessel stay open. You may get several stents if you have blockages in more than one of your arteries."

        videosData.push(videoData)

        setTimeout(() => {
            successCallback(videosData)
        },2000)
    }
    GetAllTeams (successCallback,errorCallback) {
        teamsList = []
        membersList = []

        memberData = new TeamMemberDataModel()
        memberData.name = "Harry Kane"
        memberData.email = "harrykane@example.com"
        memberData.inviteStatus = InviteStatus.Accepted
        memberData.role = "CMO"
        memberData.addAsAdmin = true
        membersList.push(memberData)

        memberData = new TeamMemberDataModel()
        memberData.name = "Harry Kane"
        memberData.email = "harrykane@example1.com"
        memberData.inviteStatus = InviteStatus.Pending
        memberData.role = "CMO"
        memberData.addAsAdmin = false
        membersList.push(memberData)

        memberData = new TeamMemberDataModel()
        memberData.name = "Harry Kane"
        memberData.email = "harrykane@example2.com"
        memberData.inviteStatus = InviteStatus.Accepted
        memberData.role = "CMO"
        memberData.addAsAdmin = true
        membersList.push(memberData)

        
        teamData = new TeamDataModel()
        teamData.name = "Red cross hospital docs"
        teamData.creationTime = formatDate(new Date)
        teamData.createdBy = "Dr.Emre Can"
        teamData.id = "1"
        teamData.members = membersList
        teamsList.push(teamData)

        teamData = new TeamDataModel()
        teamData.name = "Operation rockers"
        teamData.creationTime = formatDate(new Date)
        teamData.createdBy = "Dr.Awais"
        teamData.members = membersList
        teamData.id = "2"
        teamsList.push(teamData)

        teamData = new TeamDataModel()
        teamData.name = "Red cross hospital docs"
        teamData.creationTime = formatDate(new Date)
        teamData.createdBy = "Dr.Emre Can"
        teamData.id = "3"
        teamData.members = membersList
        teamsList.push(teamData)

        setTimeout(()=>{
            successCallback(teamsList)
        },2000)
    }
    
}
export default MockDataService