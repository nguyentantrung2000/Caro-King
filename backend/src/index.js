
const sever = require('./sever');
const config = require('./config');
const Database = require('./database')
// const connectString = "mongodb+srv://tantrung0:tantrung0@caroking.2dpql.mongodb.net/Caro?retryWrites=true&w=majority"


async function main() {
    await Database.instance.connect("mongodb+srv://tantrung0:tantrung0@caroking.2dpql.mongodb.net/Caro?retryWrites=true&w=majority")
    sever.listen(config.PORT, config.HOST, () => {
        console.log(`Sever is running on ${config.HOST}:${config.PORT}`);
    });
    
}

main();