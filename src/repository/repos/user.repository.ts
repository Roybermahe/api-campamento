import { Injectable } from '@nestjs/common';
import { User } from 'src/database/entitys/user.entity';
import { generateRepoGeneric } from '../base/repository.generic';
import { RepoGenericInterface } from '../base/repositoy.interface';

@Injectable()
export class UserRepository extends generateRepoGeneric<User>(User.name) {}