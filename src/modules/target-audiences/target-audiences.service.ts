import { Injectable } from '@nestjs/common';
import { CreateTargetAudienceDto } from './dto/create-target-audience.dto';
import { UpdateTargetAudienceDto } from './dto/update-target-audience.dto';

@Injectable()
export class TargetAudiencesService {
  create(createTargetAudienceDto: CreateTargetAudienceDto) {
    return 'This action adds a new targetAudience';
  }

  findAll() {
    return `This action returns all targetAudiences`;
  }

  findOne(id: number) {
    return `This action returns a #${id} targetAudience`;
  }

  update(id: number, updateTargetAudienceDto: UpdateTargetAudienceDto) {
    return `This action updates a #${id} targetAudience`;
  }

  remove(id: number) {
    return `This action removes a #${id} targetAudience`;
  }
}
