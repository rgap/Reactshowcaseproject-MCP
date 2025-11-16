El sitio web debe tener 2 "mini-proyectos" requeridos.

## Mini proyectos requeridos:

- ReactDev Tic-Tac-Toe
- Poke Collection

## Internacionalización (i18n)

Toda la aplicación deberá mostrar los textos en el idioma seleccionado por el usuario en la cabecera de la aplicación (US | ES). Si bien existen librerías diseñadas para resolver este problema, el requerimiento es implementar la lógica manualmente.

Una aproximación sencilla consiste en lo siguiente:

Crear un directorio llamado "locales" y agregar dos archivos JSON, uno por cada lenguaje:

locales/en.json
{
"next-player": "Next player",
"move-0": "Game Start",
"move": "Move",
"reset-button": "Reset",
"won-game": "Winner",
"tied-game": "Tied Game",
// etc
}

locales/es.json
{
"next-player": "Siguiente jugador",
"move-0": "Inicio del Juego",
"move": "Movimiento",
"reset-button": "Reiniciar",
"won-game": "Ganador",
"tied-game": "Juego Empatado",
// etc
}

Crear el archivo I18nContext.jsx y hacer lo siguiente:

1. Importar el contenido de los archivos json en las variables en y es.
2. Crear un objeto locales incluyendo las propiedades en y es
3. Crear y exportar un contexto de React llamado I18nContext.
4. Crear y exportar un Componente Provider (I18nProvider) que incluya
   4.1. Una variable de estado para hacer seguimiento al lenguaje actual (puede llamarse language). Inicializarla en "en".
   4.2. Una función de traducción (puede llamarse t por brevedad) que reciba una key y retorne locales[language][key] || key.
5. Pasar como valor de contexto un objeto que incluya la variable de estado, la función seteadora y la función de traducción.

Finalmente, envolver toda tu aplicación con el componente I18nProvider.

De esta forma, desde cualquier componente:

```
import * as React from "react";
import {I18nContext} from "../contexts/I18nContext";

function Ejemplo() {
  const { t } = React.useContext(I18nContext)

  return <p>{t("next-player")}</p>;
  // Imprimirá "Next Player" o "Siguiente Jugador" según el estado 'language'
}
```

## ReactDev Tic-Tac-Toe

Consiste en replicar y mejorar el proyecto tutorial de la página oficial de React. Las instrucciones y tutorial paso a paso del proyecto se encuentran en el siguiente link:

https://react.dev/learn/tutorial-tic-tac-toe

Al proyecto base de React, le deberán agregar lo siguiente:

- Usar TypeScript: Si bien el tutorial utiliza JavaScript, deberás desarrollar el proyecto en TypeScript.
- Estilos CSS: Agregar los estilos necesarios para igualar el diseño en Figma.
- Botón Reset: El botón "Reset" deberá restaurar el juego a su estado inicial, borrando incluso cualquier historial de movimientos previos.
- Pintar la linea ganadora: Cuando uno de los jugadores gana el juego, deberá de pintarse de color verde las casillas que forman el 3 en raya.
- Mensaje de empate: Si se completa todos los movimientos y no hay ganador, deberá aparecer el mensaje "Tied game" (Juego empatado).
- Persistencia de datos: El estado del juego deberá persistir en localStorage de tal forma que si se refresca la página se puede continuar con el juego donde se dejó anteriormente.

## Poke Collection

El proyecto debe reflejar el diseño en Figma y contar con las siguientes funcionalidades

### Identificación de usuario

La pantalla inicial del proyecto debe mostrar un formulario para que el usuario ingrese un username (cualquiera) y pueda vincular la colección de Pokemones a ese nombre de usuario.

Cuando se ingresa un nombre de usuario, se deberá mostrar la siguiente vista con el buscador de Pokemones y la lista de favoritos.

### Buscador de Pokemones

El buscador de Pokemones consiste en un formulario donde el usuario puede ingresar el nombre de un Pokemon y buscarlo presionando el botón "Search".

Para obtener la información de un Pokemon, se deberá hacer una consulta a la API PokeAPI: https://pokeapi.co/
Particularmente, será una petición GET al endpoint "/pokemon/[pokemon-name]".

Deberás extraer la información necesaria para mostrar el Pokemon como se indica en el diseño.

Adicionalmente, se mostrará un botón "Add to favorites".

Una forma alternativa de buscar un Pokemon es haciendo clic en su tarjeta en el cajón de favoritos.

### Gestionar Pokemones favoritos

Para gestionar la lista de Pokemones favoritos de un usuario en particular, se utilizará una API "Poke Collection Lite" construida por Codeable. La URL base es "https://poke-collection-lite-production.up.railway.app" y cuenta con 4 endpoints:

```
Método	Endpoint	Descripción
GET	/api/[username]/favorites	Retorna la lista de Pokemones favoritos del usuario [username]
POST	/api/[username]/favorites	Agrega un Pokemon a la lista de favoritos del usuario [username]
DELETE	/api/[username]/favorites/[id]	Elimina el Pokemon con id [id] de la lista de favoritos del usuario [username]
POST	/api/[username]/reset	Resetea la lista de favoritos del usuario [username]
```

Podrás encontrar un archivo llamado insomnia.json en el repositorio base que podrás importar en Insomnia a fin de hacer pruebas a la API.

Se deberá gestionar el estado "loading" y "error" de la búsqueda del Pokemon.

### Mostrar Favoritos

Se deberá consultar la API para obtener la lista de Pokemones favoritos del usuario actual y renderizar una tarjeta por cada Pokemon en el cajón de favoritos. Si la lista esta vacía deberá mostrarse un "estado vació" (algún tipo de mensaje)

### Agregar a Favoritos

Al presionar el botón "Add to Favorites", se deberá usar la API para guardar dicho Pokemon cómo favorito. Una versión simplificada de la tarjeta deberá aparecer en el cajón de Pokemones favoritos y el botón se actualizará mostrando ahora "Remove from Favorites".

El botón deberá deshabilitarse mientras se procesa la petición.

### Remover de Favoritos

Al presionar el botón "Remove from Favorites", se deberá usar la API para remover el Pokemon de la lista de favoritos. La tarjeta del Pokemon deberá desaparecer del cajón de favoritos y el botón se actualizará mostrando "Add to Favorites" nuevamente.

El botón deberá deshabilitarse mientras se procesa la petición.

### Recordar usuario

El nombre de usuario deberá persistir en localStorage de tal forma que si se refresca la página y vuelvo a entrar a este componente, veré la pantalla de búsqueda y favoritos directamente.

### Olvidar usuario

Al hacer clic en el botón "Exit" se deberá mostrar la pantalla de "login" y olvidar el nombre de usuario de localStorage.
