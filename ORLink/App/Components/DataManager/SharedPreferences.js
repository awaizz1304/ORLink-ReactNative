
import { AsyncStorage } from "react-native";

class SharedPrefences {
    SaveValueForKey (key,value) {
        AsyncStorage.setItem(key,value)
    }
    GetValueForKey (key,responseCallBack){
        AsyncStorage.getItem(key,(err,result)=>{
            if(result == undefined || result == ""){
                result = null
            }
            responseCallBack(result)
        })
    }
}
export default SharedPrefences;