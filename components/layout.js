class Navigator extends HTMLElement {

	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML =

	`<nav class="nav">
		<div class="off" id="navIndex"><a href="index.html">About</a></div>
		<div class="off" id="navPublications"><a href="publications.html">Publications</a></div>
		<div class="off" id="navCV"><a href="cv.html">CV</a></div>
		<div class="off" id="navResearch"><a href="research.html">Research</a></div>
	</nav>
	<div id="empty"></div>
`;
	}
}

customElements.define('navi-gator', Navigator);

class FooterText extends HTMLElement {

	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML =

	`<div id="buffer"></div>
	<footer id="footer"><div>Last updated: September 2026. </div></footer>
`;
	}
}

customElements.define('footer-text', FooterText);
