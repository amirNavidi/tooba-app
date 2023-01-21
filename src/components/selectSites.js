 export function siteGroup(data){
  
    let mainData =[];
    if (data==="ToobaMode"){
         mainData=["digiKala","digiStyle"];
    }else if(data==="ToobaGold"){
        mainData= ["DigiZargar","IranTimer","KanzWatch","Javeheiran"];
    }

    return mainData
}