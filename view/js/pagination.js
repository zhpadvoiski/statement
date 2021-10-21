import fetchData, { getURL } from "./fetchData.js";
import render from "./render.js";

const pagination = document.getElementById("pagination");

export default function paginate(id, total_pages) {
	pagination.innerHTML = "";
	for (let i = 1; i <= total_pages; i++) {
		let pageBtn = document.createElement("button");
		pageBtn.className = "pageBtn";
		pageBtn.innerHTML = i;
		pageBtn.addEventListener("click", () => pageClick(id, i));
		pagination.append(pageBtn);
	}
}

async function pageClick(id, number) {
	let URL = getURL(id, number);
	let { data } = await fetchData(URL);
	render(data);
}
