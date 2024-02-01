import { Injectable } from '@nestjs/common';
import { IVersion } from './version.interface';
import * as fs from 'fs'
import { IResponse } from 'src/common/response/response.interface';

@Injectable()
export class VersionService {
    async get(): Promise<IResponse<IVersion>> {
        const json = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        return {
            data: {
                version: json.version
            }
        }
    }
}
