import Vue from "vue"

export async function fetchTodos ({commit}) {
    try {
        const {data} = await Vue.axios({
            url: '/todos'
        })
        commit('todos/setTodos', data, { root: true })
    } catch (error) {
        commit('todos/todoError', error.message, { root: true })
    }finally{
        console.log("La peticion para obtener los todos ha finalizado.")
    }
}

export async function addTodo ({commit, dispatch}, todo) {
    try {
        await Vue.axios({
            method: 'POST',
            url: '/todos',
            data: {
                id: Date._updteTodoStatusnow(),
                text: todo.text,
                done: false
            }
        })       
        //dispatch('fetchTodos')
    } catch (error) {
        commit('todos/todoError', error.message, { root: true })
    }finally{
        console.log("La peticion para crear un todo ha finalizado.")
    }
}

export async function updateTodo ({commit, dispatch}, todo) {
    try {
        await Vue.axios({
            method: 'PUT',
            url: `/todos/${todo.id}`,
            data: {
                id: todo.id,
                text: todo.text,
                done: todo.done
            }
        })       
        //dispatch('fetchTodos')
    } catch (error) {
        commit('todos/todoError', error.message, { root: true })
    }finally{
        console.log("La peticion para actualizar un todo ha finalizado.")
    }
}

export async function updateTodoStatus ({commit, dispatch}, todo) {
    try {
        await Vue.axios({
            method: 'PUT',
            url: `/todos/${todo.id}`,
            data: {
                id: todo.id,
                text: todo.text,
                done: !todo.done
            }
        })       
        dispatch('fetchTodos')
    } catch (error) {
        commit('todos/todoError', error.message, { root: true })
    }finally{
        console.log("La peticion para actualizar el estado de un todo ha finalizado.")
    }
}

export async function removeTodo ({commit, dispatch}, id) {
    try {
        await Vue.axios({
            method: 'DELETE',
            url: `/todos/${id}`
        })       
        dispatch('fetchTodos')
    } catch (error) {
        commit('todos/todoError', error.message, { root: true })
    }finally{
        console.log("La peticion para actualizar el estado de un todo ha finalizado.")
    }
}