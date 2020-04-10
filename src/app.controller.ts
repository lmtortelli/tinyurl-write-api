import { Controller, Req, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices'
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern("create_tinyurl")
  public async createTinyUrl(url : String): Promise<String> {
    
    return this.appService.createTinyUrl(url);
  }
}
