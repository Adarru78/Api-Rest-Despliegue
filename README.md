# Api-Rest-Despliegue
Proyecto final para la superación del modulo de despliegue

# Api de usuarios
La API de Usuarios es un servicio REST desarrollado con Node.js, Express y MongoDB que permite gestionar usuarios mediante operaciones CRUD: crear, listar, obtener por ID, actualizar y eliminar usuarios. 

Cada usuario tiene los campos nombre, email y edad. Para ejecutar la API en otra máquina tras descargar el proyecto, primero se debe instalar las dependencias de Node.js ejecutando npm install dentro de la carpeta del proyecto, y luego iniciar el servidor con npm start.

La API quedará disponible en el puerto configurado en el archivo .env y lista para recibir peticiones HTTP.

# Despliegue en docker

En el servidor, para desplegar y ejecutar la API usamos Docker Compose, que se encarga de levantar tanto la API como MongoDB de manera automática. Para ello debemos colocar el proyecto en la carpeta del servidor, asegurarse de tener el .env con PORT y MONGO_URI, y luego ejecutar sudo docker compose up -d para levantar los contenedores en segundo plano.

Docker compose ps permite verificar que los contenedores api_usuarios y mongo_db estén corriendo, y docker compose logs -f api o docker compose logs -f mongo sirve para monitorear los logs en tiempo real. 

Todo esto deja nuestra API lista para recibir peticiones CRUD a través de la IP del servidor y el puerto configurado, con MongoDB almacenando los datos de manera persistente gracias a un volumen Docker (Todo en docker-compose.yml).

## Contenedor

![](https://github.com/Adarru78/Api-Rest-Despliegue/blob/a145f5b3db3219543eb31d72a89073a2713b2081/CONTENEDOR.png)

## Read
![](https://github.com/Adarru78/Api-Rest-Despliegue/blob/a145f5b3db3219543eb31d72a89073a2713b2081/READ.png)

## Read con id

![](https://github.com/Adarru78/Api-Rest-Despliegue/blob/a145f5b3db3219543eb31d72a89073a2713b2081/READ.png)

## Create

![](https://github.com/Adarru78/Api-Rest-Despliegue/blob/a145f5b3db3219543eb31d72a89073a2713b2081/CREATE.png)

## Update

![](https://github.com/Adarru78/Api-Rest-Despliegue/blob/a145f5b3db3219543eb31d72a89073a2713b2081/UPDATE.png)

## Delete

![](https://github.com/Adarru78/Api-Rest-Despliegue/blob/a145f5b3db3219543eb31d72a89073a2713b2081/DELETE.png)

