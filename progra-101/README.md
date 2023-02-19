# Basics programming

## Setup

1. Instalar paquetes npm
2. correr proyecto con ´´npm run dev´´
3. correr proyecto con ´npm run dev:watch´ para que siempre observe y actualice el programa
   Ver en el _package.json_:
   
   ```
   "scripts": {
    "dev": "ts-node app.ts",
    ´"dev:watch": "nodemon --watch './\*_/_.ts' --exec 'ts-node' app.ts"´
    },

Aunque en Windows se quitan las comillas sencillas
   
   ```
   ´"dev:watch": "nodemon --watch ./\*_/_.ts --exec ts-node app.ts"´



   
