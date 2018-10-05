import DefaultPreference from 'react-native-default-preference';
import Storage from "react-native-key-value-store";
import { AsyncStorage } from "react-native";

class SharedPrefences {
    SaveValueForKey (key,value) {
        AsyncStorage.setItem(key,value)
    }
    GetValueForKey (key,responseCallBack){
        AsyncStorage.getItem(key,(err,result)=>{
            if(result == undefined){
                result = null
            }
            responseCallBack(result)
        })
    }
}
export default SharedPrefences;