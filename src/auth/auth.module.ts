import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtGuard } from './guard';

@Module({
  imports: [JwtModule.register({})],
  providers: [AuthService, JwtStrategy, PrismaService, JwtGuard],
  controllers: [AuthController],
  exports:[JwtGuard]
})
export class AuthModule {}
