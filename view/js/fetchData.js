export default async function fetchData(url) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (e) {
		console.log(e);
	}
}

export function getURL(id, page = 1) {
	return `https://jsonmock.hackerrank.com/api/transactions?userId=${id}&page=${page}`;
}
