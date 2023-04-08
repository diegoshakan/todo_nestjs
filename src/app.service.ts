import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Bora simbora detonar essa bexiga, Diegão!';
  }
}
