
var campos = [
	document.querySelector('#nome'),
	document.querySelector('#sobrenome'),
	document.querySelector('#telefone'),
	document.querySelector('#operadora')
	
];

var TableAgenda = document.querySelector("#tabelaAgenda tbody");

var Msg = document.querySelector('#Msg');
	
function validaForm() 
{
	limpaValidacao();

	var validados = false;

	validados = validaCampo(campos[0], "nome");	
	validados = validaCampo(campos[1], "sobrenome");
	validados = validaCampo(campos[2], "telefone");
	validados = validaCampo(campos[3], "operadora");
	

	if (validados)
	{
		Msg.classList.remove("alert-danger");
		Msg.classList.add("alert-success");

		Msg.innerHTML = "Enviado com Sucesso";

		
		mostraMensagem(true)

		for(var i = 0; i < campos.length; i++)
		{
			campos[i].value = "";
		}
	}
}

function inserir()
{
	validaForm();
	TableAgenda.innerHTML += " <tr><td>1</td><td>Thuanny</td><td>Silva</td><td>999</td><td>tim</td></tr>";
}

function mostraMensagem(param) {
	if(param){
		Msg.classList.add("mostrar");
		Msg.classList.remove("ocultar");
	}
	else{
		Msg.classList.add("ocultar");
		Msg.classList.remove("mostrar");
	}
}

function validaCampo(campo, nomeDoCampo) {
	if (campo.value == "")
	{
	Msg.classList.add("alert-danger");

	//Msg.innerHTML += "Preencha o " + nomeDoCampo + "</br>";

	Msg.innerHTML += `Preencha o  ${nomeDoCampo}  </br>`;

	mostraMensagem(true)

	
	campo.classList.add("bordaValidacao");

	return false;
	}
	else
	{
		return true;
	}
}

function limpaValidacao() {

	for(var i = 0; i < campos.length; i++)
	{
		campos[i].classList.remove("bordaValidacao");
	}
	
	Msg.innerHTML = "";

	mostraMensagem(false)
	
}