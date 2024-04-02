import { } from './utility.js';
import { toDo } from './data.js';

const { createApp } = Vue;
createApp({
    data() {
        return {
            toDo,
            itemText: ''
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
        addToDo() {
            const newobj = {
                id: null, //generare id
                text: this.itemText,
                done: false
            }
            let nextId = 0;
            this.toDo.forEach((el) => {
                if (nextId < el.id) {
                    nextId = el.id;
                }
            });
            newobj.id = nextId + 1;
            this.toDo.push(newobj);
            this.itemText = '';
        }
    },
    mounted() {

    }
}).mount('#app');
