export const InviteType = {
    InviteViaEmail : "Email Invite",
    InviteViaPhone : "Phone Invite"
}
export const InviteStatus = {
    Pending : "P",
    Accepted : "A",
    Rejected : "R"
}
class TeamMemberDataModel {
    id = "";
    name = "";
    email = "";
    phoneNumber = "";
    inviteType = InviteType.InviteViaEmail;
    addAsAdmin = false;
    inviteStatus = InviteStatus.Pending
    role = "";
}
export default TeamMemberDataModel