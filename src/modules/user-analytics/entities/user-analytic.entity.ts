import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('user_analytics')
export class UserAnalytic {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.id)
  user: User;

  @Column()
  metric_name: string;

  @Column('float')
  metric_value: number;

  @Column()
  recorded_at: Date;
}
