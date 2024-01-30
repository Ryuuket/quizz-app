import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as argon from 'argon2';

import { AuthDto } from './dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Player) 
        private playerRepository: Repository<Player>,
    ) {}

    test() {}

    async signup(dto: AuthDto) {
        const hash = await argon.hash(dto.password);

        
        const user = await this.playerRepository.save({
            email: dto.email,
            hash,
            createdAt: new Date(),
        });

        return {
            id: user.playerId,
            email: user.playerEmail,
            createdAt: user.createdAt,
        };
    }

    signin() {
        return { msg: 'I have signed in!' };
    }
}
