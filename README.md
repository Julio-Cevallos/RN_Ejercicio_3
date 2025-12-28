# Ejercicio 3 - Autenticacion con SQLite (Login previo al Drawer)

## Conceptos Claves

### ¿Qué es Drawer Navigation?
**Drawer Navigation** es un menú lateral deslizante implementado con [@react-navigation/drawer] que permite organizar las pantallas principales de la 
aplicación. En este ejercicio, el Drawer contiene las secciones "Inicio" (Tabs), "Usuarios Internos" y "Configuración", y solo es accesible después de un 
login exitoso. Se abre desde el borde izquierdo de la pantalla o mediante el ícono de hamburguesa.

### ¿Qué es navegación anidada?
Navegación anidada en este ejercicio es la combinación de múltiples navegadores dentro de otros, específicamente:
Drawer Navigator (nivel principal - menú lateral):
	-Contiene Tab Navigator (navegación inferior con Home, Perfil, Acerca)
	-Contiene Stack Navigator (en Configuración con index y seguridad)
	-Contiene pantallas individuales (Usuarios)

Esta estructura permite [(drawer) → (tabs) → pantallas] y [(drawer) → configuracion → seguridad], creando una jerarquía compleja de navegación.

### ¿Por qué se reutilizan pantallas en lugar de duplicarlas?
En el Ejercicio_3 se reutilizan las pantallas del Ejercicio_1 y Ejercicio_2 (HomeScreen, ProfileScreen, AboutScreen, etc.) porque:
Las pantallas se reutilizan en lugar de duplicarse porque el proyecto sigue una arquitectura evolutiva y acumulativa, donde se construye sobre el código 
ya existente sin reescribirlo. Esto permite mantener consistencia en el comportamiento y la apariencia de las pantallas, independientemente de si se accede 
a ellas desde tabs, drawer o stack. Además, el mantenimiento es centralizado, ya que cualquier cambio en una pantalla se refleja automáticamente en toda la 
aplicación, se mejora la eficiencia al reducir el tamaño del proyecto y evitar errores por versiones duplicadas, y se respeta la separación de 
responsabilidades, dado que las pantallas funcionan de forma independiente al tipo de navegación que las contiene.