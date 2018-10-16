import HttpError from "../../HttpClient/HttpError";

class MockAuthService {
    simulateSignupError = false
    simulateLoginError = false
    Login(loginData,successCallBack,errorCallBack){
        setTimeout(() => {
            if(this.simulateLoginError){
                errorCallBack()
            }
            else{
                successCallBack()
            }
        }, 5000);
    }
    SignUp(signupData,successCallBack,errorCallBack){
        setTimeout(() => {
            if(this.simulateSignupError){
                httpError = new HttpError()
                httpError.description = "Something is wrog"
                errorCallBack(httpError)
            }
            else{
                successCallBack()
            }
        }, 5000);
    }
    ChangePassword(passwordChangeData,successCallBack,errorCallBack){
        setTimeout(()=>{
            successCallBack()
        },2000)
    }
}
export default MockAuthService