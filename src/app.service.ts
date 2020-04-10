import { Injectable } from '@nestjs/common';
var md5 = require('md5');
import { TinyUrl } from './entity/TinyUrl.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(TinyUrl)
    private tinyUrlRepository: Repository<TinyUrl>,
  ) {

  }

  public async createTinyUrl(url : String): Promise<String> {
    let key_url = md5(url)

    this.tinyUrlRepository.save({
      key_url : key_url,
      original_url : url
    } as TinyUrl)
    
    return key_url;
  }
}
