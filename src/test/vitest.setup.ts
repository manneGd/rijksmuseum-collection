import { beforeAll, afterEach, afterAll } from "vitest";
import {server} from "./mockNode.ts";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());