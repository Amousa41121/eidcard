function saveImage() {
	empName = document.getElementById('empName').value;
	arRadio = document.getElementById('arRadio').checked;
	enRadio = document.getElementById('enRadio').checked;
	let lang = arRadio?"ar":"en";
	imageURL = location.protocol + '//' + location.host +"/card.php?lang=" + lang + "&name=" + empName;
	const link = document.createElement('a');
	link.href = imageURL;
	link.download = 'card';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

function changeName() {
	document.getElementById('empCardName').innerText = document.getElementById('empName').value;
}

function setAr() {
	document.getElementById('cardAr').hidden = false;
	document.getElementById('cardEn').hidden = true;
}

function setEn() {
	document.getElementById('cardAr').hidden = true;
	document.getElementById('cardEn').hidden = false;
}