export class UserModel {
    
    public email:string
    public name:string
    public password:string
    public gender:string
    public address:string
    public branchName:string
    public role:string = "STUDENT"

    constructor(...params){
        console.log("Student Model Class")
        this.email = params[0].email
        this.name = params[0].name
        this.password = params[0].password
        this.gender = params[0].gender
        this.address = params[0].address
        this.branchName = params[0].branch
    }
}
