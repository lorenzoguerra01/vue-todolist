import { } from './utility.js';
import { toDo } from './data.js';

const { createApp } = Vue;
createApp({
    data() {
        return {
            toDo,
        }
    },
    methods: {
        toggleDone(id) {
            const item = this.toDo.find((el) => {
                return el.id === id;
            });
            item.done = !item.done;
        },
    },
    mounted() {

    }
}).mount('#app');
