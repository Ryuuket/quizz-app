import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { TypeOrmModule } from "@nestjs/typeorm";  
import { Player } from '../player/player.entity'; 

@Module({
    imports: [
        TypeOrmModule.forFeature([Player]), 
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
