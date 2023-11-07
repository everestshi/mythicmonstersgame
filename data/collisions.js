"use strict";

const collisions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 0, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 21856, 0, 21856, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 21856, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 21856, 0, 0, 21856, 0, 0, 21856, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 0, 21856, 21856, 21856, 21856, 0, 21856, 0, 0, 21856, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 21856, 21856, 21856, 21856, 0, 0, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 21856, 0, 21856, 0, 21856, 0, 0, 21856, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 21856, 21856, 21856, 0, 0, 0, 21856, 21856, 0, 0, 0, 21856, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 21856, 0, 21856, 0, 21856, 21856, 21856, 21856, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 21856, 0, 0, 0, 21856, 21856, 21856, 0, 0, 21856, 0, 0, 21856, 0, 0, 21856, 21856, 21856, 21856, 21856, 0, 0, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 21856, 21856, 21856, 0, 0, 0, 0, 21856, 21856, 21856, 0, 0, 21856, 0, 21856, 21856, 0, 0, 21856, 0, 0, 0, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 21856, 21856, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 21856, 0, 21856, 0, 0, 0, 0, 21856, 0, 21856, 0, 0, 21856, 0, 0, 21856, 0, 0, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 21856, 21856, 21856, 0, 0, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 0, 0, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 21856, 0, 21856, 0, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 21856, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 21856, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 21856, 21856, 21856, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 21856, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 21856, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 0, 0, 0, 0, 21856, 0, 0, 21856, 0, 21856, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 21856, 21856, 21856, 0, 0, 21856, 21856, 21856, 0, 0, 21856, 0, 0, 21856, 21856, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 21856, 21856, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 21856, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 21856, 21856, 21856, 0, 0, 0, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 0, 21856, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 21856, 0, 21856, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 21856, 0, 0, 0, 0, 21856, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 21856, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 0, 0, 0, 21856, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 0, 0, 0, 21856, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 21856, 0, 0, 21856, 21856, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 0, 0, 21856, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 21856, 21856, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 0, 0, 21856, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 21856, 21856, 0, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 0, 21856, 21856, 21856, 21856, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21856, 21856, 0, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 21856, 0, 21856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];