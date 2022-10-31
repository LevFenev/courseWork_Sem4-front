import Vuex from "vuex";
import Axios from "axios";

export default new Vuex.Store({
    state: {
        comments: [],
        events: [],
        news: []
    },

    mutations: {
        ADD_COMMENT: (state, payload) => {
            state.comments.push(payload)
        },

        // ADD2_COMMENT: function (state, payload) {
        //
        // }    (=> ?)

        ADD_EVENT: (state, payload) => {
            state.events.push(payload)
        },

        ADD_NEWS: (state, payload) => {
            state.news.push(payload)
        }
    },

    actions: {

        /*this.axios.get('events.json').then(function (response) {
            that.eventsData = response.data;
        })
        this.axios.get('news.json').then(function (response) {
            that.newsData = response.data;
        })
        this.axios.get('comments.json').then(function (response) {
            that.commentsData = response.data;
        })*/

        INIT_COMMENT: async (context) => {
            context.state.comments = []; // подчищает так, чтобы дальше бралось только из файла
            Axios.get('/courseWork_Sem4-front/comments.json').then(function (response) {
                let data = response.data;
                for(let i = 0; i < data.length; i++) {
                    context.commit("ADD_COMMENT", data[i])
                }
            })
        },

        INIT_EVENTS: async (context) => {
          context.state.events = []; // подчищает так, чтобы дальше бралось только из файла
          Axios.get('/courseWork_Sem4-front/events.json').then(function (response) {
              let data = response.data;
              for(let i = 0; i < data.length; i++) {
                  context.commit("ADD_EVENT", data[i])
              }
          })
        },

        INIT_NEWS: async (context) => {
            context.state.news = []; // подчищает так, чтобы дальше бралось только из файла
            Axios.get('/courseWork_Sem4-front/news.json').then(function (response) {
                let data = response.data;
                for(let i = 0; i < data.length; i++) {
                    context.commit("ADD_NEWS", data[i])
                }
            })
        },

        SAVE_COMMENT: async (context, payload) => {
            // запрос на сервер
            // let {data} = await Axios.post(url, payload);
            context.commit("ADD_COMMENT", payload)
        },

        SAVE_EVENT: async (context, payload) => {
            // запрос на сервер
            // let {data} = await Axios.post(url, payload);
            context.commit("ADD_EVENT", payload)
        },

        SAVE_NEWS: async (context, payload) => {
            // запрос на сервер
            // let {data} = await Axios.post(url, payload);
            context.commit("ADD_NEWS", payload)
        }
    }
})
