import { Controller, Get } from '@nestjs/common';
import { DataService } from './data.service'

@Controller('data')
export class DataController {
  constructor(private dataService: DataService) { }
  @Get()
  getData(): any {
    return this.dataService.getData()
  }
  @Get('md')
  getMarkDown(): any {
    return this.dataService.getMarkDown()
  }
}
