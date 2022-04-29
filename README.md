Escalab-Clients-Node-Final

Proyecto simulando una Backoffice de clientes.

Descripción:
Levanta el proyecto dirigiendo al login, donde por defecto tenemos el usuario de admin: admin@escalab.com,
este admin redirecciona al screen privado de /admin donde tiene privilegios en el Header para ver clientes 
activos (Home), editar o eliminar clientes (admin) y crear nuevos clientes (client); en caso de cerrar el login
hay un logout. Este sistema de Auth esta en base a Firebase auth, donde reconoce el rol admin y el rol de un 
usuario regular, además de poder registrar más usuarios redireccionandolos a /home en caso de no ser rol admin.
Backend con Node y Express, Mongo para persistencia de datos conectado con mongoose; validaciones con express-validator. El Backend cuenta con API Rest en CRUD. Middleware en ruta, y lectura dinámica de rutas.

Frontend con React, conectado al Backend con "concurrently" para ejecutar ambos servicios a la vez, UI con Boostrap, toma de datos del Backend con axios.

API testeada con Postman.

Documentación del proyecto con SWAGGER en "http://localhost:5000/api/docs/".



Cristian Machuca
Buenos Aires, 2022

