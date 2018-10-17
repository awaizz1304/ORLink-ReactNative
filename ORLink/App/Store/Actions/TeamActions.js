import { CreatingTeam, TeamCreationSuccess, TeamCreationFailure, InvitingMembers, InvitingMembersSuccess, InvitingMembersFailure, InvitingSingleMember, InvitingSigleMemberSuccess, InvitingSingleMemberFailure, GettingTeamsList, TeamListFetchSuccess, TeamListFetchFailure } from '../../Components/Common/Constants';
import ClientLayer from '../../Components/Layers/ClientLayer'

export const initialize = () => {
    return (dispatch) =>{
        // set every thing to null
        dispatch(teamCreationResponse(false,null,null))
    }
}    
export const createTeam = (teamData) => {
    return (dispatch) => {
        dispatch(creatingTeam(true))

        ClientLayer.getInstance().getDataService().CreateTeam(teamData,(data)=>{
            dispatch(teamCreationResponse(false,data))
        },(error)=>{
            dispatch(teamCreationResponse(false,null,error))
        })
    }
}

export const IniviteTeamMembers = (membersData) => {
    return (dispatch) => {
        dispatch(invitingTeamMembers(true,null))

        ClientLayer.getInstance().getDataService().InviteMembers(membersData,()=>{
            dispatch(iniviteMembersResponse(false,1))
        },(error)=>{
            dispatch(iniviteMembersResponse(false,null,error))
        })
    }
}

export const IniviteSingleTeamMember = (memberData) => {
    return (dispatch) => {
        dispatch(invitingSingleMember(true))

        ClientLayer.getInstance().getDataService().SingleInvite(memberData,()=>{
            dispatch(inviteSingleMemberResponse(false,1))
        },(error)=>{
            dispatch(inviteSingleMemberResponse(false,null,error))
        })
    }
}

export const GetAllTeams = () => {
    return (dispatch) => {
        dispatch (gettingAllTeamsData(true))

        ClientLayer.getInstance().getDataService().GetAllTeams((teamsList)=>{
            dispatch(AllTeamsDataResponse(false,teamsList))
        },(error)=>{
            dispatch(AllTeamsDataResponse(false,null,error))
        })
        
    }
}


// Team Creation actions
export const creatingTeam = (creatingTeam) => {
    return{
        type : CreatingTeam,
        payload : {creatingTeam}
    }
}

export const teamCreationResponse = (creatingTeam,teamData=null,error=null) => {
    if(error == null){
        return {
            type : TeamCreationSuccess,
            payload : {creatingTeam,teamData}
        }
    }
    else{
        return {
            type : TeamCreationFailure,
            payload : {creatingTeam,error}
        }
    }
}
 /////
//// Invite team members actions
 export const invitingTeamMembers = (invitingMembers,membersData) => {
    return{
        type : InvitingMembers,
        payload : {invitingMembers,membersData}
    }
}

export const iniviteMembersResponse = (invitingMembers,membersData=null,error=null) => {
    if(error == null){
        return {
            type : InvitingMembersSuccess,
            payload : {invitingMembers,membersData}
        }
    }
    else{
        return {
            type : InvitingMembersFailure,
            payload : {invitingMembers,error}
        }
    }
}
////

//// Invite single member actions
export const invitingSingleMember = (sendingSingleInvite) => {
    return{
        type : InvitingSingleMember,
        payload : {sendingSingleInvite}
    }
}

export const inviteSingleMemberResponse = (sendingSingleInvite,memberData=null,error=null) => {
    if(error == null){
        return {
            type : InvitingSigleMemberSuccess,
            payload : {sendingSingleInvite,memberData}
        }
    }
    else{
        return {
            type : InvitingSingleMemberFailure,
            payload : {sendingSingleInvite,error}
        }
    }
}
////

//// Getting all teams actions
const gettingAllTeamsData = (requestingTeamsList,teamsList = null,error = null) => {
    return {
        type : GettingTeamsList,
        payload : {requestingTeamsList,teamsList,error}
    }
}
const AllTeamsDataResponse = (requestingTeamsList,teamsList,error=null) => {
    return {
        type : error == null ? TeamListFetchSuccess : TeamListFetchFailure,
        payload : {requestingTeamsList,teamsList,error}
    }
}