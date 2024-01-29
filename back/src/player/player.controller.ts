import { Controller, Get, Post, Body } from '@nestjs/common';
import { PlayerService } from './player.service';
import { Player } from './player.entity';

@Controller('player')
export class PlayerController {
    constructor(private readonly playerService: PlayerService) {}

    @Get()
    getPlayers() {
        return this.playerService.findAll()
    }

    @Post()
    createPlayer(@Body() body: Player) {
        return this.playerService.create(body)
    }
}
