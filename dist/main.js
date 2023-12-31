/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _taskHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskHandler.js */ \"./src/taskHandler.js\");\n/* harmony import */ var _projectHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectHandler.js */ \"./src/projectHandler.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var myProjects = [];\n  if (localStorage.getItem('projectTitles')) {\n    myProjects.push.apply(myProjects, _toConsumableArray(JSON.parse(localStorage.getItem('projectTitles'))));\n    var _iterator = _createForOfIteratorHelper(myProjects),\n      _step;\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var title = _step.value;\n        (0,_projectHandler_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(title);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  }\n  refreshEventListeners();\n  var createProjectBtn = document.querySelector('#create-project-button');\n  createProjectBtn.addEventListener('click', function () {\n    var projectTitle = prompt('Type in your project name');\n    if (projectTitle) {\n      (0,_projectHandler_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(projectTitle);\n      myProjects.push(projectTitle);\n      localStorage.setItem('projectTitles', JSON.stringify(myProjects));\n      console.log(myProjects);\n    } else {\n      alert('You must input a name to your project to create it.');\n    }\n    myProjects.push(projectTitle);\n    localStorage.setItem('projectTitles', JSON.stringify(myProjects));\n    refreshProjectEventListeners();\n  });\n  var currentProjectID; // maybe add this as the return of refreshEventListeners?\n  var currentProject;\n  function refreshProjectEventListeners() {\n    var projects = document.querySelectorAll('.project');\n    projects.forEach(function (project) {\n      project.addEventListener('click', function () {\n        currentProjectID = project.id;\n        currentProject = project;\n        // console.log();\n        (0,_projectHandler_js__WEBPACK_IMPORTED_MODULE_1__.getProjectTasks)(currentProjectID);\n      });\n    });\n  }\n  var addTaskBtn = document.querySelector('#add-task-button');\n  var createTaskBtn = document.querySelector('#task-creation-button');\n  var taskTitle = document.querySelector('#task-title');\n  var taskDueDate = document.querySelector('#task-due-date');\n  var returnToProjectsBtn = document.querySelector('#projects-button');\n  var deleteProjectBtn = document.querySelector('#delete-project-button');\n  var taskCount = 1;\n  addTaskBtn.addEventListener('click', function () {\n    (0,_taskHandler_js__WEBPACK_IMPORTED_MODULE_0__.showTaskForm)();\n  });\n  createTaskBtn.addEventListener('click', function (e) {\n    (0,_taskHandler_js__WEBPACK_IMPORTED_MODULE_0__.Task)(taskTitle.value, taskDueDate.value, taskCount, currentProject);\n    taskCount++;\n    taskTitle.value === '';\n    taskDueDate.value === '';\n  });\n  returnToProjectsBtn.addEventListener('click', function () {\n    (0,_taskHandler_js__WEBPACK_IMPORTED_MODULE_0__.hideTaskForm)();\n    (0,_projectHandler_js__WEBPACK_IMPORTED_MODULE_1__.displayProjects)();\n  });\n  deleteProjectBtn.addEventListener('click', function () {\n    (0,_projectHandler_js__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(currentProject, myProjects);\n    refreshEventListeners();\n  });\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/projectHandler.js":
/*!*******************************!*\
  !*** ./src/projectHandler.js ***!
  \*******************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\src\\\\projectHandler.js: Identifier 'deleteProject' has already been declared. (72:16)\\n\\n\\u001b[0m \\u001b[90m 70 |\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 71 |\\u001b[39m }\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 72 |\\u001b[39m \\u001b[36mexport\\u001b[39m \\u001b[36mfunction\\u001b[39m deleteProject(project\\u001b[33m,\\u001b[39m allProjects) {\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m                 \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 73 |\\u001b[39m     project\\u001b[33m.\\u001b[39mremove()\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 74 |\\u001b[39m     allProjects\\u001b[33m.\\u001b[39mforEach(singleProject \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 75 |\\u001b[39m         \\u001b[36mif\\u001b[39m (singleProject \\u001b[33m===\\u001b[39m project\\u001b[33m.\\u001b[39mid) {\\u001b[0m\\n    at constructor (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:356:19)\\n    at Parser.raise (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3223:19)\\n    at ScopeHandler.checkRedeclarationInScope (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:1496:19)\\n    at ScopeHandler.declareName (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:1467:12)\\n    at Parser.registerFunctionStatementId (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13339:16)\\n    at Parser.parseFunction (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13323:12)\\n    at Parser.parseFunctionStatement (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12984:17)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12614:21)\\n    at Parser.parseStatementLike (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12588:17)\\n    at Parser.parseStatementListItem (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12568:17)\\n    at Parser.parseExportDeclaration (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13835:17)\\n    at Parser.maybeParseExportDeclaration (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13790:31)\\n    at Parser.parseExport (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13713:29)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12715:27)\\n    at Parser.parseStatementLike (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12588:17)\\n    at Parser.parseModuleItem (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12565:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13189:36)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13182:10)\\n    at Parser.parseProgram (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12464:10)\\n    at Parser.parseTopLevel (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12454:25)\\n    at Parser.parse (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:14376:10)\\n    at parse (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:14417:38)\\n    at parser (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\parser\\\\index.js:41:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:64:37)\\n    at normalizeFile.next (<anonymous>)\\n    at run (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:21:50)\\n    at run.next (<anonymous>)\\n    at transform (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:22:33)\\n    at transform.next (<anonymous>)\\n    at step (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\gensync\\\\index.js:261:32)\\n    at C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\gensync\\\\index.js:273:13\\n    at async.call.result.err.err (C:\\\\Users\\\\User\\\\Desktop\\\\Programming\\\\The Odin Project\\\\todo-list\\\\node_modules\\\\gensync\\\\index.js:223:11)\");\n\n//# sourceURL=webpack://my-webpack-project/./src/projectHandler.js?");

/***/ }),

