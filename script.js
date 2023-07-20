const HelloVueApp = {
    data() {
        return {
            stringButton: 'Перевернуть',
            list: ['Первый', 'Второй', 'Третий']
        }
    },
    methods: {
        toReverse() {
            this.stringButton = this.stringButton.split('').reverse().join('');
        },
        addElement() {
            this.list.push('Новый элемент списка');
        },
        removeElement(string) {
            let isFound = false;
            const newArray = [];
            for (let i = 0; i < this.list.length; i++) {
                if (string === this.list[i] && !isFound) {
                    isFound = !isFound;
                } else {
                    newArray.push(this.list[i]);
                }
            };
            this.list = newArray;
        }
    }
};
Vue.createApp(HelloVueApp).mount('#app');