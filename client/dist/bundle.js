/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/engine/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/engine/constants.js":
/*!****************************************!*\
  !*** ./client/src/engine/constants.js ***!
  \****************************************/
/*! exports provided: wolfPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wolfPath\", function() { return wolfPath; });\nconst assetsPath = '/client/assets';\n\nconst wolfPath = `${assetsPath}/wolf`;\n\n\n//# sourceURL=webpack:///./client/src/engine/constants.js?");

/***/ }),

/***/ "./client/src/engine/index.js":
/*!************************************!*\
  !*** ./client/src/engine/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./client/src/engine/constants.js\");\n\n\n// just a few helper functions\nvar $ = function(id) { return document.getElementById(id); };\nvar dc = function(tag) { return document.createElement(tag); };\n\n// indexOf for IE. From: https://developer.mozilla.org/En/Core_JavaScript_1.5_Reference:Objects:Array:indexOf\nif (!Array.prototype.indexOf) {\n\tArray.prototype.indexOf = function(elt /*, from*/) {\n\t\tvar len = this.length;\n\t\tvar from = Number(arguments[1]) || 0;\n\t\tfrom = (from < 0) ? Math.ceil(from) : Math.floor(from);\n\t\tif (from < 0)\n\t\t\tfrom += len;\n\t\tfor (; from < len; from++) {\n\t\t\tif (from in this && this[from] === elt)\n\t\t\t\treturn from;\n\t\t}\n\t\treturn -1;\n\t};\n}\n\n\nvar map = [\n\t[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], \t// 0\n\t[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], \t// 1\n\t[1, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], \t// 2\n\t[1, 0, 0, 3, 0, 3, 0, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1], \t// 3\n\t[1, 0, 0, 3, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], \t// 4\n\t[1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], \t// 5\n\t[1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1], \t// 6\n\t[1, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], \t// 7\n\t[1, 0, 0, 3, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], \t// 8\n\t[1, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], \t// 9\n\t[1, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1], \t// 10\n\t[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], \t// 11\n\t[1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], \t// 12\n\t[1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], \t// 13\n\t[1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1], \t// 14\n\t[1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], \t// 15\n\t[1, 0, 0, 4, 0, 0, 4, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 4, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1], \t// 16\n\t[1, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1], \t// 17\n\t[1, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1], \t// 18\n\t[1, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1], \t// 19\n\t[1, 0, 0, 4, 3, 3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 3, 3, 4, 0, 0, 0, 0, 0, 0, 0, 1], \t// 20\n\t[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], \t// 21\n\t[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], \t// 22\n\t[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]\t// 23\n];\n//\t 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 \n\nvar itemTypes = [\n\t{ img : \"tablechairs.png\", block : true },\t// 0\n\t{ img : \"armor.png\", block : true },\t\t// 1\n\t{ img : \"plantgreen.png\", block : true },\t// 2\n\t{ img : \"lamp.png\", block : false }\t\t// 3\n];\n\nvar mapItems = [\n\n\t// lamps in center area\n\t{type:3, x:10, y:7},\n\t{type:3, x:15, y:7},\n\n\t// lamps in bottom corridor\n\t{type:3, x:5, y:22},\n\t{type:3, x:12, y:22},\n\t{type:3, x:19, y:22},\n\n\t// tables in long bottom room\n\t{type:0, x:10, y:18},\n\t{type:0, x:15, y:18},\n\t// lamps in long bottom room\n\t{type:3, x:8, y:18},\n\t{type:3, x:17, y:18}\n];\n\n\nvar enemyTypes = [\n\t{ img : `${_constants__WEBPACK_IMPORTED_MODULE_0__[\"wolfPath\"]}/guard.png`, moveSpeed : 0.05, rotSpeed : 3, totalStates : 13 }\n];\n\nvar mapEnemies = [\n\t{type : 0, x : 17.5, y : 4.5},\n\t{type : 0, x : 25.5, y : 16.5}\n];\n\nvar player = {\n\tx : 10.5,\t\t// current x, y position\n\ty : 6.5,\n\tdir : 0,\t\t// the direction that the player is turning, either -1 for left or 1 for right.\n\trotDeg : 0,\t\t// the current angle of rotation \n\trot : 0,\t\t// rotation in radians\n\tspeed : 0,\t\t// is the playing moving forward (speed = 1) or backwards (speed = -1).\n\tmoveSpeed : 0.10,\t// how far (in map units) does the player move each step/update\n\trotSpeed : 3\t\t// how much does the player rotate each step/update (in degrees)\n}\n\nvar mapWidth = 0;\nvar mapHeight = 0;\n\nvar miniMapScale = 8;\n\nvar screenWidth = 320;\nvar screenHeight = 200;\n\nvar showOverlay = true;\n\nvar stripWidth = 3;\nvar fov = 60 * Math.PI / 180;\n\nvar numRays = Math.ceil(screenWidth / stripWidth);\nvar fovHalf = fov / 2;\n\nvar viewDist = (screenWidth/2) / Math.tan((fov / 2));\n\nvar twoPI = Math.PI * 2;\n\nvar numTextures = 4;\nvar wallTextures = [\n\t\"walls-1.png\",\n\t\"walls-2.png\",\n\t\"walls-3.png\",\n\t\"walls-4.png\"\n];\n\nvar userAgent = navigator.userAgent.toLowerCase();\nvar isGecko = userAgent.indexOf(\"gecko\") != -1 && userAgent.indexOf(\"safari\") == -1;\n\n// enable this to use a single image file containing all wall textures. This performs better in Firefox. Opera likes smaller images.\nvar useSingleTexture = isGecko;\n\n\nvar screenStrips = [];\nvar overlay;\n\nvar fps = 0;\nvar overlayText = \"\";\n\nfunction init() {\n\n\tmapWidth = map[0].length;\n\tmapHeight = map.length;\n\n\tbindKeys();\n\n\tinitScreen();\n\n\tinitSprites();\n\n\tinitEnemies();\n\n\tdrawMiniMap();\n\n\tgameCycle();\n\trenderCycle();\n}\n\nvar enemies = [];\n\nfunction initEnemies() {\n\tvar screen = $(\"screen\");\n\n\tfor (var i=0;i<mapEnemies.length;i++) {\n\t\tvar enemy = mapEnemies[i];\n\t\tvar type = enemyTypes[enemy.type];\n\t\tvar img = dc(\"img\");\n\t\timg.src = type.img;\n\t\timg.style.display = \"none\";\n\t\timg.style.position = \"absolute\";\n\n\t\tenemy.state = 0;\n\t\tenemy.rot = 0;\n\t\tenemy.rotDeg = 0;\n\t\tenemy.dir = 0;\n\t\tenemy.speed = 0;\n\t\tenemy.moveSpeed = type.moveSpeed;\n\t\tenemy.rotSpeed = type.rotSpeed;\n\t\tenemy.totalStates = type.totalStates;\n\n\t\tenemy.oldStyles = {\n\t\t\tleft : 0,\n\t\t\ttop : 0,\n\t\t\twidth : 0,\n\t\t\theight : 0,\n\t\t\tclip : \"\",\n\t\t\tdisplay : \"none\",\n\t\t\tzIndex : 0\n\t\t};\n\n\t\tenemy.img = img;\n\t\tenemies.push(enemy);\n\n\t\tscreen.appendChild(img);\n\t}\n}\n\n\nvar spriteMap;\nvar visibleSprites = [];\nvar oldVisibleSprites = [];\n\nfunction initSprites() {\n\tspriteMap = [];\n\tfor (var y=0;y<map.length;y++) {\n\t\tspriteMap[y] = [];\n\t}\n\n\tvar screen = $(\"screen\");\n\n\tfor (var i=0;i<mapItems.length;i++) {\n\t\tvar sprite = mapItems[i];\n\t\tvar itemType = itemTypes[sprite.type];\n\t\tvar img = dc(\"img\");\n\t\timg.src = _constants__WEBPACK_IMPORTED_MODULE_0__[\"wolfPath\"] + '/' + itemType.img;\n\t\timg.style.display = \"none\";\n\t\timg.style.position = \"absolute\";\n\n\t\tsprite.visible = false;\n\t\tsprite.block = itemType.block;\n\t\tsprite.img = img;\n\n\t\tspriteMap[sprite.y][sprite.x] = sprite;\n\t\tscreen.appendChild(img);\n\t}\n\n}\n\n\nvar lastGameCycleTime = 0;\nvar gameCycleDelay = 1000 / 30; // aim for 30 fps for game logic\n\nfunction gameCycle() {\n\tvar now = new Date().getTime();\n\n\t// time since last game logic\n\tvar timeDelta = now - lastGameCycleTime;\n\n\tmove(player, timeDelta);\n\n\tai(timeDelta);\n\n\tvar cycleDelay = gameCycleDelay; \n\n\t// the timer will likely not run that fast due to the rendering cycle hogging the cpu\n\t// so figure out how much time was lost since last cycle\n\n\tif (timeDelta > cycleDelay) {\n\t\tcycleDelay = Math.max(1, cycleDelay - (timeDelta - cycleDelay))\n\t}\n\n\tsetTimeout(gameCycle, cycleDelay);\n\n\tlastGameCycleTime = now;\n}\n\nfunction ai(timeDelta) {\n\tfor (var i=0;i<enemies.length;i++) {\n\t\tvar enemy = enemies[i];\n\n\t\tvar dx = player.x - enemy.x;\n\t\tvar dy = player.y - enemy.y;\n\n\t\tvar dist = Math.sqrt(dx*dx + dy*dy);\n\t\tif (dist > 4) {\n\t\t\tvar angle = Math.atan2(dy, dx);\n\n\t\t\tenemy.rotDeg = angle * 180 / Math.PI;\n\t\t\tenemy.rot = angle;\n\t\t\tenemy.speed = 1;\n\n\t\t\tvar walkCycleTime = 1000;\n\t\t\tvar numWalkSprites = 4;\n\n\t\t\tenemy.state = Math.floor((new Date() % walkCycleTime) / (walkCycleTime / numWalkSprites)) + 1;\n\n\t\t} else {\n\t\t\tenemy.state = 0;\n\t\t\tenemy.speed = 0;\n\t\t}\n\n\t\tmove(enemies[i], timeDelta);\n\t}\n}\n\nvar lastRenderCycleTime = 0;\n\nfunction renderCycle() {\n\n\tupdateMiniMap();\n\n\tclearSprites();\n\n\tcastRays();\n\n\trenderSprites();\n\n\trenderEnemies();\n\n\t// time since last rendering\n\tvar now = new Date().getTime();\n\tvar timeDelta = now - lastRenderCycleTime;\n\tvar cycleDelay = 1000 / 30;\n\tif (timeDelta > cycleDelay) {\n\t\tcycleDelay = Math.max(1, cycleDelay - (timeDelta - cycleDelay))\n\t}\n\tlastRenderCycleTime = now;\n\tsetTimeout(renderCycle, cycleDelay);\n\n\tfps = 1000 / timeDelta;\n\tif (showOverlay) {\n\t\tupdateOverlay();\n\t}\n}\nfunction clearSprites() {\n\t// clear the visible sprites array but keep a copy in oldVisibleSprites for later.\n\t// also mark all the sprites as not visible so they can be added to visibleSprites again during raycasting.\n\toldVisibleSprites = [];\n\tfor (var i=0;i<visibleSprites.length;i++) {\n\t\tvar sprite = visibleSprites[i];\n\t\toldVisibleSprites[i] = sprite;\n\t\tsprite.visible = false;\n\t}\n\tvisibleSprites = [];\n}\n\nfunction renderSprites() {\n\n\tfor (var i=0;i<visibleSprites.length;i++) {\n\t\tvar sprite = visibleSprites[i];\n\t\tvar img = sprite.img;\n\t\timg.style.display = \"block\";\n\n\t\t// translate position to viewer space\n\t\tvar dx = sprite.x + 0.5 - player.x;\n\t\tvar dy = sprite.y + 0.5 - player.y;\n\n\t\t// distance to sprite\n\t\tvar dist = Math.sqrt(dx*dx + dy*dy);\n\n\t\t// sprite angle relative to viewing angle\n\t\tvar spriteAngle = Math.atan2(dy, dx) - player.rot;\n\n\t\t// size of the sprite\n\t\tvar size = viewDist / (Math.cos(spriteAngle) * dist);\n\n\t\tif (size <= 0) continue;\n\n\t\t// x-position on screen\n\t\tvar x = Math.tan(spriteAngle) * viewDist;\n\n\t\timg.style.left = (screenWidth/2 + x - size/2) + \"px\";\n\n\t\t// y is constant since we keep all sprites at the same height and vertical position\n\t\timg.style.top = ((screenHeight-size)/2)+\"px\";\n\n\t\timg.style.width = size + \"px\";\n\t\timg.style.height =  size + \"px\";\n\n\t\tvar dbx = sprite.x - player.x;\n\t\tvar dby = sprite.y - player.y;\n\t\tvar blockDist = dbx*dbx + dby*dby;\n\t\timg.style.zIndex = -Math.floor(blockDist*1000);\n\t}\n\n\t// hide the sprites that are no longer visible\n\tfor (var i=0;i<oldVisibleSprites.length;i++) {\n\t\tvar sprite = oldVisibleSprites[i];\n\t\tif (visibleSprites.indexOf(sprite) < 0) {\n\t\t\tsprite.visible = false;\n\t\t\tsprite.img.style.display = \"none\";\n\t\t}\n\t}\n\n}\nfunction renderEnemies() {\n\n\tfor (var i=0;i<enemies.length;i++) {\n\t\tvar enemy = enemies[i];\n\t\tvar img = enemy.img;\n\n\t\tvar dx = enemy.x - player.x;\n\t\tvar dy = enemy.y - player.y;\n\n\t\tvar angle = Math.atan2(dy, dx) - player.rot;\n\n\t\tif (angle < -Math.PI) angle += 2*Math.PI;\n\t\tif (angle >= Math.PI) angle -= 2*Math.PI;\n\n\t\t// is enemy in front of player? Maybe use the FOV value instead.\n\t\tif (angle > -Math.PI*0.5 && angle < Math.PI*0.5) {\n\t\t\tvar distSquared = dx*dx + dy*dy;\n\t\t\tvar dist = Math.sqrt(distSquared);\n\t\t\tvar size = viewDist / (Math.cos(angle) * dist);\n\n\t\t\tif (size <= 0) continue;\n\n\t\t\tvar x = Math.tan(angle) * viewDist;\n\n\t\t\tvar style = img.style;\n\t\t\tvar oldStyles = enemy.oldStyles;\n\n\t\t\t// height is equal to the sprite size\n\t\t\tif (size != oldStyles.height) {\n\t\t\t\tstyle.height =  size + \"px\";\n\t\t\t\toldStyles.height = size;\n\t\t\t}\n\n\t\t\t// width is equal to the sprite size times the total number of states\n\t\t\tvar styleWidth = size * enemy.totalStates;\n\t\t\tif (styleWidth != oldStyles.width) {\n\t\t\t\tstyle.width = styleWidth + \"px\";\n\t\t\t\toldStyles.width = styleWidth;\n\t\t\t}\n\n\t\t\t// top position is halfway down the screen, minus half the sprite height\n\t\t\tvar styleTop = ((screenHeight-size)/2);\n\t\t\tif (styleTop != oldStyles.top) {\n\t\t\t\tstyle.top = styleTop + \"px\";\n\t\t\t\toldStyles.top = styleTop;\n\t\t\t}\n\n\t\t\t// place at x position, adjusted for sprite size and the current sprite state\n\t\t\tvar styleLeft = (screenWidth/2 + x - size/2 - size*enemy.state);\n\t\t\tif (styleLeft != oldStyles.left) {\n\t\t\t\tstyle.left = styleLeft + \"px\";\n\t\t\t\toldStyles.left = styleLeft;\n\t\t\t}\n\n\t\t\tvar styleZIndex = -(distSquared*1000)>>0;\n\t\t\tif (styleZIndex != oldStyles.zIndex) {\n\t\t\t\tstyle.zIndex = styleZIndex;\n\t\t\t\toldStyles.zIndex = styleZIndex;\n\t\t\t}\n\n\t\t\tvar styleDisplay = \"block\";\n\t\t\tif (styleDisplay != oldStyles.display) {\n\t\t\t\tstyle.display = styleDisplay;\n\t\t\t\toldStyles.display = styleDisplay;\n\t\t\t}\n\n\t\t\tvar styleClip = \"rect(0, \" + (size*(enemy.state+1)) + \", \" + size + \", \" + (size*(enemy.state)) + \")\";\n\t\t\tif (styleClip != oldStyles.clip) {\n\t\t\t\tstyle.clip = styleClip;\n\t\t\t\toldStyles.clip = styleClip;\n\t\t\t}\n\t\t} else {\n\t\t\tvar styleDisplay = \"none\";\n\t\t\tif (styleDisplay != enemy.oldStyles.display) {\n\t\t\t\timg.style.display = styleDisplay;\n\t\t\t\tenemy.oldStyles.display = styleDisplay;\n\t\t\t}\n\t\t}\n\t}\n}\n\nfunction updateOverlay() {\n\toverlay.innerHTML = \"FPS: \" + fps.toFixed(1) + \"<br/>\" + overlayText;\n\toverlayText = \"\";\n}\n\n\nfunction initScreen() {\n\n\tvar screen = $(\"screen\");\n\n\tfor (var i=0;i<screenWidth;i+=stripWidth) {\n\t\tvar strip = dc(\"img\");\n\t\tstrip.style.position = \"absolute\";\n\t\tstrip.style.height = \"0px\";\n\t\tstrip.style.left = strip.style.top = \"0px\";\n\n\t\tif (useSingleTexture) {\n\t\t\tstrip.src = (window.opera ? \"walls_19color.png\" : \"walls.png\");\n\t\t}\n\n\t\tstrip.oldStyles = {\n\t\t\tleft : 0,\n\t\t\ttop : 0,\n\t\t\twidth : 0,\n\t\t\theight : 0,\n\t\t\tclip : \"\",\n\t\t\tsrc : \"\"\n\t\t};\n\n\t\tscreenStrips.push(strip);\n\t\tscreen.appendChild(strip);\n\t}\n\n\t// overlay div for adding text like fps count, etc.\n\toverlay = dc(\"div\");\n\toverlay.id = \"overlay\";\n\toverlay.style.display = showOverlay ? \"block\" : \"none\";\n\tscreen.appendChild(overlay);\n\n}\n\n// bind keyboard events to game functions (movement, etc)\nfunction bindKeys() {\n\n\tdocument.onkeydown = function(e) {\n\t\te = e || window.event;\n\n\t\tswitch (e.keyCode) { // which key was pressed?\n\n\t\t\tcase 38: // up, move player forward, ie. increase speed\n\t\t\t\tplayer.speed = 1;\n\t\t\t\tbreak;\n\n\t\t\tcase 40: // down, move player backward, set negative speed\n\t\t\t\tplayer.speed = -1;\n\t\t\t\tbreak;\n\n\t\t\tcase 37: // left, rotate player left\n\t\t\t\tplayer.dir = -1;\n\t\t\t\tbreak;\n\n\t\t\tcase 39: // right, rotate player right\n\t\t\t\tplayer.dir = 1;\n\t\t\t\tbreak;\n\t\t}\n\t}\n\n\tdocument.onkeyup = function(e) {\n\t\te = e || window.event;\n\n\t\tswitch (e.keyCode) {\n\t\t\tcase 38:\n\t\t\tcase 40:\n\t\t\t\tplayer.speed = 0;\t// stop the player movement when up/down key is released\n\t\t\t\tbreak;\n\t\t\tcase 37:\n\t\t\tcase 39:\n\t\t\t\tplayer.dir = 0;\n\t\t\t\tbreak;\n\t\t}\n\t}\n}\n\n\nfunction castRays() {\n\tvar stripIdx = 0;\n\n\tfor (var i=0;i<numRays;i++) {\n\t\t// where on the screen does ray go through?\n\t\tvar rayScreenPos = (-numRays/2 + i) * stripWidth;\n\n\t\t// the distance from the viewer to the point on the screen, simply Pythagoras.\n\t\tvar rayViewDist = Math.sqrt(rayScreenPos*rayScreenPos + viewDist*viewDist);\n\n\t\t// the angle of the ray, relative to the viewing direction.\n\t\t// right triangle: a = sin(A) * c\n\t\tvar rayAngle = Math.asin(rayScreenPos / rayViewDist);\n\n\t\tcastSingleRay(\n\t\t\tplayer.rot + rayAngle, \t// add the players viewing direction to get the angle in world space\n\t\t\tstripIdx++\n\t\t);\n\t}\n}\n\nfunction castSingleRay(rayAngle, stripIdx) {\n\n\t// first make sure the angle is between 0 and 360 degrees\n\trayAngle %= twoPI;\n\tif (rayAngle < 0) rayAngle += twoPI;\n\n\t// moving right/left? up/down? Determined by which quadrant the angle is in.\n\tvar right = (rayAngle > twoPI * 0.75 || rayAngle < twoPI * 0.25);\n\tvar up = (rayAngle < 0 || rayAngle > Math.PI);\n\n\tvar wallType = 0;\n\n\t// only do these once\n\tvar angleSin = Math.sin(rayAngle);\n\tvar angleCos = Math.cos(rayAngle);\n\n\tvar dist = 0;\t// the distance to the block we hit\n\tvar xHit = 0; \t// the x and y coord of where the ray hit the block\n\tvar yHit = 0;\n\tvar xWallHit = 0;\n\tvar yWallHit = 0;\n\n\tvar textureX;\t// the x-coord on the texture of the block, ie. what part of the texture are we going to render\n\tvar wallX;\t// the (x,y) map coords of the block\n\tvar wallY;\n\n\tvar wallIsShaded = false;\n\n\tvar wallIsHorizontal = false;\n\n\t// first check against the vertical map/wall lines\n\t// we do this by moving to the right or left edge of the block we're standing in\n\t// and then moving in 1 map unit steps horizontally. The amount we have to move vertically\n\t// is determined by the slope of the ray, which is simply defined as sin(angle) / cos(angle).\n\n\tvar slope = angleSin / angleCos; \t// the slope of the straight line made by the ray\n\tvar dXVer = right ? 1 : -1; \t// we move either 1 map unit to the left or right\n\tvar dYVer = dXVer * slope; \t// how much to move up or down\n\n\tvar x = right ? Math.ceil(player.x) : Math.floor(player.x);\t// starting horizontal position, at one of the edges of the current map block\n\tvar y = player.y + (x - player.x) * slope;\t\t\t// starting vertical position. We add the small horizontal step we just made, multiplied by the slope.\n\n\twhile (x >= 0 && x < mapWidth && y >= 0 && y < mapHeight) {\n\t\tvar wallX = (x + (right ? 0 : -1))>>0;\n\t\tvar wallY = (y)>>0;\n\n\t\tif (spriteMap[wallY][wallX] && !spriteMap[wallY][wallX].visible) {\n\t\t\tspriteMap[wallY][wallX].visible = true;\n\t\t\tvisibleSprites.push(spriteMap[wallY][wallX]);\n\t\t}\n\n\t\t// is this point inside a wall block?\n\t\tif (map[wallY][wallX] > 0) {\n\n\t\t\tvar distX = x - player.x;\n\t\t\tvar distY = y - player.y;\n\t\t\tdist = distX*distX + distY*distY;\t// the distance from the player to this point, squared.\n\n\t\t\twallType = map[wallY][wallX]; // we'll remember the type of wall we hit for later\n\t\t\ttextureX = y % 1;\t// where exactly are we on the wall? textureX is the x coordinate on the texture that we'll use later when texturing the wall.\n\t\t\tif (!right) textureX = 1 - textureX; // if we're looking to the left side of the map, the texture should be reversed\n\n\t\t\txHit = x;\t// save the coordinates of the hit. We only really use these to draw the rays on minimap.\n\t\t\tyHit = y;\n\t\t\txWallHit = wallX;\n\t\t\tyWallHit = wallY;\n\n\t\t\t// make horizontal walls shaded\n\t\t\twallIsShaded = true;\n\n\t\t\twallIsHorizontal = true;\n\n\t\t\tbreak;\n\t\t}\n\t\tx = x + dXVer;\n\t\ty = y + dYVer;\n\t}\n\n\t// now check against horizontal lines. It's basically the same, just \"turned around\".\n\t// the only difference here is that once we hit a map block, \n\t// we check if there we also found one in the earlier, vertical run. We'll know that if dist != 0.\n\t// If so, we only register this hit if this distance is smaller.\n\n\tvar slope = angleCos / angleSin;\n\tvar dYHor = up ? -1 : 1;\n\tvar dXHor = dYHor * slope;\n\tvar y = up ? Math.floor(player.y) : Math.ceil(player.y);\n\tvar x = player.x + (y - player.y) * slope;\n\n\twhile (x >= 0 && x < mapWidth && y >= 0 && y < mapHeight) {\n\t\tvar wallY = (y + (up ? -1 : 0))>>0;\n\t\tvar wallX = (x)>>0;\n\n\t\tif (spriteMap[wallY][wallX] && !spriteMap[wallY][wallX].visible) {\n\t\t\tspriteMap[wallY][wallX].visible = true;\n\t\t\tvisibleSprites.push(spriteMap[wallY][wallX]);\n\t\t}\n\n\t\tif (map[wallY][wallX] > 0) {\n\t\t\tvar distX = x - player.x;\n\t\t\tvar distY = y - player.y;\n\t\t\tvar blockDist = distX*distX + distY*distY;\n\t\t\tif (!dist || blockDist < dist) {\n\t\t\t\tdist = blockDist;\n\t\t\t\txHit = x;\n\t\t\t\tyHit = y;\n\t\t\t\txWallHit = wallX;\n\t\t\t\tyWallHit = wallY;\n\n\t\t\t\twallType = map[wallY][wallX];\n\t\t\t\ttextureX = x % 1;\n\t\t\t\tif (up) textureX = 1 - textureX;\n\n\t\t\t\twallIsShaded = false;\n\t\t\t}\n\t\t\tbreak;\n\t\t}\n\t\tx = x + dXHor;\n\t\ty = y + dYHor;\n\t}\n\n\tif (dist) {\n\t\t//drawRay(xHit, yHit);\n\n\t\tvar strip = screenStrips[stripIdx];\n\n\t\tdist = Math.sqrt(dist);\n\n\t\t// use perpendicular distance to adjust for fish eye\n\t\t// distorted_dist = correct_dist / cos(relative_angle_of_ray)\n\t\tdist = dist * Math.cos(player.rot - rayAngle);\n\n\t\t// now calc the position, height and width of the wall strip\n\n\t\t// \"real\" wall height in the game world is 1 unit, the distance from the player to the screen is viewDist,\n\t\t// thus the height on the screen is equal to wall_height_real * viewDist / dist\n\n\t\tvar height = Math.round(viewDist / dist);\n\n\t\t// width is the same, but we have to stretch the texture to a factor of stripWidth to make it fill the strip correctly\n\t\tvar width = height * stripWidth;\n\n\t\t// top placement is easy since everything is centered on the x-axis, so we simply move\n\t\t// it half way down the screen and then half the wall height back up.\n\t\tvar top = Math.round((screenHeight - height) / 2);\n\n\t\tvar imgTop = 0;\n\n\t\tvar style = strip.style;\n\t\tvar oldStyles = strip.oldStyles;\n\n\t\tvar styleHeight;\n\t\tif (useSingleTexture) {\n\t\t\t// then adjust the top placement according to which wall texture we need\n\t\t\timgTop = (height * (wallType-1))>>0;\n\t\t\tvar styleHeight = (height * numTextures)>>0;\n\t\t} else {\n\t\t\tvar styleSrc = _constants__WEBPACK_IMPORTED_MODULE_0__[\"wolfPath\"] + '/' + wallTextures[wallType-1];\n\t\t\tif (oldStyles.src != styleSrc) {\n\t\t\t\tstrip.src = styleSrc;\n\t\t\t\toldStyles.src = styleSrc\n\t\t\t}\n\t\t\tvar styleHeight = height;\n\t\t}\n\n\t\tif (oldStyles.height != styleHeight) {\n\t\t\tstyle.height = styleHeight + \"px\";\n\t\t\toldStyles.height = styleHeight\n\t\t}\n\n\t\tvar texX = Math.round(textureX*width);\n\t\tif (texX > width - stripWidth)\n\t\t\ttexX = width - stripWidth;\n\t\ttexX += (wallIsShaded ? width : 0);\n\n\t\tvar styleWidth = (width*2)>>0;\n\t\tif (oldStyles.width != styleWidth) {\n\t\t\tstyle.width = styleWidth +\"px\";\n\t\t\toldStyles.width = styleWidth;\n\t\t}\n\n\t\tvar styleTop = top - imgTop;\n\t\tif (oldStyles.top != styleTop) {\n\t\t\tstyle.top = styleTop + \"px\";\n\t\t\toldStyles.top = styleTop;\n\t\t}\n\n\t\tvar styleLeft = stripIdx*stripWidth - texX;\n\t\tif (oldStyles.left != styleLeft) {\n\t\t\tstyle.left = styleLeft + \"px\";\n\t\t\toldStyles.left = styleLeft;\n\t\t}\n\n\t\tvar styleClip = \"rect(\" + imgTop + \", \" + (texX + stripWidth)  + \", \" + (imgTop + height) + \", \" + texX + \")\";\n\t\tif (oldStyles.clip != styleClip) {\n\t\t\tstyle.clip = styleClip;\n\t\t\toldStyles.clip = styleClip;\n\t\t}\n\n\t\tvar dwx = xWallHit - player.x;\n\t\tvar dwy = yWallHit - player.y;\n\t\tvar wallDist = dwx*dwx + dwy*dwy;\n\t\tvar styleZIndex = -(wallDist*1000)>>0;\n\t\tif (styleZIndex != oldStyles.zIndex) {\n\t\t\tstrip.style.zIndex = styleZIndex;\n\t\t\toldStyles.zIndex = styleZIndex;\n\t\t}\n\n\t}\n\n}\n\nfunction drawRay(rayX, rayY) {\n\tvar miniMapObjects = $(\"minimapobjects\");\n\tvar objectCtx = miniMapObjects.getContext(\"2d\");\n\n\tobjectCtx.strokeStyle = \"rgba(0,100,0,0.3)\";\n\tobjectCtx.lineWidth = 0.5;\n\tobjectCtx.beginPath();\n\tobjectCtx.moveTo(player.x * miniMapScale, player.y * miniMapScale);\n\tobjectCtx.lineTo(\n\t\trayX * miniMapScale,\n\t\trayY * miniMapScale\n\t);\n\tobjectCtx.closePath();\n\tobjectCtx.stroke();\n}\n\nfunction move(entity, timeDelta) {\n\t// time timeDelta has passed since we moved last time. We should have moved after time gameCycleDelay, \n\t// so calculate how much we should multiply our movement to ensure game speed is constant\n\n\tvar mul = timeDelta / gameCycleDelay;\n\n\tvar moveStep = mul * entity.speed * entity.moveSpeed;\t// entity will move this far along the current direction vector\n\n\tentity.rotDeg += mul * entity.dir * entity.rotSpeed; // add rotation if entity is rotating (entity.dir != 0)\n\tentity.rotDeg %= 360;\n\n\tif (entity.rotDeg < -180) entity.rotDeg += 360;\n\tif (entity.rotDeg >= 180) entity.rotDeg -= 360;\n\n\tvar snap = (entity.rotDeg+360) % 90\n\tif (snap < 2 || snap > 88) {\n\t\tentity.rotDeg = Math.round(entity.rotDeg / 90) * 90;\n\t}\n\n\tentity.rot = entity.rotDeg * Math.PI / 180;\n\n\tvar newX = entity.x + Math.cos(entity.rot) * moveStep;\t// calculate new entity position with simple trigonometry\n\tvar newY = entity.y + Math.sin(entity.rot) * moveStep;\n\n\tvar pos = checkCollision(entity.x, entity.y, newX, newY, 0.35);\n\n\tentity.x = pos.x; // set new position\n\tentity.y = pos.y;\n}\n\nfunction checkCollision(fromX, fromY, toX, toY, radius) {\n\tvar pos = {\n\t\tx : fromX,\n\t\ty : fromY\n\t};\n\n\tif (toY < 0 || toY >= mapHeight || toX < 0 || toX >= mapWidth)\n\t\treturn pos;\n\n\tvar blockX = Math.floor(toX);\n\tvar blockY = Math.floor(toY);\n\n\n\tif (isBlocking(blockX,blockY)) {\n\t\treturn pos;\n\t}\n\n\tpos.x = toX;\n\tpos.y = toY;\n\n\tvar blockTop = isBlocking(blockX,blockY-1);\n\tvar blockBottom = isBlocking(blockX,blockY+1);\n\tvar blockLeft = isBlocking(blockX-1,blockY);\n\tvar blockRight = isBlocking(blockX+1,blockY);\n\n\tif (blockTop != 0 && toY - blockY < radius) {\n\t\ttoY = pos.y = blockY + radius;\n\t}\n\tif (blockBottom != 0 && blockY+1 - toY < radius) {\n\t\ttoY = pos.y = blockY + 1 - radius;\n\t}\n\tif (blockLeft != 0 && toX - blockX < radius) {\n\t\ttoX = pos.x = blockX + radius;\n\t}\n\tif (blockRight != 0 && blockX+1 - toX < radius) {\n\t\ttoX = pos.x = blockX + 1 - radius;\n\t}\n\n\t// is tile to the top-left a wall\n\tif (isBlocking(blockX-1,blockY-1) != 0 && !(blockTop != 0 && blockLeft != 0)) {\n\t\tvar dx = toX - blockX;\n\t\tvar dy = toY - blockY;\n\t\tif (dx*dx+dy*dy < radius*radius) {\n\t\t\tif (dx*dx > dy*dy)\n\t\t\t\ttoX = pos.x = blockX + radius;\n\t\t\telse\n\t\t\t\ttoY = pos.y = blockY + radius;\n\t\t}\n\t}\n\t// is tile to the top-right a wall\n\tif (isBlocking(blockX+1,blockY-1) != 0 && !(blockTop != 0 && blockRight != 0)) {\n\t\tvar dx = toX - (blockX+1);\n\t\tvar dy = toY - blockY;\n\t\tif (dx*dx+dy*dy < radius*radius) {\n\t\t\tif (dx*dx > dy*dy)\n\t\t\t\ttoX = pos.x = blockX + 1 - radius;\n\t\t\telse\n\t\t\t\ttoY = pos.y = blockY + radius;\n\t\t}\n\t}\n\t// is tile to the bottom-left a wall\n\tif (isBlocking(blockX-1,blockY+1) != 0 && !(blockBottom != 0 && blockBottom != 0)) {\n\t\tvar dx = toX - blockX;\n\t\tvar dy = toY - (blockY+1);\n\t\tif (dx*dx+dy*dy < radius*radius) {\n\t\t\tif (dx*dx > dy*dy)\n\t\t\t\ttoX = pos.x = blockX + radius;\n\t\t\telse\n\t\t\t\ttoY = pos.y = blockY + 1 - radius;\n\t\t}\n\t}\n\t// is tile to the bottom-right a wall\n\tif (isBlocking(blockX+1,blockY+1) != 0 && !(blockBottom != 0 && blockRight != 0)) {\n\t\tvar dx = toX - (blockX+1);\n\t\tvar dy = toY - (blockY+1);\n\t\tif (dx*dx+dy*dy < radius*radius) {\n\t\t\tif (dx*dx > dy*dy)\n\t\t\t\ttoX = pos.x = blockX + 1 - radius;\n\t\t\telse\n\t\t\t\ttoY = pos.y = blockY + 1 - radius;\n\t\t}\n\t}\n\n\treturn pos;\n}\n\nfunction isBlocking(x,y) {\n\n\t// first make sure that we cannot move outside the boundaries of the level\n\tif (y < 0 || y >= mapHeight || x < 0 || x >= mapWidth)\n\t\treturn true;\n\n\tvar ix = Math.floor(x);\n\tvar iy = Math.floor(y);\n\n\t// return true if the map block is not 0, ie. if there is a blocking wall.\n\tif (map[iy][ix] != 0)\n\t\treturn true;\n\n\tif (spriteMap[iy][ix] && spriteMap[iy][ix].block)\n\t\treturn true;\n\n\treturn false;\n}\n\nfunction updateMiniMap() {\n\n\tvar miniMap = $(\"minimap\");\n\tvar miniMapObjects = $(\"minimapobjects\");\n\n\tvar objectCtx = miniMapObjects.getContext(\"2d\");\n\tminiMapObjects.width = miniMapObjects.width;\n\n\tobjectCtx.fillStyle = \"red\";\n\tobjectCtx.fillRect(\t\t// draw a dot at the current player position\n\t\tplayer.x * miniMapScale - 2, \n\t\tplayer.y * miniMapScale - 2,\n\t\t4, 4\n\t);\n\n\tobjectCtx.strokeStyle = \"red\";\n\tobjectCtx.beginPath();\n\tobjectCtx.moveTo(player.x * miniMapScale, player.y * miniMapScale);\n\tobjectCtx.lineTo(\n\t\t(player.x + Math.cos(player.rot) * 4) * miniMapScale,\n\t\t(player.y + Math.sin(player.rot) * 4) * miniMapScale\n\t);\n\tobjectCtx.closePath();\n\tobjectCtx.stroke();\n\n\tfor (var i=0;i<enemies.length;i++) {\n\t\tvar enemy = enemies[i];\n\n\t\tobjectCtx.fillStyle = \"blue\";\n\t\tobjectCtx.fillRect(\t\t// draw a dot at the enemy position\n\t\t\tenemy.x * miniMapScale - 2, \n\t\t\tenemy.y * miniMapScale - 2,\n\t\t\t4, 4\n\t\t);\n\t}\n}\n\nfunction drawMiniMap() {\n\n\t// draw the topdown view minimap\n\n\tvar miniMap = $(\"minimap\");\t\t\t// the actual map\n\tvar miniMapCtr = $(\"minimapcontainer\");\t\t// the container div element\n\tvar miniMapObjects = $(\"minimapobjects\");\t// the canvas used for drawing the objects on the map (player character, etc)\n\n\tminiMap.width = mapWidth * miniMapScale;\t// resize the internal canvas dimensions \n\tminiMap.height = mapHeight * miniMapScale;\t// of both the map canvas and the object canvas\n\tminiMapObjects.width = miniMap.width;\n\tminiMapObjects.height = miniMap.height;\n\n\tvar w = (mapWidth * miniMapScale) + \"px\" \t// minimap CSS dimensions\n\tvar h = (mapHeight * miniMapScale) + \"px\"\n\tminiMap.style.width = miniMapObjects.style.width = miniMapCtr.style.width = w;\n\tminiMap.style.height = miniMapObjects.style.height = miniMapCtr.style.height = h;\n\n\tvar ctx = miniMap.getContext(\"2d\");\n\n\tctx.fillStyle = \"white\";\n\tctx.fillRect(0,0,miniMap.width,miniMap.height);\n\n\t// loop through all blocks on the map\n\tfor (var y=0;y<mapHeight;y++) {\n\t\tfor (var x=0;x<mapWidth;x++) {\n\n\t\t\tvar wall = map[y][x];\n\n\t\t\tif (wall > 0) { // if there is a wall block at this (x,y) ...\n\t\t\t\tctx.fillStyle = \"rgb(200,200,200)\";\n\t\t\t\tctx.fillRect(\t\t\t\t// ... then draw a block on the minimap\n\t\t\t\t\tx * miniMapScale,\n\t\t\t\t\ty * miniMapScale,\n\t\t\t\t\tminiMapScale,miniMapScale\n\t\t\t\t);\n\t\t\t}\n\n\t\t\tif (spriteMap[y][x]) {\n\t\t\t\tctx.fillStyle = \"rgb(100,200,100)\";\n\t\t\t\tctx.fillRect(\n\t\t\t\t\tx * miniMapScale + miniMapScale*0.25,\n\t\t\t\t\ty * miniMapScale + miniMapScale*0.25,\n\t\t\t\t\tminiMapScale*0.5,miniMapScale*0.5\n\t\t\t\t);\n\t\t\t}\n\t\t}\n\t}\n\n\tupdateMiniMap();\n}\n\nsetTimeout(init, 1);\n\n//# sourceURL=webpack:///./client/src/engine/index.js?");

/***/ })

/******/ });