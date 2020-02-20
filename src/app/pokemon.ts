export class Pokemon {
    id: number;
    name: string;
    height : number;
    weight: number;
    type: Array<String>;
    move: Array<String>;

    constructor(id: number, name: string, height : number, weight : number) {
        this.id = id;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.move = new Array();
        this.type = new Array();
    }

    addMove(name: string){
        this.move.push(name);
    }
    
    addType(type: string){
        this.type.push(type);
    }
}