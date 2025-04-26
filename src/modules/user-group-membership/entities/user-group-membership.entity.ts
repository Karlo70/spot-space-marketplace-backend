import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { UserGroup } from '../../user-groups/entities/user-group.entity';

@Entity('user_group_membership')
export class UserGroupMembership {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.id)
  user: User;

  @ManyToOne(() => UserGroup, group => group.id)
  group: UserGroup;

  @Column()
  joined_at: Date;
}
