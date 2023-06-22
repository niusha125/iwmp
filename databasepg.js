const {Client} = require('pg')

const client = new Client({ 
    user: "new", 
    host: "de6572yw", 
    database: "test", 
    password: "1234", 
    port: 5432,
   
})

client
.connect()
.then(() => { console.log('Connected to PostgreSQL database')})
.catch((error) => { console.error('Error connecting to PostgreSQL database:', error)}); 


