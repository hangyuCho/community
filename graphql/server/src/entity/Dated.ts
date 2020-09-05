import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class Dated {
  @CreateDateColumn({ type: 'timestamp' }) public createdAt: string;
  @UpdateDateColumn({ type: 'timestamp' }) public updatedAt: string;
}
