import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  Generated,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Exclude({ toPlainOnly: true })
  id: number;

  @Column()
  @Generated('uuid')
  public uuid!: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdOn: number;

  @UpdateDateColumn()
  updatedOn: number;
}
