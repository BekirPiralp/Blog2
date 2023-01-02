import { Entity } from "./Entity";

export class User extends Entity<number> {
    private ad!: string;
    private soyad!: string;
    
    public get Ad() : string {
        return this.ad; 
    }
    
    public set Ad(value : string) {
        this.ad = value;
    }
    
    
    public get Soyad() : string {
        return this.soyad;
    }

    
    public set Soyad(v : string) {
        this.soyad = v;
    }
    
    
}