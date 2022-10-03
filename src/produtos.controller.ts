/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
  @Get()
  obterTodos(): string {
    return 'Lista todos os produtos';
  }

  @Get(':id')
  obterUm(@Param() params): string {
    console.log(params.id);
    return `Retorna os dados do produto ${params.id}`;
  }

  @Post()
  criar(@Body() produto): string {
    console.log(produto);
    return 'Produto criado';
  }

  @Put()
  alterar(@Body() produto): string {
    console.log(produto);
    return 'Produto alterado';
  }

  @Delete(':id')
  apagar(@Param() params): string {
    console.log(params.id);
    return `Apaga o produto ${params.id}`;
  }
}
