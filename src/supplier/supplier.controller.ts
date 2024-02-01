import { Body, Controller, Delete, Get, Param, ParamData, Post, Query, Req } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierDto } from './dto/supplier.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('suppliers')
@Controller('api/v1/supplier')
export class SupplierController {

    constructor(private readonly supplierService: SupplierService){

    }

    @Post()
    create(@Body() supplierDto: SupplierDto){
        return this.supplierService.create(supplierDto)
    }

    @Get()
    method(@Query() query: any){
        return this.supplierService.get(query)
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return this.supplierService.remove(id)
    }

}
