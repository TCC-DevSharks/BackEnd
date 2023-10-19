import { PartialType } from '@nestjs/mapped-types';
import { CreateRedefinirSenhaDto } from './create-redefinir-senha.dto';

export class UpdateRedefinirSenhaDto extends PartialType(CreateRedefinirSenhaDto) {}
