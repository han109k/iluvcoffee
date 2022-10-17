import { Module, Scope } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/entities/event.entity';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Event, Flavor])],
  controllers: [CoffeesController],
  providers: [
    {
      provide: CoffeesService,
      useClass: CoffeesService,
    },
    {
      provide: 'COFFEE_BRANDS',
      useFactory: () => ['Chibo', 'Nescafe'],
      scope: Scope.DEFAULT,
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
