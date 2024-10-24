// 5. Evaluación de calificaciones
// Contexto: En una institución educativa, las materias que cursan los estudiantes
// tienen diferentes ponderaciones o pesos. El objetivo es calcular el promedio
// ponderado de las calificaciones de un estudiante y determinar si ha aprobado o no. Si
// el promedio ponderado es mayor o igual a 3.5, el estudiante aprueba; si es menor a
// 2.5, debe repetir el curso. Las materias tienen pesos diferentes y el promedio final
// debe reflejar esas ponderaciones.
// Condiciones:
// 1. El algoritmo debe permitir ingresar varias materias, sus calificaciones y sus
// respectivos pesos.
// 2. Se debe calcular el promedio ponderado de las materias.
// 3. Si el promedio ponderado es mayor o igual a 3.5, el estudiante aprueba.
// 4. Si el promedio es menor a 2.5, el estudiante debe repetir el curso.

var materia;
var nota1, nota2, nota3;
var peso1, peso2, peso3;

function ingresarMateria() {
    materia = prompt('Ingresar materia');
    console.log('Materia ingresada: ' + materia);
}

function ingresarNotas() {
    nota1 = Number(prompt('Ingresar nota 1'));
    nota2 = Number(prompt('Ingresar nota 2'));
    nota3 = Number(prompt('Ingresar nota 3'));
    console.log('Sus notas son: ' + nota1 + ', ' + nota2 + ', ' + nota3);
}

function ingresarPesos() {
    peso1 = Number(prompt('Ingresar peso 1'));
    peso2 = Number(prompt('Ingresar peso 2'));
    peso3 = Number(prompt('Ingresar peso 3'));
    console.log('Los pesos de sus notas son: peso 1: ' + peso1 + ', peso 2: ' + peso2 + ', peso 3: ' + peso3);
}

function promedioPonderado() {
    if (peso1 + peso2 + peso3 === 0) {
        console.log('No se puede calcular el promedio. Suma de pesos es cero.');
        return;
    }
    
    var promedio = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);
    console.log('El promedio de la materia ' + materia + ' es: ' + promedio);

    if (promedio >= 3.5) {
        console.log('El estudiante aprueba la materia ' + materia);
    } else if (promedio < 2.5) {
        console.log('El estudiante debe repetir la materia ' + materia);
    } else {
        console.log('El estudiante necesita hacer un examen de recuperación en la materia ' + materia);
    }
}

let iniciar = true;
while (iniciar) {
    let opcion = Number(prompt('1. Ingresar materia\n2. Ingresar Notas\n3. Ingresar peso de la nota\n4. Conocer el promedio de su materia\n5. Salir'));
    switch (opcion) {
        case 1:
            ingresarMateria();
            break;
        case 2:
            ingresarNotas();
            break;
        case 3:
            ingresarPesos();
            break;
        case 4:
            promedioPonderado();
            break;
        case 5:
            iniciar = false;
            break;
        default:
            console.log('Ingrese una opción válida');
    }
}
