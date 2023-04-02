Proyecto Coderhouse - E-commerce React-Js - SHOPSTAR

Este es un proyecto de e-commerce en React.js. Incluye la importación de varias librerías y componentes de React y el uso de hooks como useState y useEffect. También incluye la definición de varios estados y su actualización mediante la filtración de datos en un array de productos. El código también incluye la definición de componentes adicionales como ProductList y Clock. A continuacion nombrare alguna de las caracteristicas principales de este proyecto


*FIREBASE*

Otro aspecto a destacar del sitio web, es el uso de Firebase para la autenticacion en los componentes Singup y Login:

 -El primer componente, Singup, define una pantalla de registro en la que los usuarios pueden crear una cuenta proporcionando su nombre de usuario, correo electrónico, contraseña y una imagen de perfil. El componente utiliza useState para definir el estado del formulario y los datos del usuario, así como para controlar el estado de carga mientras se realiza el registro. El componente utiliza Firebase para autenticar al usuario y almacenar sus datos en Firestore y Storage, dos servicios en la nube de Firebase.

 -El segundo componente, Login, define una pantalla de inicio de sesión en la que los usuarios pueden ingresar con su correo electrónico y contraseña. El componente utiliza useState para definir el estado del formulario y los datos del usuario, así como para controlar el estado de carga mientras se realiza el inicio de sesión. El componente utiliza Firebase para autenticar al usuario y redirigirlo a la pantalla de pago en caso de éxito, o mostrar un mensaje de error en caso de fallo.

-Cuenta con protectedRouters para evitar cuentas innecesarias-


*PRODUCTOS*

Cuentan con el componente "ProductDetail" el cual obtiene un parámetro de la URL utilizando el hook "useParams", y luego utiliza ese parámetro para buscar un objeto "product" en un array llamado "products".

Luego se utiliza el objeto "product" para mostrar información en la interfaz de usuario, como el nombre, precio, imagen, descripción y reseñas del producto. También se muestra una lista de productos relacionados en función de la categoría del producto actual. El componente tiene un botón "Agregar al carrito" que utiliza el hook "useDispatch" para enviar una acción a un slice de Redux llamado "cartSlice". El botón también muestra un mensaje de éxito utilizando la librería "react-toastify". Tambien tiene dos pestañas que muestran la descripción del producto y las reseñas de los usuarios. La pestaña activa se cambia según la elección del usuario.

Siguiendo con los productos, cuentan con otro componente, "ProductCard" el cual incluye la función addToCart se encarga de agregar el producto al carrito de compras mediante una llamada a la función addItem del slice de Redux cartSlice. Luego muestra una notificación de éxito utilizando la librería de React Toastify.
El componente utiliza el Grid System de Reactstrap para ajustar el ancho del componente y presenta la información del producto en una estructura jerárquica con clases CSS personalizadas definidas en un archivo de estilos separado. Y relacionado al componente anterior, este utiliza el enrutamiento de React Router para mostrar el producto completo (ProductDetail) al hacer clic en la imagen o el nombre del producto.


El sitio web, cuenta con muchas mas funcionalidades interesantes, por lo que te recomiendo que te pases y lo explores!

- https://reactjs-ecommerce-eta.vercel.app/home

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

This is an e-commerce project in React.js. It includes the import of various React libraries and components, and the use of hooks such as useState and useEffect. It also includes the definition of several states and their updating through data filtering in an array of products. The code also includes the definition of additional components such as ProductList and Clock. Some of the main features of this project are:

FIREBASE

Another noteworthy aspect of the website is the use of Firebase for authentication in the Singup and Login components:

-The first component, Singup, defines a registration screen where users can create an account by providing their username, email, password, and a profile picture. The component uses useState to define the state of the form and the user data, as well as to control the loading state while the registration is being processed. The component uses Firebase to authenticate the user and store their data in Firestore and Storage, two Firebase cloud services.

-The second component, Login, defines a login screen where users can enter their email and password. The component uses useState to define the state of the form and the user data, as well as to control the loading state while the login is being processed. The component uses Firebase to authenticate the user and redirect them to the payment screen on success, or display an error message on failure.

-ProtectedRouters are used to avoid unnecessary accounts.

PRODUCTS

They have the "ProductDetail" component which obtains a parameter from the URL using the "useParams" hook, and then uses that parameter to look up a "product" object in an array called "products".

Then the "product" object is used to display information on the user interface, such as the product name, price, image, description, and reviews. A list of related products is also displayed based on the current product category. The component has an "Add to Cart" button that uses the "useDispatch" hook to send an action to a Redux slice called "cartSlice". The button also displays a success message using the "react-toastify" library. It also has two tabs that display the product description and user reviews. The active tab is changed according to the user's choice.

Continuing with the products, they have another component, "ProductCard", which includes the addToCart function that adds the product to the shopping cart by calling the addItem function of the Redux cartSlice. It then displays a success notification using the React Toastify library. The component uses the Reactstrap Grid System to adjust the width of the component and presents the product information in a hierarchical structure with custom CSS classes defined in a separate styles file. Related to the previous component, it uses React Router routing to display the complete product (ProductDetail) when clicking on the product image or name.

The website has many more interesting functionalities, so I recommend that you check it out and explore it!

https://reactjs-ecommerce-eta.vercel.app/home
