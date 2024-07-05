/* eslint-disable no-unused-vars */
function delay(delayInms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }
async function popUpAlert(state=1,comment){
    const alert=document.querySelector("body > div.left_container > div.alert");
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

document.querySelector("body > div.left_container > div.login_menu > div.button").addEventListener("click",function(){
    popUpAlert(2,"Giriş Başarılı...")
})