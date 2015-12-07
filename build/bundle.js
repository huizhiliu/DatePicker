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
/***/ function(module, exports) {

	/**
	 * Created by liuhuizhi on 15/12/3.
	 */


	$.fn.DatePicker = function(){
	    var $b = $('body');


	    //遮罩
	    var $wrapper = $('<div/>').css({
	        position:'fixed',
	        top:0,
	        left:0,
	        right:0,
	        bottom:0,
	        background:'rgba(0,0,0,0.4)'
	    })


	    //日历选择器
	    var $datePicker = $('<div/>').css({
	        position:'absolute',
	        top:'50%',
	        left:'50%',
	        transform:'translate(-50%,-50%)',
	        width:'98%',
	        height:'40%',
	        background:'white'
	    })


	    //关闭按钮
	    var $close = $('<span>x').css({

	    })
	    $close.attr('class','close');

	    var defaults = {
	        title:'Set Date',
	        ensure: '就你了',
	        cancel: '再看吧'
	    }


	    //标题
	    var $title = $('<p>Set Date').css({
	        textAlign:'center'
	    })

	    $title.attr('class','title');



	    var date = new Date(),
	        year = date.getFullYear(),
	        month = date.getMonth()+1,
	        day = date.getDate();

	    var arr = [];
	    arr.push(year);
	    arr.push(month);
	    arr.push(day);
	    var date = arr.join('-');



	    //选择日期
	    var $date = $('<p>').css({
	    })

	    $date.get(0).innerHTML = arr.join('-');
	    $date.attr('class','date');


	    var $select = $('<div>').css({
	        width:'90%',
	        height:'50%',
	        margin:'0 auto'
	    })


	    var $dayDiv = $('<div>').css({
	    })
	    $dayDiv.addClass('selectWrapper')

	    var $dayAdd = $('<a>+').css({
	    })
	    $dayAdd.addClass('add')
	    $dayDiv.append($dayAdd)


	    var $day = $('<div>').css({
	        textAlign:'center',
	    })
	    $day.get(0).innerHTML = day
	    $day.addClass('container')
	    $dayDiv.append($day)

	    var $daySub = $('<a>-').css({
	    })
	    $daySub.addClass('sub')
	    $dayDiv.append($daySub)

	    //$monthDiv = $dayDiv.cloneNode();

	    $month = $day.cloneNode();

	    console.log($month);


	    //var $monthDiv = $('<div>').css({
	    //    margin:'0 5%',
	    //})
	    //$monthDiv.addClass('selectWrapper')
	    //
	    //var $monthAdd = $('<a>+').css({
	    //})
	    //$monthAdd.addClass('add')
	    //$monthDiv.append($monthAdd)
	    //
	    //var $month = $('<div>').css({
	    //    textAlign:'center',
	    //
	    //})
	    //$month.addClass('container')
	    //$month.get(0).innerHTML = month
	    //$monthDiv.append($month)
	    //
	    //
	    //var $monthSub = $('<a>-').css({
	    //})
	    //$monthSub.addClass('sub')
	    //$monthDiv.append($monthSub)





	    var $yearDiv = $('<div>').css({
	    })
	    $yearDiv.addClass('selectWrapper')

	    var $yearAdd = $('<a>+').css({

	    })
	    $yearAdd.addClass('add')
	    $yearDiv.append($yearAdd)

	    var $year = $('<div>').css({
	        textAlign:'center',

	    })
	    $year.get(0).innerHTML = year
	    $year.addClass('container')
	    $yearDiv.append($year)


	    var $yearSub = $('<a>-').css({

	    })
	    $yearSub.addClass('sub')
	    $yearDiv.append($yearSub)





	    //确认取消按钮
	    var $ensure = $('<div>确认').css({
	        width:'45%',
	        lineHeight:'50px',
	        border:'1px solid black',
	        float:'left',
	        marginTop:'10px',
	        textAlign:'center'
	    })

	    var $cancel = $('<div>取消').css({
	        width:'45%',
	        lineHeight:'50px',
	        border:'1px solid black',
	        float:'right',
	        marginTop:'10px',
	        textAlign:'center'
	    })

	    $select.append($dayDiv)
	    $select.append($monthDiv)
	    $select.append($yearDiv)
	    $select.append($ensure)
	    $select.append($cancel)

	    $datePicker.append($title)
	    $datePicker.append($date)
	    $datePicker.append($select)
	    $datePicker.append($close)

	    $b.append($wrapper)
	    $b.append($datePicker)


	    //绑定事件


	    $('.selectWrapper').on('click','a',function(){
	        var self = $this;

	    })

	}

/***/ }
/******/ ]);