'use strict';

const tasks = new Map();

function todo(task) {
    tasks.set(task, false);
}

module.exports = {
  todo: todo
};


