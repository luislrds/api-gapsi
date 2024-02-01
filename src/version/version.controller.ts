import { Controller, Get, Req } from '@nestjs/common';
import { VersionService } from './version.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('version')
@Controller('api/v1/version')
export class VersionController {
    constructor(private readonly versionService: VersionService){
    }

    @Get()
    method(@Req() req: Request){
        return this.versionService.get()
    }
}
