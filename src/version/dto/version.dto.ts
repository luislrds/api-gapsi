import { ApiProperty } from "@nestjs/swagger";

export class VersionDto {
    @ApiProperty()
    readonly version: string;
}