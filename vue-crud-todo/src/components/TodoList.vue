<template>
    <div v-if="todos.length">
        <todo-item v-for="todo in todos" :key="todo.id" :todo="todo"></todo-item>
    </div>
    <b-alert show variant="info" v-else>No hay todos</b-alert>
</template>

<script>
    import TodoItem from './TodoItem'
    export default {
        components: {
            TodoItem
        },
        props: {
            todos: {
                type: Array,
                required: true
            }
        }
    }
</script>
