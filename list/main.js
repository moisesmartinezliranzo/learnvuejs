new Vue({
    el: '#main',
    data: {
        people: ['Juan', 'Maria', 'Jose', 'Antonia']
    },
    name: '',
    methods: {
        addName: function () {
            this.people.push(this.name);
            this.name = "";
        }
    }
});