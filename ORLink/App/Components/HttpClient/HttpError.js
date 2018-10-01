const HttpError {
    code = 0;
    description = "";

    HttpError(_code,_description){
        code = _code;
        description = _description;
    }
    
    getErrorMessage(){
        return this.description
    }
}
export default HttpError;