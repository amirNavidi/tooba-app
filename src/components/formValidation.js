export function loginValidation (data){
    const errors={
        
    }
    
    if(!data.username.trim()){
        errors.username="نام کاربری خود را وارد نمایید ";
    }
    else if(data.username){
       delete errors.username;
    }
  
    if(!data.password){
        errors.password="پسورد را وارد نمایید "
    }
    else if(data.password.length <4){
        errors.password="پسورد نباید زیر 4 حرف باشد "
    }
    else{
        delete errors.password;
    }
    return errors;

}