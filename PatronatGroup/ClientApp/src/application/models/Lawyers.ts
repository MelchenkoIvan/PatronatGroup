export interface Lawyer{
    id: number,
    name:string,
    surname:string,
    fullName?:string,
    description?:string,
    descriptionUA?: string,
    descriptionEN?: string,
    position:string,
    email:string,
    image:any,
}