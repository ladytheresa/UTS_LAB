export interface Item{
    id:string;
    type:string;
    name:string;
    model:string;
    price:number;
    imageUrl:string;
    //motherboard
    stock:number;
    chipset:string;
    brand:string;
    //cpu
    baseclock:string;
    boostclock:string;
    core:number;
    thread:number;
    //ram
    speed:number;
    size:number;
    
}