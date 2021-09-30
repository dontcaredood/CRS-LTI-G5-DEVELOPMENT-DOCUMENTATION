export class User {
    public email:string
    public name:string
    public password:string
    public gender:string
    public address:string
    public branchName:string
    public role:string = "STUDENT"

    constructor(...params){
        console.log("Student Model Class")
        this.email = params[1]
        this.name = params[2]
        this.password = params[3]
        this.gender = params[4]
        this.address = params[5]
        this.branchName = params[6]
    }
}
