
var campos = [
	document.querySelector('#nome'),
	document.querySelector('#sobrenome'),
	document.querySelector('#telefone'),
	document.querySelector('#operadora')
	
];

var Msg = document.querySelector('#Msg');
	
function validaForm() 
{
	limpaValidacao();	
	validaCampo(campos[0], "nome");	
	validaCampo(campos[1], "sobrenome");
	validaCampo(campos[2], "telefone");
	validaCampo(campos[3], "operadora");
	

	if (campos[0].value != "" && 
		campos[1].value != "" &&
		campos[2].value != "" &&
		campos[3].value != "")
	{
		Msg.classList.remove("alert-danger");
		Msg.classList.add("alert-success");

		Msg.innerHTML = "Enviado com Sucesso";

		
		mostrarMensagem(true)

		campos[0].value = "";
		campos[1].value = "";
		campos[2].value = "";
		campos[3].value = "";
	}
}

function mostrarMensagem(param) {
	if(param){
		Msg.classList.add("mostar");
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
	Msg.innerHTML += "Preencha o " + nomeDoCampo + "</br>";

	mostrarMensagem(true)

	
	campo.classList.add("bordaValidacao");
	}
}

function limpaValidacao() {
	campos[0].classList.remove("bordaValidacao");
	campos[1].classList.remove("bordaValidacao");
	campos[2].classList.remove("bordaValidacao");
	campos[3].classList.remove("bordaValidacao");

	Msg.innerHTML = "";

	mostrarMensagem(false)
	
}