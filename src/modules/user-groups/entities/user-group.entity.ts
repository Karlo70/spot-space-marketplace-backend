import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('user_groups')
export class UserGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  group_name: string;

  @Column('text')
  description: string;

  @CreateDateColumn()
  created_at: Date;
}
