// npm t demos/quizzes-exercises/id_test.mjs
suite("id_test.mjs");

import * as assert from "assert/strict";
import { id } from "./id.mjs";

test("My test", () => {
    assert.equal(id("abc"), "abc");
});

function hello(x) {
    return "Hello " + x + "!";
}

test("First exercise", () => {
    assert.equal(hello("World"), "Hello World!");
    assert.equal(hello("Jane"), "Hello Jane!");
    assert.equal(hello("John"), "Hello John!");
    assert.equal(hello(""), "Hello !");
});
