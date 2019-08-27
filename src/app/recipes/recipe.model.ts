import { Ingriedient } from '../shared/ingreidient.model';

export class Recipe{
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredients:Ingriedient[];

    constructor(name:string,desc:string,imagePath:string,ingredients:Ingriedient[]){
        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;
        this.ingredients=ingredients;
    }
}