import React,{useRef,useState } from 'react';
import {FaChevronDown ,FaCopy} from 'react-icons/fa'
import { siteGroup } from './selectSites';
import styles from "../css/csv.module.css"
import { products } from './selectProducts';
import {CopyToClipboard} from 'react-copy-to-clipboard'
import Multiselect from 'multiselect-react-dropdown';
import Radium from 'radium'



const CSV = () => {
  
    let select =useRef(null);
    let webSite =useRef(null);
    let csvParent =useRef(null);
    let options=["ToobaMode","ToobaGold","ToobaCraft","ToobaHome"];
    let [show ,setShow] =useState(false);
    let isShown =()=>{
        setShow(true) 
    }
    let [getOption,setGetOption] =useState("")
    let  optionSelect = (ev)=>{
          setGetOption((select.current.value=ev));  
          setBoxSite(true);
    }  
    let newData=siteGroup(getOption);

    // write webSite name
    let selectP=(ev)=>{
        document.getElementById("siteName").innerText=`https:/www.${webSite.current.value=ev}.com`
        setShowSiteName(false)
        setBoxSite(!(boxSite))
        
    }
    let [boxSite ,setBoxSite] =useState(false);
    let [showSiteName ,setShowSiteName]=useState(false)
  

    let [siteName ,setSitename]=useState(false)
  
    let siteNameFunc=()=>{
        setSitename(true)
    }
 

    let [addSite,setAddSite] =useState("")
    let addSiteName =(ev)=>{
         setAddSite(ev.target.value)
    }

// 
    let[under ,setUnder] =useState(false)
    let btnHandler=(ev)=>{
         ev.preventDefault();
         let trueVal =/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/

         if(trueVal.test(addSite)){
            setUnder(!(under))
         }
    }

    // group
    let [showProduct ,setShowProduct] =useState(false);
    let [groupMap,setGroupMap] =useState("")
    let groupFunc=products(groupMap)
    let getProduct =(ev)=>{
        group.current.value=ev;
        setGroupMap(group.current.value=ev)
        console.log(groupFunc);
        setShowProduct(false)
    }
    let eShowProduct =()=>{
        setShowProduct(!showProduct)
    }
    let groups=["jewellery" ,"stones" ,"gold", "silver" ,"watch"]
    let group =useRef(null);

   //  kind

   let kind=useRef(null)
   let kindSelect=(ev)=>{
      kind.current.value=ev
   }
    let[kindSh ,setKindSh]=useState(true);
    let kindShow=()=>{
        setKindSh(!kindSh)
    }
    // gender
    let gender=["Men" ,"Women" ,"Boys" ,"Girls" ,"Cuoples"];
    let [getGender ,setGetGender] =useState(false)
    let genderShow =()=>{setGetGender(!getGender)}
    let genderRef=useRef(null);
    let setGender=(ev)=>{
        genderRef.current.value=ev
        setGetGender(false)
    }
    // copy
    let copyCase =useRef(null)
    let [copy ,setCopy]= useState("")

    let copyFunc = async()=>{
      setCopy(await(copyCase.current.innerText))
      console.log(copy);
    }

    let [copyTxt ,setCopyTxt] =useState("")
    let copyTxtFunc =()=>{
        setCopyTxt("کپی شد")
    }
    let clearCopyTxt =()=>{
        setCopyTxt("")
    }


    //checkBox
    
    
    // restart
    let[copyShow ,setCopyShow] =useState(false);
    let copyShowFunc =()=>{
        setCopyShow(!copyShow);
        csvParent.current.style.overflowY="scroll"
    }
    let restartFunc=()=>{
        setBoxSite(false);
        setShow(false) 
        setShowSiteName(false)
        setSitename(false)
        setUnder(false)
        setShowProduct(false)
        setKindSh(false)
        setGetGender(false)
        setCopyShow(false)
        webSite.current.value=""
        
    }


    
    return (
        <div ref={csvParent} className={styles.csvParent}>

            <div className={styles.innerParent}>
                <header >
                    <p>  دریافت فایل CSV</p>
                </header>

                    <p className={styles.chooseWeb}><span className="faNumber" >1-</span>انتخاب وبسایت</p>
                <div className={`d-flex justify-content-around ${styles.groupParent}`}>
                  <div className={`d-flex justify-content-around ${styles.select}`}>
                        <p className={`col-lg-4 ${styles.pSelect}`}>انتخاب دسته کلی</p>
                    <div className={`d-flex  col-md-6 col-lg-6   ${styles.selectItem}`}>
                            <input id="select" readOnly style={{position :"relative"}}  name="select" ref={select} type="text"/>
                            <span onClick={isShown}><FaChevronDown /></span>
                            <div className={` ${styles.optionParent}`} onMouseLeave={()=>setShow(false)} style={{display:`${show ? "flex" :"none"}`}}> 
                                 {options.map(item=><p className={styles.pValue} key={item} onClick={()=>optionSelect(item)}>{item}</p>)}
                            </div>
                    </div>
                   </div>
                    <div className={`d-flex justify-content-around ${styles.parentSelect}`}>
                        <p className={`col-lg-4 ${styles.pSelect}`}>انتخاب وبسایت</p>
                    <div className={`d-flex  col-md-6 col-lg-6   ${styles.selectItem}`} > 
                        <input id="select" readOnly className={ `col-lg-12 ${styles.zInd}`}  name="select" ref={webSite} type="text"/>
                        <div className={styles.showVal} onClick={siteNameFunc} style={{visibility :boxSite ?"visible" :"hidden" ,border :newData[1] ?"1px solid " :"none"}}  id="showVal">
                              {Object.values(newData).map(i=> <p className={styles.pValue}  key={i} onClick={()=>selectP(i)}>{i}</p>)}
                        </div>
                      </div>  
                    </div>

                    <div className={`d-flex justify-content-around col-lg-4 ${styles.writeSiteName}`}  style={{visibility :siteName ?"visible" :"hidden"}} >
                        <p>لینک وبسایت</p>
                        <p className={styles.siteName} id="siteName" ></p>
                    </div>
                  
                </div>
                <div className={styles.siteName} >
                    <div className={`d-flex  ${styles.titleParent}`} style={{visibility :siteName ?"visible" :'hidden'}}>
                      <span >2-</span> <p className={styles.title}>افزودن لینک سایت ها</p>
                    </div>
                    <div className={`d-flex ${styles.addLink}`} style={{visibility :siteName ?"visible" :'hidden'}}>
                        <p className='col-md-3 col-lg-2' >  افزودن لینک وبسایت مورد نظر</p>
                        <input type="text"  className={`col-md-4 col-lg-8 ${styles.addLinkINP}`} value={addSite} onChange={addSiteName}/>
                        <button onClick={btnHandler} className={`col-md-1 ${styles.submitBtn}`} >ثبت</button>
                    </div>
                    <p className={styles.alarm} style={{visibility :siteName ?"visible" :'hidden'}} >لینک صفحه را حتما براي صفحه دوم در این قسمت کپی کنید.</p>
                    <div style={{visibility :under ?"visible" :'hidden'}} className={`d-flex flex-column ${styles.productGroup}`}>
                         <div className={`d-flex justify-content-between`}>
                         <div className={`d-flex col-5 ${styles.productParent}`}>
                            <p className='col-5 col-md-4'>دسته بندی محصول</p> 
                        <div className={`col-6 ${styles.inpParent}`}>
                            <input type="text" readOnly className={` ${styles.pInput}`} ref={group}/>
                            <span className={styles.pSpan} onClick={eShowProduct}  ><FaChevronDown /></span>
                            <div className={`d-flex flex-column ${styles.pProduct}`} style={{visibility :showProduct ? "visible" :"hidden"}}>
                            {groups.map(item  =>{
                              return  <p onClick={()=>getProduct(item)} key={item}>{item}</p>
                            })}
                            </div>
                        </div>
                        </div>
                        <div className={`d-flex  col-5  `} >
                            <p className='col-4 col-md-3'>نوع محصول</p>
                             <div className={`col-6 ${styles.kindParent}`}>
                                <div className='col-12'>
                                   <input readOnly className='col-12' ref={kind}  type="text"/>
                                </div>
                                <div onClick={kindShow} style={{visibility :kindSh ?"visible" :"hidden" , border:groupFunc[1]?"1px solid" :"none"}} className={`d-flex flex-column ${styles.kind}`}>
                                    {
                                        Object.values(groupFunc).map(item =><p onClick={()=>kindSelect(item)} key={item}> {item}</p>)
                                    }
                                </div>
                             </div>
                            
                        </div>
                        
                         </div>
                        <div className={`d-flex  flex-column ${styles.productGroup}`}>
                        <div className={`d-flex flex-wrap justify-content-between`}>
                          <div className='d-flex  col-6 col-md-5'>
                                <p className={`col-4  ${styles.gender}`} > جنسیت </p>
                                <div className={`d-flex col-6 ${styles.genderInp}`}>
                                    <input  ref={genderRef} readOnly className='col-12' type="text"/>
                                    <div className={styles.gendetSelect} style={{visibility :getGender ?"visible" :"hidden" }}>
                                        {gender.map(item => <p onClick={()=>setGender(item)} key={item}>{item}</p>)}
                                    </div>
                                    <span onClick={genderShow}><FaChevronDown/></span>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between col-12 col-md-5'>
                                <div className='d-flex col-12 ' >
                                    <p className={`col-2 col-md-3 ${styles.kindB}`}>نوع بیزینس</p>
                                    <div className={`d-flex col-6 ${styles.businesInp}`} >
                                    <input readOnly className={`col-12 ${styles.busines} ` } type="text"/>
                                    {
                                        <div className={`d-flex flex-column ${styles.businesParent}`}>
                                            
                                                <Multiselect
                                                displayValue="key"
                                                onKeyPressFn={function noRefCheck(){}}
                                                onRemove={function noRefCheck(){}}
                                                onSearch={function noRefCheck(){}}
                                                onSelect={function noRefCheck(){}}
                                                options={[
                                                    {
                                                    key: 'E-commercs'
                                                    },
                                                    {

                                                    key: 'Instagram'
                                                    },
                                                    {

                                                    key: 'Physical-shop'
                                                    }

                                                ]}
                                                showCheckbox
                                                placeholder=" "
                                                style={{
                                                  chips: {
                                                    width:'0',
                                                    color:'black',
                                                    fontSize:'12px',
                                                
                                                    backgroundColor:"white"
                                                
                                                  },
                                                  multiselectContainer: {
                                                    zIndex:'99',
                                                    position: 'relative',
                                                    height:'40px',
                                
                                                  },
                                                  searchBox: {
                                                    border: '1px solid',
                                                    borderRadius: '10px',
                                                    height:'40px',
                                                    
                                                    display: "flex",
                                                    position: "relative",
                                                    zIndex:'230'

                                            
                                                  },
                                                optionContainer: { // To change css for option container 
                                                    border: "1px solid",
                                                    borderTop:"none",
                                                    marginTop:"-10px"
                                                 
                                                  }
                                                }}
                                                />
                                        </div>
                                    }
                                    <span onSelect={function noRefCheck(){}} className={styles.bisIcon}><FaChevronDown/></span>
                                    </div>
                                </div>
                            </div>
                         </div>
                        </div>

                        <div className={`d-flex flex-column mt-3 ${styles.productGroup}`}>
                          <div className={`d-flex justify-content-between`}>
                          <div className='d-flex col-xl-5'>
                                <p className='col-4'>  نام پارامتر صفحه </p>
                                <input readOnly className={` col-5 col-xl-3 ${styles.parameterInp}`} value="pages" type="text"/>
                            </div>
                            <div className='d-flex col-6 col-md-5'>
                                <p className='col-3'>تعداد صفحات </p>
                                <input readOnly className={`col-5 col-xl-3 ${styles.littleINp}`} value="100" type="text"/>
                            </div>
                         </div>
                        </div>

                        <div className={`col-12 ${styles.csvBtnParent}`}><button onClick={copyShowFunc}  className={`col-2 col-md-1 ${styles.csvBtn}`}>تولید csv</button></div>
                     
                     <div style={{visibility :copyShow ?"visible" :"hidden"}} className={`col-12 ${styles.copyParent}`}>
                         <CopyToClipboard text={copy} >
                        <div onMouseLeave={clearCopyTxt} onClick={copyTxtFunc} className={` d-flex col-lg2 ${styles.copyIcon}`}>
                            <span onClick={copyFunc}><FaCopy /></span>
                            <p>کپی</p>
                            <span className={styles.copyTxt}>{copyTxt}</span></div>
                        </CopyToClipboard>
                        <div id="copyTxt" readOnly defaultValue="hi" className={`${styles.copyText}`} ref={copyCase}>
                         </div>
                     </div>

                     <button className={`col-lg-2 col-md-4 ${styles.reStart}`  }  style={{visibility :copyShow ?"visible" :"hidden"}} onClick={restartFunc}>شروع مجدد</button>
                    </div>

                </div>
               
            </div>
     
           
        </div>
    );
                                
};

export default Radium(CSV);