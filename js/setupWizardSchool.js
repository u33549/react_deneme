/* eslint-disable no-unused-vars */

function delay(delayInms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }
async function popUpAlert(state=1,comment){
    const alert=document.querySelector("body > div.main_container > div.alert");
    if(!comment){
        return;
    }
    let color;
    switch(state){
        case 1:
            color="hsl(0, 97%, 25%)";
            break
        case 2:
            color="green";  
    }
    alert.innerText=comment;
    alert.style.backgroundColor=color;
    alert.style.opacity=1;
    var delayres = await delay(5000);
    alert.style.opacity=0;
    

}


const citySelectOBJ=document.querySelector("#citySelect");
const institutionCodeOBJ=document.querySelector("#institutionCode");
const institutionNameOBJ=document.querySelector("#institutionName");
const phoneNumberOBJ=document.querySelector("#phoneNumber");
const passwordOBJ=document.querySelector("#password");
const passwordCheckOBJ=document.querySelector("#passwordCheck");

function control_citySelectOBJ(){
    if(!citySelectOBJ.value || citySelectOBJ.value=="0" ){
        popUpAlert(1,"Şehir seçimi yapılmalıdır.")
        throw new Error("NULL_CITY");
    }
    return true;
}

function control_institutionCodeOBJ(){
    let value=institutionCodeOBJ.value;
    if(!value){
        popUpAlert(1,"Kurum kodunuz doldurulmalıdır");
        throw new Error("NULL_INST_CODE");
    }
    else if(!/^\d+$/.test(value)){
        popUpAlert(1,"Kurum kodunuz sadece sayılardan oluşmalıdır.")
        throw new Error("NAN_INST_CODE");
        
    }
    else if(value.length<6){
        popUpAlert(1,"Kurum kodunuz en az 6 haneli olmalıdır.")
        throw new Error("SHORT_INST_CODE");
    }
    return true;


}

function control_institutionNameOBJ(){
    if(!institutionNameOBJ.value){
        popUpAlert(1,"Kurum adınız doldurulmalıdır")
        throw new Error("NULL_INST_NAME");
    }
    return true;
}

function control_phoneNumberOBJ(){
    let value=phoneNumberOBJ.value;
    if(!value){
        popUpAlert(1,"Telefon numaranızı doldurulmalıdır");
        throw new Error("NULL_TELL");

    }
    else if(!/^\d+$/.test(value)){
        popUpAlert(1,"Telefon numaranız sadece sayılardan oluşmalıdır.");
        throw new Error("NAN_TELL");


    }
    else if(value.length<10 || value.length>10){
        popUpAlert(1,"Telefon numaranız 10 haneli olmalıdır.");
        throw new Error("SHORT_LONG_TELL");

    }
    return true;

}


function control_passwordOBJ(){
    let value=passwordOBJ.value;

    if(!value){
        popUpAlert(1,"Sağlam bir şifre belirlemelisiniz.");
        throw new Error("NULL_PASS");
        }
    else if(value.length<8){
        popUpAlert(1,"Şifreniz en az 8 haneli olmalıdır.");
        throw new Error("SHORT_PASS");

    }
    return true;
}

function control_passwordCheckOBJ(){
    let value=passwordCheckOBJ.value;

    if(value!==passwordOBJ.value){
        popUpAlert(1,"Girdiğiniz şifreler uyuşmamaktadır.");
        throw new Error("UNMATCHED_PASS");
    }
    return true;
}

function control_App(){
    control_citySelectOBJ();
    control_institutionCodeOBJ();
    control_institutionNameOBJ();
    control_phoneNumberOBJ();
    control_passwordOBJ();
    control_passwordCheckOBJ();
    save_data();
    popUpAlert(2,"Her şey tamam devam ediyoruz...");

}

function save_data(){
    const data={
        cityCode:citySelectOBJ.value,
        institutionCode:institutionCodeOBJ.value,
        institutionName:institutionNameOBJ.value,
        phoneNumber:phoneNumberOBJ.value,
        password:passwordOBJ.value
    }
    localStorage.setItem("institution_data", JSON.stringify(data));

}


function init() {
    let pageWidth = window.innerWidth;
    let pageHeight = window.innerHeight;
    if(pageWidth<pageHeight){
        window.location.href = 'login.html';

    }
    document.querySelector("#resume").addEventListener("click",control_App)
    phoneNumberOBJ.addEventListener("input",function(e){
        let value=this.value;
        if(value.length>10){
            this.value=value.substring(0,10)
        }
    })
  

  }
  
  window.addEventListener("load", init, false);
  