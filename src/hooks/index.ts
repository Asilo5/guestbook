import { createTypedHooks } from 'easy-peasy'; // 👈import the helper
import { GuestBookStore } from '../interfaces/Store'; // 👈 import our model type

// Provide our model to the helper      👇
const typedHooks = createTypedHooks<GuestBookStore>();

// 👇 export the typed hooks
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;