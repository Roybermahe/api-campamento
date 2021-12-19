import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RepoGenericInterface } from './repositoy.interface';

export let generateRepoGeneric = <T>(inject: string) : any => {
    @Injectable()
    class RepoGeneric implements RepoGenericInterface<T> {
        @Inject(inject) private readonly repo: Repository<T>
        constructor(
        ) {}

        async add(data: T): Promise<T> {
            return this.repo.save(data);
        }
        async delete(id: number): Promise<string> {
        await this.repo.delete(id); 
        return 'Eliminado con exito'; 
        }
        async findOne(id: number): Promise<T> {
            return await this.repo.findOne(id);

        }
        async find(): Promise<T[]> {
            return await this.repo.find();
        }
        async saveAll(data: T[]): Promise<string> {
            await this.repo.save(data);
            return 'Se guardo toda la información'
        }
        getRepo(): Repository<T> {
            return this.repo;
        }
    }
    return RepoGeneric;
}