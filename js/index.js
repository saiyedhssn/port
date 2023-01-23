const formid = document.getElementById("conid");


formid.addEventListener("submit", function(e){

    e.preventDefault();

    const fnameinput = document.getElementById("fname");

    const lnameinput = document.getElementById("lname");
    
    const gmailinput = document.getElementById("gmail");
    
    const phoneinput = document.getElementById("phoneN");
    
    const messageinput = document.getElementById("message");
    
    const submitinput = document.getElementById("submit");

const fnameValue = fnameinput.value;
const lnameValue = lnameinput.value;
const gmailValue = gmailinput.value;
const phoneValue = phoneinput.value;
const messageValue = messageinput.value;


 const templateParams = {
    fnameValue: fnameValue,
    lnameValue: lnameValue,
    gmailValue: gmailValue,
    phoneValue: phoneValue,
    messageValue: messageValue,
    
};




if(fnameValue && lnameValue && gmailValue && phoneValue && messageValue ){ 
    
    fnameinput.value="";
    lnameinput.value="";
    gmailinput.value="";
    phoneinput.value="";
    messageinput.value="";
    

    emailjs.send("service_emjstwo", "template_kbbm1re", templateParams, "AiNnpsVXNvPnXmYyM");
  

    console.log(fnameValue, fnameValue, gmailValue, phoneValue, messageValue);
}


})


function menuFun(){
 const menuId =document.getElementById("menuid");

 menuId.classList.toggle("menu-show");

 const iconImg = document.querySelector(".icon-img");

 iconImg.src="images/cross.png";

}
