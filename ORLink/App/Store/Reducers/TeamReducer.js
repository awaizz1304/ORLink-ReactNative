import { CreatingTeam, TeamCreationSuccess, TeamCreationFailure, InvitingMembers, InvitingMembersSuccess, InvitingSigleMemberSuccess, InvitingMembersFailure, InvitingSingleMember, GettingTeamsList, TeamListFetchSuccess, TeamListFetchFailure } from "../../Components/Common/Constants";
const TeamState = {
    creatingTeam : false,
    invitingMembers : false,
    invitingSingleMember : false,
    teamData : null,
    membersData : null,
    memberData : null,
    error : null,
    loadingTeams : false,
    teamsList : null,
    teamListError : null,
}

const teamDataReducer = (state=TeamState,action) => 
{
    switch (action.type) {
        case CreatingTeam : 
            return{
                ...state,
                creatingTeam : action.payload.creatingTeam
            }
        case TeamCreationSuccess : 
            return{
                ...state,
                creatingTeam : action.payload.creatingTeam,
                teamData : action.payload.teamData
            }
        case TeamCreationFailure : 
            return{
                ...state,
                creatingTeam : action.payload.creatingTeam,
                error : action.payload.error
            }
        case InvitingMembers : 
            return{
                ...state,
                invitingMembers : action.payload.invitingMembers,
                membersData : action.payload.membersData
            }
        case InvitingMembersSuccess : 
            return{
                ...state,
                invitingMembers : action.payload.invitingMembers,
                membersData : action.payload.membersData
            }
        case InvitingMembersFailure : 
            return{
                ...state,
                invitingMembers : action.payload.invitingMembers,
                error : action.payload.error
            }
        case InvitingSingleMember : 
            return{
                ...state,
                invitingSingleMember : action.payload.sendingSingleInvite
            }
        case InvitingSigleMemberSuccess : 
            return{
                ...state,
                invitingSingleMember : action.payload.sendingSingleInvite,
                memberData : action.payload.memberData
            }
        case InvitingSigleMemberSuccess : 
            return{
                ...state,
                invitingSingleMember : action.payload.sendingSingleInvite,
                error : action.payload.error
            }
        case GettingTeamsList : {
            return{
                ...state,
                loadingTeams : action.payload.requestingTeamsList,
                teamsList : action.payload.teamsList,
                teamListError : action.payload.error,
            }
        }
        case TeamListFetchSuccess : {
            return{
                ...state,
                loadingTeams : action.payload.requestingTeamsList,
                teamsList : action.payload.teamsList,
                teamListError : action.payload.error,
            }
        }
        case TeamListFetchFailure : {
            return{
                ...state,
                loadingTeams : action.payload.requestingTeamsList,
                teamsList : action.payload.teamsList,
                teamListError : action.payload.error,
            }
        }
        default :
            return state
    }
}
export default teamDataReducer