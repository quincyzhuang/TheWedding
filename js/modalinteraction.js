const story = document.getElementById("head_story");
const details = document.getElementById("head_details");
const vip = document.getElementById("head_vip");
const registry = document.getElementById("head_registry");

const closebutton = document.getElementById("modal_close");
const modal = document.getElementById("modal");
const modalcontent = document.getElementById("modal_content");
const modalbody = document.getElementById("modal_injection");

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

const closeModal = () => {
	document.getElementById("modal").style.display = "none";
}

const showModal = (event) => {
	let type = event.target.id;
	let title;
	switch (type){
		case "head_story":
			modalbody.textContent = '';
			title = document.createElement("div");
			title.innerHTML=storycontent;
			modalbody.append(title);
			break;
		case "head_details":
			modalbody.textContent = '';
			title = document.createElement("div");
			title.innerHTML=detailscontent;
			modalbody.append(title);
			break;
		case "head_vip":
			modalbody.textContent = '';
			title = document.createElement("div");
			title.innerHTML=vipcontent;
			modalbody.append(title);
			break;
		case "head_registry":
			modalbody.textContent = '';
			title = document.createElement("div");
			title.innerHTML=registrycontent;
			modalbody.append(title);
	}
	modal.style.display = "block";
}

story.addEventListener('click',showModal);
details.addEventListener('click',showModal);
vip.addEventListener('click',showModal);
registry.addEventListener('click',showModal);
closebutton.addEventListener('click',closeModal);
