new Vue({
    el: '#main',
    data: {
        people: ['Juan', 'Maria', 'Jose', 'Antonia'],
        title:"Listas con VueJS 2",
        name: '',
    },
    methods: {
        addName: function () {
            this.people.push(this.name);
            this.name = "";
        }
    }
});