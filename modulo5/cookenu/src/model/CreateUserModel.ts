import { USER_ROLES } from './../types/types';



export class CreateUserModel {

    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLES
    ) { }

    /**
     * getId
     */
    public getId() {
        return this.id
        
    }
    public getname() {
        return this.name
        
    }
    public getemail() {
        return this.email
        
    }
    public getpassword() {
        return this.password
        
    }
    public getrole() {
        return this.role
        
    }
    

    static toUserModel(data: any): CreateUserModel {
        return new CreateUserModel(data.id, data.name, data.email, data.password, data.role)

    }


}