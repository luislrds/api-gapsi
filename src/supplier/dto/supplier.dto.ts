import { ApiProperty } from "@nestjs/swagger";

export class SupplierDto {
    @ApiProperty()
    readonly name: string;
    @ApiProperty()
    readonly business_name: string;
    @ApiProperty()
    readonly address: string;
}