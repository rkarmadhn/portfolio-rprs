import { describe, expect } from "vitest";

function add(a, b) {
  return a + b;
}

describe("add function two number", () => {
  const result = add(2, 2);

  it("should add number", () => {
    expect(result).toBe(4);
  });
});
