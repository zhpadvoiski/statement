import loader from "./loader.js";
import paginate from "./pagination.js";
import fetchData, { getURL } from "./fetchData.js";
import render from "./render.js";

loader.hideLoader();

//API `https://jsonmock.hackerrank.com/api/transactions?userId=${id}&page=${page}`
const showBtn = document.getElementById("submit-btn");
const userSelect = document.getElementById("user-select");

const userContext = {};

showBtn.addEventListener("click", getTransactions);

async function getTransactions() {
	const userValue = userSelect.value;
	if (!userValue) {
		alert("You need to select user to fetch data!");
		return;
	}
	const URL = getURL(userValue);
	const { total_pages, data } = await fetchData(URL);
	paginate(userValue, total_pages);
	render(data);
}
