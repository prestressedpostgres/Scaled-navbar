require('dotenv').config();



const config = {
    app :{
        port: parseInt(process.env.APP_PORT) || 3333
    },
    db:{
        postGres: {
            postGresPass: process.env.PG_AUTH,
            host: process.env.PG_DB_HOST || 'localhost',
            port: parseInt(process.env.PG_DB_PORT) || 5432,
            name: 'sdc',
            user: 'bentley'
        },
        mongoDB: {
            host: process.env.MONGO_DB_HOST || 'localhost',
            port: parseInt(process.env.MONGO_DB_PORT) || 27017,
            name: 'SDC'
            
        }
    }


}
console.log(process.env)
module.exports = config;