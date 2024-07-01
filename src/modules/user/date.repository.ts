import { Injectable } from '@nestjs/common';
import { DateTrack } from 'src/shared/entity/date.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class DateRepository extends Repository<DateTrack> {
  constructor(private dataSource: DataSource) {
    super(DateTrack, dataSource.createEntityManager());
  }
}
