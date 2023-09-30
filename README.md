### Características del Proyecto

En la pantalla de la calculadora, se visualiza el contenido de la variable `input`, que representa la entrada de los botones presionados.

Al hacer clic en los botones numéricos y operadores, se agregarán a la pantalla de entrada `input`, lo que permitirá construir una expresión matemática.

Al hacer clic en el botón `=`, la calculadora realizará el cálculo de la expresión matemática ingresada y mostrará el resultado en pantalla.

Si no se ha ingresado ninguna expresión y se hace clic en `=`, se mostrará una alerta solicitando al usuario que ingrese valores para realizar los cálculos.

El botón `clear` permite limpiar la pantalla y reiniciar la calculadora.

### Lógica del Código

Se utiliza el hook de estado `useState` para declarar la variable `input`, que almacena la entrada de los botones presionados.

La función `addInput` se encarga de agregar los valores de los botones presionados a la variable `input`.

La función `resolve` realiza el cálculo de la expresión matemática ingresada utilizando la librería `mathjs`. Si no se ha ingresado ninguna expresión, muestra una alerta.

La estructura del componente App contiene el título y los botones de la calculadora organizados en filas. Los botones utilizan la función `addInput` para agregar valores y la función `resolve` para realizar los cálculos.

El componente ButtonClear recibe la función anónima `() => setInput('')` como `handleClear`, que se encarga de limpiar la pantalla de la calculadora.
