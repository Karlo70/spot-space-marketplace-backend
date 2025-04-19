// src/users/entities/user.entity.ts
import { UserProfile } from 'src/modules/user-profiles/entities/user-profile.entity';
import { UserProfilesController } from 'src/modules/user-profiles/user-profiles.controller';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';

export enum UserRole {
  ADVERTISER = 'advertiser',
  ASSET_OWNER = 'asset_owner', // replaced 'provider'
  ADMIN = 'admin',
}

export enum UserStatus {
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  PENDING_VERIFICATION = 'pending_verification',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password_hash: string;

  @Column()
  full_name: string;

  @Column({ nullable: true })
  avatar_url: string;

  @Column({ unique: true, nullable: true })
  phone_number: string;

  @Column({ default: false })
  is_verified: boolean;

  @Column({ nullable: true })
  company_name: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.ASSET_OWNER })
  role: UserRole;

  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.PENDING_VERIFICATION })
  status: UserStatus;

  @Column({ type: 'jsonb', nullable: true })
  social_accounts: Record<string, any>;

  @Column({ type: 'jsonb', nullable: true })
  auth_metadata: Record<string, any>;

  @Column({ default: false })
  two_factor_enabled: boolean;

  @OneToOne(() => UserProfile, profile => profile.user, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'profile_id' })
  profile: UserProfile;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  last_sign_in: Date;

  @Column({ type: 'timestamp', nullable: true })
  email_verified_at: Date;
}
