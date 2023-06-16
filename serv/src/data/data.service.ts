import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
  getData() {
    return {
      code: 1,
      msg: 'success'
    }
  }
  getMarkDown() {
    return {
      code: 1,
      msg: 'markdown',
      data: markdown()
    }
  }
}

function markdown() {
  return 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
}