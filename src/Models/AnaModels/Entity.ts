
export class Entity<T> {
    private id!:T;
    
    public get ID() : T {
        return this.id
    }
    
    
    public set ID(v : T) {
        this.id = v;
    }
}