const statements = document.getElementById("statements-view");

export default function render(transactions) {
	statements.innerHTML = "";
	transactions.forEach((transc) => {
		const transcInfo = `
                        <div class="user-information">
					        <p id="user-name">${transc.userName}</p>
					        <p id="user-balance">${transc.amount}</p>
				        </div>

				        <div id="monthly-statements"></div>`;

		statements.innerHTML += transcInfo;
	});
}
