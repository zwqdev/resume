/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _service = __webpack_require__(1);

	var _service2 = _interopRequireDefault(_service);

	var _cmpt = __webpack_require__(3);

	var _cmpt2 = _interopRequireDefault(_cmpt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 入口文件
	 */
	angular.module("bootstrap", [_service2.default, _cmpt2.default]);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _data = __webpack_require__(2);

	var _data2 = _interopRequireDefault(_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DataExtend = function () {
		function DataExtend() {
			_classCallCheck(this, DataExtend);
		}

		_createClass(DataExtend, [{
			key: "extend",
			value: function extend(destination, source) {
				for (var prop in source) {
					if (!source.hasOwnProperty(prop)) {
						continue;
					}
					destination[prop] = source[prop];
				}
			}
		}]);

		return DataExtend;
	}();

	var ActionEvent = function () {
		_createClass(ActionEvent, null, [{
			key: "$inject",
			get: function get() {
				return ["$window"];
			}
		}]);

		function ActionEvent($window) {
			_classCallCheck(this, ActionEvent);

			var isSupportTouch = "ontouchend" in $window.document,
			    actionEvent = void 0;

			actionEvent = {
				start: isSupportTouch ? "touchstart" : "mousedown",
				move: isSupportTouch ? "touchmove" : "mousemove",
				end: isSupportTouch ? "touchend" : "mouseup",
				wheel: "mousewheel"
			};

			this.event = actionEvent;
		}

		return ActionEvent;
	}();

	var StopIosDropDown = function () {
		function StopIosDropDown() {
			_classCallCheck(this, StopIosDropDown);
		}

		_createClass(StopIosDropDown, [{
			key: "stop",
			value: function stop(actionEvent) {
				document.querySelector("body").addEventListener(actionEvent.event.start, function (ev) {
					if (_isPc() || !_isPc() && ev.target.nodeName == "A") {
						return;
					}
					ev.preventDefault();
				});
			}
		}]);

		return StopIosDropDown;
	}();

	var InitArrow = function () {
		function InitArrow() {
			_classCallCheck(this, InitArrow);
		}

		_createClass(InitArrow, [{
			key: "init",
			value: function init() {
				var page = document.querySelectorAll(".dock-fill"),
				    arrowNode = document.createElement("div");

				arrowNode.classList.add("-arrow");

				page[0].appendChild(arrowNode);
			}
		}, {
			key: "destroy",
			value: function destroy() {
				var arrowNode = document.querySelector(".-arrow");

				arrowNode.parentNode.removeChild(arrowNode);
			}
		}]);

		return InitArrow;
	}();

	function _isPc() {

		return ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"].every(function (i) {
			return navigator.userAgent.indexOf(i) < 0;
		});
	}

	exports.default = angular.module("appServices", []).constant("resumeData", _data2.default).service("actionEvent", ActionEvent).service("stopIosDropDown", StopIosDropDown).service("dataExtend", DataExtend).service("initArrow", InitArrow).name;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = {"cn":{"header":{"langList":["中","英"],"titleList":[{"svg":"img/d_home.svg","title":"首页"},{"svg":"img/d_info.svg","title":"关于我"},{"svg":"img/d_skills.svg","title":"技能栈"},{"svg":"img/d_exp.svg","title":"经历"},{"svg":"img/d_works.svg","title":"作品集"}]},"footer":{},"default":{"quote":"talk is cheap, show me the codes","desList":["我叫张伟强","一名前端研发工程师","weiqiangdev@163.com"]},"info":{"title":"关于我","infoList":[{"icon":"img/i_age.svg","key":"年龄","value":"26岁"},{"icon":"img/i_edu.svg","key":"学历","value":"本科"},{"icon":"img/i_site.svg","key":"坐标","value":"广州"},{"icon":"img/i_status.svg","key":"状态","value":"离职"}],"desList":["三年互联网经验,两年半全职前端开发经验","熟悉前端工程化,模块化组件化开发之道","高效的自学能力,具备独立分析解决问题能力"]},"skill":{"title":"技能栈","outCircleList":[{"color":"rgba(121,100,102,0.8)","name":"jQuery"},{"color":"rgba(49,65,82,0.8)","name":"Vue"},{"color":"rgba(76,157,160,0.8)","name":"webpack"},{"color":"rgba(66,66,66,0.8)","name":"Sass"},{"color":"rgba(193,131,106,0.8)","name":"git"},{"color":"rgba(117,148,179,0.8)","name":"nodeJS"},{"color":"rgba(147,147,189,0.8)","name":"React"},{"color":"rgba(147,147,189,0.8)","name":"express"}],"innerCircleList":[{"color":"rgba(179,164,140,0.8)","name":"ES6+"},{"color":"rgba(171,209,220,0.8)","name":"JS"},{"color":"rgba(238,215,163,0.8)","name":"HTML"},{"color":"rgba(207,184,178,0.8)","name":"CSS"}],"desList":["熟练原生JS， 能脱离库书写JS代码","掌握语义化HTML，熟悉CSS3, 响应式布局","熟练使用vue + vue-router + vuex组件化开发"]},"works":{"title":"作品集","worksList":[{"title":"Haoo","des":"Haoo是集订单管理，新品管理，权限管理等模块功能完善的后台管理平台，是满翼运营人员主要产品管理平台。 负责Haoo的前端开发工作，项目主要采用jQuery + Bootstrap + sass开发完成","url":"http://www.app8848.com/cloud_mgr/#/user/login"},{"title":"薪酬系统","des":"薪酬管理系统方便让公司人事和财务部门对员工的考勤相关的信息进行系统管理。分为考勤管理，假期设置，组织架构，薪酬管理等模块。项目采用Vue + es6 + ElementUI + vue-router + webpack的SPA形式进行开发","url":"http://app.cufe.edu.cn/"},{"title":"Erp","des":"负责在线Listing页面和FBA成本运算页开发 ","url":"http://www.app8848.com/cloud_mgr/#/user/login"},{"title":"More","des":"开发中... ","url":""}],"viewMore":""},"experience":{"title":"经历","expList":[{"title":"满翼贸易","time":"2017年3月~至今","post":"web前端研发工程师","imgUrl":"img/e_js.svg","tech":"sass webpack jquery vue及若干类库","contentList":["负责运营平台Haoo前端的全站开发","负责人事薪酬系统的前端开发","负责ERP系统部分子功能的前端开发"]},{"title":"天翼电子商务","time":"2015年9月~2016年2月","post":"官网站点前端开发和维护","imgUrl":"img/e_html.svg","tech":"html5,css3,javascript,jquery,bootstrap","contentList":["负责官网新需求的前端开发","负责交费易内嵌H5的插件开发"]},{"title":"联通湛江分公司","time":"2015年1月~2015年8月","post":"人事系统开发","imgUrl":"img/e_seo.svg","tech":"jQuery boostrap及其他类库","contentList":["负责人事系统系统设置，人员管理模块页面开发","同期工作之余开始系统性的学习web前端各项技术"]}]}},"en":{"header":{"langList":["CN","EN"],"titleList":[{"svg":"img/d_home.svg","title":"home"},{"svg":"img/d_info.svg","title":"about"},{"svg":"img/d_skills.svg","title":"skills"},{"svg":"img/d_exp.svg","title":"exp"},{"svg":"img/d_works.svg","title":"works"},{"svg":"img/d_contact.svg","title":"contact"}]},"footer":{},"default":{"quote":"Life is a kind of endless yearning, eager to continue to rise, become more great and noble.","desList":[]},"info":{"title":"About Me","infoList":[{"icon":"img/i_age.svg","key":"Age","value":"26"},{"icon":"img/i_edu.svg","key":"Edu.","value":"B.S."},{"icon":"img/i_site.svg","key":"Add.","value":"ChengDu"},{"icon":"img/i_status.svg","key":"Status","value":"On Job"}],"desList":["Three years of Internet experience, two and a half years full-time front-end development experience","Familiar with MV * development, well versed in automation, modular development of the road","Efficient self-learning ability, with independent analysis to solve problems","Strong self-driving force, the code OCD"]},"skill":{"title":"Skills","outCircleList":[{"color":"rgba(121,100,102,0.8)","name":"gulp"},{"color":"rgba(49,65,82,0.8)","name":"angular"},{"color":"rgba(76,157,160,0.8)","name":"webpack"},{"color":"rgba(66,66,66,0.8)","name":"less"},{"color":"rgba(193,131,106,0.8)","name":"git"},{"color":"rgba(117,148,179,0.8)","name":"nodejs"},{"color":"rgba(71,83,94,0.8)","name":"cordova"},{"color":"rgba(147,147,189,0.8)","name":"react"}],"innerCircleList":[{"color":"rgba(179,164,140,0.8)","name":"es6"},{"color":"rgba(171,209,220,0.8)","name":"vue"},{"color":"rgba(238,215,163,0.8)","name":"ng2"},{"color":"rgba(207,184,178,0.8)","name":"fp"}],"desList":["Skilled use of angularJs1.x and encapsulate all kinds of libraries","Permanent PC / APP / WeChat three platform front-end research and development","Good at component / plugin development, can be written out of the library to write JS code","Coding thinking robustness/scalability/maintainability"]},"works":{"title":"Works","worksList":[{"title":"Web front engineer resumes (2015)","des":"The first edition of this resume, on the line a month later, Baidu keyword 'web front engineer resumes' ranked the top three, hundreds of millions of traffic, by the majority of front-end beginners praise and imitation, so far the search Baidu 10 pages are everywhere See the copy of the resume.","url":"http://www.flqin.com/2015/"},{"title":"Campus APP","des":"One-stop, the whole life cycle of the campus official mobile service platform, covering PC, Andrews, IOS, WeChat platform, on-line schools, including CUFE, BJTU, NACTA, LNU, SWUFE and so on, download Hundreds of thousands, loved by the students teacher.","url":"http://app.cufe.edu.cn/"},{"title":"campus management system","des":"According to the background management system of campus APP, including the personnel structure, information statistics, H5 production machine, data exchange platform, data management of each module, feedback settings, etc., for the university to provide Internet-based mobile campus overall solution.","url":"http://www.app8848.com/cloud_mgr/#/user/login"},{"title":"Enterprise official website","des":"Ordinary enterprise website development, compatible with IE8 +, suitable for all mobile models, with good compatibility, scalability. According to the habits of customer groups for detailed analysis planning, to develop a set of corporate website for their own design style program.","url":"http://www.lantunet.com"}],"viewMore":"Go github to see more"},"experience":{"title":"Experience","expList":[{"title":"LANTU TECH","time":"2015.06~now","post":"Web front-end R & D engineers","imgUrl":"img/e_js.svg","tech":"less gulp angular1.x cordova javascript and some libraries","contentList":["Responsible for the rapid construction of high-quality APP / PC / WeChat page","According to business needs to design the appropriate project","Highly component, modular thinking, with the platform debugging capabilities","Learning ES6 and vue, react, ng2, experience the function of programming ideas"]},{"title":"Zhuohuang Management Co., Ltd","time":"2014.08~2015.06","post":"Web development and SEO","imgUrl":"img/e_html.svg","tech":"html5,css3,javascript,jquery,bootstrap","contentList":["Responsible for enterprise station static page development","Responsible for website background maintenance","Responsible for Baidu bid operation and seo optimization","Outside of work to enhance their own javascript coding ability"]},{"title":"106 Culture Co., Ltd.","time":"2014.03~2014.08","post":"SEO","imgUrl":"img/e_seo.svg","tech":"SEO,SEM,Baidu (360, Sogou) bid, promotion","contentList":["Responsible for site background maintenance, new media marketing and promotion","Responsible for Baidu PPC background adjustment","Get the best new person award","The same period of work began to self-learning web front-end technology"]}],"des":"In early 2014, to abandon the network engineer position, began front self-study career."},"contact":{"title":"Contact Me","desList1":["INSPIRATION","CODE","DREAM","FUTURE"],"desList2":["Focus on efficiency, preference for agile development","Like to try, look forward to something new","Front is interested, interest is the future","Line road friends, is a shortcut","With me, see the bigger world together"],"download":"Download Resume","fileList":[{"title":"HTML","url":"www.baidu.com"},{"title":"PDF","url":"www.baidu.com"}],"typeList":[]}}}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _cmpt = __webpack_require__(4);

	var _cmpt2 = _interopRequireDefault(_cmpt);

	var _cmpt3 = __webpack_require__(5);

	var _cmpt4 = _interopRequireDefault(_cmpt3);

	var _cmpt5 = __webpack_require__(6);

	var _cmpt6 = _interopRequireDefault(_cmpt5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module("resumeApp", [_cmpt2.default, _cmpt4.default, _cmpt6.default]).component("resumeApp", {
		templateUrl: "components/resumeApp/cmpt.html",
		controllerAs: "zr",
		controller: ResumeCtrl
	}).name;


	function ResumeCtrl() {}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = angular.module("rHeader", []).component("resumeHeader", {
		templateUrl: "components/rHeader/cmpt.html",
		controller: ResumeHeaderCtrl,
		bindings: {
			pageIndex: "="
		}
	}).directive("showNav", ["actionEvent", function (actionEvent) {
		function link($scope, ele) {
			var vm = $scope.$ctrl;
			ele[0].addEventListener(actionEvent.event.start, clickHandler);
			function clickHandler() {
				vm.isShowNav = !vm.isShowNav;
				$scope.$apply();
			}
		}

		return {
			restrict: "A",
			link: link
		};
	}]).directive("switchLang", ["actionEvent", "$rootScope", function (actionEvent, $rootScope) {
		function link($scope, ele) {
			var vm = $scope.$ctrl;
			ele[0].addEventListener(actionEvent.event.start, clickHandler);
			function clickHandler(ev) {
				if (ev.target.nodeName !== "SPAN") {
					return;
				}
				vm.selectedLang = Number(ev.target.dataset.index) + 1;

				$scope.$apply();

				$rootScope.$broadcast("switchLang", vm.selectedLang);
			}
		}

		return {
			restrict: "A",
			link: link
		};
	}]).directive("selectedNavItem", ["resumeData", "actionEvent", function (resumeData, actionEvent) {

		function link($scope, ele) {
			var vm = $scope.$ctrl;

			ele[0].addEventListener(actionEvent.event.start, clickHandler);
			function clickHandler(evt) {
				if (evt.target.nodeName != "EM") {
					return;
				}

				+evt.target.dataset.index !== vm.pageIndex && !resumeData.moving && (vm.pageIndex = +evt.target.dataset.index);
				vm.isShowNav = false;
				$scope.$apply();
			}
		}

		return {
			restrict: "A",
			link: link
		};
	}]).name;


	ResumeHeaderCtrl.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"];

	function ResumeHeaderCtrl(dataExtend, resumeData, $rootScope, $scope) {

		var vm = this;

		dataExtend.extend(vm, resumeData.cn.header);

		vm.pageIndex = 0;

		vm.selectedLang = 1; //1为中文,2为英文

		$rootScope.$on("switchLang", function (evt, data) {

			var extendData = Number(data) == 2 ? resumeData.en.header : resumeData.cn.header;

			dataExtend.extend(vm, extendData);

			$scope.$apply();
		});
	}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = angular.module("rFooter", []).component("resumeFooter", {
		templateUrl: "components/rFooter/cmpt.html",
		controllerAs: "rf",
		controller: ResumeFooterCtrl
	}).name;


	function ResumeFooterCtrl() {}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _cmpt = __webpack_require__(7);

	var _cmpt2 = _interopRequireDefault(_cmpt);

	var _cmpt3 = __webpack_require__(8);

	var _cmpt4 = _interopRequireDefault(_cmpt3);

	var _cmpt5 = __webpack_require__(9);

	var _cmpt6 = _interopRequireDefault(_cmpt5);

	var _cmpt7 = __webpack_require__(12);

	var _cmpt8 = _interopRequireDefault(_cmpt7);

	var _cmpt9 = __webpack_require__(13);

	var _cmpt10 = _interopRequireDefault(_cmpt9);

	var _cmpt11 = __webpack_require__(14);

	var _cmpt12 = _interopRequireDefault(_cmpt11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module("rMain", [_cmpt2.default, _cmpt4.default, _cmpt6.default, _cmpt8.default, _cmpt10.default, _cmpt12.default]).directive("resumeMain", ["initArrow", "stopIosDropDown", "$timeout", "resumeData", "actionEvent", function (initArrow, stopIosDropDown, $timeout, resumeData, actionEvent) {

	    function link($scope, ele) {

	        var pageIndex = 0,
	            moving = void 0,
	            startTouchY = void 0,
	            disY = void 0,
	            curTouchIndex = void 0,
	            nodeList = ele[0].querySelectorAll(".page-section"),
	            nodeListLen = nodeList.length;

	        init();

	        $scope.$watch("pageIndex", function (newV, oldV) {

	            var nodeList = ele[0].querySelectorAll(".page-section");

	            if (moving || typeof newV === 'undefined') {
	                return;
	            }

	            var newIndex = +newV;

	            moving = typeof oldV !== 'undefined';

	            resumeData.moving = moving;

	            if (Math.abs(newIndex - oldV) > 1) {
	                var promise = new Promise(function (resolve) {
	                    nodeList[newIndex].style.display = "block";
	                    nodeList[newIndex].style.transform = newIndex > oldV ? "translateY(100%)" : "translateY(-100%)";
	                    $timeout(function () {
	                        resolve();
	                    }, 200);
	                });
	                promise.then(function () {
	                    nodeList[newIndex].classList.add("active");
	                    nodeList[newIndex].style.display = "";
	                    if (typeof oldV !== 'undefined') {
	                        nodeList[oldV].style.transform = newIndex > oldV ? "translateY(-100%)" : "translateY(100%)";
	                        nodeList[oldV].style.transition = "transform 0.5s";
	                    }
	                });
	            } else if (Math.abs(newIndex - oldV) == 1) {
	                nodeList[newIndex].classList.add("active");
	                if (typeof oldV !== 'undefined') {
	                    nodeList[oldV].style.transform = newIndex > oldV ? "translateY(-100%)" : "translateY(100%)";
	                    nodeList[oldV].style.transition = "transform 0.5s";
	                }
	            }

	            pageIndex = newIndex;

	            nodeList[newIndex].addEventListener("webkitTransitionEnd", transitionEndHandler);
	        });

	        $scope.$on("$destroy", function () {
	            initArrow.destroy();
	            ele[0].removeEventListener("touchstart", touchStartHandler);
	            ele[0].removeEventListener("mousewheel", startWheelHandler);
	        });
	        //初始化
	        function init() {
	            // nodeList = Array.from(nodeList);

	            ele[0].classList.add("dock-fill");

	            nodeList[0].classList.add("cur-page");

	            nodeList[pageIndex + 1].classList.add("next-page");

	            initArrow.init();

	            stopIosDropDown.stop(actionEvent);

	            _consoleLog();

	            ele[0].addEventListener(actionEvent.event.start, touchStartHandler);
	            ele[0].addEventListener("mousewheel", _throttleGenerator(startWheelHandler, 100));
	        }

	        function _throttleGenerator(fn, time) {
	            var date = new Date();
	            return function () {
	                var nowDate = new Date();
	                if (nowDate - date > time) {
	                    fn.apply(undefined, arguments);
	                }
	                date = nowDate;
	            };
	        }

	        //滚轮事件
	        function startWheelHandler(e) {

	            if (moving || e.wheelDelta < 0 && pageIndex == nodeListLen - 1 || e.wheelDelta > 0 && pageIndex == 0) {
	                return;
	            }
	            e.wheelDelta < 0 ? pageIndex++ : pageIndex--;

	            applyPageIndex(pageIndex);
	        }

	        function touchStartHandler(e) {

	            if (moving || e.type != "touchstart") {
	                return;
	            }

	            startTouchY = e.changedTouches[0].pageY;

	            ele[0].addEventListener(actionEvent.event.move, touchMoveHandler);
	        }

	        function touchMoveHandler(e) {

	            if (moving) {
	                return;
	            }

	            disY = e.changedTouches[0].pageY - startTouchY; //为负上滑 为正下滑

	            if (disY < 0 && pageIndex == nodeListLen - 1 || disY > 0 && pageIndex == 0) {
	                return;
	            }

	            setTouchMovePageAttr();

	            ele[0].addEventListener(actionEvent.event.end, touchEndHandler);
	        }

	        function touchEndHandler() {

	            if (moving) {
	                return;
	            }

	            Math.abs(disY) < 100 ? littleBounce() : applyPageIndex(curTouchIndex);
	        }

	        function transitionEndHandler() {

	            moving = false;

	            resumeData.moving = moving;

	            setTouchEndAttr();

	            ele[0].removeEventListener("touchmove", touchMoveHandler);
	            ele[0].removeEventListener("touchend", touchEndHandler);
	        }

	        function littleBounce() {

	            var nodeList = ele[0].querySelectorAll(".page-section");

	            nodeList[curTouchIndex].style.transform = "";
	            nodeList[curTouchIndex].style.transition = "transform 0.5s";

	            nodeList[disY < 0 ? curTouchIndex - 1 : curTouchIndex + 1].style.transform = "";
	            nodeList[disY < 0 ? curTouchIndex - 1 : curTouchIndex + 1].style.transition = "transform 0.5s";

	            nodeList[curTouchIndex].addEventListener("webkitTransitionEnd", transitionEndHandler);
	        }
	        //脏检查
	        function applyPageIndex(index) {

	            $scope.$apply(function () {
	                $scope.pageIndex = index;
	            });
	        }

	        function setTouchMovePageAttr() {

	            var nodeList = ele[0].querySelectorAll(".page-section");

	            curTouchIndex = disY < 0 ? pageIndex + 1 : pageIndex - 1;

	            nodeList[curTouchIndex].classList.add("touch-page");

	            nodeList[curTouchIndex].style.transform = disY < 0 ? "translateY(" + (ele[0].offsetHeight + disY) + "px)" : "translateY(" + (-ele[0].offsetHeight + disY) + "px)";

	            nodeList[disY < 0 ? curTouchIndex - 1 : curTouchIndex + 1].style.transform = "translateY(" + disY + "px)";
	        }

	        function setTouchEndAttr() {

	            var nodeList = ele[0].querySelectorAll(".page-section");

	            nodeList = Array.prototype.slice.call(nodeList);

	            nodeList.forEach(function (item, index) {

	                item.classList.remove("prev-page", "active", "next-page", "cur-page", "touch-page");

	                item.style.transform = "";
	                item.style.transition = "";

	                pageIndex !== 0 && index == pageIndex - 1 && item.classList.add("prev-page");

	                index == pageIndex && item.classList.add("cur-page");

	                pageIndex !== nodeListLen - 1 && index == pageIndex + 1 && item.classList.add("next-page");

	                item.removeEventListener("webkitTransitionEnd", transitionEndHandler);
	            });

	            ele[0].querySelectorAll(".-arrow")[0].style.display = pageIndex == nodeListLen - 1 ? "none" : "block";
	        }

	        function _consoleLog() {
	            console.log("hello world");
	        }
	    }

	    return {
	        restrict: "E",
	        link: link,
	        template: "<div ng-transclude></div>",
	        transclude: true,
	        replace: true,
	        scope: {
	            pageIndex: "="
	        }
	    };
	}]).name;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = angular.module("rContact", []).component("resumeContact", {
		templateUrl: "components/rContact/cmpt.html",
		controller: ResumeContactCtrl
	}).name;

	ResumeContactCtrl.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"];

	function ResumeContactCtrl(dataExtend, resumeData, $rootScope, $scope) {
		var vm = this;

		dataExtend.extend(vm, resumeData.cn.contact);

		$rootScope.$on("switchLang", function (evt, data) {

			var extendData = Number(data) == 2 ? resumeData.en.contact : resumeData.cn.contact;

			vm.isEng = Number(data) == 2;

			dataExtend.extend(vm, extendData);

			$scope.$apply();
		});
	}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = angular.module("rDefault", []).component("resumeDefault", {
		templateUrl: "components/rDefault/cmpt.html",
		controller: ResumeDefaultCtrl
	}).name;


	ResumeDefaultCtrl.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"];

	function ResumeDefaultCtrl(dataExtend, resumeData, $rootScope, $scope) {
		var vm = this;

		dataExtend.extend(vm, resumeData.cn.default);

		$rootScope.$on("switchLang", function (evt, data) {

			var extendData = Number(data) == 2 ? resumeData.en.default : resumeData.cn.default;

			dataExtend.extend(vm, extendData);

			$scope.$apply();
		});
	}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _photoswipe = __webpack_require__(10);

	var _photoswipe2 = _interopRequireDefault(_photoswipe);

	var _photoswipeUiDefaultMin = __webpack_require__(11);

	var _photoswipeUiDefaultMin2 = _interopRequireDefault(_photoswipeUiDefaultMin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module("rWorks", []).component("resumeWorks", {
		templateUrl: "components/rWorks/cmpt.html",
		controller: ResumeWorksCtrl
	}).directive("switchWork", ["actionEvent", function (actionEvent) {
		function link($scope, ele, attr) {
			var worksContain = document.body.querySelector(".-work-list");
			var rotate = 0;
			ele[0].addEventListener(actionEvent.event.start, switchWorkHandler);

			function switchWorkHandler(evt) {

				if (evt.target.nodeName !== "I") {
					return;
				}
				rotate += evt.target.className == "-left" ? 90 : -90;

				worksContain.style.transform = "rotateY(" + rotate + "deg)";
			}
		}
		return {
			link: link
		};
	}]).name;


	ResumeWorksCtrl.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"];
	var openPhotoSwipe = function openPhotoSwipe() {
		var pswpElement = document.querySelectorAll('.pswp')[0];

		// build items array
		var items = new Array(8).fill('').map(function (_, index) {
			return {
				src: 'img/' + (index + 1) + '.png',
				w: 1280,
				h: 800
			};
		});

		// define options (if needed)
		var options = {
			// history & focus options are disabled on CodePen        
			history: false,
			focus: false,

			showAnimationDuration: 0,
			hideAnimationDuration: 0

		};

		var gallery = new _photoswipe2.default(pswpElement, _photoswipeUiDefaultMin2.default, items, options);
		gallery.init();
	};
	function ResumeWorksCtrl(dataExtend, resumeData, $rootScope, $scope) {
		var vm = this;

		dataExtend.extend(vm, resumeData.cn.works);
		$scope.toggle = openPhotoSwipe;

		$rootScope.$on("switchLang", function (evt, data) {

			var extendData = Number(data) == 2 ? resumeData.en.works : resumeData.cn.works;

			vm.isEng = Number(data) == 2;

			dataExtend.extend(vm, extendData);

			$scope.$apply();
		});
	}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! PhotoSwipe - v4.1.2 - 2017-04-05
	* http://photoswipe.com
	* Copyright (c) 2017 Dmitry Semenov; */
	(function (root, factory) { 
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
			root.PhotoSwipe = factory();
		}
	})(this, function () {

		'use strict';
		var PhotoSwipe = function(template, UiClass, items, options){

	/*>>framework-bridge*/
	/**
	 *
	 * Set of generic functions used by gallery.
	 * 
	 * You're free to modify anything here as long as functionality is kept.
	 * 
	 */
	var framework = {
		features: null,
		bind: function(target, type, listener, unbind) {
			var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
			type = type.split(' ');
			for(var i = 0; i < type.length; i++) {
				if(type[i]) {
					target[methodName]( type[i], listener, false);
				}
			}
		},
		isArray: function(obj) {
			return (obj instanceof Array);
		},
		createEl: function(classes, tag) {
			var el = document.createElement(tag || 'div');
			if(classes) {
				el.className = classes;
			}
			return el;
		},
		getScrollY: function() {
			var yOffset = window.pageYOffset;
			return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
		},
		unbind: function(target, type, listener) {
			framework.bind(target,type,listener,true);
		},
		removeClass: function(el, className) {
			var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
			el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, ''); 
		},
		addClass: function(el, className) {
			if( !framework.hasClass(el,className) ) {
				el.className += (el.className ? ' ' : '') + className;
			}
		},
		hasClass: function(el, className) {
			return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
		},
		getChildByClass: function(parentEl, childClassName) {
			var node = parentEl.firstChild;
			while(node) {
				if( framework.hasClass(node, childClassName) ) {
					return node;
				}
				node = node.nextSibling;
			}
		},
		arraySearch: function(array, value, key) {
			var i = array.length;
			while(i--) {
				if(array[i][key] === value) {
					return i;
				} 
			}
			return -1;
		},
		extend: function(o1, o2, preventOverwrite) {
			for (var prop in o2) {
				if (o2.hasOwnProperty(prop)) {
					if(preventOverwrite && o1.hasOwnProperty(prop)) {
						continue;
					}
					o1[prop] = o2[prop];
				}
			}
		},
		easing: {
			sine: {
				out: function(k) {
					return Math.sin(k * (Math.PI / 2));
				},
				inOut: function(k) {
					return - (Math.cos(Math.PI * k) - 1) / 2;
				}
			},
			cubic: {
				out: function(k) {
					return --k * k * k + 1;
				}
			}
			/*
				elastic: {
					out: function ( k ) {

						var s, a = 0.1, p = 0.4;
						if ( k === 0 ) return 0;
						if ( k === 1 ) return 1;
						if ( !a || a < 1 ) { a = 1; s = p / 4; }
						else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
						return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

					},
				},
				back: {
					out: function ( k ) {
						var s = 1.70158;
						return --k * k * ( ( s + 1 ) * k + s ) + 1;
					}
				}
			*/
		},

		/**
		 * 
		 * @return {object}
		 * 
		 * {
		 *  raf : request animation frame function
		 *  caf : cancel animation frame function
		 *  transfrom : transform property key (with vendor), or null if not supported
		 *  oldIE : IE8 or below
		 * }
		 * 
		 */
		detectFeatures: function() {
			if(framework.features) {
				return framework.features;
			}
			var helperEl = framework.createEl(),
				helperStyle = helperEl.style,
				vendor = '',
				features = {};

			// IE8 and below
			features.oldIE = document.all && !document.addEventListener;

			features.touch = 'ontouchstart' in window;

			if(window.requestAnimationFrame) {
				features.raf = window.requestAnimationFrame;
				features.caf = window.cancelAnimationFrame;
			}

			features.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled;

			// fix false-positive detection of old Android in new IE
			// (IE11 ua string contains "Android 4.0")
			
			if(!features.pointerEvent) { 

				var ua = navigator.userAgent;

				// Detect if device is iPhone or iPod and if it's older than iOS 8
				// http://stackoverflow.com/a/14223920
				// 
				// This detection is made because of buggy top/bottom toolbars
				// that don't trigger window.resize event.
				// For more info refer to _isFixedPosition variable in core.js

				if (/iP(hone|od)/.test(navigator.platform)) {
					var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
					if(v && v.length > 0) {
						v = parseInt(v[1], 10);
						if(v >= 1 && v < 8 ) {
							features.isOldIOSPhone = true;
						}
					}
				}

				// Detect old Android (before KitKat)
				// due to bugs related to position:fixed
				// http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript
				
				var match = ua.match(/Android\s([0-9\.]*)/);
				var androidversion =  match ? match[1] : 0;
				androidversion = parseFloat(androidversion);
				if(androidversion >= 1 ) {
					if(androidversion < 4.4) {
						features.isOldAndroid = true; // for fixed position bug & performance
					}
					features.androidVersion = androidversion; // for touchend bug
				}	
				features.isMobileOpera = /opera mini|opera mobi/i.test(ua);

				// p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
			}
			
			var styleChecks = ['transform', 'perspective', 'animationName'],
				vendors = ['', 'webkit','Moz','ms','O'],
				styleCheckItem,
				styleName;

			for(var i = 0; i < 4; i++) {
				vendor = vendors[i];

				for(var a = 0; a < 3; a++) {
					styleCheckItem = styleChecks[a];

					// uppercase first letter of property name, if vendor is present
					styleName = vendor + (vendor ? 
											styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) : 
											styleCheckItem);
				
					if(!features[styleCheckItem] && styleName in helperStyle ) {
						features[styleCheckItem] = styleName;
					}
				}

				if(vendor && !features.raf) {
					vendor = vendor.toLowerCase();
					features.raf = window[vendor+'RequestAnimationFrame'];
					if(features.raf) {
						features.caf = window[vendor+'CancelAnimationFrame'] || 
										window[vendor+'CancelRequestAnimationFrame'];
					}
				}
			}
				
			if(!features.raf) {
				var lastTime = 0;
				features.raf = function(fn) {
					var currTime = new Date().getTime();
					var timeToCall = Math.max(0, 16 - (currTime - lastTime));
					var id = window.setTimeout(function() { fn(currTime + timeToCall); }, timeToCall);
					lastTime = currTime + timeToCall;
					return id;
				};
				features.caf = function(id) { clearTimeout(id); };
			}

			// Detect SVG support
			features.svg = !!document.createElementNS && 
							!!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;

			framework.features = features;

			return features;
		}
	};

	framework.detectFeatures();

	// Override addEventListener for old versions of IE
	if(framework.features.oldIE) {

		framework.bind = function(target, type, listener, unbind) {
			
			type = type.split(' ');

			var methodName = (unbind ? 'detach' : 'attach') + 'Event',
				evName,
				_handleEv = function() {
					listener.handleEvent.call(listener);
				};

			for(var i = 0; i < type.length; i++) {
				evName = type[i];
				if(evName) {

					if(typeof listener === 'object' && listener.handleEvent) {
						if(!unbind) {
							listener['oldIE' + evName] = _handleEv;
						} else {
							if(!listener['oldIE' + evName]) {
								return false;
							}
						}

						target[methodName]( 'on' + evName, listener['oldIE' + evName]);
					} else {
						target[methodName]( 'on' + evName, listener);
					}

				}
			}
		};
		
	}

	/*>>framework-bridge*/

	/*>>core*/
	//function(template, UiClass, items, options)

	var self = this;

	/**
	 * Static vars, don't change unless you know what you're doing.
	 */
	var DOUBLE_TAP_RADIUS = 25, 
		NUM_HOLDERS = 3;

	/**
	 * Options
	 */
	var _options = {
		allowPanToNext:true,
		spacing: 0.12,
		bgOpacity: 1,
		mouseUsed: false,
		loop: true,
		pinchToClose: true,
		closeOnScroll: true,
		closeOnVerticalDrag: true,
		verticalDragRange: 0.75,
		hideAnimationDuration: 333,
		showAnimationDuration: 333,
		showHideOpacity: false,
		focus: true,
		escKey: true,
		arrowKeys: true,
		mainScrollEndFriction: 0.35,
		panEndFriction: 0.35,
		isClickableElement: function(el) {
	        return el.tagName === 'A';
	    },
	    getDoubleTapZoom: function(isMouseClick, item) {
	    	if(isMouseClick) {
	    		return 1;
	    	} else {
	    		return item.initialZoomLevel < 0.7 ? 1 : 1.33;
	    	}
	    },
	    maxSpreadZoom: 1.33,
		modal: true,

		// not fully implemented yet
		scaleMode: 'fit' // TODO
	};
	framework.extend(_options, options);


	/**
	 * Private helper variables & functions
	 */

	var _getEmptyPoint = function() { 
			return {x:0,y:0}; 
		};

	var _isOpen,
		_isDestroying,
		_closedByScroll,
		_currentItemIndex,
		_containerStyle,
		_containerShiftIndex,
		_currPanDist = _getEmptyPoint(),
		_startPanOffset = _getEmptyPoint(),
		_panOffset = _getEmptyPoint(),
		_upMoveEvents, // drag move, drag end & drag cancel events array
		_downEvents, // drag start events array
		_globalEventHandlers,
		_viewportSize = {},
		_currZoomLevel,
		_startZoomLevel,
		_translatePrefix,
		_translateSufix,
		_updateSizeInterval,
		_itemsNeedUpdate,
		_currPositionIndex = 0,
		_offset = {},
		_slideSize = _getEmptyPoint(), // size of slide area, including spacing
		_itemHolders,
		_prevItemIndex,
		_indexDiff = 0, // difference of indexes since last content update
		_dragStartEvent,
		_dragMoveEvent,
		_dragEndEvent,
		_dragCancelEvent,
		_transformKey,
		_pointerEventEnabled,
		_isFixedPosition = true,
		_likelyTouchDevice,
		_modules = [],
		_requestAF,
		_cancelAF,
		_initalClassName,
		_initalWindowScrollY,
		_oldIE,
		_currentWindowScrollY,
		_features,
		_windowVisibleSize = {},
		_renderMaxResolution = false,
		_orientationChangeTimeout,


		// Registers PhotoSWipe module (History, Controller ...)
		_registerModule = function(name, module) {
			framework.extend(self, module.publicMethods);
			_modules.push(name);
		},

		_getLoopedId = function(index) {
			var numSlides = _getNumItems();
			if(index > numSlides - 1) {
				return index - numSlides;
			} else  if(index < 0) {
				return numSlides + index;
			}
			return index;
		},
		
		// Micro bind/trigger
		_listeners = {},
		_listen = function(name, fn) {
			if(!_listeners[name]) {
				_listeners[name] = [];
			}
			return _listeners[name].push(fn);
		},
		_shout = function(name) {
			var listeners = _listeners[name];

			if(listeners) {
				var args = Array.prototype.slice.call(arguments);
				args.shift();

				for(var i = 0; i < listeners.length; i++) {
					listeners[i].apply(self, args);
				}
			}
		},

		_getCurrentTime = function() {
			return new Date().getTime();
		},
		_applyBgOpacity = function(opacity) {
			_bgOpacity = opacity;
			self.bg.style.opacity = opacity * _options.bgOpacity;
		},

		_applyZoomTransform = function(styleObj,x,y,zoom,item) {
			if(!_renderMaxResolution || (item && item !== self.currItem) ) {
				zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);	
			}
				
			styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
		},
		_applyCurrentZoomPan = function( allowRenderResolution ) {
			if(_currZoomElementStyle) {

				if(allowRenderResolution) {
					if(_currZoomLevel > self.currItem.fitRatio) {
						if(!_renderMaxResolution) {
							_setImageSize(self.currItem, false, true);
							_renderMaxResolution = true;
						}
					} else {
						if(_renderMaxResolution) {
							_setImageSize(self.currItem);
							_renderMaxResolution = false;
						}
					}
				}
				

				_applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
			}
		},
		_applyZoomPanToItem = function(item) {
			if(item.container) {

				_applyZoomTransform(item.container.style, 
									item.initialPosition.x, 
									item.initialPosition.y, 
									item.initialZoomLevel,
									item);
			}
		},
		_setTranslateX = function(x, elStyle) {
			elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
		},
		_moveMainScroll = function(x, dragging) {

			if(!_options.loop && dragging) {
				var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x,
					delta = Math.round(x - _mainScrollPos.x);

				if( (newSlideIndexOffset < 0 && delta > 0) || 
					(newSlideIndexOffset >= _getNumItems() - 1 && delta < 0) ) {
					x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
				} 
			}
			
			_mainScrollPos.x = x;
			_setTranslateX(x, _containerStyle);
		},
		_calculatePanOffset = function(axis, zoomLevel) {
			var m = _midZoomPoint[axis] - _offset[axis];
			return _startPanOffset[axis] + _currPanDist[axis] + m - m * ( zoomLevel / _startZoomLevel );
		},
		
		_equalizePoints = function(p1, p2) {
			p1.x = p2.x;
			p1.y = p2.y;
			if(p2.id) {
				p1.id = p2.id;
			}
		},
		_roundPoint = function(p) {
			p.x = Math.round(p.x);
			p.y = Math.round(p.y);
		},

		_mouseMoveTimeout = null,
		_onFirstMouseMove = function() {
			// Wait until mouse move event is fired at least twice during 100ms
			// We do this, because some mobile browsers trigger it on touchstart
			if(_mouseMoveTimeout ) { 
				framework.unbind(document, 'mousemove', _onFirstMouseMove);
				framework.addClass(template, 'pswp--has_mouse');
				_options.mouseUsed = true;
				_shout('mouseUsed');
			}
			_mouseMoveTimeout = setTimeout(function() {
				_mouseMoveTimeout = null;
			}, 100);
		},

		_bindEvents = function() {
			framework.bind(document, 'keydown', self);

			if(_features.transform) {
				// don't bind click event in browsers that don't support transform (mostly IE8)
				framework.bind(self.scrollWrap, 'click', self);
			}
			

			if(!_options.mouseUsed) {
				framework.bind(document, 'mousemove', _onFirstMouseMove);
			}

			framework.bind(window, 'resize scroll orientationchange', self);

			_shout('bindEvents');
		},

		_unbindEvents = function() {
			framework.unbind(window, 'resize scroll orientationchange', self);
			framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
			framework.unbind(document, 'keydown', self);
			framework.unbind(document, 'mousemove', _onFirstMouseMove);

			if(_features.transform) {
				framework.unbind(self.scrollWrap, 'click', self);
			}

			if(_isDragging) {
				framework.unbind(window, _upMoveEvents, self);
			}

			clearTimeout(_orientationChangeTimeout);

			_shout('unbindEvents');
		},
		
		_calculatePanBounds = function(zoomLevel, update) {
			var bounds = _calculateItemSize( self.currItem, _viewportSize, zoomLevel );
			if(update) {
				_currPanBounds = bounds;
			}
			return bounds;
		},
		
		_getMinZoomLevel = function(item) {
			if(!item) {
				item = self.currItem;
			}
			return item.initialZoomLevel;
		},
		_getMaxZoomLevel = function(item) {
			if(!item) {
				item = self.currItem;
			}
			return item.w > 0 ? _options.maxSpreadZoom : 1;
		},

		// Return true if offset is out of the bounds
		_modifyDestPanOffset = function(axis, destPanBounds, destPanOffset, destZoomLevel) {
			if(destZoomLevel === self.currItem.initialZoomLevel) {
				destPanOffset[axis] = self.currItem.initialPosition[axis];
				return true;
			} else {
				destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel); 

				if(destPanOffset[axis] > destPanBounds.min[axis]) {
					destPanOffset[axis] = destPanBounds.min[axis];
					return true;
				} else if(destPanOffset[axis] < destPanBounds.max[axis] ) {
					destPanOffset[axis] = destPanBounds.max[axis];
					return true;
				}
			}
			return false;
		},

		_setupTransforms = function() {

			if(_transformKey) {
				// setup 3d transforms
				var allow3dTransform = _features.perspective && !_likelyTouchDevice;
				_translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
				_translateSufix = _features.perspective ? ', 0px)' : ')';	
				return;
			}

			// Override zoom/pan/move functions in case old browser is used (most likely IE)
			// (so they use left/top/width/height, instead of CSS transform)
		
			_transformKey = 'left';
			framework.addClass(template, 'pswp--ie');

			_setTranslateX = function(x, elStyle) {
				elStyle.left = x + 'px';
			};
			_applyZoomPanToItem = function(item) {

				var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
					s = item.container.style,
					w = zoomRatio * item.w,
					h = zoomRatio * item.h;

				s.width = w + 'px';
				s.height = h + 'px';
				s.left = item.initialPosition.x + 'px';
				s.top = item.initialPosition.y + 'px';

			};
			_applyCurrentZoomPan = function() {
				if(_currZoomElementStyle) {

					var s = _currZoomElementStyle,
						item = self.currItem,
						zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
						w = zoomRatio * item.w,
						h = zoomRatio * item.h;

					s.width = w + 'px';
					s.height = h + 'px';


					s.left = _panOffset.x + 'px';
					s.top = _panOffset.y + 'px';
				}
				
			};
		},

		_onKeyDown = function(e) {
			var keydownAction = '';
			if(_options.escKey && e.keyCode === 27) { 
				keydownAction = 'close';
			} else if(_options.arrowKeys) {
				if(e.keyCode === 37) {
					keydownAction = 'prev';
				} else if(e.keyCode === 39) { 
					keydownAction = 'next';
				}
			}

			if(keydownAction) {
				// don't do anything if special key pressed to prevent from overriding default browser actions
				// e.g. in Chrome on Mac cmd+arrow-left returns to previous page
				if( !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey ) {
					if(e.preventDefault) {
						e.preventDefault();
					} else {
						e.returnValue = false;
					} 
					self[keydownAction]();
				}
			}
		},

		_onGlobalClick = function(e) {
			if(!e) {
				return;
			}

			// don't allow click event to pass through when triggering after drag or some other gesture
			if(_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
				e.preventDefault();
				e.stopPropagation();
			}
		},

		_updatePageScrollOffset = function() {
			self.setScrollOffset(0, framework.getScrollY());		
		};
		


		



	// Micro animation engine
	var _animations = {},
		_numAnimations = 0,
		_stopAnimation = function(name) {
			if(_animations[name]) {
				if(_animations[name].raf) {
					_cancelAF( _animations[name].raf );
				}
				_numAnimations--;
				delete _animations[name];
			}
		},
		_registerStartAnimation = function(name) {
			if(_animations[name]) {
				_stopAnimation(name);
			}
			if(!_animations[name]) {
				_numAnimations++;
				_animations[name] = {};
			}
		},
		_stopAllAnimations = function() {
			for (var prop in _animations) {

				if( _animations.hasOwnProperty( prop ) ) {
					_stopAnimation(prop);
				} 
				
			}
		},
		_animateProp = function(name, b, endProp, d, easingFn, onUpdate, onComplete) {
			var startAnimTime = _getCurrentTime(), t;
			_registerStartAnimation(name);

			var animloop = function(){
				if ( _animations[name] ) {
					
					t = _getCurrentTime() - startAnimTime; // time diff
					//b - beginning (start prop)
					//d - anim duration

					if ( t >= d ) {
						_stopAnimation(name);
						onUpdate(endProp);
						if(onComplete) {
							onComplete();
						}
						return;
					}
					onUpdate( (endProp - b) * easingFn(t/d) + b );

					_animations[name].raf = _requestAF(animloop);
				}
			};
			animloop();
		};
		


	var publicMethods = {

		// make a few local variables and functions public
		shout: _shout,
		listen: _listen,
		viewportSize: _viewportSize,
		options: _options,

		isMainScrollAnimating: function() {
			return _mainScrollAnimating;
		},
		getZoomLevel: function() {
			return _currZoomLevel;
		},
		getCurrentIndex: function() {
			return _currentItemIndex;
		},
		isDragging: function() {
			return _isDragging;
		},	
		isZooming: function() {
			return _isZooming;
		},
		setScrollOffset: function(x,y) {
			_offset.x = x;
			_currentWindowScrollY = _offset.y = y;
			_shout('updateScrollOffset', _offset);
		},
		applyZoomPan: function(zoomLevel,panX,panY,allowRenderResolution) {
			_panOffset.x = panX;
			_panOffset.y = panY;
			_currZoomLevel = zoomLevel;
			_applyCurrentZoomPan( allowRenderResolution );
		},

		init: function() {

			if(_isOpen || _isDestroying) {
				return;
			}

			var i;

			self.framework = framework; // basic functionality
			self.template = template; // root DOM element of PhotoSwipe
			self.bg = framework.getChildByClass(template, 'pswp__bg');

			_initalClassName = template.className;
			_isOpen = true;
					
			_features = framework.detectFeatures();
			_requestAF = _features.raf;
			_cancelAF = _features.caf;
			_transformKey = _features.transform;
			_oldIE = _features.oldIE;
			
			self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
			self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');

			_containerStyle = self.container.style; // for fast access

			// Objects that hold slides (there are only 3 in DOM)
			self.itemHolders = _itemHolders = [
				{el:self.container.children[0] , wrap:0, index: -1},
				{el:self.container.children[1] , wrap:0, index: -1},
				{el:self.container.children[2] , wrap:0, index: -1}
			];

			// hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
			_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';

			_setupTransforms();

			// Setup global events
			_globalEventHandlers = {
				resize: self.updateSize,

				// Fixes: iOS 10.3 resize event
				// does not update scrollWrap.clientWidth instantly after resize
				// https://github.com/dimsemenov/PhotoSwipe/issues/1315
				orientationchange: function() {
					clearTimeout(_orientationChangeTimeout);
					_orientationChangeTimeout = setTimeout(function() {
						if(_viewportSize.x !== self.scrollWrap.clientWidth) {
							self.updateSize();
						}
					}, 500);
				},
				scroll: _updatePageScrollOffset,
				keydown: _onKeyDown,
				click: _onGlobalClick
			};

			// disable show/hide effects on old browsers that don't support CSS animations or transforms, 
			// old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
			var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
			if(!_features.animationName || !_features.transform || oldPhone) {
				_options.showAnimationDuration = _options.hideAnimationDuration = 0;
			}

			// init modules
			for(i = 0; i < _modules.length; i++) {
				self['init' + _modules[i]]();
			}
			
			// init
			if(UiClass) {
				var ui = self.ui = new UiClass(self, framework);
				ui.init();
			}

			_shout('firstUpdate');
			_currentItemIndex = _currentItemIndex || _options.index || 0;
			// validate index
			if( isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems() ) {
				_currentItemIndex = 0;
			}
			self.currItem = _getItemAt( _currentItemIndex );

			
			if(_features.isOldIOSPhone || _features.isOldAndroid) {
				_isFixedPosition = false;
			}
			
			template.setAttribute('aria-hidden', 'false');
			if(_options.modal) {
				if(!_isFixedPosition) {
					template.style.position = 'absolute';
					template.style.top = framework.getScrollY() + 'px';
				} else {
					template.style.position = 'fixed';
				}
			}

			if(_currentWindowScrollY === undefined) {
				_shout('initialLayout');
				_currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
			}
			
			// add classes to root element of PhotoSwipe
			var rootClasses = 'pswp--open ';
			if(_options.mainClass) {
				rootClasses += _options.mainClass + ' ';
			}
			if(_options.showHideOpacity) {
				rootClasses += 'pswp--animate_opacity ';
			}
			rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
			rootClasses += _features.animationName ? ' pswp--css_animation' : '';
			rootClasses += _features.svg ? ' pswp--svg' : '';
			framework.addClass(template, rootClasses);

			self.updateSize();

			// initial update
			_containerShiftIndex = -1;
			_indexDiff = null;
			for(i = 0; i < NUM_HOLDERS; i++) {
				_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
			}

			if(!_oldIE) {
				framework.bind(self.scrollWrap, _downEvents, self); // no dragging for old IE
			}	

			_listen('initialZoomInEnd', function() {
				self.setContent(_itemHolders[0], _currentItemIndex-1);
				self.setContent(_itemHolders[2], _currentItemIndex+1);

				_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';

				if(_options.focus) {
					// focus causes layout, 
					// which causes lag during the animation, 
					// that's why we delay it untill the initial zoom transition ends
					template.focus();
				}
				 

				_bindEvents();
			});

			// set content for center slide (first time)
			self.setContent(_itemHolders[1], _currentItemIndex);
			
			self.updateCurrItem();

			_shout('afterInit');

			if(!_isFixedPosition) {

				// On all versions of iOS lower than 8.0, we check size of viewport every second.
				// 
				// This is done to detect when Safari top & bottom bars appear, 
				// as this action doesn't trigger any events (like resize). 
				// 
				// On iOS8 they fixed this.
				// 
				// 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.
				
				_updateSizeInterval = setInterval(function() {
					if(!_numAnimations && !_isDragging && !_isZooming && (_currZoomLevel === self.currItem.initialZoomLevel)  ) {
						self.updateSize();
					}
				}, 1000);
			}

			framework.addClass(template, 'pswp--visible');
		},

		// Close the gallery, then destroy it
		close: function() {
			if(!_isOpen) {
				return;
			}

			_isOpen = false;
			_isDestroying = true;
			_shout('close');
			_unbindEvents();

			_showOrHide(self.currItem, null, true, self.destroy);
		},

		// destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
		destroy: function() {
			_shout('destroy');

			if(_showOrHideTimeout) {
				clearTimeout(_showOrHideTimeout);
			}
			
			template.setAttribute('aria-hidden', 'true');
			template.className = _initalClassName;

			if(_updateSizeInterval) {
				clearInterval(_updateSizeInterval);
			}

			framework.unbind(self.scrollWrap, _downEvents, self);

			// we unbind scroll event at the end, as closing animation may depend on it
			framework.unbind(window, 'scroll', self);

			_stopDragUpdateLoop();

			_stopAllAnimations();

			_listeners = null;
		},

		/**
		 * Pan image to position
		 * @param {Number} x     
		 * @param {Number} y     
		 * @param {Boolean} force Will ignore bounds if set to true.
		 */
		panTo: function(x,y,force) {
			if(!force) {
				if(x > _currPanBounds.min.x) {
					x = _currPanBounds.min.x;
				} else if(x < _currPanBounds.max.x) {
					x = _currPanBounds.max.x;
				}

				if(y > _currPanBounds.min.y) {
					y = _currPanBounds.min.y;
				} else if(y < _currPanBounds.max.y) {
					y = _currPanBounds.max.y;
				}
			}
			
			_panOffset.x = x;
			_panOffset.y = y;
			_applyCurrentZoomPan();
		},
		
		handleEvent: function (e) {
			e = e || window.event;
			if(_globalEventHandlers[e.type]) {
				_globalEventHandlers[e.type](e);
			}
		},


		goTo: function(index) {

			index = _getLoopedId(index);

			var diff = index - _currentItemIndex;
			_indexDiff = diff;

			_currentItemIndex = index;
			self.currItem = _getItemAt( _currentItemIndex );
			_currPositionIndex -= diff;
			
			_moveMainScroll(_slideSize.x * _currPositionIndex);
			

			_stopAllAnimations();
			_mainScrollAnimating = false;

			self.updateCurrItem();
		},
		next: function() {
			self.goTo( _currentItemIndex + 1);
		},
		prev: function() {
			self.goTo( _currentItemIndex - 1);
		},

		// update current zoom/pan objects
		updateCurrZoomItem: function(emulateSetContent) {
			if(emulateSetContent) {
				_shout('beforeChange', 0);
			}

			// itemHolder[1] is middle (current) item
			if(_itemHolders[1].el.children.length) {
				var zoomElement = _itemHolders[1].el.children[0];
				if( framework.hasClass(zoomElement, 'pswp__zoom-wrap') ) {
					_currZoomElementStyle = zoomElement.style;
				} else {
					_currZoomElementStyle = null;
				}
			} else {
				_currZoomElementStyle = null;
			}
			
			_currPanBounds = self.currItem.bounds;	
			_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;

			_panOffset.x = _currPanBounds.center.x;
			_panOffset.y = _currPanBounds.center.y;

			if(emulateSetContent) {
				_shout('afterChange');
			}
		},


		invalidateCurrItems: function() {
			_itemsNeedUpdate = true;
			for(var i = 0; i < NUM_HOLDERS; i++) {
				if( _itemHolders[i].item ) {
					_itemHolders[i].item.needsUpdate = true;
				}
			}
		},

		updateCurrItem: function(beforeAnimation) {

			if(_indexDiff === 0) {
				return;
			}

			var diffAbs = Math.abs(_indexDiff),
				tempHolder;

			if(beforeAnimation && diffAbs < 2) {
				return;
			}


			self.currItem = _getItemAt( _currentItemIndex );
			_renderMaxResolution = false;
			
			_shout('beforeChange', _indexDiff);

			if(diffAbs >= NUM_HOLDERS) {
				_containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
				diffAbs = NUM_HOLDERS;
			}
			for(var i = 0; i < diffAbs; i++) {
				if(_indexDiff > 0) {
					tempHolder = _itemHolders.shift();
					_itemHolders[NUM_HOLDERS-1] = tempHolder; // move first to last

					_containerShiftIndex++;
					_setTranslateX( (_containerShiftIndex+2) * _slideSize.x, tempHolder.el.style);
					self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
				} else {
					tempHolder = _itemHolders.pop();
					_itemHolders.unshift( tempHolder ); // move last to first

					_containerShiftIndex--;
					_setTranslateX( _containerShiftIndex * _slideSize.x, tempHolder.el.style);
					self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
				}
				
			}

			// reset zoom/pan on previous item
			if(_currZoomElementStyle && Math.abs(_indexDiff) === 1) {

				var prevItem = _getItemAt(_prevItemIndex);
				if(prevItem.initialZoomLevel !== _currZoomLevel) {
					_calculateItemSize(prevItem , _viewportSize );
					_setImageSize(prevItem);
					_applyZoomPanToItem( prevItem ); 				
				}

			}

			// reset diff after update
			_indexDiff = 0;

			self.updateCurrZoomItem();

			_prevItemIndex = _currentItemIndex;

			_shout('afterChange');
			
		},



		updateSize: function(force) {
			
			if(!_isFixedPosition && _options.modal) {
				var windowScrollY = framework.getScrollY();
				if(_currentWindowScrollY !== windowScrollY) {
					template.style.top = windowScrollY + 'px';
					_currentWindowScrollY = windowScrollY;
				}
				if(!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
					return;
				}
				_windowVisibleSize.x = window.innerWidth;
				_windowVisibleSize.y = window.innerHeight;

				//template.style.width = _windowVisibleSize.x + 'px';
				template.style.height = _windowVisibleSize.y + 'px';
			}



			_viewportSize.x = self.scrollWrap.clientWidth;
			_viewportSize.y = self.scrollWrap.clientHeight;

			_updatePageScrollOffset();

			_slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
			_slideSize.y = _viewportSize.y;

			_moveMainScroll(_slideSize.x * _currPositionIndex);

			_shout('beforeResize'); // even may be used for example to switch image sources


			// don't re-calculate size on inital size update
			if(_containerShiftIndex !== undefined) {

				var holder,
					item,
					hIndex;

				for(var i = 0; i < NUM_HOLDERS; i++) {
					holder = _itemHolders[i];
					_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, holder.el.style);

					hIndex = _currentItemIndex+i-1;

					if(_options.loop && _getNumItems() > 2) {
						hIndex = _getLoopedId(hIndex);
					}

					// update zoom level on items and refresh source (if needsUpdate)
					item = _getItemAt( hIndex );

					// re-render gallery item if `needsUpdate`,
					// or doesn't have `bounds` (entirely new slide object)
					if( item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds) ) {

						self.cleanSlide( item );
						
						self.setContent( holder, hIndex );

						// if "center" slide
						if(i === 1) {
							self.currItem = item;
							self.updateCurrZoomItem(true);
						}

						item.needsUpdate = false;

					} else if(holder.index === -1 && hIndex >= 0) {
						// add content first time
						self.setContent( holder, hIndex );
					}
					if(item && item.container) {
						_calculateItemSize(item, _viewportSize);
						_setImageSize(item);
						_applyZoomPanToItem( item );
					}
					
				}
				_itemsNeedUpdate = false;
			}	

			_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
			_currPanBounds = self.currItem.bounds;

			if(_currPanBounds) {
				_panOffset.x = _currPanBounds.center.x;
				_panOffset.y = _currPanBounds.center.y;
				_applyCurrentZoomPan( true );
			}
			
			_shout('resize');
		},
		
		// Zoom current item to
		zoomTo: function(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
			/*
				if(destZoomLevel === 'fit') {
					destZoomLevel = self.currItem.fitRatio;
				} else if(destZoomLevel === 'fill') {
					destZoomLevel = self.currItem.fillRatio;
				}
			*/

			if(centerPoint) {
				_startZoomLevel = _currZoomLevel;
				_midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x ;
				_midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y ;
				_equalizePoints(_startPanOffset, _panOffset);
			}

			var destPanBounds = _calculatePanBounds(destZoomLevel, false),
				destPanOffset = {};

			_modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);
			_modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);

			var initialZoomLevel = _currZoomLevel;
			var initialPanOffset = {
				x: _panOffset.x,
				y: _panOffset.y
			};

			_roundPoint(destPanOffset);

			var onUpdate = function(now) {
				if(now === 1) {
					_currZoomLevel = destZoomLevel;
					_panOffset.x = destPanOffset.x;
					_panOffset.y = destPanOffset.y;
				} else {
					_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
					_panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
					_panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
				}

				if(updateFn) {
					updateFn(now);
				}

				_applyCurrentZoomPan( now === 1 );
			};

			if(speed) {
				_animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
			} else {
				onUpdate(1);
			}
		}


	};


	/*>>core*/

	/*>>gestures*/
	/**
	 * Mouse/touch/pointer event handlers.
	 * 
	 * separated from @core.js for readability
	 */

	var MIN_SWIPE_DISTANCE = 30,
		DIRECTION_CHECK_OFFSET = 10; // amount of pixels to drag to determine direction of swipe

	var _gestureStartTime,
		_gestureCheckSpeedTime,

		// pool of objects that are used during dragging of zooming
		p = {}, // first point
		p2 = {}, // second point (for zoom gesture)
		delta = {},
		_currPoint = {},
		_startPoint = {},
		_currPointers = [],
		_startMainScrollPos = {},
		_releaseAnimData,
		_posPoints = [], // array of points during dragging, used to determine type of gesture
		_tempPoint = {},

		_isZoomingIn,
		_verticalDragInitiated,
		_oldAndroidTouchEndTimeout,
		_currZoomedItemIndex = 0,
		_centerPoint = _getEmptyPoint(),
		_lastReleaseTime = 0,
		_isDragging, // at least one pointer is down
		_isMultitouch, // at least two _pointers are down
		_zoomStarted, // zoom level changed during zoom gesture
		_moved,
		_dragAnimFrame,
		_mainScrollShifted,
		_currentPoints, // array of current touch points
		_isZooming,
		_currPointsDistance,
		_startPointsDistance,
		_currPanBounds,
		_mainScrollPos = _getEmptyPoint(),
		_currZoomElementStyle,
		_mainScrollAnimating, // true, if animation after swipe gesture is running
		_midZoomPoint = _getEmptyPoint(),
		_currCenterPoint = _getEmptyPoint(),
		_direction,
		_isFirstMove,
		_opacityChanged,
		_bgOpacity,
		_wasOverInitialZoom,

		_isEqualPoints = function(p1, p2) {
			return p1.x === p2.x && p1.y === p2.y;
		},
		_isNearbyPoints = function(touch0, touch1) {
			return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
		},
		_calculatePointsDistance = function(p1, p2) {
			_tempPoint.x = Math.abs( p1.x - p2.x );
			_tempPoint.y = Math.abs( p1.y - p2.y );
			return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
		},
		_stopDragUpdateLoop = function() {
			if(_dragAnimFrame) {
				_cancelAF(_dragAnimFrame);
				_dragAnimFrame = null;
			}
		},
		_dragUpdateLoop = function() {
			if(_isDragging) {
				_dragAnimFrame = _requestAF(_dragUpdateLoop);
				_renderMovement();
			}
		},
		_canPan = function() {
			return !(_options.scaleMode === 'fit' && _currZoomLevel ===  self.currItem.initialZoomLevel);
		},
		
		// find the closest parent DOM element
		_closestElement = function(el, fn) {
		  	if(!el || el === document) {
		  		return false;
		  	}

		  	// don't search elements above pswp__scroll-wrap
		  	if(el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1 ) {
		  		return false;
		  	}

		  	if( fn(el) ) {
		  		return el;
		  	}

		  	return _closestElement(el.parentNode, fn);
		},

		_preventObj = {},
		_preventDefaultEventBehaviour = function(e, isDown) {
		    _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);

			_shout('preventDragEvent', e, isDown, _preventObj);
			return _preventObj.prevent;

		},
		_convertTouchToPoint = function(touch, p) {
			p.x = touch.pageX;
			p.y = touch.pageY;
			p.id = touch.identifier;
			return p;
		},
		_findCenterOfPoints = function(p1, p2, pCenter) {
			pCenter.x = (p1.x + p2.x) * 0.5;
			pCenter.y = (p1.y + p2.y) * 0.5;
		},
		_pushPosPoint = function(time, x, y) {
			if(time - _gestureCheckSpeedTime > 50) {
				var o = _posPoints.length > 2 ? _posPoints.shift() : {};
				o.x = x;
				o.y = y; 
				_posPoints.push(o);
				_gestureCheckSpeedTime = time;
			}
		},

		_calculateVerticalDragOpacityRatio = function() {
			var yOffset = _panOffset.y - self.currItem.initialPosition.y; // difference between initial and current position
			return 1 -  Math.abs( yOffset / (_viewportSize.y / 2)  );
		},

		
		// points pool, reused during touch events
		_ePoint1 = {},
		_ePoint2 = {},
		_tempPointsArr = [],
		_tempCounter,
		_getTouchPoints = function(e) {
			// clean up previous points, without recreating array
			while(_tempPointsArr.length > 0) {
				_tempPointsArr.pop();
			}

			if(!_pointerEventEnabled) {
				if(e.type.indexOf('touch') > -1) {

					if(e.touches && e.touches.length > 0) {
						_tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
						if(e.touches.length > 1) {
							_tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
						}
					}
					
				} else {
					_ePoint1.x = e.pageX;
					_ePoint1.y = e.pageY;
					_ePoint1.id = '';
					_tempPointsArr[0] = _ePoint1;//_ePoint1;
				}
			} else {
				_tempCounter = 0;
				// we can use forEach, as pointer events are supported only in modern browsers
				_currPointers.forEach(function(p) {
					if(_tempCounter === 0) {
						_tempPointsArr[0] = p;
					} else if(_tempCounter === 1) {
						_tempPointsArr[1] = p;
					}
					_tempCounter++;

				});
			}
			return _tempPointsArr;
		},

		_panOrMoveMainScroll = function(axis, delta) {

			var panFriction,
				overDiff = 0,
				newOffset = _panOffset[axis] + delta[axis],
				startOverDiff,
				dir = delta[axis] > 0,
				newMainScrollPosition = _mainScrollPos.x + delta.x,
				mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
				newPanPos,
				newMainScrollPos;

			// calculate fdistance over the bounds and friction
			if(newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
				panFriction = _options.panEndFriction;
				// Linear increasing of friction, so at 1/4 of viewport it's at max value. 
				// Looks not as nice as was expected. Left for history.
				// panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
			} else {
				panFriction = 1;
			}
			
			newOffset = _panOffset[axis] + delta[axis] * panFriction;

			// move main scroll or start panning
			if(_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {


				if(!_currZoomElementStyle) {
					
					newMainScrollPos = newMainScrollPosition;

				} else if(_direction === 'h' && axis === 'x' && !_zoomStarted ) {
					
					if(dir) {
						if(newOffset > _currPanBounds.min[axis]) {
							panFriction = _options.panEndFriction;
							overDiff = _currPanBounds.min[axis] - newOffset;
							startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
						}
						
						// drag right
						if( (startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1 ) {
							newMainScrollPos = newMainScrollPosition;
							if(mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
								newMainScrollPos = _startMainScrollPos.x;
							}
						} else {
							if(_currPanBounds.min.x !== _currPanBounds.max.x) {
								newPanPos = newOffset;
							}
							
						}

					} else {

						if(newOffset < _currPanBounds.max[axis] ) {
							panFriction =_options.panEndFriction;
							overDiff = newOffset - _currPanBounds.max[axis];
							startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
						}

						if( (startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1 ) {
							newMainScrollPos = newMainScrollPosition;

							if(mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
								newMainScrollPos = _startMainScrollPos.x;
							}

						} else {
							if(_currPanBounds.min.x !== _currPanBounds.max.x) {
								newPanPos = newOffset;
							}
						}

					}


					//
				}

				if(axis === 'x') {

					if(newMainScrollPos !== undefined) {
						_moveMainScroll(newMainScrollPos, true);
						if(newMainScrollPos === _startMainScrollPos.x) {
							_mainScrollShifted = false;
						} else {
							_mainScrollShifted = true;
						}
					}

					if(_currPanBounds.min.x !== _currPanBounds.max.x) {
						if(newPanPos !== undefined) {
							_panOffset.x = newPanPos;
						} else if(!_mainScrollShifted) {
							_panOffset.x += delta.x * panFriction;
						}
					}

					return newMainScrollPos !== undefined;
				}

			}

			if(!_mainScrollAnimating) {
				
				if(!_mainScrollShifted) {
					if(_currZoomLevel > self.currItem.fitRatio) {
						_panOffset[axis] += delta[axis] * panFriction;
					
					}
				}

				
			}
			
		},

		// Pointerdown/touchstart/mousedown handler
		_onDragStart = function(e) {

			// Allow dragging only via left mouse button.
			// As this handler is not added in IE8 - we ignore e.which
			// 
			// http://www.quirksmode.org/js/events_properties.html
			// https://developer.mozilla.org/en-US/docs/Web/API/event.button
			if(e.type === 'mousedown' && e.button > 0  ) {
				return;
			}

			if(_initialZoomRunning) {
				e.preventDefault();
				return;
			}

			if(_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
				return;
			}

			if(_preventDefaultEventBehaviour(e, true)) {
				e.preventDefault();
			}



			_shout('pointerDown');

			if(_pointerEventEnabled) {
				var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
				if(pointerIndex < 0) {
					pointerIndex = _currPointers.length;
				}
				_currPointers[pointerIndex] = {x:e.pageX, y:e.pageY, id: e.pointerId};
			}
			


			var startPointsList = _getTouchPoints(e),
				numPoints = startPointsList.length;

			_currentPoints = null;

			_stopAllAnimations();

			// init drag
			if(!_isDragging || numPoints === 1) {

				

				_isDragging = _isFirstMove = true;
				framework.bind(window, _upMoveEvents, self);

				_isZoomingIn = 
					_wasOverInitialZoom = 
					_opacityChanged = 
					_verticalDragInitiated = 
					_mainScrollShifted = 
					_moved = 
					_isMultitouch = 
					_zoomStarted = false;

				_direction = null;

				_shout('firstTouchStart', startPointsList);

				_equalizePoints(_startPanOffset, _panOffset);

				_currPanDist.x = _currPanDist.y = 0;
				_equalizePoints(_currPoint, startPointsList[0]);
				_equalizePoints(_startPoint, _currPoint);

				//_equalizePoints(_startMainScrollPos, _mainScrollPos);
				_startMainScrollPos.x = _slideSize.x * _currPositionIndex;

				_posPoints = [{
					x: _currPoint.x,
					y: _currPoint.y
				}];

				_gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();

				//_mainScrollAnimationEnd(true);
				_calculatePanBounds( _currZoomLevel, true );
				
				// Start rendering
				_stopDragUpdateLoop();
				_dragUpdateLoop();
				
			}

			// init zoom
			if(!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
				_startZoomLevel = _currZoomLevel;
				_zoomStarted = false; // true if zoom changed at least once

				_isZooming = _isMultitouch = true;
				_currPanDist.y = _currPanDist.x = 0;

				_equalizePoints(_startPanOffset, _panOffset);

				_equalizePoints(p, startPointsList[0]);
				_equalizePoints(p2, startPointsList[1]);

				_findCenterOfPoints(p, p2, _currCenterPoint);

				_midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
				_midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
				_currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
			}


		},

		// Pointermove/touchmove/mousemove handler
		_onDragMove = function(e) {

			e.preventDefault();

			if(_pointerEventEnabled) {
				var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
				if(pointerIndex > -1) {
					var p = _currPointers[pointerIndex];
					p.x = e.pageX;
					p.y = e.pageY; 
				}
			}

			if(_isDragging) {
				var touchesList = _getTouchPoints(e);
				if(!_direction && !_moved && !_isZooming) {

					if(_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
						// if main scroll position is shifted – direction is always horizontal
						_direction = 'h';
					} else {
						var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
						// check the direction of movement
						if(Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
							_direction = diff > 0 ? 'h' : 'v';
							_currentPoints = touchesList;
						}
					}
					
				} else {
					_currentPoints = touchesList;
				}
			}	
		},
		// 
		_renderMovement =  function() {

			if(!_currentPoints) {
				return;
			}

			var numPoints = _currentPoints.length;

			if(numPoints === 0) {
				return;
			}

			_equalizePoints(p, _currentPoints[0]);

			delta.x = p.x - _currPoint.x;
			delta.y = p.y - _currPoint.y;

			if(_isZooming && numPoints > 1) {
				// Handle behaviour for more than 1 point

				_currPoint.x = p.x;
				_currPoint.y = p.y;
			
				// check if one of two points changed
				if( !delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2) ) {
					return;
				}

				_equalizePoints(p2, _currentPoints[1]);


				if(!_zoomStarted) {
					_zoomStarted = true;
					_shout('zoomGestureStarted');
				}
				
				// Distance between two points
				var pointsDistance = _calculatePointsDistance(p,p2);

				var zoomLevel = _calculateZoomLevel(pointsDistance);

				// slightly over the of initial zoom level
				if(zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
					_wasOverInitialZoom = true;
				}

				// Apply the friction if zoom level is out of the bounds
				var zoomFriction = 1,
					minZoomLevel = _getMinZoomLevel(),
					maxZoomLevel = _getMaxZoomLevel();

				if ( zoomLevel < minZoomLevel ) {
					
					if(_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
						// fade out background if zooming out
						var minusDiff = minZoomLevel - zoomLevel;
						var percent = 1 - minusDiff / (minZoomLevel / 1.2);

						_applyBgOpacity(percent);
						_shout('onPinchClose', percent);
						_opacityChanged = true;
					} else {
						zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
						if(zoomFriction > 1) {
							zoomFriction = 1;
						}
						zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
					}
					
				} else if ( zoomLevel > maxZoomLevel ) {
					// 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
					zoomFriction = (zoomLevel - maxZoomLevel) / ( minZoomLevel * 6 );
					if(zoomFriction > 1) {
						zoomFriction = 1;
					}
					zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
				}

				if(zoomFriction < 0) {
					zoomFriction = 0;
				}

				// distance between touch points after friction is applied
				_currPointsDistance = pointsDistance;

				// _centerPoint - The point in the middle of two pointers
				_findCenterOfPoints(p, p2, _centerPoint);
			
				// paning with two pointers pressed
				_currPanDist.x += _centerPoint.x - _currCenterPoint.x;
				_currPanDist.y += _centerPoint.y - _currCenterPoint.y;
				_equalizePoints(_currCenterPoint, _centerPoint);

				_panOffset.x = _calculatePanOffset('x', zoomLevel);
				_panOffset.y = _calculatePanOffset('y', zoomLevel);

				_isZoomingIn = zoomLevel > _currZoomLevel;
				_currZoomLevel = zoomLevel;
				_applyCurrentZoomPan();

			} else {

				// handle behaviour for one point (dragging or panning)

				if(!_direction) {
					return;
				}

				if(_isFirstMove) {
					_isFirstMove = false;

					// subtract drag distance that was used during the detection direction  

					if( Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
						delta.x -= _currentPoints[0].x - _startPoint.x;
					}
					
					if( Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
						delta.y -= _currentPoints[0].y - _startPoint.y;
					}
				}

				_currPoint.x = p.x;
				_currPoint.y = p.y;

				// do nothing if pointers position hasn't changed
				if(delta.x === 0 && delta.y === 0) {
					return;
				}

				if(_direction === 'v' && _options.closeOnVerticalDrag) {
					if(!_canPan()) {
						_currPanDist.y += delta.y;
						_panOffset.y += delta.y;

						var opacityRatio = _calculateVerticalDragOpacityRatio();

						_verticalDragInitiated = true;
						_shout('onVerticalDrag', opacityRatio);

						_applyBgOpacity(opacityRatio);
						_applyCurrentZoomPan();
						return ;
					}
				}

				_pushPosPoint(_getCurrentTime(), p.x, p.y);

				_moved = true;
				_currPanBounds = self.currItem.bounds;
				
				var mainScrollChanged = _panOrMoveMainScroll('x', delta);
				if(!mainScrollChanged) {
					_panOrMoveMainScroll('y', delta);

					_roundPoint(_panOffset);
					_applyCurrentZoomPan();
				}

			}

		},
		
		// Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
		_onDragRelease = function(e) {

			if(_features.isOldAndroid ) {

				if(_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
					return;
				}

				// on Android (v4.1, 4.2, 4.3 & possibly older) 
				// ghost mousedown/up event isn't preventable via e.preventDefault,
				// which causes fake mousedown event
				// so we block mousedown/up for 600ms
				if( e.type.indexOf('touch') > -1 ) {
					clearTimeout(_oldAndroidTouchEndTimeout);
					_oldAndroidTouchEndTimeout = setTimeout(function() {
						_oldAndroidTouchEndTimeout = 0;
					}, 600);
				}
				
			}

			_shout('pointerUp');

			if(_preventDefaultEventBehaviour(e, false)) {
				e.preventDefault();
			}

			var releasePoint;

			if(_pointerEventEnabled) {
				var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
				
				if(pointerIndex > -1) {
					releasePoint = _currPointers.splice(pointerIndex, 1)[0];

					if(navigator.pointerEnabled) {
						releasePoint.type = e.pointerType || 'mouse';
					} else {
						var MSPOINTER_TYPES = {
							4: 'mouse', // event.MSPOINTER_TYPE_MOUSE
							2: 'touch', // event.MSPOINTER_TYPE_TOUCH 
							3: 'pen' // event.MSPOINTER_TYPE_PEN
						};
						releasePoint.type = MSPOINTER_TYPES[e.pointerType];

						if(!releasePoint.type) {
							releasePoint.type = e.pointerType || 'mouse';
						}
					}

				}
			}

			var touchList = _getTouchPoints(e),
				gestureType,
				numPoints = touchList.length;

			if(e.type === 'mouseup') {
				numPoints = 0;
			}

			// Do nothing if there were 3 touch points or more
			if(numPoints === 2) {
				_currentPoints = null;
				return true;
			}

			// if second pointer released
			if(numPoints === 1) {
				_equalizePoints(_startPoint, touchList[0]);
			}				


			// pointer hasn't moved, send "tap release" point
			if(numPoints === 0 && !_direction && !_mainScrollAnimating) {
				if(!releasePoint) {
					if(e.type === 'mouseup') {
						releasePoint = {x: e.pageX, y: e.pageY, type:'mouse'};
					} else if(e.changedTouches && e.changedTouches[0]) {
						releasePoint = {x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type:'touch'};
					}		
				}

				_shout('touchRelease', e, releasePoint);
			}

			// Difference in time between releasing of two last touch points (zoom gesture)
			var releaseTimeDiff = -1;

			// Gesture completed, no pointers left
			if(numPoints === 0) {
				_isDragging = false;
				framework.unbind(window, _upMoveEvents, self);

				_stopDragUpdateLoop();

				if(_isZooming) {
					// Two points released at the same time
					releaseTimeDiff = 0;
				} else if(_lastReleaseTime !== -1) {
					releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
				}
			}
			_lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;
			
			if(releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
				gestureType = 'zoom';
			} else {
				gestureType = 'swipe';
			}

			if(_isZooming && numPoints < 2) {
				_isZooming = false;

				// Only second point released
				if(numPoints === 1) {
					gestureType = 'zoomPointerUp';
				}
				_shout('zoomGestureEnded');
			}

			_currentPoints = null;
			if(!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
				// nothing to animate
				return;
			}
		
			_stopAllAnimations();

			
			if(!_releaseAnimData) {
				_releaseAnimData = _initDragReleaseAnimationData();
			}
			
			_releaseAnimData.calculateSwipeSpeed('x');


			if(_verticalDragInitiated) {

				var opacityRatio = _calculateVerticalDragOpacityRatio();

				if(opacityRatio < _options.verticalDragRange) {
					self.close();
				} else {
					var initalPanY = _panOffset.y,
						initialBgOpacity = _bgOpacity;

					_animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function(now) {
						
						_panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;

						_applyBgOpacity(  (1 - initialBgOpacity) * now + initialBgOpacity );
						_applyCurrentZoomPan();
					});

					_shout('onVerticalDrag', 1);
				}

				return;
			}


			// main scroll 
			if(  (_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
				var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
				if(itemChanged) {
					return;
				}
				gestureType = 'zoomPointerUp';
			}

			// prevent zoom/pan animation when main scroll animation runs
			if(_mainScrollAnimating) {
				return;
			}
			
			// Complete simple zoom gesture (reset zoom level if it's out of the bounds)  
			if(gestureType !== 'swipe') {
				_completeZoomGesture();
				return;
			}
		
			// Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
			if(!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
				_completePanGesture(_releaseAnimData);
			}
		},


		// Returns object with data about gesture
		// It's created only once and then reused
		_initDragReleaseAnimationData  = function() {
			// temp local vars
			var lastFlickDuration,
				tempReleasePos;

			// s = this
			var s = {
				lastFlickOffset: {},
				lastFlickDist: {},
				lastFlickSpeed: {},
				slowDownRatio:  {},
				slowDownRatioReverse:  {},
				speedDecelerationRatio:  {},
				speedDecelerationRatioAbs:  {},
				distanceOffset:  {},
				backAnimDestination: {},
				backAnimStarted: {},
				calculateSwipeSpeed: function(axis) {
					

					if( _posPoints.length > 1) {
						lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
						tempReleasePos = _posPoints[_posPoints.length-2][axis];
					} else {
						lastFlickDuration = _getCurrentTime() - _gestureStartTime; // total gesture duration
						tempReleasePos = _startPoint[axis];
					}
					s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
					s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
					if(s.lastFlickDist[axis] > 20) {
						s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
					} else {
						s.lastFlickSpeed[axis] = 0;
					}
					if( Math.abs(s.lastFlickSpeed[axis]) < 0.1 ) {
						s.lastFlickSpeed[axis] = 0;
					}
					
					s.slowDownRatio[axis] = 0.95;
					s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
					s.speedDecelerationRatio[axis] = 1;
				},

				calculateOverBoundsAnimOffset: function(axis, speed) {
					if(!s.backAnimStarted[axis]) {

						if(_panOffset[axis] > _currPanBounds.min[axis]) {
							s.backAnimDestination[axis] = _currPanBounds.min[axis];
							
						} else if(_panOffset[axis] < _currPanBounds.max[axis]) {
							s.backAnimDestination[axis] = _currPanBounds.max[axis];
						}

						if(s.backAnimDestination[axis] !== undefined) {
							s.slowDownRatio[axis] = 0.7;
							s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
							if(s.speedDecelerationRatioAbs[axis] < 0.05) {

								s.lastFlickSpeed[axis] = 0;
								s.backAnimStarted[axis] = true;

								_animateProp('bounceZoomPan'+axis,_panOffset[axis], 
									s.backAnimDestination[axis], 
									speed || 300, 
									framework.easing.sine.out, 
									function(pos) {
										_panOffset[axis] = pos;
										_applyCurrentZoomPan();
									}
								);

							}
						}
					}
				},

				// Reduces the speed by slowDownRatio (per 10ms)
				calculateAnimOffset: function(axis) {
					if(!s.backAnimStarted[axis]) {
						s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] + 
													s.slowDownRatioReverse[axis] - 
													s.slowDownRatioReverse[axis] * s.timeDiff / 10);

						s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
						s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
						_panOffset[axis] += s.distanceOffset[axis];

					}
				},

				panAnimLoop: function() {
					if ( _animations.zoomPan ) {
						_animations.zoomPan.raf = _requestAF(s.panAnimLoop);

						s.now = _getCurrentTime();
						s.timeDiff = s.now - s.lastNow;
						s.lastNow = s.now;
						
						s.calculateAnimOffset('x');
						s.calculateAnimOffset('y');

						_applyCurrentZoomPan();
						
						s.calculateOverBoundsAnimOffset('x');
						s.calculateOverBoundsAnimOffset('y');


						if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {

							// round pan position
							_panOffset.x = Math.round(_panOffset.x);
							_panOffset.y = Math.round(_panOffset.y);
							_applyCurrentZoomPan();
							
							_stopAnimation('zoomPan');
							return;
						}
					}

				}
			};
			return s;
		},

		_completePanGesture = function(animData) {
			// calculate swipe speed for Y axis (paanning)
			animData.calculateSwipeSpeed('y');

			_currPanBounds = self.currItem.bounds;
			
			animData.backAnimDestination = {};
			animData.backAnimStarted = {};

			// Avoid acceleration animation if speed is too low
			if(Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05 ) {
				animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;

				// Run pan drag release animation. E.g. if you drag image and release finger without momentum.
				animData.calculateOverBoundsAnimOffset('x');
				animData.calculateOverBoundsAnimOffset('y');
				return true;
			}

			// Animation loop that controls the acceleration after pan gesture ends
			_registerStartAnimation('zoomPan');
			animData.lastNow = _getCurrentTime();
			animData.panAnimLoop();
		},


		_finishSwipeMainScrollGesture = function(gestureType, _releaseAnimData) {
			var itemChanged;
			if(!_mainScrollAnimating) {
				_currZoomedItemIndex = _currentItemIndex;
			}


			
			var itemsDiff;

			if(gestureType === 'swipe') {
				var totalShiftDist = _currPoint.x - _startPoint.x,
					isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10;

				// if container is shifted for more than MIN_SWIPE_DISTANCE, 
				// and last flick gesture was in right direction
				if(totalShiftDist > MIN_SWIPE_DISTANCE && 
					(isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20) ) {
					// go to prev item
					itemsDiff = -1;
				} else if(totalShiftDist < -MIN_SWIPE_DISTANCE && 
					(isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20) ) {
					// go to next item
					itemsDiff = 1;
				}
			}

			var nextCircle;

			if(itemsDiff) {
				
				_currentItemIndex += itemsDiff;

				if(_currentItemIndex < 0) {
					_currentItemIndex = _options.loop ? _getNumItems()-1 : 0;
					nextCircle = true;
				} else if(_currentItemIndex >= _getNumItems()) {
					_currentItemIndex = _options.loop ? 0 : _getNumItems()-1;
					nextCircle = true;
				}

				if(!nextCircle || _options.loop) {
					_indexDiff += itemsDiff;
					_currPositionIndex -= itemsDiff;
					itemChanged = true;
				}
				

				
			}

			var animateToX = _slideSize.x * _currPositionIndex;
			var animateToDist = Math.abs( animateToX - _mainScrollPos.x );
			var finishAnimDuration;


			if(!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
				// "return to current" duration, e.g. when dragging from slide 0 to -1
				finishAnimDuration = 333; 
			} else {
				finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ? 
										animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) : 
										333;

				finishAnimDuration = Math.min(finishAnimDuration, 400);
				finishAnimDuration = Math.max(finishAnimDuration, 250);
			}

			if(_currZoomedItemIndex === _currentItemIndex) {
				itemChanged = false;
			}
			
			_mainScrollAnimating = true;
			
			_shout('mainScrollAnimStart');

			_animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out, 
				_moveMainScroll,
				function() {
					_stopAllAnimations();
					_mainScrollAnimating = false;
					_currZoomedItemIndex = -1;
					
					if(itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
						self.updateCurrItem();
					}
					
					_shout('mainScrollAnimComplete');
				}
			);

			if(itemChanged) {
				self.updateCurrItem(true);
			}

			return itemChanged;
		},

		_calculateZoomLevel = function(touchesDistance) {
			return  1 / _startPointsDistance * touchesDistance * _startZoomLevel;
		},

		// Resets zoom if it's out of bounds
		_completeZoomGesture = function() {
			var destZoomLevel = _currZoomLevel,
				minZoomLevel = _getMinZoomLevel(),
				maxZoomLevel = _getMaxZoomLevel();

			if ( _currZoomLevel < minZoomLevel ) {
				destZoomLevel = minZoomLevel;
			} else if ( _currZoomLevel > maxZoomLevel ) {
				destZoomLevel = maxZoomLevel;
			}

			var destOpacity = 1,
				onUpdate,
				initialOpacity = _bgOpacity;

			if(_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
				//_closedByScroll = true;
				self.close();
				return true;
			}

			if(_opacityChanged) {
				onUpdate = function(now) {
					_applyBgOpacity(  (destOpacity - initialOpacity) * now + initialOpacity );
				};
			}

			self.zoomTo(destZoomLevel, 0, 200,  framework.easing.cubic.out, onUpdate);
			return true;
		};


	_registerModule('Gestures', {
		publicMethods: {

			initGestures: function() {

				// helper function that builds touch/pointer/mouse events
				var addEventNames = function(pref, down, move, up, cancel) {
					_dragStartEvent = pref + down;
					_dragMoveEvent = pref + move;
					_dragEndEvent = pref + up;
					if(cancel) {
						_dragCancelEvent = pref + cancel;
					} else {
						_dragCancelEvent = '';
					}
				};

				_pointerEventEnabled = _features.pointerEvent;
				if(_pointerEventEnabled && _features.touch) {
					// we don't need touch events, if browser supports pointer events
					_features.touch = false;
				}

				if(_pointerEventEnabled) {
					if(navigator.pointerEnabled) {
						addEventNames('pointer', 'down', 'move', 'up', 'cancel');
					} else {
						// IE10 pointer events are case-sensitive
						addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
					}
				} else if(_features.touch) {
					addEventNames('touch', 'start', 'move', 'end', 'cancel');
					_likelyTouchDevice = true;
				} else {
					addEventNames('mouse', 'down', 'move', 'up');	
				}

				_upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent  + ' ' +  _dragCancelEvent;
				_downEvents = _dragStartEvent;

				if(_pointerEventEnabled && !_likelyTouchDevice) {
					_likelyTouchDevice = (navigator.maxTouchPoints > 1) || (navigator.msMaxTouchPoints > 1);
				}
				// make variable public
				self.likelyTouchDevice = _likelyTouchDevice; 
				
				_globalEventHandlers[_dragStartEvent] = _onDragStart;
				_globalEventHandlers[_dragMoveEvent] = _onDragMove;
				_globalEventHandlers[_dragEndEvent] = _onDragRelease; // the Kraken

				if(_dragCancelEvent) {
					_globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
				}

				// Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
				if(_features.touch) {
					_downEvents += ' mousedown';
					_upMoveEvents += ' mousemove mouseup';
					_globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
					_globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
					_globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
				}

				if(!_likelyTouchDevice) {
					// don't allow pan to next slide from zoomed state on Desktop
					_options.allowPanToNext = false;
				}
			}

		}
	});


	/*>>gestures*/

	/*>>show-hide-transition*/
	/**
	 * show-hide-transition.js:
	 *
	 * Manages initial opening or closing transition.
	 *
	 * If you're not planning to use transition for gallery at all,
	 * you may set options hideAnimationDuration and showAnimationDuration to 0,
	 * and just delete startAnimation function.
	 * 
	 */


	var _showOrHideTimeout,
		_showOrHide = function(item, img, out, completeFn) {

			if(_showOrHideTimeout) {
				clearTimeout(_showOrHideTimeout);
			}

			_initialZoomRunning = true;
			_initialContentSet = true;
			
			// dimensions of small thumbnail {x:,y:,w:}.
			// Height is optional, as calculated based on large image.
			var thumbBounds; 
			if(item.initialLayout) {
				thumbBounds = item.initialLayout;
				item.initialLayout = null;
			} else {
				thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
			}

			var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;

			var onComplete = function() {
				_stopAnimation('initialZoom');
				if(!out) {
					_applyBgOpacity(1);
					if(img) {
						img.style.display = 'block';
					}
					framework.addClass(template, 'pswp--animated-in');
					_shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
				} else {
					self.template.removeAttribute('style');
					self.bg.removeAttribute('style');
				}

				if(completeFn) {
					completeFn();
				}
				_initialZoomRunning = false;
			};

			// if bounds aren't provided, just open gallery without animation
			if(!duration || !thumbBounds || thumbBounds.x === undefined) {

				_shout('initialZoom' + (out ? 'Out' : 'In') );

				_currZoomLevel = item.initialZoomLevel;
				_equalizePoints(_panOffset,  item.initialPosition );
				_applyCurrentZoomPan();

				template.style.opacity = out ? 0 : 1;
				_applyBgOpacity(1);

				if(duration) {
					setTimeout(function() {
						onComplete();
					}, duration);
				} else {
					onComplete();
				}

				return;
			}

			var startAnimation = function() {
				var closeWithRaf = _closedByScroll,
					fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;
				
				// apply hw-acceleration to image
				if(item.miniImg) {
					item.miniImg.style.webkitBackfaceVisibility = 'hidden';
				}

				if(!out) {
					_currZoomLevel = thumbBounds.w / item.w;
					_panOffset.x = thumbBounds.x;
					_panOffset.y = thumbBounds.y - _initalWindowScrollY;

					self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;
					_applyCurrentZoomPan();
				}

				_registerStartAnimation('initialZoom');
				
				if(out && !closeWithRaf) {
					framework.removeClass(template, 'pswp--animated-in');
				}

				if(fadeEverything) {
					if(out) {
						framework[ (closeWithRaf ? 'remove' : 'add') + 'Class' ](template, 'pswp--animate_opacity');
					} else {
						setTimeout(function() {
							framework.addClass(template, 'pswp--animate_opacity');
						}, 30);
					}
				}

				_showOrHideTimeout = setTimeout(function() {

					_shout('initialZoom' + (out ? 'Out' : 'In') );
					

					if(!out) {

						// "in" animation always uses CSS transitions (instead of rAF).
						// CSS transition work faster here, 
						// as developer may also want to animate other things, 
						// like ui on top of sliding area, which can be animated just via CSS
						
						_currZoomLevel = item.initialZoomLevel;
						_equalizePoints(_panOffset,  item.initialPosition );
						_applyCurrentZoomPan();
						_applyBgOpacity(1);

						if(fadeEverything) {
							template.style.opacity = 1;
						} else {
							_applyBgOpacity(1);
						}

						_showOrHideTimeout = setTimeout(onComplete, duration + 20);
					} else {

						// "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
						var destZoomLevel = thumbBounds.w / item.w,
							initialPanOffset = {
								x: _panOffset.x,
								y: _panOffset.y
							},
							initialZoomLevel = _currZoomLevel,
							initalBgOpacity = _bgOpacity,
							onUpdate = function(now) {
								
								if(now === 1) {
									_currZoomLevel = destZoomLevel;
									_panOffset.x = thumbBounds.x;
									_panOffset.y = thumbBounds.y  - _currentWindowScrollY;
								} else {
									_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
									_panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
									_panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
								}
								
								_applyCurrentZoomPan();
								if(fadeEverything) {
									template.style.opacity = 1 - now;
								} else {
									_applyBgOpacity( initalBgOpacity - now * initalBgOpacity );
								}
							};

						if(closeWithRaf) {
							_animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
						} else {
							onUpdate(1);
							_showOrHideTimeout = setTimeout(onComplete, duration + 20);
						}
					}
				
				}, out ? 25 : 90); // Main purpose of this delay is to give browser time to paint and
						// create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
						// Which avoids lag at the beginning of scale transition.
			};
			startAnimation();

			
		};

	/*>>show-hide-transition*/

	/*>>items-controller*/
	/**
	*
	* Controller manages gallery items, their dimensions, and their content.
	* 
	*/

	var _items,
		_tempPanAreaSize = {},
		_imagesToAppendPool = [],
		_initialContentSet,
		_initialZoomRunning,
		_controllerDefaultOptions = {
			index: 0,
			errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
			forceProgressiveLoading: false, // TODO
			preload: [1,1],
			getNumItemsFn: function() {
				return _items.length;
			}
		};


	var _getItemAt,
		_getNumItems,
		_initialIsLoop,
		_getZeroBounds = function() {
			return {
				center:{x:0,y:0}, 
				max:{x:0,y:0}, 
				min:{x:0,y:0}
			};
		},
		_calculateSingleItemPanBounds = function(item, realPanElementW, realPanElementH ) {
			var bounds = item.bounds;

			// position of element when it's centered
			bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
			bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;

			// maximum pan position
			bounds.max.x = (realPanElementW > _tempPanAreaSize.x) ? 
								Math.round(_tempPanAreaSize.x - realPanElementW) : 
								bounds.center.x;
			
			bounds.max.y = (realPanElementH > _tempPanAreaSize.y) ? 
								Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top : 
								bounds.center.y;
			
			// minimum pan position
			bounds.min.x = (realPanElementW > _tempPanAreaSize.x) ? 0 : bounds.center.x;
			bounds.min.y = (realPanElementH > _tempPanAreaSize.y) ? item.vGap.top : bounds.center.y;
		},
		_calculateItemSize = function(item, viewportSize, zoomLevel) {

			if (item.src && !item.loadError) {
				var isInitial = !zoomLevel;
				
				if(isInitial) {
					if(!item.vGap) {
						item.vGap = {top:0,bottom:0};
					}
					// allows overriding vertical margin for individual items
					_shout('parseVerticalMargin', item);
				}


				_tempPanAreaSize.x = viewportSize.x;
				_tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;

				if (isInitial) {
					var hRatio = _tempPanAreaSize.x / item.w;
					var vRatio = _tempPanAreaSize.y / item.h;

					item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
					//item.fillRatio = hRatio > vRatio ? hRatio : vRatio;

					var scaleMode = _options.scaleMode;

					if (scaleMode === 'orig') {
						zoomLevel = 1;
					} else if (scaleMode === 'fit') {
						zoomLevel = item.fitRatio;
					}

					if (zoomLevel > 1) {
						zoomLevel = 1;
					}

					item.initialZoomLevel = zoomLevel;
					
					if(!item.bounds) {
						// reuse bounds object
						item.bounds = _getZeroBounds(); 
					}
				}

				if(!zoomLevel) {
					return;
				}

				_calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);

				if (isInitial && zoomLevel === item.initialZoomLevel) {
					item.initialPosition = item.bounds.center;
				}

				return item.bounds;
			} else {
				item.w = item.h = 0;
				item.initialZoomLevel = item.fitRatio = 1;
				item.bounds = _getZeroBounds();
				item.initialPosition = item.bounds.center;

				// if it's not image, we return zero bounds (content is not zoomable)
				return item.bounds;
			}
			
		},

		


		_appendImage = function(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {
			

			if(item.loadError) {
				return;
			}

			if(img) {

				item.imageAppended = true;
				_setImageSize(item, img, (item === self.currItem && _renderMaxResolution) );
				
				baseDiv.appendChild(img);

				if(keepPlaceholder) {
					setTimeout(function() {
						if(item && item.loaded && item.placeholder) {
							item.placeholder.style.display = 'none';
							item.placeholder = null;
						}
					}, 500);
				}
			}
		},
		


		_preloadImage = function(item) {
			item.loading = true;
			item.loaded = false;
			var img = item.img = framework.createEl('pswp__img', 'img');
			var onComplete = function() {
				item.loading = false;
				item.loaded = true;

				if(item.loadComplete) {
					item.loadComplete(item);
				} else {
					item.img = null; // no need to store image object
				}
				img.onload = img.onerror = null;
				img = null;
			};
			img.onload = onComplete;
			img.onerror = function() {
				item.loadError = true;
				onComplete();
			};		

			img.src = item.src;// + '?a=' + Math.random();

			return img;
		},
		_checkForError = function(item, cleanUp) {
			if(item.src && item.loadError && item.container) {

				if(cleanUp) {
					item.container.innerHTML = '';
				}

				item.container.innerHTML = _options.errorMsg.replace('%url%',  item.src );
				return true;
				
			}
		},
		_setImageSize = function(item, img, maxRes) {
			if(!item.src) {
				return;
			}

			if(!img) {
				img = item.container.lastChild;
			}

			var w = maxRes ? item.w : Math.round(item.w * item.fitRatio),
				h = maxRes ? item.h : Math.round(item.h * item.fitRatio);
			
			if(item.placeholder && !item.loaded) {
				item.placeholder.style.width = w + 'px';
				item.placeholder.style.height = h + 'px';
			}

			img.style.width = w + 'px';
			img.style.height = h + 'px';
		},
		_appendImagesPool = function() {

			if(_imagesToAppendPool.length) {
				var poolItem;

				for(var i = 0; i < _imagesToAppendPool.length; i++) {
					poolItem = _imagesToAppendPool[i];
					if( poolItem.holder.index === poolItem.index ) {
						_appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
					}
				}
				_imagesToAppendPool = [];
			}
		};
		


	_registerModule('Controller', {

		publicMethods: {

			lazyLoadItem: function(index) {
				index = _getLoopedId(index);
				var item = _getItemAt(index);

				if(!item || ((item.loaded || item.loading) && !_itemsNeedUpdate)) {
					return;
				}

				_shout('gettingData', index, item);

				if (!item.src) {
					return;
				}

				_preloadImage(item);
			},
			initController: function() {
				framework.extend(_options, _controllerDefaultOptions, true);
				self.items = _items = items;
				_getItemAt = self.getItemAt;
				_getNumItems = _options.getNumItemsFn; //self.getNumItems;



				_initialIsLoop = _options.loop;
				if(_getNumItems() < 3) {
					_options.loop = false; // disable loop if less then 3 items
				}

				_listen('beforeChange', function(diff) {

					var p = _options.preload,
						isNext = diff === null ? true : (diff >= 0),
						preloadBefore = Math.min(p[0], _getNumItems() ),
						preloadAfter = Math.min(p[1], _getNumItems() ),
						i;


					for(i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
						self.lazyLoadItem(_currentItemIndex+i);
					}
					for(i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
						self.lazyLoadItem(_currentItemIndex-i);
					}
				});

				_listen('initialLayout', function() {
					self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
				});

				_listen('mainScrollAnimComplete', _appendImagesPool);
				_listen('initialZoomInEnd', _appendImagesPool);



				_listen('destroy', function() {
					var item;
					for(var i = 0; i < _items.length; i++) {
						item = _items[i];
						// remove reference to DOM elements, for GC
						if(item.container) {
							item.container = null; 
						}
						if(item.placeholder) {
							item.placeholder = null;
						}
						if(item.img) {
							item.img = null;
						}
						if(item.preloader) {
							item.preloader = null;
						}
						if(item.loadError) {
							item.loaded = item.loadError = false;
						}
					}
					_imagesToAppendPool = null;
				});
			},


			getItemAt: function(index) {
				if (index >= 0) {
					return _items[index] !== undefined ? _items[index] : false;
				}
				return false;
			},

			allowProgressiveImg: function() {
				// 1. Progressive image loading isn't working on webkit/blink 
				//    when hw-acceleration (e.g. translateZ) is applied to IMG element.
				//    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
				//    
				// 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
				//    That's why it's disabled on touch devices (mainly because of swipe transition)
				//    
				// 3. Progressive image loading sometimes doesn't work in IE (up to 11).

				// Don't allow progressive loading on non-large touch devices
				return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200; 
				// 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
			},

			setContent: function(holder, index) {

				if(_options.loop) {
					index = _getLoopedId(index);
				}

				var prevItem = self.getItemAt(holder.index);
				if(prevItem) {
					prevItem.container = null;
				}
		
				var item = self.getItemAt(index),
					img;
				
				if(!item) {
					holder.el.innerHTML = '';
					return;
				}

				// allow to override data
				_shout('gettingData', index, item);

				holder.index = index;
				holder.item = item;

				// base container DIV is created only once for each of 3 holders
				var baseDiv = item.container = framework.createEl('pswp__zoom-wrap'); 

				

				if(!item.src && item.html) {
					if(item.html.tagName) {
						baseDiv.appendChild(item.html);
					} else {
						baseDiv.innerHTML = item.html;
					}
				}

				_checkForError(item);

				_calculateItemSize(item, _viewportSize);
				
				if(item.src && !item.loadError && !item.loaded) {

					item.loadComplete = function(item) {

						// gallery closed before image finished loading
						if(!_isOpen) {
							return;
						}

						// check if holder hasn't changed while image was loading
						if(holder && holder.index === index ) {
							if( _checkForError(item, true) ) {
								item.loadComplete = item.img = null;
								_calculateItemSize(item, _viewportSize);
								_applyZoomPanToItem(item);

								if(holder.index === _currentItemIndex) {
									// recalculate dimensions
									self.updateCurrZoomItem();
								}
								return;
							}
							if( !item.imageAppended ) {
								if(_features.transform && (_mainScrollAnimating || _initialZoomRunning) ) {
									_imagesToAppendPool.push({
										item:item,
										baseDiv:baseDiv,
										img:item.img,
										index:index,
										holder:holder,
										clearPlaceholder:true
									});
								} else {
									_appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
								}
							} else {
								// remove preloader & mini-img
								if(!_initialZoomRunning && item.placeholder) {
									item.placeholder.style.display = 'none';
									item.placeholder = null;
								}
							}
						}

						item.loadComplete = null;
						item.img = null; // no need to store image element after it's added

						_shout('imageLoadComplete', index, item);
					};

					if(framework.features.transform) {
						
						var placeholderClassName = 'pswp__img pswp__img--placeholder'; 
						placeholderClassName += (item.msrc ? '' : ' pswp__img--placeholder--blank');

						var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');
						if(item.msrc) {
							placeholder.src = item.msrc;
						}
						
						_setImageSize(item, placeholder);

						baseDiv.appendChild(placeholder);
						item.placeholder = placeholder;

					}
					

					

					if(!item.loading) {
						_preloadImage(item);
					}


					if( self.allowProgressiveImg() ) {
						// just append image
						if(!_initialContentSet && _features.transform) {
							_imagesToAppendPool.push({
								item:item, 
								baseDiv:baseDiv, 
								img:item.img, 
								index:index, 
								holder:holder
							});
						} else {
							_appendImage(index, item, baseDiv, item.img, true, true);
						}
					}
					
				} else if(item.src && !item.loadError) {
					// image object is created every time, due to bugs of image loading & delay when switching images
					img = framework.createEl('pswp__img', 'img');
					img.style.opacity = 1;
					img.src = item.src;
					_setImageSize(item, img);
					_appendImage(index, item, baseDiv, img, true);
				}
				

				if(!_initialContentSet && index === _currentItemIndex) {
					_currZoomElementStyle = baseDiv.style;
					_showOrHide(item, (img ||item.img) );
				} else {
					_applyZoomPanToItem(item);
				}

				holder.el.innerHTML = '';
				holder.el.appendChild(baseDiv);
			},

			cleanSlide: function( item ) {
				if(item.img ) {
					item.img.onload = item.img.onerror = null;
				}
				item.loaded = item.loading = item.img = item.imageAppended = false;
			}

		}
	});

	/*>>items-controller*/

	/*>>tap*/
	/**
	 * tap.js:
	 *
	 * Displatches tap and double-tap events.
	 * 
	 */

	var tapTimer,
		tapReleasePoint = {},
		_dispatchTapEvent = function(origEvent, releasePoint, pointerType) {		
			var e = document.createEvent( 'CustomEvent' ),
				eDetail = {
					origEvent:origEvent, 
					target:origEvent.target, 
					releasePoint: releasePoint, 
					pointerType:pointerType || 'touch'
				};

			e.initCustomEvent( 'pswpTap', true, true, eDetail );
			origEvent.target.dispatchEvent(e);
		};

	_registerModule('Tap', {
		publicMethods: {
			initTap: function() {
				_listen('firstTouchStart', self.onTapStart);
				_listen('touchRelease', self.onTapRelease);
				_listen('destroy', function() {
					tapReleasePoint = {};
					tapTimer = null;
				});
			},
			onTapStart: function(touchList) {
				if(touchList.length > 1) {
					clearTimeout(tapTimer);
					tapTimer = null;
				}
			},
			onTapRelease: function(e, releasePoint) {
				if(!releasePoint) {
					return;
				}

				if(!_moved && !_isMultitouch && !_numAnimations) {
					var p0 = releasePoint;
					if(tapTimer) {
						clearTimeout(tapTimer);
						tapTimer = null;

						// Check if taped on the same place
						if ( _isNearbyPoints(p0, tapReleasePoint) ) {
							_shout('doubleTap', p0);
							return;
						}
					}

					if(releasePoint.type === 'mouse') {
						_dispatchTapEvent(e, releasePoint, 'mouse');
						return;
					}

					var clickedTagName = e.target.tagName.toUpperCase();
					// avoid double tap delay on buttons and elements that have class pswp__single-tap
					if(clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap') ) {
						_dispatchTapEvent(e, releasePoint);
						return;
					}

					_equalizePoints(tapReleasePoint, p0);

					tapTimer = setTimeout(function() {
						_dispatchTapEvent(e, releasePoint);
						tapTimer = null;
					}, 300);
				}
			}
		}
	});

	/*>>tap*/

	/*>>desktop-zoom*/
	/**
	 *
	 * desktop-zoom.js:
	 *
	 * - Binds mousewheel event for paning zoomed image.
	 * - Manages "dragging", "zoomed-in", "zoom-out" classes.
	 *   (which are used for cursors and zoom icon)
	 * - Adds toggleDesktopZoom function.
	 * 
	 */

	var _wheelDelta;
		
	_registerModule('DesktopZoom', {

		publicMethods: {

			initDesktopZoom: function() {

				if(_oldIE) {
					// no zoom for old IE (<=8)
					return;
				}

				if(_likelyTouchDevice) {
					// if detected hardware touch support, we wait until mouse is used,
					// and only then apply desktop-zoom features
					_listen('mouseUsed', function() {
						self.setupDesktopZoom();
					});
				} else {
					self.setupDesktopZoom(true);
				}

			},

			setupDesktopZoom: function(onInit) {

				_wheelDelta = {};

				var events = 'wheel mousewheel DOMMouseScroll';
				
				_listen('bindEvents', function() {
					framework.bind(template, events,  self.handleMouseWheel);
				});

				_listen('unbindEvents', function() {
					if(_wheelDelta) {
						framework.unbind(template, events, self.handleMouseWheel);
					}
				});

				self.mouseZoomedIn = false;

				var hasDraggingClass,
					updateZoomable = function() {
						if(self.mouseZoomedIn) {
							framework.removeClass(template, 'pswp--zoomed-in');
							self.mouseZoomedIn = false;
						}
						if(_currZoomLevel < 1) {
							framework.addClass(template, 'pswp--zoom-allowed');
						} else {
							framework.removeClass(template, 'pswp--zoom-allowed');
						}
						removeDraggingClass();
					},
					removeDraggingClass = function() {
						if(hasDraggingClass) {
							framework.removeClass(template, 'pswp--dragging');
							hasDraggingClass = false;
						}
					};

				_listen('resize' , updateZoomable);
				_listen('afterChange' , updateZoomable);
				_listen('pointerDown', function() {
					if(self.mouseZoomedIn) {
						hasDraggingClass = true;
						framework.addClass(template, 'pswp--dragging');
					}
				});
				_listen('pointerUp', removeDraggingClass);

				if(!onInit) {
					updateZoomable();
				}
				
			},

			handleMouseWheel: function(e) {

				if(_currZoomLevel <= self.currItem.fitRatio) {
					if( _options.modal ) {

						if (!_options.closeOnScroll || _numAnimations || _isDragging) {
							e.preventDefault();
						} else if(_transformKey && Math.abs(e.deltaY) > 2) {
							// close PhotoSwipe
							// if browser supports transforms & scroll changed enough
							_closedByScroll = true;
							self.close();
						}

					}
					return true;
				}

				// allow just one event to fire
				e.stopPropagation();

				// https://developer.mozilla.org/en-US/docs/Web/Events/wheel
				_wheelDelta.x = 0;

				if('deltaX' in e) {
					if(e.deltaMode === 1 /* DOM_DELTA_LINE */) {
						// 18 - average line height
						_wheelDelta.x = e.deltaX * 18;
						_wheelDelta.y = e.deltaY * 18;
					} else {
						_wheelDelta.x = e.deltaX;
						_wheelDelta.y = e.deltaY;
					}
				} else if('wheelDelta' in e) {
					if(e.wheelDeltaX) {
						_wheelDelta.x = -0.16 * e.wheelDeltaX;
					}
					if(e.wheelDeltaY) {
						_wheelDelta.y = -0.16 * e.wheelDeltaY;
					} else {
						_wheelDelta.y = -0.16 * e.wheelDelta;
					}
				} else if('detail' in e) {
					_wheelDelta.y = e.detail;
				} else {
					return;
				}

				_calculatePanBounds(_currZoomLevel, true);

				var newPanX = _panOffset.x - _wheelDelta.x,
					newPanY = _panOffset.y - _wheelDelta.y;

				// only prevent scrolling in nonmodal mode when not at edges
				if (_options.modal ||
					(
					newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x &&
					newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y
					) ) {
					e.preventDefault();
				}

				// TODO: use rAF instead of mousewheel?
				self.panTo(newPanX, newPanY);
			},

			toggleDesktopZoom: function(centerPoint) {
				centerPoint = centerPoint || {x:_viewportSize.x/2 + _offset.x, y:_viewportSize.y/2 + _offset.y };

				var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
				var zoomOut = _currZoomLevel === doubleTapZoomLevel;
				
				self.mouseZoomedIn = !zoomOut;

				self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
				framework[ (!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
			}

		}
	});


	/*>>desktop-zoom*/

	/*>>history*/
	/**
	 *
	 * history.js:
	 *
	 * - Back button to close gallery.
	 * 
	 * - Unique URL for each slide: example.com/&pid=1&gid=3
	 *   (where PID is picture index, and GID and gallery index)
	 *   
	 * - Switch URL when slides change.
	 * 
	 */


	var _historyDefaultOptions = {
		history: true,
		galleryUID: 1
	};

	var _historyUpdateTimeout,
		_hashChangeTimeout,
		_hashAnimCheckTimeout,
		_hashChangedByScript,
		_hashChangedByHistory,
		_hashReseted,
		_initialHash,
		_historyChanged,
		_closedFromURL,
		_urlChangedOnce,
		_windowLoc,

		_supportsPushState,

		_getHash = function() {
			return _windowLoc.hash.substring(1);
		},
		_cleanHistoryTimeouts = function() {

			if(_historyUpdateTimeout) {
				clearTimeout(_historyUpdateTimeout);
			}

			if(_hashAnimCheckTimeout) {
				clearTimeout(_hashAnimCheckTimeout);
			}
		},

		// pid - Picture index
		// gid - Gallery index
		_parseItemIndexFromURL = function() {
			var hash = _getHash(),
				params = {};

			if(hash.length < 5) { // pid=1
				return params;
			}

			var i, vars = hash.split('&');
			for (i = 0; i < vars.length; i++) {
				if(!vars[i]) {
					continue;
				}
				var pair = vars[i].split('=');	
				if(pair.length < 2) {
					continue;
				}
				params[pair[0]] = pair[1];
			}
			if(_options.galleryPIDs) {
				// detect custom pid in hash and search for it among the items collection
				var searchfor = params.pid;
				params.pid = 0; // if custom pid cannot be found, fallback to the first item
				for(i = 0; i < _items.length; i++) {
					if(_items[i].pid === searchfor) {
						params.pid = i;
						break;
					}
				}
			} else {
				params.pid = parseInt(params.pid,10)-1;
			}
			if( params.pid < 0 ) {
				params.pid = 0;
			}
			return params;
		},
		_updateHash = function() {

			if(_hashAnimCheckTimeout) {
				clearTimeout(_hashAnimCheckTimeout);
			}


			if(_numAnimations || _isDragging) {
				// changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
				// that's why we update hash only when no animations running
				_hashAnimCheckTimeout = setTimeout(_updateHash, 500);
				return;
			}
			
			if(_hashChangedByScript) {
				clearTimeout(_hashChangeTimeout);
			} else {
				_hashChangedByScript = true;
			}


			var pid = (_currentItemIndex + 1);
			var item = _getItemAt( _currentItemIndex );
			if(item.hasOwnProperty('pid')) {
				// carry forward any custom pid assigned to the item
				pid = item.pid;
			}
			var newHash = _initialHash + '&'  +  'gid=' + _options.galleryUID + '&' + 'pid=' + pid;

			if(!_historyChanged) {
				if(_windowLoc.hash.indexOf(newHash) === -1) {
					_urlChangedOnce = true;
				}
				// first time - add new hisory record, then just replace
			}

			var newURL = _windowLoc.href.split('#')[0] + '#' +  newHash;

			if( _supportsPushState ) {

				if('#' + newHash !== window.location.hash) {
					history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
				}

			} else {
				if(_historyChanged) {
					_windowLoc.replace( newURL );
				} else {
					_windowLoc.hash = newHash;
				}
			}
			
			

			_historyChanged = true;
			_hashChangeTimeout = setTimeout(function() {
				_hashChangedByScript = false;
			}, 60);
		};



		

	_registerModule('History', {

		

		publicMethods: {
			initHistory: function() {

				framework.extend(_options, _historyDefaultOptions, true);

				if( !_options.history ) {
					return;
				}


				_windowLoc = window.location;
				_urlChangedOnce = false;
				_closedFromURL = false;
				_historyChanged = false;
				_initialHash = _getHash();
				_supportsPushState = ('pushState' in history);


				if(_initialHash.indexOf('gid=') > -1) {
					_initialHash = _initialHash.split('&gid=')[0];
					_initialHash = _initialHash.split('?gid=')[0];
				}
				

				_listen('afterChange', self.updateURL);
				_listen('unbindEvents', function() {
					framework.unbind(window, 'hashchange', self.onHashChange);
				});


				var returnToOriginal = function() {
					_hashReseted = true;
					if(!_closedFromURL) {

						if(_urlChangedOnce) {
							history.back();
						} else {

							if(_initialHash) {
								_windowLoc.hash = _initialHash;
							} else {
								if (_supportsPushState) {

									// remove hash from url without refreshing it or scrolling to top
									history.pushState('', document.title,  _windowLoc.pathname + _windowLoc.search );
								} else {
									_windowLoc.hash = '';
								}
							}
						}
						
					}

					_cleanHistoryTimeouts();
				};


				_listen('unbindEvents', function() {
					if(_closedByScroll) {
						// if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
						// this is done to keep the scroll position
						returnToOriginal();
					}
				});
				_listen('destroy', function() {
					if(!_hashReseted) {
						returnToOriginal();
					}
				});
				_listen('firstUpdate', function() {
					_currentItemIndex = _parseItemIndexFromURL().pid;
				});

				

				
				var index = _initialHash.indexOf('pid=');
				if(index > -1) {
					_initialHash = _initialHash.substring(0, index);
					if(_initialHash.slice(-1) === '&') {
						_initialHash = _initialHash.slice(0, -1);
					}
				}
				

				setTimeout(function() {
					if(_isOpen) { // hasn't destroyed yet
						framework.bind(window, 'hashchange', self.onHashChange);
					}
				}, 40);
				
			},
			onHashChange: function() {

				if(_getHash() === _initialHash) {

					_closedFromURL = true;
					self.close();
					return;
				}
				if(!_hashChangedByScript) {

					_hashChangedByHistory = true;
					self.goTo( _parseItemIndexFromURL().pid );
					_hashChangedByHistory = false;
				}
				
			},
			updateURL: function() {

				// Delay the update of URL, to avoid lag during transition, 
				// and to not to trigger actions like "refresh page sound" or "blinking favicon" to often
				
				_cleanHistoryTimeouts();
				

				if(_hashChangedByHistory) {
					return;
				}

				if(!_historyChanged) {
					_updateHash(); // first time
				} else {
					_historyUpdateTimeout = setTimeout(_updateHash, 800);
				}
			}
		
		}
	});


	/*>>history*/
		framework.extend(self, publicMethods); };
		return PhotoSwipe;
	});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! PhotoSwipe Default UI - 4.1.2 - 2017-04-05
	* http://photoswipe.com
	* Copyright (c) 2017 Dmitry Semenov; */
	!function(a,b){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (b), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=b():a.PhotoSwipeUI_Default=b()}(this,function(){"use strict";var a=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=this,w=!1,x=!0,y=!0,z={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(a,b){return a.title?(b.children[0].innerHTML=a.title,!0):(b.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return a.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return a.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},A=function(a){if(r)return!0;a=a||window.event,q.timeToIdle&&q.mouseUsed&&!k&&K();for(var c,d,e=a.target||a.srcElement,f=e.getAttribute("class")||"",g=0;g<S.length;g++)c=S[g],c.onTap&&f.indexOf("pswp__"+c.name)>-1&&(c.onTap(),d=!0);if(d){a.stopPropagation&&a.stopPropagation(),r=!0;var h=b.features.isOldAndroid?600:30;s=setTimeout(function(){r=!1},h)}},B=function(){return!a.likelyTouchDevice||q.mouseUsed||screen.width>q.fitControlsWidth},C=function(a,c,d){b[(d?"add":"remove")+"Class"](a,"pswp__"+c)},D=function(){var a=1===q.getNumItemsFn();a!==p&&(C(d,"ui--one-slide",a),p=a)},E=function(){C(i,"share-modal--hidden",y)},F=function(){return y=!y,y?(b.removeClass(i,"pswp__share-modal--fade-in"),setTimeout(function(){y&&E()},300)):(E(),setTimeout(function(){y||b.addClass(i,"pswp__share-modal--fade-in")},30)),y||H(),!1},G=function(b){b=b||window.event;var c=b.target||b.srcElement;return a.shout("shareLinkClick",b,c),!!c.href&&(!!c.hasAttribute("download")||(window.open(c.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),y||F(),!1))},H=function(){for(var a,b,c,d,e,f="",g=0;g<q.shareButtons.length;g++)a=q.shareButtons[g],c=q.getImageURLForShare(a),d=q.getPageURLForShare(a),e=q.getTextForShare(a),b=a.url.replace("{{url}}",encodeURIComponent(d)).replace("{{image_url}}",encodeURIComponent(c)).replace("{{raw_image_url}}",c).replace("{{text}}",encodeURIComponent(e)),f+='<a href="'+b+'" target="_blank" class="pswp__share--'+a.id+'"'+(a.download?"download":"")+">"+a.label+"</a>",q.parseShareButtonOut&&(f=q.parseShareButtonOut(a,f));i.children[0].innerHTML=f,i.children[0].onclick=G},I=function(a){for(var c=0;c<q.closeElClasses.length;c++)if(b.hasClass(a,"pswp__"+q.closeElClasses[c]))return!0},J=0,K=function(){clearTimeout(u),J=0,k&&v.setIdle(!1)},L=function(a){a=a?a:window.event;var b=a.relatedTarget||a.toElement;b&&"HTML"!==b.nodeName||(clearTimeout(u),u=setTimeout(function(){v.setIdle(!0)},q.timeToIdleOutside))},M=function(){q.fullscreenEl&&!b.features.isOldAndroid&&(c||(c=v.getFullscreenAPI()),c?(b.bind(document,c.eventK,v.updateFullscreen),v.updateFullscreen(),b.addClass(a.template,"pswp--supports-fs")):b.removeClass(a.template,"pswp--supports-fs"))},N=function(){q.preloaderEl&&(O(!0),l("beforeChange",function(){clearTimeout(o),o=setTimeout(function(){a.currItem&&a.currItem.loading?(!a.allowProgressiveImg()||a.currItem.img&&!a.currItem.img.naturalWidth)&&O(!1):O(!0)},q.loadingIndicatorDelay)}),l("imageLoadComplete",function(b,c){a.currItem===c&&O(!0)}))},O=function(a){n!==a&&(C(m,"preloader--active",!a),n=a)},P=function(a){var c=a.vGap;if(B()){var g=q.barsSize;if(q.captionEl&&"auto"===g.bottom)if(f||(f=b.createEl("pswp__caption pswp__caption--fake"),f.appendChild(b.createEl("pswp__caption__center")),d.insertBefore(f,e),b.addClass(d,"pswp__ui--fit")),q.addCaptionHTMLFn(a,f,!0)){var h=f.clientHeight;c.bottom=parseInt(h,10)||44}else c.bottom=g.top;else c.bottom="auto"===g.bottom?0:g.bottom;c.top=g.top}else c.top=c.bottom=0},Q=function(){q.timeToIdle&&l("mouseUsed",function(){b.bind(document,"mousemove",K),b.bind(document,"mouseout",L),t=setInterval(function(){J++,2===J&&v.setIdle(!0)},q.timeToIdle/2)})},R=function(){l("onVerticalDrag",function(a){x&&a<.95?v.hideControls():!x&&a>=.95&&v.showControls()});var a;l("onPinchClose",function(b){x&&b<.9?(v.hideControls(),a=!0):a&&!x&&b>.9&&v.showControls()}),l("zoomGestureEnded",function(){a=!1,a&&!x&&v.showControls()})},S=[{name:"caption",option:"captionEl",onInit:function(a){e=a}},{name:"share-modal",option:"shareEl",onInit:function(a){i=a},onTap:function(){F()}},{name:"button--share",option:"shareEl",onInit:function(a){h=a},onTap:function(){F()}},{name:"button--zoom",option:"zoomEl",onTap:a.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(a){g=a}},{name:"button--close",option:"closeEl",onTap:a.close},{name:"button--arrow--left",option:"arrowEl",onTap:a.prev},{name:"button--arrow--right",option:"arrowEl",onTap:a.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){c.isFullscreen()?c.exit():c.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(a){m=a}}],T=function(){var a,c,e,f=function(d){if(d)for(var f=d.length,g=0;g<f;g++){a=d[g],c=a.className;for(var h=0;h<S.length;h++)e=S[h],c.indexOf("pswp__"+e.name)>-1&&(q[e.option]?(b.removeClass(a,"pswp__element--disabled"),e.onInit&&e.onInit(a)):b.addClass(a,"pswp__element--disabled"))}};f(d.children);var g=b.getChildByClass(d,"pswp__top-bar");g&&f(g.children)};v.init=function(){b.extend(a.options,z,!0),q=a.options,d=b.getChildByClass(a.scrollWrap,"pswp__ui"),l=a.listen,R(),l("beforeChange",v.update),l("doubleTap",function(b){var c=a.currItem.initialZoomLevel;a.getZoomLevel()!==c?a.zoomTo(c,b,333):a.zoomTo(q.getDoubleTapZoom(!1,a.currItem),b,333)}),l("preventDragEvent",function(a,b,c){var d=a.target||a.srcElement;d&&d.getAttribute("class")&&a.type.indexOf("mouse")>-1&&(d.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(d.tagName))&&(c.prevent=!1)}),l("bindEvents",function(){b.bind(d,"pswpTap click",A),b.bind(a.scrollWrap,"pswpTap",v.onGlobalTap),a.likelyTouchDevice||b.bind(a.scrollWrap,"mouseover",v.onMouseOver)}),l("unbindEvents",function(){y||F(),t&&clearInterval(t),b.unbind(document,"mouseout",L),b.unbind(document,"mousemove",K),b.unbind(d,"pswpTap click",A),b.unbind(a.scrollWrap,"pswpTap",v.onGlobalTap),b.unbind(a.scrollWrap,"mouseover",v.onMouseOver),c&&(b.unbind(document,c.eventK,v.updateFullscreen),c.isFullscreen()&&(q.hideAnimationDuration=0,c.exit()),c=null)}),l("destroy",function(){q.captionEl&&(f&&d.removeChild(f),b.removeClass(e,"pswp__caption--empty")),i&&(i.children[0].onclick=null),b.removeClass(d,"pswp__ui--over-close"),b.addClass(d,"pswp__ui--hidden"),v.setIdle(!1)}),q.showAnimationDuration||b.removeClass(d,"pswp__ui--hidden"),l("initialZoomIn",function(){q.showAnimationDuration&&b.removeClass(d,"pswp__ui--hidden")}),l("initialZoomOut",function(){b.addClass(d,"pswp__ui--hidden")}),l("parseVerticalMargin",P),T(),q.shareEl&&h&&i&&(y=!0),D(),Q(),M(),N()},v.setIdle=function(a){k=a,C(d,"ui--idle",a)},v.update=function(){x&&a.currItem?(v.updateIndexIndicator(),q.captionEl&&(q.addCaptionHTMLFn(a.currItem,e),C(e,"caption--empty",!a.currItem.title)),w=!0):w=!1,y||F(),D()},v.updateFullscreen=function(d){d&&setTimeout(function(){a.setScrollOffset(0,b.getScrollY())},50),b[(c.isFullscreen()?"add":"remove")+"Class"](a.template,"pswp--fs")},v.updateIndexIndicator=function(){q.counterEl&&(g.innerHTML=a.getCurrentIndex()+1+q.indexIndicatorSep+q.getNumItemsFn())},v.onGlobalTap=function(c){c=c||window.event;var d=c.target||c.srcElement;if(!r)if(c.detail&&"mouse"===c.detail.pointerType){if(I(d))return void a.close();b.hasClass(d,"pswp__img")&&(1===a.getZoomLevel()&&a.getZoomLevel()<=a.currItem.fitRatio?q.clickToCloseNonZoomable&&a.close():a.toggleDesktopZoom(c.detail.releasePoint))}else if(q.tapToToggleControls&&(x?v.hideControls():v.showControls()),q.tapToClose&&(b.hasClass(d,"pswp__img")||I(d)))return void a.close()},v.onMouseOver=function(a){a=a||window.event;var b=a.target||a.srcElement;C(d,"ui--over-close",I(b))},v.hideControls=function(){b.addClass(d,"pswp__ui--hidden"),x=!1},v.showControls=function(){x=!0,w||v.update(),b.removeClass(d,"pswp__ui--hidden")},v.supportsFullscreen=function(){var a=document;return!!(a.exitFullscreen||a.mozCancelFullScreen||a.webkitExitFullscreen||a.msExitFullscreen)},v.getFullscreenAPI=function(){var b,c=document.documentElement,d="fullscreenchange";return c.requestFullscreen?b={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:d}:c.mozRequestFullScreen?b={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+d}:c.webkitRequestFullscreen?b={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+d}:c.msRequestFullscreen&&(b={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),b&&(b.enter=function(){return j=q.closeOnScroll,q.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?a.template[this.enterK]():void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},b.exit=function(){return q.closeOnScroll=j,document[this.exitK]()},b.isFullscreen=function(){return document[this.elementK]}),b}};return a});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = angular.module("rExperience", []).component("resumeExperience", {
		templateUrl: "components/rExperience/cmpt.html",
		controller: ResumeExperienceCtrl,
		bindings: {
			pageIndex: "<"
		}
	}).directive("touchThreeD", ["$window", "actionEvent", function ($window, actionEvent) {
		function link($scope, ele) {

			var bannerWidth = void 0,
			    bannerHeight = void 0,
			    offsetLeft = void 0,
			    offsetTop = void 0;
			$scope.$watch("$parent.$parent.pageIndex", function (newV) {
				if (Number(newV) !== 3) {
					return;
				}
				bannerWidth = ele[0].offsetWidth;
				bannerHeight = ele[0].offsetHeight;
				offsetLeft = ele[0].offsetLeft;
				offsetTop = ele[0].offsetTop;
			});

			ele[0].addEventListener(actionEvent.event.move, mousemoveHandler);
			ele[0].addEventListener("mouseout", mouseoutHandler);

			function mousemoveHandler(evt) {
				var pageX = evt.pageX,
				    pageY = evt.pageY,
				    x = pageX - offsetLeft - bannerWidth / 2,
				    y = bannerHeight / 2 - pageY + offsetTop + 140;
				ele[0].style.transform = "rotateY(" + x / 50 + "deg) rotateX(" + y / 50 + "deg)";
			}

			function mouseoutHandler(evt) {
				ele[0].style.transform = "rotateY(0deg) rotateX(0deg)";
			}

			$window.onresize = onResize;

			function onResize() {
				offsetLeft = ele[0].offsetLeft;
				offsetTop = ele[0].offsetTop;
			}
		}
		return {
			restrict: "A",
			link: link
		};
	}]).directive("switchExp", ["actionEvent", function (actionEvent) {
		function link($scope, ele) {

			var vm = $scope.$ctrl,
			    contentNode = document.body.querySelectorAll(".-experience-content")[0];

			vm.cutList = new Array(3);

			ele[0].addEventListener(actionEvent.event.start, switchExpList);

			function switchExpList(evt) {
				if (evt.target.nodeName != "LI") {
					return;
				}

				if (evt.target.dataset.index !== vm.curIndex) {
					vm.curIndex = evt.target.dataset.index;
					contentNode.style.opacity = "0";
					contentNode.addEventListener("webkitTransitionEnd", transitionEndHandler);
				}
			}
			function transitionEndHandler() {
				contentNode.style.opacity = "1";
				$scope.$apply(function () {
					vm.exp = vm.expList[vm.curIndex];
				});
				contentNode.removeEventListener("webkitTransitionEnd", transitionEndHandler);
			}
		}
		return {
			link: link
		};
	}]).name;


	ResumeExperienceCtrl.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"];

	function ResumeExperienceCtrl(dataExtend, resumeData, $rootScope, $scope) {
		var vm = this;

		dataExtend.extend(vm, resumeData.cn.experience);

		vm.curIndex = 0;

		vm.exp = vm.expList[vm.curIndex];

		$rootScope.$on("switchLang", function (evt, data) {

			var extendData = Number(data) == 2 ? resumeData.en.experience : resumeData.cn.experience;

			vm.isEng = Number(data) == 2;

			dataExtend.extend(vm, extendData);

			vm.exp = vm.expList[0];

			$scope.$apply();
		});
	}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = angular.module("rInfo", []).component("resumeInfo", {
		templateUrl: "components/rInfo/cmpt.html",
		controller: ResumeInfoCtrl
	}).name;


	ResumeInfoCtrl.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"];

	function ResumeInfoCtrl(dataExtend, resumeData, $rootScope, $scope) {
		var vm = this;

		dataExtend.extend(vm, resumeData.cn.info);

		$rootScope.$on("switchLang", function (evt, data) {

			var extendData = Number(data) == 2 ? resumeData.en.info : resumeData.cn.info;

			vm.isEng = Number(data) == 2;

			dataExtend.extend(vm, extendData);

			$scope.$apply();
		});
	}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = angular.module("rSkill", []).component("resumeSkill", {
		templateUrl: "components/rSkill/cmpt.html",
		controller: ResumeSkillCtrl
	}).name;


	ResumeSkillCtrl.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"];

	function ResumeSkillCtrl(dataExtend, resumeData, $rootScope, $scope) {
		var vm = this;

		dataExtend.extend(vm, resumeData.cn.skill);

		$rootScope.$on("switchLang", function (evt, data) {

			var extendData = Number(data) == 2 ? resumeData.en.skill : resumeData.cn.skill;

			vm.isEng = Number(data) == 2;

			dataExtend.extend(vm, extendData);

			$scope.$apply();
		});
	}

/***/ })
/******/ ]);