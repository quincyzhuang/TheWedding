const story = document.getElementById("head_story");
const details = document.getElementById("head_details");
const vip = document.getElementById("head_vip");
const registry = document.getElementById("head_registry");
const hamburger = document.getElementById("hamburger");
const rsvp = document.getElementById("rsvp");

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

var keylistener = false;
var vpwidth = window.innerWidth;

//Modal content begins here
const storycontent = `<h1>Our Story</h1>
<p>
	Rebecca and Quincy met in a biomedical engineering class at UT Austin in the Autumn of 2012. Prior to that, Quincy had no knowledge of Rebecca,
	but Rebecca knew of Quincy as the Pikachu-wearing beanie kid. From that point onwards, they became good friends and sat next
	to each other in classes as often as possible.
</p>
<p>
	Inevitably, the two started developing feelings for each other. Quincy made an out-of-character move by accompanying Rebecca to 
	a campus festival, where Rebecca had thai tea for the first time (too late in life if you ask me). Rebecca ate lunch with Quincy at Zen, which threw 
	her school budget out the window! Luckily, the fries were tasty. On a fateful in late February 2013, Rebecca plucked up the courage to ask Quincy out to dinner, much to Quincy's disbelief.
</p>
<p>
	Rebecca and Quincy officially became a couple on March 5th, 2013. They shared many great memories for the remainder of their time at UT Austin.
	Sadly, after graduation in May 2015, Quincy moved to Madison, Wisconsin to work at a glorified farm while Rebecca stayed in Texas to work for IBM. They endured a long distance
	relationship until June 2018. Rebecca credits mutual travel opportunities and nightly phone calls as being key during those 3 difficult years. Quincy credits Terraria.
</p>
<p>
	Quincy moved to Austin, TX in June 2018 to be with Rebecca. He proposed to Rebecca on UT campus on January 25th, 2019.
</p>	
`;

const detailscontent = `<h1>Details</h1>
<h3>Location</h3>
<div>
	1234 Wedding Street<br>
	Austin,TX 78723<br>
	<a href="linktogooglemaps">Directions</a>
</div>
<h3>Date/Time</h3>
<div>
	4/20/2020 12:00:00
</div>
<h3>Other information</h3>
<div>
	Something about venue logistics/parking/etc
</div>
`;

const vipcontent = `<h1>VIPs</h1>
Here are the VIPs for this event.
`;

const registrycontent = `<h1>Registry</h1>
Here is the wedding registry
`;

const rsvpform = `
<form action="https://pi.wuzhuangclan.tk/rsvp.php" method="post" id="f_rsvp">
  <h2>RSVP Form</h2>
  <div>
    <label for="form_name">Your First and Last Name:</label>
    <input type="text" class="m_text" id="form_name" name="full_name" required autofocus>
  </div>
  <div>
  	<label for="form_email">Your Email Address:</label>
  	<input type="email" class="m_text" id="form_email" name="email">
  </div>
  <div>
    <label for="form_plusone">Will you be bringing a +1?</label><br>
    <input type="radio" id="form_plusone_yes" name="plradio" value="1">Yes<br>
    <input type="radio" id="form_plusone_no" name="plradio" value="0">No
  </div>
  <div>
    	<label for="form_poname">+1's First and Last Name:</label>
    	<input type="text" class="m_text" id="form_poname" name="1full_name">
  </div>
  <div>
  	<label for="form_diet">Dietary Restrictions:</label><br>
  	<!--<textarea id="form_diet" name="diet"></textarea>-->
  	<input type="radio" id="form_diet" name="diet" value="none">None<br>
    <input type="radio" name="diet" value="vegan">Vegan<br>
    <input type="radio" name="diet" value="vegetarian">Vegetarian<br>
    <input type="radio" name="diet" value="other">Other (please specify):
    <input type="text" class="m_text" name="diet_other">
  </div>
  <div class="button">
    <button type="submit" id="f_rsvp_submit">Submit</button>
  </div>
</form>
`;
//Modal content ends

const showMobileMenu = (event) => {
	mobilemenu.style.display = "block";
	overlay.style.display = "block";
}

const closeModal = () => {
	modal.style.display = "none";
	cleanUpDynamicListeners();
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
	let clicked = event.target;
	let parent = modal;
	if( isDescendant(parent,clicked) === false ){
		closeModal();
	}
}

const isDescendant = (parent,child) => {
	let node = child.parentNode;
	while(node != null) {
		if (node === parent) {
			return true;
		}
		node = node.parentNode;
	}
	return false;
}

const enableSubmit = () => {
	let poname = document.getElementById('form_poname').value.length;
	let submit = document.getElementById('f_rsvp_submit');
	if(poname > 0) {
		submit.disabled = false;
	}
}

const cleanUpDynamicListeners = () => {
	keylistener = false;
	document.getElementById('form_poname').removeEventListener('keypress',enableSubmit);
}

const dynamicElements = (event) => {
	if(isDescendant(document.getElementById('f_rsvp'), event.target)) {
		let yes = document.getElementById('form_plusone_yes').checked;
		let no = document.getElementById('form_plusone_no').checked;
		let name = document.getElementById('form_poname')
		let poname = document.getElementById('form_poname').value.length;
		let submit = document.getElementById('f_rsvp_submit');
		if((yes === true) && (poname === 0)) {
			submit.disabled = true;
			if (keylistener === false) {
				name.addEventListener('keypress',enableSubmit);
				keylistener = true;
			}
		} else if((yes === true) && (poname > 0 )) {
			submit.disabled = false;
		} else if(no === true) {
			submit.disabled = false;
		}
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
			break
		case "rsvp":
			modalbody.textContent = '';
			text = document.createElement("div");
			text.innerHTML=rsvpform;
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
rsvp.addEventListener('click',showModal);
modalcontent.addEventListener('click',dynamicElements);
overlay.addEventListener('click',closeMobileMenu)
