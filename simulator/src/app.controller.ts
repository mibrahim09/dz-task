import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PROVIDER1_MOCKED_DATA } from './mocked-data';
import * as _ from 'lodash';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/provider1')
  getProvider1() {
    const results = PROVIDER1_MOCKED_DATA.map((item) => {
      return {
        item_uuid: item.id,
        item_name: item.name,
        item_description: item.description,
        item_price: _.sample(item.price),
        item_currency: item.currency,
        item_availability: _.sample(['AVAILABLE', 'UNAVAILABLE']),
        item_lastUpdated:
          Math.random() < 0.5
            ? item.lastUpdated
            : new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 2), // random date in the past 2 hrs
      };
    });
    const result = _.sampleSize(results, Math.floor(Math.random() * 10));
    return result;
  }

  @Get('/provider2')
  getProvider2() {
    const results = PROVIDER1_MOCKED_DATA.map((item) => {
      return {
        uuid: item.id,
        name: item.name,
        desc: item.description,
        price: _.sample(item.price),
        currency: item.currency,
        isAvailable: _.sample([true, false]),
        lastUpdated:
          Math.random() < 0.5
            ? item.lastUpdated
            : new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 2), // random date in the past 2 hrs
      };
    });
    return _.sampleSize(results, Math.floor(Math.random() * 10));
  }

  @Get('/provider3')
  getProvider3() {
    const results = PROVIDER1_MOCKED_DATA.map((item) => {
      return {
        prv_id: item.id,
        prv_name: item.name,
        prv_description: item.description,
        prv_price: _.sample(item.price),
        prv_currency: item.currency,
        prv_availability: _.sample(['AVAILABLE', 'UNAVAILABLE']),
        prv_lastUpdated:
          Math.random() < 0.5
            ? item.lastUpdated
            : new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 2), // random date in the past 2 hrs
      };
    });
    return { results: _.sampleSize(results, Math.floor(Math.random() * 10)) };
  }
}
