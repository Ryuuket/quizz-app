import { writable } from "svelte/store";

interface MyDataItem {
    id: number;
    selectByUser: string;
}

export const keepSelectedElements = writable<MyDataItem[]>([]);