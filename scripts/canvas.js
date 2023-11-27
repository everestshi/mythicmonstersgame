//initialize game canvas and context-----------
const canvas = $("#gameCanvas")[0];
const context = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const offset = {
  x: -544,
  y: -2750,
};