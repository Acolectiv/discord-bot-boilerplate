const checkServerPermission =  async (client, server, perm) => {
    let permissions = await client.ServerManager.getPermissions(server);

    if(permissions[perm] == false) return false;
    else return true;
}

module.exports = checkServerPermission;