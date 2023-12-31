import type { CounterSchema } from "entities/Counter/model/types/counterSchema";
import { counterReducer } from "../Counter/model/slice/counterSlice";
import { Counter } from "../Counter/ui/Counter";

export { counterReducer, Counter, CounterSchema };
