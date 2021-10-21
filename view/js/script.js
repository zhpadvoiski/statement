import loader from "./loader.js";

loader.hideLoader();

//API `https://jsonmock.hackerrank.com/api/transactions?userId=${id}&page=${page}`
const showBtn = document.getElementById("submit-btn");
const userSelect = document.getElementById("user-select");

showBtn.addEventListener("click", getTransactions);

async function getTransactions(id) {
	const userValue = userSelect.value;
	if (!userSelect) {
		alert("You need to select user to fetch data!");
		return;
	}

	const URL = getURL(userValue);
	const data = await fetchData(URL);
	debugger;
}

function getURL(id, page = 1) {
	return `https://jsonmock.hackerrank.com/api/transactions?userId=${id}&page=${page}`;
}

async function fetchData(url) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (e) {
		console.log(e);
	}
}
