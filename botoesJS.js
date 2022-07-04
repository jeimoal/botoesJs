		//Botões de cima para baixo
		
		//1º botão: Valida senha - Toogle na máquina e senha

		let botaoLigar = document.querySelector('#ligar');
		let botaoDesligar = document.querySelector('#desligar');
		let botaoSenha = document.querySelector('#senha');
		let botaoValidaSenha = document.querySelector('#validaSenha')

		botaoSenha.hidden = true;
		botaoDesligar.hidden = true;
		botaoValidaSenha.hidden = true;

		let maquinaAtiva = false;
		let maquinaResult;

		botaoLigar.addEventListener('click', ligaMaquina);
		botaoDesligar.addEventListener('click', desligaMaquina);
		botaoValidaSenha.addEventListener('click', validaSenha);

		const sectionMsgMaquinas = document.querySelector('.preview');

		let paraMaquinaLigada = document.createElement('p');
		let paraMaquinaDesligada = document.createElement('p');
		let paraSenhaCorreta = document.createElement('p');

		paraMaquinaLigada.textContent = maquinaResult;
		paraMaquinaDesligada.textContent = 'Clique no botão para ligar a máquina.';

		(maquinaAtiva === false)?maquinaResult = 'Clique no botão para ligar a máquina.':'';

		//Liga a máquina e ativa os botões de senha e desligar

		function ligaMaquina () {
		maquinaAtiva = true;
		botaoLigar.hidden = true;
		botaoDesligar.hidden = false;
		botaoSenha.hidden = false;
		botaoSenha.focus();
		botaoValidaSenha.hidden = false;
		paraMaquinaLigada.textContent = 'Digite a senha para continuar. Senha: praticajs';
		paraMaquinaDesligada.textContent = '';
		};

		//Desativa os botões e reativa o de ligar a máquina

		function desligaMaquina () {
		maquinaAtiva = false;
		botaoLigar.hidden = false;
		botaoDesligar.hidden = true;
		botaoSenha.hidden = true;
		botaoSenha.value = '';
		botaoValidaSenha.hidden = true;
		paraMaquinaLigada.textContent = 'Clique no botão para ligar a máquina.';
		paraSenhaCorreta.textContent = '';		
		};

		//Valida se a senha está certa ou errada

		function validaSenha () {
			var valorSenha = botaoSenha.value;
			if (valorSenha === 'praticajs'){
				paraSenhaCorreta.textContent = 'Parabéns! Você logou com sucesso.';
				paraSenhaCorreta.style.color = 'green';
				botaoSenha.value = '';
			} else {paraSenhaCorreta.textContent = 'Digite a senha correta.'
				paraSenhaCorreta.style.color = 'red';
				botaoSenha.value = '';
			}
		};

		sectionMsgMaquinas.appendChild(paraMaquinaDesligada);
		sectionMsgMaquinas.appendChild(paraMaquinaLigada);
		sectionMsgMaquinas.appendChild(paraSenhaCorreta);


		//2º botão - Pergunta o nome de quem clicou

		let btnClique = document.querySelector('#btn2');

		btnClique.addEventListener('click', quemClicou);

		function quemClicou() {
			let nome = prompt('Curiooooso né?! Qual seu nome?');
			alert(`Era só isso mesmo, ${nome}! rsrsrsr`);
		}

		//Calculadora simples

		let numberLeft = document.querySelector('#number1');
		let numberRight = document.querySelector('#number2');
		let basicOper = document.querySelector('#operadoresBasicos');
		let calc = document.querySelector('#calcular');
		let parag = document.querySelector('#resultadoCalc');

		calc.addEventListener('click', quatroOperacoes);

		function quatroOperacoes() {
			if (basicOper.value === '+'){
				var result = Number(parseFloat(numberLeft.value) + parseFloat(numberRight.value));
				parag.textContent = `Resultado da soma de ${numberLeft.value} + ${numberRight.value} é ${result}`;
				numberLeft.value = null;
				numberRight.value = null;
			} else if(basicOper.value === '-') {
				var result = Number(parseFloat(numberLeft.value) - parseFloat(numberRight.value));
				parag.textContent = `Resultado da subtração de ${numberLeft.value} - ${numberRight.value} é ${result}`;
				numberLeft.value = null;
				numberRight.value = null;
			} else if(basicOper.value === '*') {
				var result = Number(parseFloat(numberLeft.value) * parseFloat(numberRight.value));
				parag.textContent = `Resultado da multiplicação de ${numberLeft.value} * ${numberRight.value} é ${result}`;
				numberLeft.value = null;
				numberRight.value = null;
			} else if(basicOper.value === '/') {
				var result = Number(parseFloat(numberLeft.value) / parseFloat(numberRight.value));
				parag.textContent = `Resultado da divisão de ${numberLeft.value} / ${numberRight.value} é ${result}`;
				numberLeft.value = null;
				numberRight.value = null;
			} else{parag.textContent = 'Digite um sinal válido: + - * /'}
		}