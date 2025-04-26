import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('ad_creatives')
export class AdCreative {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.id)
  user: User;

  @Column()
  file_url: string;

  @Column()
  file_type: string;

  @CreateDateColumn()
  created_at: Date;
}
