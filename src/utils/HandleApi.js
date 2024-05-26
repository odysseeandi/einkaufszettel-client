import axios from 'axios'

const baseUrl = "https://einkaufszettel-neu-backend.onrender.com"

const getAllToDo = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data', data);
        setToDo(data);
    })
}

const addToDo = (text, setText, setToDo) =>{
    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data)
        setText("")
        getAllToDo(setToDo)
    })
}

const updateToDoHandel = (_id, setToDo) =>{
    axios
    .post(`${baseUrl}/update`, {_id})
    .then((data) => {
        console.log(data)
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

const deleteToDoHandel = (_id, setToDo) =>{
    axios
    .post(`${baseUrl}/delete`, {_id})
    .then((data) => {
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

export {getAllToDo, addToDo, deleteToDoHandel, updateToDoHandel}