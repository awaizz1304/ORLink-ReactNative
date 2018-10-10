export const InviteType = {
    InviteViaEmail : "Email Invite",
    InviteViaPhone : "Phone Invite"
}

class MemberInviteDataModel {
    id = "";
    name = "";
    email = "";
    phoneNumber = "";
    inviteType = InviteType.InviteViaEmail;
    addAsAdmin = false;
}
export default MemberInviteDataModel