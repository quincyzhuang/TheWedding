const story = document.getElementById("head_story");
const details = document.getElementById("head_details");
const vip = document.getElementById("head_vip");
const registry = document.getElementById("head_registry");
const hamburger = document.getElementById("hamburger");

const closebutton = document.getElementById("modal_close");
const modal = document.getElementById("modal");
const modalcontent = document.getElementById("modal_content");
const modalbody = document.getElementById("modal_injection");
const mobilemenu = document.getElementById("mobilemenu");

//Modal content begins here
const storycontent = '<h2>Our Story</h2> Hello, this is our story.';

const detailscontent = `<h2>Details</h2>
Here are the details for this event.
`;

const vipcontent = `<h2>VIPs</h2>
Here are the VIPs for this event.
`;

const registrycontent = `<h2>Registry</h2>
Here is the wedding registry
`;
//Modal content ends

const interactMobileMenu = (event) => {
	mobilemenu.style.display = "block";
	console.log(event.target.srcElement)
}
const closeModal = () => {
	modal.style.display = "none";
}
const closeMobileMenu = () => {
	mobilemenu.style.display = "none";
}

const clickOutside = (event) => { // If user clicks outside modal popup, close modal
	let clicked = event.target.id;
	if( (clicked != modal.firstElementChild.id) && (clicked != '')){
		closeModal();
	}
}

const showModal = (event) => {
	let type = event.target.id;
	let text;
	switch (type){
		case "head_story":
			modalbody.textContent = '';
			text = document.createElement("div");
			text.innerHTML=storycontent;
			modalbody.append(text);
			break;
		case "head_details":
			modalbody.textContent = '';
			text = document.createElement("div");
			text.innerHTML=detailscontent;
			modalbody.append(text);
			break;
		case "head_vip":
			modalbody.textContent = '';
			text = document.createElement("div");
			text.innerHTML=vipcontent;
			modalbody.append(text);
			break;
		case "head_registry":
			modalbody.textContent = '';
			text = document.createElement("div");
			text.innerHTML=registrycontent;
			modalbody.append(text);
	}
	modal.style.display = "block";
}

story.addEventListener('click',showModal);
details.addEventListener('click',showModal);
vip.addEventListener('click',showModal);
registry.addEventListener('click',showModal);
closebutton.addEventListener('click',closeModal);
modal.addEventListener('click',clickOutside);
hamburger.addEventListener('click',interactMobileMenu);
window.addEventListener('resize',closeMobileMenu);