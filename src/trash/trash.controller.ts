import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('trash')
export class TrashController {
  @Get()
  public getAllTrashes(@Param() type: TrashType) {
    return [];
  }

  public getSingleTrash(@Query() trashId: string) {
    return {};
  }

  @Post()
  public addNewTrash(@Body() newTrash: any) {
    return {};
  }

  @Put()
  public updateTrash(@Query() trashId: string, @Body() trash: any) {
    return {};
  }
}
