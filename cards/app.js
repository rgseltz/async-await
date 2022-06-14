const newDeck = 'http://deckofcardsapi.com/api/deck/new/draw/?count=1';
const $baseUrl = 'http://deckofcardsapi.com/api/deck';
const $btn = $('button');

async function drawCard() {
	let results = await axios.get(newDeck);
	console.log(`You drew a ${results.data.cards[0].value} of ${results.data.cards[0].suit}`);
}
drawCard();

async function drawTwice() {
	let firstDraw = await axios.get(newDeck);
	console.log(`You drew ${firstDraw.data.cards[0].value} of ${firstDraw.data.cards[0].suit}`);
	let secondDraw = await axios.get(`http://deckofcardsapi.com/api/deck/${firstDraw.data.deck_id}/draw/?count=1`);
	console.log(`You drew ${secondDraw.data.cards[0].value} of ${secondDraw.data.cards[0].suit}`);
}
drawTwice();

async function setup() {
	const $baseUrl = 'http://deckofcardsapi.com/api/deck';
	const $btn = $('button');
	let deckId = null;
	let deckData = await $.getJSON(`${$baseUrl}/new/draw`);
	deckId = deckData.deck_id;
	console.log(deckId, 'this is deckId');
	console.log(deckData);
	$btn.on('click', async function() {
		let cardData = await $.getJSON(`${$baseUrl}/${deckId}/draw`);
		let cardImage = cardData.cards[0].image;
		$('#card-container').append($(`<img>`, { src: cardImage }));
	});
}

setup();
