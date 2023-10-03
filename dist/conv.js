// <! ---------------------------------------------------------------------------------------------->



// import { client } from "../node_modules/@gradio/client/dist/index.js";

// Inference APIs

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

// query({"inputs": "i AM GOING TO RUN WITH MY "}).then((response) => {
// 	console.log(JSON.stringify(response));
// });



// <! ---------------------------------------------------------------------------------------------->



// // Huggingface Spaces

// const response_0 = await fetch("https://raw.githubusercontent.com/makccr/wallpapers/master/wallpapers/animals/portrait-of-a-flying-falcon-on-a-black-background-illustration-vector.jpg");
// const exampleImage = await response_0.blob();
						
// const app = await client("https://artificialguybr-qwen-vl.hf.space/");
// const result = await app.predict("/predict", [
// 				exampleImage, 	// blob in 'Image Input' Image component		
// 				"Generate a caption for that image:", // string  in 'Prompt' Textbox component		
// 				"No", // string  in 'With Grounding' Radio component
// 	]);

// console.log(result.data);



// <! ---------------------------------------------------------------------------------------------->



// GPT
// This code is for v4 of the openai package: npmjs.com/package/openai

// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: "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",
// });

// openai.chat.completions.create({
// 	model: "gpt-3.5-turbo-0613",
// 	messages: [
// 	  {
// 		role: "user",
// 		content: "What is computer in 1 line"
// 	  }
// 	],
// 	temperature: 1,
// 	max_tokens: 256,
// 	top_p: 1,
// 	frequency_penalty: 0,
// 	presence_penalty: 0,
// }).then(response => {console.log(response.choices)});


// <! ---------------------------------------------------------------------------------------------->


// Open Source

import { client } from "@gradio/client";


async function run() {

	const app = await client("https://huggingfaceh4-falcon-chat.hf.space/");
	const result = await app.predict(4, [		
				"Howdy!", // string  in 'Type an input and press Enter' Textbox component		
				"null", // any (any valid json) in 'parameter_9' Chatbot component		
				"Howdy!", // string  in 'Instructions' Textbox component		
				0.1, // number (numeric value between 0.1 and 2.0) in 'Temperature' Slider component		
				0.1, // number (numeric value between 0.1 and 0.99) in 'p (nucleus sampling)' Slider component
	]);

	console.log(result?.data);
}

run();
