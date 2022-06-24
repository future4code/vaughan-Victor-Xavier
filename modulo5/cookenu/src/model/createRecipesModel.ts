export class Recipe {
    constructor(
        private id: string,
        private title: string,
        private description: string,

    ){}
    public getId(){
        return this.id
    }
    public getTitle(){
        return this.title
    }
    public getDescription(){
        return this.description

    }
    static toUserModel(data: any): Recipe{
        return new Recipe(data.id, data.title, data.description)
    }
} 