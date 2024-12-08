import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./dto";
import { Cat } from "./interface/cat.interface";

@Controller("cats")
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll(): Cat[] {
    return this.catsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() createDto: CreateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(":id")
  remove(@Param("id") id: number) {
    console.log(typeof id);
    return this.catsService.remove(Number(id));
  }
}
