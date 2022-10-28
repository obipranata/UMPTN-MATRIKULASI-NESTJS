import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hallo nama saya Obi Imanuel Pranata Kanuk!';
  }
}
