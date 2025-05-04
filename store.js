import { create } from "zustand";

const useStore = create((set)=>({
    isThemeChangedToDark : false,
    toggleTheme : (value)=>set((state)=>({isThemeChangedToDark : value })),
}))

export default useStore;
