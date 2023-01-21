import React ,{useState ,useRef} from 'react';
import styles from "../css/addSite.module.css"
import {FaChevronDown} from 'react-icons/fa'
import Modal from './Modal';





const AddSite = () => {
    let options=["ToobaMode","ToobaGold","ToobaCraft","ToobaHome"];
    let input =useRef(null)
    let [active ,setActive] =useState(false);
    let [web ,setWeb] =useState("");
    let [persian ,setPersian] =useState("");
    let [en ,setEn]=useState("");
    let [tValue ,setTValue] =useState(false);
    let [eValue ,setEValue] =useState(false);
    let [pValue ,setPValue] =useState(false);



    let showVal =()=>{
        setActive(!(active))
    }
    //  select input 
    let setVal=(ev)=>{
       input.current.value=ev;
    }

    // address input
    let fillVal =(ev)=>{
        setWeb(ev.target.value);
        console.log(active);
    }

    let valChecker=()=>{
      let trueVal =/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/
        
        if(trueVal.test(web)){
              
                   document.getElementById("err").innerText=""
                   setTValue(true)
                   

        }else{
            document.getElementById("err").innerText="لطفا آدرس معتبر وارد کنید"
        }


    }

    // persian web name 
    let persianVal =(ev)=>{
       setPersian(ev.target.value);
    }
    let persianChecker =()=>{
      
       let p =/^[\u0600-\u06FF\s]+$/
        if(p.test(persian)){
          document.getElementById("pErr").innerText=""
          setPValue(true);
        
        }else{
            document.getElementById("pErr").innerText="مقدار فارسی وارد نمایید"
        }
    }

    //  En web name

    let enVal=(ev)=>{
        setEn(ev.target.value);
    }

    let enChecker =() =>{
      
       let  e =/^[A-Z]/
        if(e.test(en)){
            
            document.getElementById("enErr").style.color="black"
            setEValue(true)
         
        }else{
            document.getElementById("enErr").style.color="red"
        }
    }

    // modal
    let [modal ,setModal] =useState(false);
    let modalFunc =()=>{
      if(tValue & pValue & eValue){
        setModal(true)
      }
      else{
        setModal(false)
      }
    
    }


    return (
        <>
        <div className={styles.addSiteParent}>
            
            <div className={styles.innerParent}>
                <header >
                  <p>افزودن وبسایت جدید</p>
               </header>
               <div className={styles.body}>

                {/* select */}
                  <div className={`${styles.selectParent}`}>
                    <div className={`d-flex align-content-center col-12${styles.fullSelect}`}>
                            <p className='col-2 '>انتخاب دسته کلی</p>
                        <div className={`d-flex flex-column col-lg-2 ${styles.allGroup}`}>
                            <input id="select" className={styles.selectItem} name="select" ref={input} type="text"/>
                            <span onClick={showVal} style={{display:`${active ? "none" :"inline"}`}}><FaChevronDown className={styles.chevron} /></span>
                            <div className={styles.optionParent} onClick={()=>setActive(false)} style={{display:`${active ? "flex" :"none"}`}}>
                                {options.map(item =>{return <p onClick={()=>setVal(item)}  key={(item)}>{item}</p>})}
                           </div>
                        </div>
                    </div>
                 </div>

                 {/* address */}
                  <div className={` ${styles.addressParent}`}>
                  <div className={`d-flex align-content-center col-12  ${styles.fullSelect}`}>
                             <p className='col-2'>ورود لینک وبسایت</p>
                        <div className={`d-flex flex-column col-lg-3 ${styles.errParent}`}>
                            <input type="text"  name="webAddress" value={web} onBlur={valChecker} onChange={fillVal}/><br/>
                        </div>
                            <span id="err" className={styles.err}></span>
                   </div>
                  </div>

                  {/* pesian webName */}
                  <div className={` ${styles.persianParent}`}>
                  <div className={`d-flex align-content-center col-12${styles.fullSelect}`}>
                             <p className='col-2'>نام فارسی وبسایت</p>
                        <div className={`d-flex flex-column col-lg-2 ${styles.allGroup}`}>
                            <input type="text"  className={styles.faInp} name="webAddress" value={persian} onBlur={persianChecker} onChange={persianVal}/><br/>
                        </div>
                            <span id="pErr" className={styles.pErr}></span>
                 </div>
                   
                  </div>

                  {/* EN webName */}
                  <div className={`d-flex${styles.enParent}`}>
                    <div className={`d-flex align-content-center col-12 ${styles.fullSelect}`}>
                             <p className='col-2'>نام انگلیسی وبسایت</p>
                            <div className={`d-flex flex-column col-lg-2 ${styles.allGroup}`}>
                                <input type="text" className={styles.Inp}  name="webAddress" value={en} onBlur={enChecker} onChange={enVal}/><br/>
                            </div>
                    </div>   
                  </div>
                 <span id="enErr" className={` ${styles.hint}`}>نام انگلیسی وبسایت باید با حرف بزرگ شروع شود.</span>
                  <div>
                    <button className={` ${styles.save}`} onClick={modalFunc}  type='submit'>ثبت وبسایت</button>
                  </div>
               </div>
            </div>
        </div>
        <Modal prop={modal}  setmod={setModal} mod={modal} />
        </>

    );
};

export default AddSite;