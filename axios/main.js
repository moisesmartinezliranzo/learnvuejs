var urlUser = 'https://randomuser.me/api/?results=10';
new Vue({
        el: '#main',
        created:function(){
            this.getUsers();
        },
        data: {
            list: []
        },
        methods: {
            getUsers: function () {
                axios.get(urlUser).then(response => {
                    this.list = response.data.results;
                });
            }
        }
    });