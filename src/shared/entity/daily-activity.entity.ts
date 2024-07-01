import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DailyActivity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  desk_id: string;
}
