function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero=0;

	while(respuesta == "si")
	{
		numero = parseInt(prompt("Ingrese un numero"));

		acumulador = acumulador + numero;

		contador++;

		respuesta = prompt("¿Desea continuar?");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN