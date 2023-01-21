import React ,{useState ,useEffect} from 'react';
import { Route ,Routes , Link} from 'react-router-dom';
import Login from './components/Login';
import  "./css/main.css"
import Dashboard from "./components/Dashboard"
import CSV from "./components/CSV"
import AddSite from './components/AddSite';
import {FaMeteor} from 'react-icons/fa'
import {FaQuestionCircle} from 'react-icons/fa'
import styles from "./css/body.module.css"
import logo from "./Logo/toobatech-logo2.png"
import Logo from "./Logo/ToobaVision - Logo.png"


const App = () => {

  useEffect(()=>{
    document.title="tooba vision";
    // alert("نام کاربری و رمز عبور=admin")
  })
  // hamburger menue

  let[ hamber ,setHamber] =useState(false)
  let changeHmaber=()=>{
    setHamber(!hamber)
  }

  // option select
  let [dashboardOpt ,setDashboardOpt] =useState(false);
  let dashOptFunc=()=>{
     setDashboardOpt(true)
     setCsvOpt(false)
     setAddSitOpt(false)

  }

  let [csvOpt ,setCsvOpt] =useState(false);
  let csvOptFunc=()=>{
    setCsvOpt(true)
    setDashboardOpt(false)
    setAddSitOpt(false)
  }

  let [addSiteOpt ,setAddSitOpt]=useState(false);
  let addSiteOptFunc=()=>{
    setAddSitOpt(true)
    setCsvOpt(false)
    setDashboardOpt(false)
  }

  return (
    <main dir="rtl">
  
        <div>
        <Routes>
                  <Route path='/' element={<Login/>}/>
        </Routes>
        <div className={`d-flex ${styles.mainParent}`} >
           <div className={styles.sideParent} style={{right: hamber ?"-100%" :"0%" }}>
            <div className={styles.logoParent}>
                <img src={Logo} alt="logo" />
            </div>
            <ul>
                <div className={styles.navItem} >
                  <li className='d-flex itemParent' onClick={dashOptFunc} style={{backgroundColor:dashboardOpt ?"#5f599d" :"transparent"}} >
                  <i className='bi bi-menu-button-fill'></i><Link  to="/dashboard"  className='option'>داشبورد</Link>
                  </li>
                  </div>
                <div className={styles.navItem} >
                  <li className='d-flex itemParent 'onClick={csvOptFunc} style={{backgroundColor:csvOpt ?"#5f599d" :"transparent"}} >
                    <i className='bi bi-filetype-csv'></i><Link  to="/csv"   className='option'>دریافت فایل CVS</Link>
                  </li>
                  </div>
                <div className={styles.navItem}>
                  <li className='d-flex itemParent'onClick={addSiteOptFunc} style={{backgroundColor:addSiteOpt ?"#5f599d" :"transparent"}}>
                    <i className="bi bi-window"></i><Link  to="/addsite"   className='option'> افزودن سایت جدید</Link>
                  </li>
                  </div>
            </ul>
              
           </div> 
            <div className={styles.leftParent}>
            <div className={` ${styles.hamberParent}`}  onClick={changeHmaber} >
                  <span style={{border:hamber ?"2px solid black" :"2px solid white"}}></span>
                  <span style={{border:hamber ?"2px solid black" :"2px solid white"}}></span>
                  <span style={{border:hamber ?"2px solid black" :"2px solid white"}}></span>
                </div>
              <header className={styles.header}>
                 <p className={styles.officeName}>
                    پورتال طوبی ویژن
                 </p>
                 <div className={styles.icons}>
                    <i className={`${styles.icon} bi bi-question-circle-fill` }> </i>
                    <i className={`${styles.icon} bi bi-person-fill` }></i>
                    <span className='user1'>امیر نویدی</span>
                 </div>
              </header>
         
              <div className={styles.board}>
                <Routes>
                  <Route path='/dashboard' element={<Dashboard />}/>
                  <Route path='/csv' element={<CSV />}/>
                  <Route path='/addsite' element={<AddSite />}/>
                </Routes>
              </div>
              <footer>
               <img src={logo} alt="logo" /> <span>Powered by ToobaTech</span>
              </footer>
            </div>
          </div>
        </div>

      
    </main >
  );
};

export default App;