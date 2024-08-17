import { GameMock } from '@/mock/GameMock'
import type { Game } from '@/type/Game'
import { defineStore } from 'pinia'

type GameState = {
  games: Game[]
}
export const useGameStore = defineStore('game', {
  state: () => ({ games: GameMock }) as GameState,
  getters: {
    getGameBySearchCriteria: (state: GameState) => {
      return (searchCriteria: string) =>
        state.games.filter((game) => game.name.trim().toLocaleLowerCase().includes(searchCriteria))
    },
    getGames: (state: GameState) => state.games
  },
  actions: {
    addGame(game: Game) {
      this.games.push(game)
    }
  }
})
