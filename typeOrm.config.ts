import { DataSource } from 'typeorm';
import { CoffeeRefactor1665956219480 } from './src/migrations/1665956219480-CoffeeRefactor';
import { Coffee } from './src/coffees/entities/coffee.entity';
import { Flavor } from './src/coffees/entities/flavor.entity';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1665956219480],
});
