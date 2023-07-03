import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
  getData() {
    return {
      code: 1,
      msg: 'success'
    }
  }
  getMarkDown(q: any) {
    return {
      code: 1,
      msg: 'markdown',
      data: markdown(q)
    }
  }
}

function markdown(q: any) {
  let id = q.id
  return id
}