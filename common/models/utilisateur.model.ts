import {Entity, property, hasMany} from "@mean-expert/loopback-sdk-builder";
import{deprev}from "./dep-rev";
import{compte}from"./compte";

import {addresse} from "./adresse";

export class utilisateur extends Entity{
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
    password:string;
    @hasMany(() =>deprev,{keyto:'utilisateurid'} )
    deprev?:deprev[];
    @hasMany(() =>compte,{keyto:'utilisateurid'})
    compte?:compte[];
    @hasMany(() =>addresse,{keyto:'utilisateurid'})
    addresse?:addresse[];


    constructor(data:Partial<utilisateur>){
        super(data);
    }



}