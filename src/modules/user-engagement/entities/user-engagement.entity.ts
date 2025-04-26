import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('user_engagement')
export class UserEngagement {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.id)
  user: User;

  @Column()
  engagement_type: string;

  @Column('float')
  engagement_value: number;

  @CreateDateColumn()
  created_at: Date;
}
