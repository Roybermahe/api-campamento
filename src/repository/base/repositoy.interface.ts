import { Repository } from "typeorm";

export interface RepoGenericInterface<T> {
   add(data: T): Promise<T>;
   delete(id: number): Promise<string>;
   findOne(id: number): Promise<T>;
   find(): Promise<T[]>;
   saveAll(data: T[]): Promise<string>;
   getRepo(): Repository<T>;
}