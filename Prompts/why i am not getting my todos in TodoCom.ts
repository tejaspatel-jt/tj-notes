why i am not getting my todos in TodoComponent.

below is code of all the files.

// src/components/TodoComponent.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchTodosRequest,
    createTodoRequest,
    updateTodoRequest,
    deleteTodoRequest,
} from '../redux/reducers/todo.actions';

const TodoComponent = () => {
    const dispatch = useDispatch();
    // const todos = useSelector(state => state.data.todos); // Access the todos from the Redux store
    const todos = useSelector(state => state.todos); // Access the todos from the Redux store
    console.log('tj_ tc todos = ',todos);
    const error = useSelector(state => state.data.error); // Access any error messages from the Redux store
    const [newTodo, setNewTodo] = useState(''); // State for the new todo input

    useEffect(() => {
        dispatch(fetchTodosRequest()); // Dispatch action to fetch todos on component mount
    }, [dispatch]);

    return (
        <div>
            <h1>Todo List</h1>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>} {/* Display error if exists */}
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)} // Update state with the input value
                placeholder="Add a new todo"
            />
            <button onClick={handleCreateTodo}>Add Todo</button> {/* Button to add a new todo */}
            <ul>
                
            </ul>
        </div>
    );
};

export default TodoComponent;

// src/redux/reducers/todo.actions.js
export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';

// Action Creators
export const fetchTodosRequest = () => ({ type: FETCH_TODOS_REQUEST });

// src/redux/sagas/todoSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import { 
    FETCH_TODOS_REQUEST, 
    fetchTodosSuccess, 
    fetchTodosFailure, 
} from '../reducers/todo.actions';
import * as api from '../../api/apiClient'; // Import the API service

// Fetch Todos
function* fetchTodos() {

    console.log('tj_ ts fetchTodos');
    try {
        const response = yield call(api.fetchTodos); // Call the API service
        console.log('tj_ ts fetchTodos response',response);
        yield put(fetchTodosSuccess(response.data)); // Dispatch success action with data
    } catch (error) {
        yield put(fetchTodosFailure(error.message)); // Dispatch failure action with error
    }
}
// Watcher Saga
export function* watchTodos() {
    yield takeEvery(FETCH_TODOS_REQUEST, fetchTodos);
}

// src/api/apiClient.js
import axios from 'axios';

// const API_URL = 'https://api.example.com/todos'; // Replace with your actual API URL
// const API_URL = 'http://localhost:3500/'; // Replace with your actual API URL
const API_URL = 'http://localhost:3500'; // Replace with your actual API URL

// Create an Axios instance
const api = axios.create({
    baseURL: API_URL,
});

// API calls
export const fetchTodos = () => api.get('/todos');
export const createTodo = (todo) => api.post('/', todo);
export const updateTodo = (id, todo) => api.put(`/${id}`, todo);
export const deleteTodo = (id) => api.delete(`/${id}`);

// src/redux/sagas/index.js
import { all } from 'redux-saga/effects';
import { watchFetchData } from './dataSaga';
import { watchTodos } from '../sagas/todoSaga';

export default function* rootSaga() {
    yield all([

        // Combine all sagas here

        watchFetchData(), 
        watchTodos(), 
    ]);
}

// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; // Import the root reducer
import rootSaga from './sagas'; // Import the root saga

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the Redux store
const store = configureStore({
    reducer: rootReducer, // Set the root reducer
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(sagaMiddleware), // Add saga middleware
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;