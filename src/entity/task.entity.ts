import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Generated } from "typeorm";
import { Exclude } from 'class-transformer';

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    @Exclude({ toPlainOnly: true })
    id: number;

    @Column()
    @Generated('uuid')
    public uuid!: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @CreateDateColumn()
    createdOn: number;

    @UpdateDateColumn()
    updatedOn: number;

}
