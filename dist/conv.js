var imgg=document.querySelector("#imgg");
const API_KEY="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";

async function fetchdata(input){
    const response = await fetch(
        "https://api-inference.huggingface.co/models/prompthero/openjourney",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({ inputs: input }),
        }
      );
    
      if (!response.ok) {
          throw new Error("Failed to generate image");
        }
        const blob = await response.blob();
        console.log(URL.createObjectURL(blob));

        imgg.src=URL.createObjectURL(blob);
}


var init=true;

const btn=document.querySelector("#getdatabtn");
const imggeb=document.querySelector("#img_gen");
// imggen krn wele false
imggeb.addEventListener('click',()=>{
	init=false;
})
btn.addEventListener('click',()=>{
	init=true;
})

const que=document.querySelector("#context");
var quesec=document.querySelector("#que-sec");
var ressec=document.querySelector("#res-sec");
const queriesElement = document.querySelector('.queries');

btn.addEventListener('click',()=>{
	const text=que.value;
	quesec.innerText=que.value;
	info(que.value);
	que.value="";
	setTimeout(() => {
		addnewquery();
		addnewres();
		quesec.id=null;
		ressec.id=null;
		imgg.id=null;
		quesec=document.querySelector("#que-sec");
		ressec=document.querySelector("#res-sec");
		imgg=document.querySelector("#imgg");
	}, 10000);
});

imggeb.addEventListener('click',()=>{
	const text=que.value;
	quesec.innerText=que.value;
	info(que.value);
	que.value="";
	setTimeout(() => {
		addnewquery();
		addnewres();
		quesec.id=null;
		ressec.id=null;
		imgg.id=null;
		quesec=document.querySelector("#que-sec");
		ressec=document.querySelector("#res-sec");
		imgg=document.querySelector("#imgg");
		init=true;
	}, 10000);
});

context.addEventListener('keypress',function(e){
	if(e.key==='Enter'){
		quesec.innerText=que.value;
		info(que.value);
		que.value="";
		setTimeout(() => {
			addnewquery();
			addnewres();
			quesec.id=null;
			ressec.id=null;
			imgg.id=null;
			quesec=document.querySelector("#que-sec");
			ressec=document.querySelector("#res-sec");
			imgg=document.querySelector("#imgg");
		}, 10000);
	}
});
        
                  
function addnewquery(){
	// Step 2: Create new child elements
	const newChildElement1 = document.createElement('div');

	newChildElement1.className = 'rounded-3xl p-3 bg-[#2a2e30] text-sm mx-2 my-3 relative mb-6';
	const newChildElement11=document.createElement("div");
	const newChildElement12=document.createElement("div");

	newChildElement11.className='flex justify-end';
	const newChildElement111=document.createElement("div");
	newChildElement111.className='p-1 text-xl';
	newChildElement111.id="que-sec";

	const newChildElement112=document.createElement('p');
	newChildElement112.className="text-3xl ml-3 mr-1 flex justify-center items-center";
	newChildElement112.innerText="☕";

	newChildElement11.appendChild(newChildElement111);
	newChildElement11.appendChild(newChildElement112);

	newChildElement12.classList='absolute -bottom-4 right-5 bg-[#404445] rounded-md px-3 py-1 cursor-pointer';
	newChildElement12.innerText="Edit ✏️";

	newChildElement1.append(newChildElement11);
	newChildElement1.append(newChildElement12);

	// Step 4: Append the new child elements to the parent element
	queriesElement.appendChild(newChildElement1);
}


                      
function addnewres(){

	// Step 2: Create new child elements
	const newChildElement1 = document.createElement('div');
	newChildElement1.className = 'rounded-3xl p-3 bg-[#141618] text-sm mx-2 my-3 relative mb-6';

	const newChildElement11=document.createElement("div");
	newChildElement11.className="flex justify-start";

	const newChildElement111=document.createElement("p");
	const newChildElement112=document.createElement("div");
	newChildElement111.className="text-3xl ml-1 mr-3 flex justify-center items-center";
	newChildElement111.innerText="⚽";
	newChildElement112.className="p-1 text-xl";
	newChildElement112.id="res-sec";

	const newimg=document.createElement("img");
	newimg.id="imgg";

	newChildElement112.appendChild(newimg);

	newChildElement11.appendChild(newChildElement111);
	newChildElement11.appendChild(newChildElement112);

	const newChildElement12=document.createElement("div");
	newChildElement12.className='absolute -bottom-4 right-5 bg-[#404445] rounded-md px-3 py-1 cursor-pointer';
	newChildElement12.innerText="Regenerate 🔁";

	const newChildElement13=document.createElement("div");
	newChildElement13.className='absolute -bottom-4 right-[9.5rem] bg-[#404445] rounded-md px-3 py-1 cursor-pointer';
	newChildElement13.innerText="Copy 📑";

	const newChildElement14=document.createElement("div");
	newChildElement14.className='absolute -bottom-4 right-[15rem] bg-[#404445] rounded-md px-3 py-1 cursor-pointer';
	newChildElement14.innerText="Download ⬇️";

	newChildElement1.appendChild(newChildElement11);
	newChildElement1.appendChild(newChildElement12);
	newChildElement1.appendChild(newChildElement13);
	newChildElement1.appendChild(newChildElement14);

	queriesElement.appendChild(newChildElement1);
}


const info=(content)=>{
	if(init){
		const url = `https://google-web-search1.p.rapidapi.com/?query=${content}&limit=20&related_keywords=true`;
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '58caa4f29dmsh727b69017c5d2aap153d99jsndcacdee00282',
				'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com'
			}
		};

			const response = fetch(url, options)
			.then(response=>response.json())
			.then(response=>{
				console.log(response);
				const res=response?.knowledge_panel?.description?.text;
				const res2=response?.results[0]?.description;
				console.log(res,res2);
				ressec.innerText=res===undefined?res2:res;
			})
			.catch(err=>console.log(err))
	}
	else{
		fetchdata(content);
	}

}


click_to_record.addEventListener('click',function(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')
        document.getElementById("context").innerHTML = transcript;
		que.value=que.textContent;
    });
    
    if (speech == true) {
        recognition.start();
    }
})


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

const hamico=document.querySelector("#hamicon");
const hamibt=document.querySelector("#hambtn");
const hambt2=document.querySelector("#hambtn2");

hamibt.addEventListener('click',()=>{
	hamico.className="flex-col text-center h-fit p-2 relative top-1 -left-6 text-sm rounded-md bg-purple-600 gap-y-1 flex";
});
hambt2.addEventListener('click',()=>{
	hamico.className="flex-col text-center h-fit p-2 relative top-1 -left-6 text-sm rounded-md bg-purple-600 gap-y-1 flex hidden";
})

