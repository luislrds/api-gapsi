import { Injectable } from '@nestjs/common';
import { getData } from 'src/common/helpers/utils';
import { ICandidate } from './candidate.interface';
import { IResponse } from 'src/common/response/response.interface';

@Injectable()
export class CandidateService {

    async get(id: string): Promise<IResponse<ICandidate>> {
        var bd = getData()
        const candidates = bd['candidates']
        const candidate = candidates.find(c => c.id === id)
        return {
            data: candidate
        }
    }
}
