import { create } from 'zustand';

export const useStore = create((set) => ({
    deleteAllTodosState: false,
    setDeleteAllTodosState: (value) => set({ deleteAllTodosState: value }),
}));