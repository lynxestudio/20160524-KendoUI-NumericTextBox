# Cómo utilizar el control Kendo UI NumericTextBox

El control Kendo UI NumericTextBox está diseñado para dar formato numérico y limitar los datos de entrada de los controles INPUT únicamente a los rangos que se especifiquen según sea especificado en la configuración del control.

Entre los formatos que este control puede manejar se encuentran las siguientes:

Monedas
Porcentaje
Números enteros
Números con precisión
Además si se utiliza el control con la sentencia kendo.culture este control puede dar formato de acuerdo al lenguaje y a las propiedades especificas de cada región o cultura.

Bien ahora mostraré un código en donde se verán todas las propiedades de este control, en este ejemplo se muestran 6 controles Kendo NumericTextBox, 4 de ellos configurado para mostrar cantidades monetarias, 1 de ellos configurado para mostrar cantidades enteras y el último para mostrar una cantidad porcentual.

Fig 1 La ejecución de la página con 6 controles NumericTextBox.



Introduciendo los valores, observamos como los controles le dan formato numérico a las entradas de datos.

Fig 2 Primer ejemplo: Introduciendo las cantidades numéricas.



Fig 3 Completando las entradas numéricas del primer ejemplo.



Fig 4 Un segundo ejemplo, introduciendo las cantidades numéricas.



Fig 5 Un segundo ejemplo, completando las entradas numéricas.



Como primer paso hago la iniciación de los controles, con la sintaxis:

Aquí algunas de las propiedades que utilizo en los controles de este ejemplo:

format: Especifica el tipo de formato que se usará en la cantidad numérica. Su valor predeterminado es numérico “n”.
spinners: Con esta propiedad se muestran las flechas de incremento/decremento del control.
Algunos de los eventos que utilizo:

change: Este evento se ejecuta cuando el valor del control se cambia.
