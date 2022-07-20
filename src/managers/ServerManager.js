const Main = require("../main");
const { model } = require("mongoose");
const Server = model("Server");

class ServerManager extends Main {
    constructor(client) {
        super(client);

        this.client.Logger.info(`MANAGER [ServerManager] <- Listener online.`);
    }

    async grantAllPermissions(server) {
        server.permissions = {
            administration: true,
            economy: true,
            fun: true,
            moderation: true,
            misc: true,
            music: true
        }

        server.markModified("permissions");
        await server.save();

        return server;
    }

    async grantPermission(server, perm) {
        if(typeof perm == Array) {
            perm.map(permission => {
                server.permissions[permission] = true;
            });

            server.markModified("permissions");
            await server.save();

            return server;
        } else {
            server.permissions[perm] = true;

            server.markModified("permissions");
            await server.save();

            return server;
        }
    }

    async removePermission(server, perm) {
        if(typeof perm == Array) {
            perm.map(permission => {
                server.permissions[permission] = false;
            });

            server.markModified("permissions");
            await server.save();

            return server;
        } else {
            server.permissions[perm] = false;

            server.markModified("permissions");
            await server.save();

            return server;
        }
    }

    getServer(identifier) {
        return Server.findOne({ identifier: identifier });
    }

    async getPermissions(identifier) {
        const server = await this.getServer(identifier);
        return server.permissions;
    }
}

module.exports = new ServerManager();