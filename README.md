# JUMP2DIGITAL 2022
## Background
Proyecto creado con:
+ node.js
+ Express
+ mongoDB

El proyecto sirve para gestionar una base de datos de compànyias
## Usage

Hacer peticion ajax o similar (postman), en el puerto http://localhost:5000/api/v1/companies

## Installation


dependencias
```
npm install
```
.env
```
Crea un archivo .env
Crea una base de datos con mongo db
Pega el archivo de companies.json situado en assets
Crea una variable con el nombre MONGO_URI en el archivo .env
pegas la variable de mongoDB parecida a esta
"mongodb+srv://{user}:{Contraseña}@cluster0.cn7fw.mongodb.net/{nombre base de datos}"
```

iniciar proyecto
```
npm start
```



## See more
El presente proyecto backend esta compuesto por tres endpoints:

+ /size:

    devuelve la base de datos con las compañias ordenadas suegun su tamaño de empresa

+ /foundation:

    devuelve la base de datos con las compañias ordenadas suegun su año de creacion

+ /info:

    devuelve informacion de:
        -cuantas empresas hay por cada tipo de empresas
        -cuantas empresas hay por cada tamaño de empresa
        -cuantas empresas hay por cada año de creacion

## Contact info

> rogerpuigdemasa@gmail.com || Roger Puigdemasa Armengol
## License

[Assembler Institute](https://assemblerinstitute.com)