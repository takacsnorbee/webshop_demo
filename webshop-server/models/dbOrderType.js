export class dbOrderObject {
    constructor({id, userEmail, productIds}){
        this.id = id,
        this.userEmail = userEmail,
        this.products = productIds
    }
}