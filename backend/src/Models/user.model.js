class user {
    /**
     * 
     * @param {String} name 
     * @param {String} id 
     * @param {Number} winRecord 
     */
    constructor(name,id,winRecord){
        this.id = id;
        this.name = name;
        this.winRecord = winRecord;
    }
}
module.exports = user;