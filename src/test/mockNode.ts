import {setupServer} from "msw/node";
import {handlers} from "./mockHandlers.ts";

export const server = setupServer(...handlers);