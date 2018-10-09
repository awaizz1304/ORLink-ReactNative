
import { AsyncStorage } from "react-native";

class SharedPrefences {
    // Used for saving value.
    SaveValueForKey (key,value) {
        AsyncStorage.setItem(key,value)
    }
    // Used for fetching value.
    GetValueForKey (key,responseCallBack){
        AsyncStorage.getItem(key,(err,result)=>{
            if(result == undefined || result == ""){
                result = null
            }
            responseCallBack(result)
        })
    }
    // Removes a traget key.
    RemoveKey(key){
        AsyncStorage.removeItem(key)
    }
    // Removes all the data.
    RemoveAll(){
        AsyncStorage.clear()
    }
}
export default SharedPrefences;