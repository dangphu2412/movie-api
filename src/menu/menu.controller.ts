import { MenuService, MenuServiceToken } from './client/menu.service';
import { Controller, Get, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('menus')
@ApiTags('menus')
export class MenuController {
  constructor(
    @Inject(MenuServiceToken)
    private readonly menuService: MenuService,
  ) {}

  @Get()
  find() {
    return this.menuService.find();
  }
}
