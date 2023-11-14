import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { log } from 'console';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-categoria.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { Category } from './schema/categoria.schema';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('FORUM-CATEGORY_MODEL') private readonly categoryModel: Model<Category>
  ) {
  }
  async create(body: CreateCategoryDto): Promise<Category> {
    const createCategory = await new this.categoryModel(body).save();
    return createCategory.toObject();
  }

  async findAll(): Promise<Category[]> {
    const categories = await this.categoryModel.find().lean();
  
    // Converter o _id de cada documento em uma string
    const usersWithIdAsString = categories.map(user => {
      return {
        ...user,
        _id: user._id.toString(), // Converte o _id para string
      };
    });
  
    return usersWithIdAsString;
  }
}

