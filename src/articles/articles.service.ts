import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) { }

  create(createArticleDto: CreateArticleDto) {
    return this.prisma.article.create({ data: createArticleDto });
  }

  findAll(published?: boolean) {
    if (published !== undefined) {
      // Filter articles based on the 'published' parameter
      return this.prisma.article.findMany({ where: { published } });
    }
    // If 'published' is not provided, return all articles
    return this.prisma.article.findMany();
  }

  findDrafts() {
    return this.prisma.article.findMany({ where: { published: false } });
  }

  findOne(id: number) {
    return this.prisma.article.findUnique({ where: { id } });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  remove(id: number) {
    return this.prisma.article.delete({ where: { id } });
  }
}
