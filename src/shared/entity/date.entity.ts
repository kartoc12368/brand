import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DateTrack {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  date: Date;

  @Column({ nullable: true })
  arrived: string;

  @Column({ nullable: true })
  left: string;
}
