

export function getTodos(){
        return JSON.parse(localStorage.getItem('todos'));
}

export function saveTodos(todos){
    localStorage.setItem("todos",JSON.stringify(todos));
}

export function saveCurrentId(id){
    localStorage.setItem("id", id);
}

export function getCurrentId(){
    return localStorage.getItem("id");
}