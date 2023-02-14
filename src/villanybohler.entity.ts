import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Villanybojler {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  price: number;
}
