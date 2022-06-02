import { Controller, UseGuards, Request, Get } from '@nestjs/common';
import { UserDocument } from 'src/@types';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { UsersService } from './users.service';
import { CheckPolicies } from 'src/common/decorators/check-policies.decorator';
import { PoliciesGuard } from 'src/common/guards/policies.guard';
import { ReadStudentPolicyHandler } from 'src/common/policies/read.policy';
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @Get('me')
  @CheckPolicies()
  async me(@Request() req): Promise<UserDocument> {
    return this.usersService.findOne({ _id: req.user._id });
  }
}
