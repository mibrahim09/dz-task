import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class ProductUpdatesRepositoryV1 {
  abstract createUpdateLog(productId: number, changeLog: object): Promise<void>;
}
