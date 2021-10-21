function Loader(link) {
	this.link = link;
	this.showLoader = function () {
		this.link.style.display = "block";
	};
	this.hideLoader = function () {
		this.link.style.display = "none";
	};
}

export default new Loader(document.getElementById("loader-view"));
