import { Module } from '@nestjs/common';
const shares = []

@Module({
    providers: shares,
    exports: shares
})
export class ShareModule {}