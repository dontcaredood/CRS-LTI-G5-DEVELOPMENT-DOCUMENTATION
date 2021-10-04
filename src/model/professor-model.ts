import { UserModel } from "./user-model"

export class ProfessorModel extends UserModel {
  
    public department:string
    public designation:string
    
    constructor(param:any[]){
        super()
        console.log("Student Model Class")
        this.department = param[0].department
        this.designation = param[0].designation
        
    }

}
