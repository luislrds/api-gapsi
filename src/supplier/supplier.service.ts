import { BadRequestException, Injectable } from '@nestjs/common';
import { getData, saveData } from 'src/common/helpers/utils';
import { v4 as uuidv4 } from 'uuid'
import { SupplierDto } from './dto/supplier.dto';
import { ISupplier } from './supplier.interface';
import { PaginationDto } from 'src/common/pagination/pagination.dto';
import { IResponse } from 'src/common/response/response.interface';
import { throwError } from 'rxjs';

@Injectable()
export class SupplierService {

    async create(supplierDto: SupplierDto): Promise<ISupplier> {
        var bd = getData()
        const suppliers = bd['suppliers']
        var index = suppliers.findIndex(s => s.name === supplierDto.name)

        if (index >= 0) {
            throw new BadRequestException("El proveedor ya existe")
        } 
        
        const supplier = {
            id: uuidv4(),
            ...supplierDto
        }

        suppliers.push(supplier)

        bd['suppliers'] = suppliers
        saveData(bd)
        return await supplierDto
    }

    async get({limit=10, offset=1}: PaginationDto): Promise<IResponse<ISupplier>> {    
        var bd = getData()
        const suppliers = bd['suppliers']
        const data = suppliers.slice((offset - 1) * limit, offset * limit).reverse()
        return {
            data,
            limit,
            offset,
            length: suppliers.length
        }
    }

    async remove(id: string) {
        var bd = getData()
        const suppliers = bd['suppliers']
        const data = suppliers.filter(s => s.id !== id)
        
        bd['suppliers'] = data
        saveData(bd)
        return getData()['suppliers']
    }
}
