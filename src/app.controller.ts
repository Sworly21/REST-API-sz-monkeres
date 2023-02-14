import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Render,
} from '@nestjs/common';
import { isDefined } from 'class-validator';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import newBojlerDto from './bojler.dto';
import Villanybojler from './villanybohler.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Post('/villanybojler')
  async newVillanybojler(@Body() bojler: newBojlerDto) {
    isDefined(bojler.price);

    const villanybojlerRepo = this.dataSource.getRepository(Villanybojler);
    await villanybojlerRepo.save(bojler);
    return bojler;
  }

  @Delete('/villanybojler/:id')
  deletBojler(@Param('id') id: number) {
    const villanybojlerRepo = this.dataSource.getRepository(Villanybojler);
    villanybojlerRepo.delete(id);
  }

  @Get('/villanybojler')
  allbojler() {
    const villanybojlerRepo = this.dataSource.getRepository(Villanybojler);
    return villanybojlerRepo.find();
  }
}
