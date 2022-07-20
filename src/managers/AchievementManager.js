const Main = require("../main");

class AchievementManager extends Main {
    constructor(client) {
        super(client);

        this.achievements = {
            userJoinedAchievement: {
                achieved_on: Date.now(),
                title: "New commer!",
                description: "New bot user! Hooray!",
                achieved_by: "Typing... ?"
            },
        }

        this.client.Logger.info("MANAGER [AchievementManager] <- Manager online.");
    }

    async addAchievement(user, achievement) {
        user.achievements.push(this.achievements[achievement]);
        return await user.save();
    }
}

module.exports = new AchievementManager();