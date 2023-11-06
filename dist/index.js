const sunIcon=document.querySelector(".sun");
const moonIcon=document.querySelector(".moon");

const userTheme=localStorage.getItem("theme");
const systemTheme=window.matchMedia('(prefers-color-scheme: dark)').matches;

const Icontoggle=()=>{
    moonIcon.classList.toggle("hidden");
    sunIcon.classList.toggle("hidden");
}

const themecheck=()=>{
    if(userTheme==="dark" || (!userTheme && systemTheme)){
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("hidden");
        sunIcon.classList.remove("hidden");
        return ;
    }
    else{
        moonIcon.classList.remove("hidden");
        sunIcon.classList.add("hidden");
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

//reviews

// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img: "https://www.course-api.com/images/people/person-1.jpeg",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img: "https://www.course-api.com/images/people/person-2.jpeg",
      text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img: "https://www.course-api.com/images/people/person-4.jpeg",
      text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img: "https://www.course-api.com/images/people/person-3.jpeg",
      text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  const personimg = document.getElementById("person-img");
  
  let inc = 0;
  let dec = 0;
  
  const nextbtn = document.querySelector(".next-btn");
  const prevbtn = document.querySelector(".prev-btn");
  const randbtn = document.querySelector(".random-btn");
  let currperson = 0;
  function content(index) {
    const item = reviews[index];
    personimg.src = item.img;
    job.textContent = item.job;
    info.textContent = item.text;
    author.textContent = item.name;
  }
  window.addEventListener("reload", content(0));
  nextbtn.addEventListener("click", function () {
    currperson++;
    if (currperson === 4) {
      currperson = 0;
    }
    content(currperson);
  });
  prevbtn.addEventListener("click", function () {
    currperson--;
    if (currperson === -1) {
      currperson = 3;
    }
    content(currperson);
  });
  
  randbtn.addEventListener("click", function () {
    const random = Math.floor(Math.random() * 4);
    content(random);
  })

  
  const observer=new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
            else{
                entry.target.classList.remove("show");
            }
        })
    });
    const hiddenele=document.querySelectorAll(".hiddenele");
    hiddenele.forEach((el)=>observer.observe(el));


