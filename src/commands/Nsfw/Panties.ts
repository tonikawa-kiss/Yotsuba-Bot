import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'
// import { MessageType, Mimetype } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'panties',
            description: `Will send you random succubus girl img.`,
            aliases: ['panties'],
            category: 'nsfw',
            usage: `${client.config.prefix}panties`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        // fetch result of https://api.ichikaa.xyz/api/randomimage?q=panties&apikey=Kuxw2RRu from the API using axios
        return void M.reply( await request.buffer(`https://api.ichikaa.xyz/api/randomimage?q=panties&apikey=Kuxw2RRu`),
        MessageType.image,
                    undefined,
                    undefined,
                    `🌟 Here you go.\n`,
                    undefined
                ).catch((reason: any) =>
            M.reply(`✖ An error occurred. Please try again later.`))
    }
}