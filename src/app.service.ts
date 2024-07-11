import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let point = 0;
    return 'Hello World!';
  }
}
