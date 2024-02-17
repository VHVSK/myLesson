"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, title, completed);
});
function logTodo(id, title, completed) {
    console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0456: ".concat(id, ", ").concat(title, ", ").concat(completed));
}
