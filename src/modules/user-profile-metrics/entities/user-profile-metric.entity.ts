import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('user_profile_metrics')
export class UserProfileMetric {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.id)
  user: User;

  @Column('float')
  total_spent: number;

  @Column('int')
  total_ads_clicked: number;

  @CreateDateColumn()
  created_at: Date;
}