/***/ "./src/taskHandler.js":
/*!****************************!*\
  !*** ./src/taskHandler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   hideTaskForm: () => (/* binding */ hideTaskForm),\n/* harmony export */   showTaskForm: () => (/* binding */ showTaskForm)\n/* harmony export */ });\nvar tasksContainer = document.querySelector('#tasks-container');\n\n// const taskPriority = document.querySelector('#task-priority');\nvar taskList = [];\nfunction Task(title, dueDate, taskCount, parentProject) {\n  var newTask = {};\n  newTask.title = title;\n  newTask.dueDate = dueDate;\n  newTask.priority = function () {\n    var priorityElement = document.querySelector('#priority');\n    console.log(\"Priority of task '\".concat(newTask.title, \"' is \").concat(priorityElement.value, \".\"));\n    return priorityElement.value;\n  }();\n  newTask.project = parentProject;\n  displayTask(newTask, taskCount, parentProject);\n  taskList.push(newTask);\n  return newTask;\n}\nfunction displayTask(task, count, parentProject) {\n  var div = document.createElement('div');\n  div.classList.add('task', 'mt-1', 'bg-secondary', 'rounded', 'p-2', 'ps-3');\n  div.id = \"task\".concat(count);\n  console.log(div.id);\n  var rowDiv = document.createElement('div');\n  rowDiv.classList.add('row');\n  div.appendChild(rowDiv);\n  var colDiv1 = document.createElement('div');\n  colDiv1.classList.add('col-sm');\n  var input = document.createElement(\"input\");\n  input.type = 'checkbox';\n  colDiv1.appendChild(input);\n  var para1 = document.createElement('p');\n  para1.textContent = task.title;\n  para1.classList.add('d-inline', 'ps-2');\n  colDiv1.appendChild(para1);\n  rowDiv.appendChild(colDiv1);\n  var colDiv2 = document.createElement('div');\n  colDiv2.classList.add('col-sm');\n  colDiv2.textContent = \"Due date: \".concat(task.dueDate);\n  rowDiv.appendChild(colDiv2);\n  var img = document.createElement('img');\n  img.classList.add('delete-button');\n  img.src = '../src/icons/delete-icon.svg';\n  img.title = 'Delete Task';\n  img.innerHTML = \"<title>Delete Task</title>\\n    <path\\n        d=\\\"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z\\\" />\";\n  img.addEventListener('click', function () {\n    div.remove();\n    console.log(\"Successfully removed \".concat(div.id, \".\"));\n  });\n  colDiv2.appendChild(img);\n  div.setAttribute('data-childofproject', parentProject);\n  console.log('Parent project of the task is ' + parentProject);\n  tasksContainer.appendChild(div);\n}\nfunction showTaskForm() {\n  var TaskCreationContainer = document.querySelector('#task-creation-container');\n  if (TaskCreationContainer.classList.contains('d-none')) {\n    TaskCreationContainer.classList.remove('d-none');\n    console.log('Showed form');\n  } else {\n    console.log('Task creation container already visible.');\n  }\n}\nfunction hideTaskForm() {\n  var TaskCreationContainer = document.querySelector('#task-creation-container');\n  if (!TaskCreationContainer.classList.contains('d-none')) {\n    TaskCreationContainer.classList.add('d-none');\n    console.log('Hid form');\n  }\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/taskHandler.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;