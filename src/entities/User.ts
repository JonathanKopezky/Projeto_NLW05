import {v4 as uuid} from "uuid";
import {
    Entity, 
    Column, 
    CreateDateColumn, 
    PrimaryColumn
} from "typeorm"

@Entity("users")
class User {

   @PrimaryColumn()
    id: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if (!this.id) {
            this.id = uuid();
        }     
    }
} 

export{ User};