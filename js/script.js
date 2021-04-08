function initVue() {
    new Vue({
        el: '#app',
        data: {
            todos: [],
            newTodo : ''
        },
        methods: {
            createNewTodo: function() {

                if (this.newTodo.length > 0){
                    this.todos.push(this.newTodo);
                    this.newTodo = '';
                }
            },
            clickDeleteTodo: function(index) {
                this.todos.splice(index,1);

            }
        }
    });
}
function init() {
    initVue();
}
document.addEventListener('DOMContentLoaded', init);















