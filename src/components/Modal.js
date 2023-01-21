import React from 'react';

import styles from "../css/modal.module.css"



const Modal = (props) => {
    

    let modalShow =()=>{
        
            props.setmod(!props.mod)
        
    }

    
    
    
if(props.prop){
    return (
        <div>
            <div style={{display:props.mod ? "block" :"none"}}>
                <div className={`d-flex justify-content-center align-items-center  ${styles.moduleParent}`}>
                    <div className={`${styles.modal}`} >
                        <div className={`d-flex ${styles.modalHeader}`}>
                        <p>پیام</p>
                        </div>
                        <p className={`d-flex align-items-center ${styles.modalBody}`}>
                            اطلاعات با موفقیت ثبت گردید.
                        </p>
                        <div className={`col-12 d-flex align-items-center ${styles.modalFooter}`}>
                            <button className='col-lg-5 col-12' onClick={modalShow} >تایید</button>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
}
};

export default Modal;