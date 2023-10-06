// //your code here
// let regexp = /\bthe\b/\ban\b/\ba\b/gi;
const regexp = /\b(?:a|an|the)\b/i;
let arr=[
	"The Virupaksha Temple","A Victoria Memorial"," An Tajmahal"
];
let articleLessArray=[];

for(let i=0;i<arr.length;i++)
	{
		let articleLessItem=arr[i].replace(regexp,"").trim();
		articleLessArray.push(articleLessItem);
	}
	 articleLessArray.sort();

	let ul = document.querySelector('#bands');
   for(let i=0; i<articleLessArray.length; i++){
	   let li = document.createElement("li");
	   li.textContent = ans[i];
	   ul.appendChild(li);
   }

