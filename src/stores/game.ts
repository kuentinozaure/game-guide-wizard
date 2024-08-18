import type { Game } from '@/type/Game'
import { defineStore } from 'pinia'

type GameState = {
  games: Game[]
}
export const useGameStore = defineStore('game', {
  state: () => ({ games: [] }) as GameState,
  getters: {
    getGameBySearchCriteria: (state: GameState) => {
      return (searchCriteria: string) =>
        state.games.filter((game) =>
          game.name.trim().toLocaleLowerCase().includes(searchCriteria.trim().toLocaleLowerCase())
        )
    },
    getGames: (state: GameState) => state.games
  },
  actions: {
    addGame(game: Game) {
      this.games.push(game)
    },
    addGames(games: Game[]) {
      this.games.push(...games)
    }
  }
})
