import React ,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {loginValidation} from "./formValidation.js"
import styles from "../css/login.module.css"
import Logo from "../Logo/ToobaVision - Logo.png"
import Logo2 from "../Logo/toobatech -logoW.png"



const Login = () => {

  
  
  let [data ,setData]=useState({
    username:"",
    password:"",
  });
  let [touch ,setTouch]=useState({
    username:false,
    password:false,
  })
  
  useEffect(()=>{setErrors(loginValidation(data))},[data])


  let changeHandler=(ev)=>{
    console.log(data);
    setData(()=> ({...data,[ev.target.name]:ev.target.value}));


    if(errors.username && touch.username){
      userName.current.innerText=errors.username;
      userName.current.style.color="red"
      }else if(!errors.username){
        userName.current.innerText=""
      }

      if(errors.password && touch.password){
        pass.current.innerText=errors.password;
        pass.current.style.color ="red"
      }else if(!errors.password){
        pass.current.innerText =""
      }
     console.log(touch);
  
    
  }
  let focuseHandler=(ev)=>{
    setTouch(()=>({[ev.target.name]:true}))
    finallErr.current.innerText=""
   }
  const [errors ,setErrors]=useState({});
  let clickHandler=()=>{
    console.log("hi");
     if(data.username!=="admin" || data.password!=="admin"){
       console.log("now");
       finallErr.current.innerText ="نام کاربری یا رمز عبور اشتباه است"
     }else{
      
     }
  }



  let submitHandler =(ev)=>{
     ev.preventDefault();
  }

  const userName=React.createRef();
  const pass=React.createRef(null);
  const finallErr=React.createRef(null);

    return (
        <>
        
          <div className={`d-flex flex-column   align-items-center  ${styles.fullParent}`}>
            <div className={styles.imgParent}>
                <img src={Logo} alt="Logo" />
            </div>
           {/* Form */}
            <div className={`col-12 col-sm-8 col-md-6 col-lg-4 ${styles.formParent}`}>
              <h4 className='mt-3'>ورود به پورتال</h4>   
              <form method='post' className={`d-flex flex-column ${styles.form}`} onSubmit={submitHandler} >
                 <label >نام کاربری</label>
                
                 <input type="text" onChange={changeHandler} onFocus={focuseHandler} name="username"  dir="ltr" />
                 <span id="user" className={styles.hint1} ref={userName}> نام کاربری، کد  ملی شماست.</span>
                

                 <label className={styles.password}>رمز عبور</label>
                 <input type="password"  onChange={changeHandler} onFocus={focuseHandler} name="password"   dir="ltr" />
                 <span id="pass" ref={pass} className={styles.hint}>رمز عبور،نام خانوادگی شما با حرف اول بزرگ است.</span>
                 <p id="errorText" ref={finallErr}  className={styles.errorText}></p>

               
                 <button  className={styles.submit} type="submit"  >
                  <Link to={(data.username==="admin" && data.password==="admin") ? "/dashboard"  :""}  onClick={clickHandler}>ورود</Link>
                </button>
              </form>
             

            </div>   

            
            {/* Footer */}
            <footer>
              <div className={styles.footerParent}>
              <img src={Logo2} alt="logo" /><span>Powered by ToobaTech</span>
              </div>
            </footer> 
          </div>
        </>
    );
};

export default Login;