import { Injectable } from '@nestjs/common';
import { CreateAccessControlListDto } from './dto/create-access-control-list.dto';
import { UpdateAccessControlListDto } from './dto/update-access-control-list.dto';

@Injectable()
export class AccessControlListService {
  create(createAccessControlListDto: CreateAccessControlListDto) {
    return 'This action adds a new accessControlList';
  }

  findAll() {
    return `This action returns all accessControlList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accessControlList`;
  }

  update(id: number, updateAccessControlListDto: UpdateAccessControlListDto) {
    return `This action updates a #${id} accessControlList`;
  }

  remove(id: number) {
    return `This action removes a #${id} accessControlList`;
  }
}
