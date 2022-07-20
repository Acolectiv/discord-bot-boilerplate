# discord-bot-boilerpate

A boilerplate of a Discord.js Bot Handler.

Contains most of the basic features you would need:

- A command handler
- A basic permission system (in work)
- An event handler
- Per-server configuration system
- A logging system

The bot is class based.

If you need any help, DM on Discord: ctrl.matei#7487

## Requirements

- `git` command line ([Windows](https://git-scm.com/download/win) | [Linux](https://git-scm.com/download/linux) | [MacOS](https://git-scm.com/download/mac)) installed
- `node` [Version 16.x](https://nodejs.org)

You also need your bot's token. This is obtained by creating an application in
the Developer section of discord.com.

## Intents

You can enable privileged intents in your bot page
(the one you got your token from) under `Privileged Gateway Intents`.

By default, the bot needs the Guilds, Guild Messages and Direct Messages intents to work.
For join messages to work you need Guild Members, which is privileged.

Intents are loaded from the config.js file, and the installer is pre-set with the Guilds, Guild Messages and Direct Messages intents.

For more info about intents checkout the [official Discord.js guide page](https://discordjs.guide/popular-topics/intents.html) and the [official Discord docs page](https://discord.com/developers/docs/topics/gateway#gateway-intents).

## Downloading

Create a folder within your projects directory and run the following inside it:

`git clone https://github.com/Acolectiv/boilerplate.git .`

Once finished:

- In the folder from where you ran the git command, run `npm install`, which will install the required packages.
- **If you get any error about python or msibuild.exe or binding, read the requirements section again!**
- Rename `.env-example` to `.env` and put your bot token and mongodb url in it and save.

## Starting the bot

To start the bot, in the command prompt, run the following command:
`node src/index.js`

## Inviting to a guild

To add the bot to your guild, you have to get an oauth link for it.

You can use this site to help you generate a full OAuth Link, which includes a calculator for the permissions:
[Permission Calculator](https://finitereality.github.io/permissions-calculator/?v=0)