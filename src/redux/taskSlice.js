import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    filter: 'all',
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), description: action.payload, isDone: false });
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    editTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload.id);
      if (task) {
        task.description = action.payload.description;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    filterTasks: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { addTask, toggleTask, editTask, deleteTask, filterTasks } = taskSlice.actions;
export default taskSlice.reducer;
