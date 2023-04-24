function calcular() {
	// Pedir al usuario que ingrese dos números
	let num1 = prompt("Ingrese el primer número:");
	let num2 = prompt("Ingrese el segundo número:");

	// Convertir los valores ingresados a números
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);

	// Realizar el bucle de cinco iteraciones
	for (let i = 1; i <= 5; i++) {
		let resultado;
		switch (i) {
			case 1:
				// Sumar los dos números y mostrar el resultado
				resultado = num1 + num2;
				alert("El resultado de la suma es: " + resultado);
				break;
			case 2:
				// Restar los dos números y mostrar el resultado
				resultado = num1 - num2;
				alert("El resultado de la resta es: " + resultado);
				break;
			case 3:
				// Multiplicar los dos números y mostrar el resultado
				resultado = num1 * num2;
				alert("El resultado de la multiplicación es: " + resultado);
				break;
			case 4:
				// Dividir los dos números y mostrar el resultado
				resultado = num1 / num2;
				alert("El resultado de la división es: " + resultado);
				break;
			case 5:
				// Calcular el resto de la división y mostrar el resultado
				resultado = num1 % num2;
				alert("El resultado del módulo es: " + resultado);
				break;
			default:
				break;
		}
	}
}







