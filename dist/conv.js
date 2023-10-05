// import { client } from "../node_modules/@gradio/client/dist/index.js";

// // // Inference APIs

// async function query(data) {
// 	const response = await fetch(
// 		"https://api-inference.huggingface.co/models/bigscience/bloomz-1b1",
// 		{
// 			headers: { Authorization: "Bearer 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" },
// 			method: "POST",
// 			body: JSON.stringify(data),
// 		}
// 	);
// 	const result = await response.json();
// 	return result;
// }

// // query({"inputs": "i AM GOING TO RUN WITH MY "}).then((response) => {
// // 	console.log(JSON.stringify(response));
// // });


// // // // Huggingface Spaces

// // // const response_0 = await fetch("https://raw.githubusercontent.com/makccr/wallpapers/master/wallpapers/animals/portrait-of-a-flying-falcon-on-a-black-background-illustration-vector.jpg");
// // // const exampleImage = await response_0.blob();
						
// // // const app = await client("https://artificialguybr-qwen-vl.hf.space/");
// // // const result = await app.predict("/predict", [
// // // 				exampleImage, 	// blob in 'Image Input' Image component		
// // // 				"Generate a caption for that image:", // string  in 'Prompt' Textbox component		
// // // 				"No", // string  in 'With Grounding' Radio component
// // // 	]);


// // // // GPT
// // // // This code is for v4 of the openai package: npmjs.com/package/openai

// import OpenAI from '../node_modules/openai';

// const openai1 = new OpenAI({
//   apiKey: "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",
// });

// async function main(){
// 	const response=await openai1.chat.completions.create({
// 		model: "gpt-3.5-turbo-0613",
// 		messages: [
// 		  {
// 			role: "user",
// 			content: "What is cp"
// 		  }
// 		],
// 		temperature: 1,
// 		max_tokens: 256,
// 		top_p: 1,
// 		frequency_penalty: 0,
// 		presence_penalty: 0,
// 	});

// 	console.log(response.choices);
// }

// const a=document.createElement(".div");
// a.innerText="Hello";
// console.log(a);


// main();


const btn=document.querySelector("#getdatabtn");
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
		quesec=document.querySelector("#que-sec");
		ressec=document.querySelector("#res-sec");
	}, 3500);
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
			quesec=document.querySelector("#que-sec");
			ressec=document.querySelector("#res-sec");
		}, 3500);
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
