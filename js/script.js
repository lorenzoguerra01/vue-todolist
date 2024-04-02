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
        removeItem(id) {
            const i = this.toDo.findIndex((el) => el.id === id)
            if (i !== -1) {
                this.toDo.splice(i, 1);
            }
        },
    },
    mounted() {

    }
}).mount('#app');
