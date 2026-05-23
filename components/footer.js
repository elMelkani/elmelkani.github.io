class Navigator extends HTMLElement {

	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = 

	`<nav class="nav">
		<div class="off" id="navIndex"><a href="index.html">About</a></div>
		<div class="off" id="navPublications"><a href="publications.html">Publications</a></div>
		<div class="off" id="navCV"> <a href="cv.pdf" target="_blank">CV</a></div>
		<div class="off" id="navBlog"><a href="blog.html">Blog</a></div>
	</nav>
	<div id="empty"></div>
`;
	}
}

customElements.define('navi-gator', Navigator);