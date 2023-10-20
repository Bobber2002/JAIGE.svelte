import { writable } from "svelte/store";
import GameData from "$lib/Data.json"

function stats() {
    const { subscribe, set, update } = writable(GameData.Player.Stats)

    return {
        subscribe,
        set,
        update,
        gainXp: (stat, amount) => {
            update((n) => {
                if (amount < 0 && n[stat].Experience == 0) return n
                n[stat].Experience += amount
                return n
            })
        },
        levelUp: (stat) => {
            update((n) => {
                if (n[stat].Experience >= n[stat]["Experience Needed"]) {
                    n[stat].Experience -= n[stat]["Experience Needed"]
                    n[stat].Level++
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

function page() {
    const { subscribe, set, update } = writable("Hunt")

    return {
        subscribe,
        set,
        update,
        change: (to) => { update((n) => { return n = to }) }
    }
}

export const STATS = stats()
export const DOING = doing()
export const PAGE = page()