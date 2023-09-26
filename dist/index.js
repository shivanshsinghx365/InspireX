const sunIcon=document.querySelector(".sun");
const moonIcon=document.querySelector(".moon");

const userTheme=localStorage.getItem("theme");
const systemTheme=window.matchMedia('(prefers-color-scheme: dark)').matches;

const Icontoggle=()=>{
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
}

const themecheck=()=>{
    if(userTheme==="dark" || (!userTheme && systemTheme)){
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        return ;
    }
    else{
        sunIcon.classList.add("display-none");
    }
}

const themeswitch=()=>{
    if(document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme","light");
        Icontoggle();
        return ;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme","dark");
    Icontoggle();
}

sunIcon.addEventListener('click',()=>{
    themeswitch();
})
moonIcon.addEventListener('click',()=>{
    themeswitch();
})
themecheck();


var flag=false,flag1=false,flag2=false,flag3=false,flag4=false,flag5=false;
const hiddentext=document.getElementById("hidden-text");
const hiddentext1=document.getElementById("hidden-text1");
const hiddentext2=document.getElementById("hidden-text2");
const hiddentext3=document.getElementById("hidden-text3");
const hiddentext4=document.getElementById("hidden-text4");
const hiddentext5=document.getElementById("hidden-text5");

const plus=document.getElementById("plus");
const minus=document.getElementById("minus");
const plus1=document.getElementById("plus1");
const minus1=document.getElementById("minus1");
const plus2=document.getElementById("plus2");
const minus2=document.getElementById("minus2");
const plus3=document.getElementById("plus3");
const minus3=document.getElementById("minus3");
const plus4=document.getElementById("plus4");
const minus4=document.getElementById("minus4");
const plus5=document.getElementById("plus5");
const minus5=document.getElementById("minus5");

function unhide(){
    if(!flag){
        hiddentext?.classList?.remove("hidden");
        minus?.classList?.remove("hidden");
        plus?.classList?.add("hidden");
        flag=true;
    }
    else{
        hiddentext?.classList?.add("hidden");
        minus?.classList?.add("hidden");
        plus?.classList?.remove("hidden");
        flag=false;
    }
}
function unhide1(){
    if(!flag1){
        hiddentext1?.classList?.remove("hidden");
        minus1?.classList?.remove("hidden");
        plus1?.classList?.add("hidden");
        flag1=true;
    }
    else{
        hiddentext1?.classList?.add("hidden");
        minus1?.classList?.add("hidden");
        plus1?.classList?.remove("hidden");
        flag1=false;
    }
}
function unhide2(){
    if(!flag2){
        hiddentext2?.classList?.remove("hidden");
        minus2?.classList?.remove("hidden");
        plus2?.classList?.add("hidden");
        flag2=true;
    }
    else{
        hiddentext2?.classList?.add("hidden");
        minus2?.classList?.add("hidden");
        plus2?.classList?.remove("hidden");
        flag2=false;
    }
}

function unhide3(){
    if(!flag3){
        hiddentext3?.classList?.remove("hidden");
        minus3?.classList?.remove("hidden");
        plus3?.classList?.add("hidden");
        flag3=true;
    }
    else{
        hiddentext3?.classList?.add("hidden");
        minus3?.classList?.add("hidden");
        plus3?.classList?.remove("hidden");
        flag3=false;
    }
}
function unhide4(){
    if(!flag4){
        hiddentext4?.classList?.remove("hidden");
        minus4?.classList?.remove("hidden");
        plus4?.classList?.add("hidden");
        flag4=true;
    }
    else{
        hiddentext4?.classList?.add("hidden");
        minus4?.classList?.add("hidden");
        plus4?.classList?.remove("hidden");
        flag4=false;
    }
}
function unhide5(){
    if(!flag5){
        hiddentext5?.classList?.remove("hidden");
        minus5?.classList?.remove("hidden");
        plus5?.classList?.add("hidden");
        flag5=true;
    }
    else{
        hiddentext5?.classList?.add("hidden");
        minus5?.classList?.add("hidden");
        plus5?.classList?.remove("hidden");
        flag5=false;
    }
}