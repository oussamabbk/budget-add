import {Entity, property, hasMany} from "@mean-expert/loopback-sdk-builder";




export class addresse extends Entity{
    @property({
        type:'string',
        id : true,
    })
    id:string;
    @property({
        type:'string',
        required:true,
    })
    email:string;
    @property({
        type:'string',
        required:true,
    })
    nom:string;
    @property({
        type:'string',
        required:true,
    })
    prenom:string;
    @property({
        type:'string',
        required:true,
    })
    


    constructor(data:Partial<utilisateur>){
        super(data);
    }



}