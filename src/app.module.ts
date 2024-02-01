import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { VersionModule } from './version/version.module';
import { CandidatesModule } from './candidate/candidate.module';
import { SupplierModule } from './supplier/supplier.module';

@Module({
  imports: [CandidatesModule, SupplierModule, VersionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
