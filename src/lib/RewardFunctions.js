import { STATS } from "$lib/Data.js"

export default {
    Experience: (statThatGained, gainedAmount) => {
        {
            STATS.gainXp(statThatGained, gainedAmount);
        }
    },
    Item: (statThatGained, gainedAmount) => {
        {
            STATS.gainXp(statThatGained, gainedAmount);
        }
    },
    Money: (statThatGained, gainedAmount) => {
        {
            STATS.gainXp(statThatGained, gainedAmount);
        }
    },
    Level: (statThatGained, gainedAmount) => {
        {
            STATS.gainXp(statThatGained, gainedAmount);
        }
    },
};