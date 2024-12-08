import { Injectable } from "@nestjs/common";
import { Cat } from "./interface/cat.interface";

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  remove(id: number) {
    const filterCats = this.cats.filter((info) => info.id !== id);
    console.log(filterCats);

    if (filterCats.length < this.cats.length) {
      this.cats.length = 0;
      this.cats.push(...filterCats);
      return `${id}를 성공적으로 삭제했다.`;
    } else {
      return filterCats;
    }
  }
}
