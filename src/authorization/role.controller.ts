import { Controller, Get, Inject } from '@nestjs/common';
import { RoleService, RoleServiceToken } from './client/role.service';
import { ApiTags } from '@nestjs/swagger';

@Controller({
  path: 'roles',
  version: '1',
})
@ApiTags('roles')
export class RoleController {
  constructor(
    @Inject(RoleServiceToken) private readonly roleService: RoleService,
  ) {}

  @Get()
  getRoles() {
    return this.roleService.getNewUserRoles();
  }
}
