const numsList = document.querySelector('#nums');
const favNums = document.queryCommandIndeterm('#fav-nums');

//#1) Request Favorite Number
async function getFavoriteNum() {
	let favNumApi = 'http://numbersapi.com/7?json';
	let response = await axios.get(favNumApi);
	console.log(response.data);
}
getFavoriteNum();

//#2) Show multiple requests for different numbers
async function getTwoDiffNums() {
	const baseUrl = 'http://numbersapi.com';

	let p1Promise = $.getJSON(`${baseUrl}/12?json`);
	let p2Promise = $.getJSON(`${baseUrl}/24?json`);

	let p1 = await p1Promise;
	let p2 = await p2Promise;

	console.log('first promise resolved', p1);
	console.log('second promise resolved', p2);

	addLiToDom(p1, numsList);
	addLiToDom(p2, numsList);
}

function addLiToDom(el, location) {
	let li = document.createElement('li');
	li.innerText = el.text;
	location.append(li);
}

getTwoDiffNums();

// async function favNumList(num) {
// 	let favNumApi = 'http://numbersapi.com/7?json';
// 	let favNumArr = [];
// 	for (let i = 0; i < num; i++) {
// 		favNumArr.push($.getJSON(favNumApi));
// 	}

// 	let results = await Promise.all(favNumArr);
// 	// console.log(favNumArr[0].text);
// 	for (results of favNumArr) {
// 		console.log(res.data.text);
// 		let li = document.createElement('li');
// 		li.innerText = res.data.text;
// 		favNums.appendChild(li);
// 	}
// }

async function favNumList(num) {
	// let favNumApi = 'http://numbersapi.com/7?json';
	let results = await Promise.all(Array.from({ length: num }), () => $.getJSON('http://numbersapi.com/7?json'));
	console.log(results);

	// console.log(favNumArr[0].text);
	// for (results of favNumArr) {
	// 	console.log(res.data.text);
	// 	let li = document.createElement('li');
	// 	li.innerText = res.data.text;
	// 	favNums.appendChild(li);
	// }
}
