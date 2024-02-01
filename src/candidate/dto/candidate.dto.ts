import { ApiProperty } from "@nestjs/swagger";

export class CandidateDto {
    @ApiProperty()
    readonly name: string;
    @ApiProperty()
    readonly image: string;
}