import { defineStore } from "pinia";
import axios from "axios";

export const useNewsStore = defineStore("news", {
  // Estado da store
  state: () => ({
    newsList: [],
    isLoading: false,
    error: null,
  }),

  getters: {
    getNewsCount: (state) => state.newsList.length,
    getNews: (state) => state.newsList,
  },

  actions: {
    async fetchNews() {
      const DATABASE_URL = process.env.VUE_APP_DATABASE_URL;

      this.isLoading = true;
      this.error = null; // Limpar qualquer erro anterior

      try {
        const response = await axios.get(
          `${DATABASE_URL}/shelf.json`
        );
        const data = response.data;
        const results = [];

        const reversedKeys = Object.keys(data).reverse();

        for (const id of reversedKeys) {
          results.push({
            id,
            title: data[id].title,
            textBody: data[id].textBody,
            references: data[id].references,
            overview: data[id].overview,
            published: data[id].published,
            imgPath: data[id].imgPath,
          });
        }

        this.newsList = results;
      } catch (error) {
        console.error(error);
        this.error = "Failed to fetch data - please try again later";
      } finally {
        this.isLoading = false;
      }
    },
  },
  persist: true,
});
