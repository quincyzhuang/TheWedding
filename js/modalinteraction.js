const story = document.getElementById("head_story");
const details = document.getElementById("head_details");
const vip = document.getElementById("head_vip");
const registry = document.getElementById("head_registry");
const hamburger = document.getElementById("hamburger");

const m_story = document.getElementById("mobile_story");
const m_details = document.getElementById("mobile_details");
const m_vip = document.getElementById("mobile_vip");
const m_registry = document.getElementById("mobile_registry");

const closebutton = document.getElementById("modal_close");
const modal = document.getElementById("modal");
const modalcontent = document.getElementById("modal_content");
const modalbody = document.getElementById("modal_injection");
const mobilemenu = document.getElementById("mobilemenu");
const overlay = document.getElementById("overlay");
const mobileclosebuttom = document.getElementById("closemobile");
var vpwidth = window.innerWidth;
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

const showMobileMenu = (event) => {
	mobilemenu.style.display = "block";
	overlay.style.display = "block";
}

const closeModal = () => {
	modal.style.display = "none";
}
const closeMobileMenu = () => {
	mobilemenu.style.display = "none";
	overlay.style.display = "none";
}
const resizeClose = () => {
	let newWidth = this.innerWidth;
	if(newWidth != vpwidth) {
		closeMobileMenu();
		vpwidth = newWidth;
	}
}
const clickOutside = (event) => { // If user clicks outside modal popup, close modal
	let clicked = event.target.id;
	if( (clicked != modal.firstElementChild.id) && (clicked != '')){
		closeModal();
	}
}
const showModal = (event) => {
	let type = event.target.id;
	if(type === '') {
		type = event.target.parentElement.id;
	}
	let text;
	switch (type){
		case "head_story":
			modalbody.textContent = '';
			text = document.createElement("div");
			text.innerHTML=storycontent;
			modalbody.append(text);
			break;
		case "mobile_story":
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
		case "mobile_details":
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
		case "mobile_vip":
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
			break;
		case "mobile_registry":
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
m_story.addEventListener('click',showModal);
m_details.addEventListener('click',showModal);
m_vip.addEventListener('click',showModal);
m_registry.addEventListener('click',showModal);
closebutton.addEventListener('click',closeModal);
modal.addEventListener('click',clickOutside);
hamburger.addEventListener('click',showMobileMenu);
window.addEventListener('resize',resizeClose);
mobileclosebuttom.addEventListener('click',closeMobileMenu);