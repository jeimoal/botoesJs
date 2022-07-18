const passW = {
btnTOn : null, //acces html btn
btnTOff : null, //acces html btn
btnLogin : null, //acces html btn
passw : null, //acces html text input
secMsgMach : null, //acces html display
msgValid : null, //access html display

//initialize the buttons and write the cta
init : () => {
	passW.btnTOn = document.getElementById('btnTOn');
	passW.btnTOff = document.getElementById('btnTOff');	
	passW.btnLogin = document.getElementById('btnLogin')
	passW.passw = document.getElementById('passw');
	passW.secMsgMach = document.getElementById('passCode');
	passW.msgValid = document.getElementById('msgValid');

	btnTOff.hidden = true;
	btnLogin.hidden = true;
	passw.hidden = true;

	btnTOn.addEventListener('click', passW.tMachOn);
	btnTOff.addEventListener('click', passW.tMachOff);
	btnLogin.addEventListener('click', passW.valid);

	paraMachOff = document.createElement('p');
	paraMachOff.textContent = 'Click to Turn On the machine.';
	passW.secMsgMach.appendChild(paraMachOff);
},

//turn on the machine, making the buttons visible and change the text
tMachOn : () => {
	btnTOn.hidden = true;
	btnTOff.hidden = false;
	passw.hidden = false;
	passw.focus();
	btnLogin.hidden = false;

	paraMachOn = document.createElement('p');
	paraMachOn.textContent = 'Enter the pasword. Password: jsPractice';
	paraMachOff.textContent = '';
	passW.secMsgMach.appendChild(paraMachOn);
},

//turn off the machine, returning to initial status
tMachOff : () => {
	btnTOn.hidden = false;
	btnTOff.hidden = true;
	btnLogin.hidden = true;
	passw.hidden = true;
	passw.value = '';

	passW.msgValid.innerHTML = '';
	paraMachOn.textContent = '';
	paraMachOff.textContent = 'Click to Turn On the machine.';
},

//valid if password is correct
valid : () => {
	var paraVldOk = '';
	let vldOk = passw.value;
	passW.msgValid.innerHTML = '';

	//if correct, hide all elements but "turn off button" and login msg
	if (vldOk == 'jsPractice'){
		paraVldOk = document.createElement('p');
		paraVldOk.style.color = 'green';
		paraVldOk.textContent = 'Successfully logged ln.';
		paraVldOk.className = 'vldMsg';
		passW.msgValid.appendChild(paraVldOk);

		paraMachOn.hidden = true;
		passw.value = '';
		passw.hidden = true;
		btnLogin.hidden = true;

	//if incorrect, show msg to type the right password
	} else if(vldOk != '' && vldOk !== 'jsPractice') {
		var paraVldOk = document.createElement('p');
		paraVldOk.style.color = 'red';
		paraVldOk.textContent = 'Enter the correct password.';
		paraVldOk.className = 'vldMsg';
		passW.msgValid.appendChild(paraVldOk);
		passw.value = '';
	} else {
		passw.focus();
	}
},

};

window.addEventListener('load', passW.init);
