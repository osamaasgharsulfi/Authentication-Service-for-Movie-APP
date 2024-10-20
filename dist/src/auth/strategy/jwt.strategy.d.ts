import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private prisma;
    constructor(config: ConfigService, prisma: PrismaService);
    validate(payload: {
        id: number;
        email: string;
    }): Promise<{
        id: number;
        email: string;
        password: string;
        name: string;
        dob: Date;
        address: string | null;
        image: string | null;
        categoryIds: number[];
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export {};
