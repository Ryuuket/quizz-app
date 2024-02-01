import { writable } from "svelte/store";

interface MyDataItem {
    id: number;
    count: number;
}

export const keepCount = writable<MyDataItem[]>([]);