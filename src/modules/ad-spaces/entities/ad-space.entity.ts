import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('ad_spaces')
export class AdSpace {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column()
  dimensions: string;

  @Column('float')
  price: number;

  @CreateDateColumn()
  created_at: Date;
}
