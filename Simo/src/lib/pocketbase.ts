import { PUBLIC_PB_ADDR } from "$env/static/public";
import PocketBase from "pocketbase";
import { writable } from "svelte/store";

export const pb = new PocketBase(PUBLIC_PB_ADDR);

export const currentUser = writable(pb.authStore.model);
