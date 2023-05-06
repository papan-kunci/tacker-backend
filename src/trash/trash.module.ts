import { Module } from '@nestjs/common';
import { TrashService } from './trash.service';
import { TrashController } from './trash.controller';

@Module({
  providers: [TrashService],
  controllers: [TrashController]
})
export class TrashModule {}
