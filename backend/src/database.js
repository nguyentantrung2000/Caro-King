const mongoose = require('mongoose')
const userSchema = require('./schemas/user.schema');
const User = require('./Models/user.model')
class Database{
    /**
     * @type {Database}
     */
    static _cache = null;
    
    constructor(connectionString){
        /**
         * @type {String}
         */
        this.connectionString = connectionString;
        /**
         * @type {mongoose.Model<any}
         */
        this.User = mongoose.model("users" , userSchema);
        
    }

    /**
     * @returns {Database}
     */
    static get instance()
    {
        if(this._cache == null){
            this._cache = new Database("");
        }
        return this._cache;
    }



    /**
     * @returns {Promise<mongoose.connection>}
     */
    async connect(ConnectionString){
        this.connectionString = ConnectionString
        return new Promise((resolve,reject)=>{
            mongoose.connect(this.connectionString, {useNewUrlParser: true, useUnifiedTopology: true});
            this.connect = mongoose.connection;
            this.connect.on("error",(erro)=>{
                console.log("Cannot connect to database")
                reject(erro);
            });
            this.connect.once("open",()=>{
                console.log("Connect successfully to database")
                resolve(this.connection);
            });
        });
    }
    /**
     * 
     * @param {User} user 
     */
    async createUser(user){
        await this.User.create(user)
    }
    async getAllUser()
    {
        
        return await this.User.find();
       
    }
    /**
     * 
     * @param {User} user 
     */
    async DelectUser(user){
        await this.User.create(user)
    }
}

module.exports= Database;