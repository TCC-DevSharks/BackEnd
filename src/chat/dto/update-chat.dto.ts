import { PartialType } from '@nestjs/mapped-types';
import { CreateChatUserDto } from './create-chat.dto';

export class UpdateChatDto extends PartialType(CreateChatUserDto) {}
