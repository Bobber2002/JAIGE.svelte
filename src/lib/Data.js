import { readable, writable } from "svelte/store";
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
    const { subscribe, set, update } = writable({ Doing: {}, Data: { Progress: "0%" } })


    const _set = (x) => {
        update((n) => {
            n.Doing.Name != x.Name ? n.Doing = x : n.Doing = {}
            return n
        })
    }

    const _setData = (x, y) => {
        update((n) => {
            n.Data[x] = y
            return n
        })
    }

    const _resetData = () => {
        update((n) => {
            n.Data = { Progress: "0%" }
            return n
        })
    }

    return {
        subscribe,
        set,
        update,
        set: _set,
        setData: _setData,
        resetData: _resetData,
    }
}

function page() {
    const { subscribe, set, update } = writable("Player")

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
export const VARIABLES = readable({ Tickrate: 50 })