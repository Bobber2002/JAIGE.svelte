import { writable } from "svelte/store";

function stats() {
    const { subscribe, set, update } = writable({
        vitality: {
            level: 1,
            xp: 0,
            xpNeed: 100
        },
        strength: {
            level: 1,
            xp: 0,
            xpNeed: 100
        }
    })

    return {
        subscribe,
        set,
        update,
        gainXp: (stat, amount) => {
            update((n) => {
                if (amount < 0 && n[stat].xp == 0) return n
                n[stat].xp += amount
                return n
            })
        },
        levelUp: (stat) => {
            update((n) => {
                if (n[stat].xp >= n[stat].xpNeed) {
                    n[stat].xp -= n[stat].xpNeed
                    n[stat].level++
                }
                return n
            })
        },

    }
}

function doing() {
    const { subscribe, set, update } = writable("nothing")


    const _do = (a) => {
        update((n) => {
            n != a ? n = a : n = "nothing"
            return n
        })
    }
    return {
        subscribe,
        set,
        update,
        do: (a) => _do(a)
    }
}

export const STATS = stats()
export const DOING = doing()