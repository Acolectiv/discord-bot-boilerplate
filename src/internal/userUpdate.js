module.exports = client => {
    client.Logger.info(`INTERNAL EVENT [USER_UPDATE] <- Listener online.`);
    client.EventManager.on("USER_UPDATE", user => {
        client.Logger.insert(`USER_UPDATE`, user._id);
        //if(oldUser == null && newUser != null) return client.AchievementManager.addAchievement(newUser, "userJoinedAchievement");
    })
}