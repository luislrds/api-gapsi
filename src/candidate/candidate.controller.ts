import { Controller, Get, Param } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('candidates')
@Controller('api/v1/candidate')
export class CandidateController {

    constructor(private readonly candidateService: CandidateService){
    }

    @Get(':id')
    method(@Param('id') id:string){
        return this.candidateService.get(id)
    }
}
