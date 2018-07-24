function mostrar()
{

	var contador=0;
	var acumulador=0;
	var suma = 0;
	var promedio;
	var numero;

	while(contador < 5)
	{
		numero = parseInt(prompt("Ingrese un numero"));

		suma = suma + numero;
	}

	acumulador = suma / contador;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN