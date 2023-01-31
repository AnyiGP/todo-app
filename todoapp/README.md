# Todo-app-final
Versión final de la realización de una app que permita cargar tareas y administrarlas. Para acceder el usuario debe loguearse.

- Lo primero que tenemos que hacer es abrir la terminal / consola y posicionarnos en la carpeta en la cual deseamos alojar nuestra aplicación.
- Vamos a crear nuestra aplicación con uno de los siguientes comandos:

npx create-react-app todoapp --template typescript

ó

npx create-react-app todoapp

- Luego de limpiar la aplicación vamos a crear una carpeta pages, otra components y otra assets.
- La carpeta components va a estar compuesta por las carpetas commons, forms y layout.
- El layout estará compuesto por un header, una barra de navegación, footer y main.
- Vamos a contar con las siguientes páginas: Login, SignUp, Dashboard, Tasks, Categories, AddTask, AddCategory, Profile.
- Todas las páginas harán uso del Layout.
- En App.tsx vamos a crear una navegación que responderá a un estado controlado por la barra de navegación.
- En la barra de navegación vamos a agregar tantos items como páginas tenemos. Por el momento vamos a mostrar todos los items, luego veremos como podemos mostrar solo aquellos items que correspondan según los permisos del usuario en sesión.
- Las páginas Login, SignUp, addTask y addCategory están compuestas por formularios que responden a los siguientes types.

type User = {
    id: string
    name: string
    lastname: string
    email: string
    password: string
    birthdate: Date
}

type Category = {
    id: string
    name: string
}

type Task = {
    id: string
    title: string
    date: Date
    category: Category
    description: string
}
