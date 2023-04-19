import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducer";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({ reducer: counterReducer });

export type UseAppDispatch = typeof store.dispatch
export const useAppDispatch: () => UseAppDispatch = useDispatch

export type State = ReturnType<typeof store.getState>;
export type UseAppSelector = <T,>(selector: (state: State) => T) => T
export const useAppSelector: <T,>(selector: (state: State) => T) => T = useSelector
