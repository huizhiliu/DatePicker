/**
 * Created by liuhuizhi on 15/12/3.
 */


$.fn.DatePicker = function(obj){
    var $b = $('body');

    var config = {
        title:'Set Date',
        ensure: '就你了',
        cancel: '再看吧'
    }

    $self = $(this);





    //mixin
    function mixin(sourceObj,targetObj) {
        for(var key in sourceObj) {
            if(!(key in targetObj)){
                targetObj[key] = sourceObj[key]
            }
        }
        return sourceObj
    }

    //config
    //var arg = mixin(config,obj);
    //console.log(arg)

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

    //标题
    var $title = $('<p>Set Date').css({
        textAlign:'center'
    })

    $title.addClass('title');

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
    var $date = $('<p>')
    $date.get(0).innerHTML = arr.join('-');
    $date.attr('class','date');


    var $select = $('<div>').css({
        width:'90%',
        height:'50%',
        margin:'0 auto'
    })

    var $yearDiv = $('<div>')
    $yearDiv.addClass('selectWrapper')

    var $yearAdd = $('<a>+')
    $yearAdd.addClass('add')
    $yearDiv.append($yearAdd)

    var $year = $('<div>').css({
        textAlign:'center',

    })
    $year.get(0).innerHTML = year
    $year.addClass('container')
    $yearDiv.append($year)

    var $yearSub = $('<a>-')
    $yearSub.addClass('sub')
    $yearDiv.append($yearSub)

    var $dayDiv = $yearDiv.clone()
    var $day = $dayDiv.find('div')
    $day.addClass('day')
    $day.get(0).innerHTML = day
    $select.append($dayDiv)

    var $monthDiv = $yearDiv.clone()
    $monthDiv.css({
        margin:'0 5%'
    })
    var $month = $monthDiv.find('div')
    $month.addClass('month')
    $month.get(0).innerHTML = month
    $select.append($monthDiv)

    //确认取消按钮
    var $ensure = $('<div>确认').css({
        width:'45%',
        lineHeight:'50px',
        border:'1px solid black',
        float:'left',
        marginTop:'10px',
        textAlign:'center'
    }).addClass('ensure')

    var $cancel = $('<div>取消').css({
        width:'45%',
        lineHeight:'50px',
        border:'1px solid black',
        float:'right',
        marginTop:'10px',
        textAlign:'center'
    }).addClass('cancel')

    $select.append($yearDiv)
    $select.append($ensure)
    $select.append($cancel)

    $datePicker.append($title)
    $datePicker.append($date)
    $datePicker.append($select)
    $datePicker.append($close)

    $b.append($wrapper)
    $b.append($datePicker)

    //获取绑定的时间
    var getTime = function() {
        var arr = [];
        arr.push($year.get(0).innerHTML)
        arr.push($month.get(0).innerHTML)
        arr.push($day.get(0).innerHTML)
        $('.date').get(0).innerHTML = arr.join('-')
    }
    getTime();

    //绑定事件
    $('.selectWrapper').on('click','a',function(){
        var $self = $(this);
        var $containner = $self.siblings('div')
        var $type = $containner.attr('className');
        if($self.attr('className') == 'add'){
            if($type.indexOf('month') !== -1 && $containner.get(0).innerHTML>11) return;
            else if($type.indexOf('day') !== -1 && $containner.get(0).innerHTML>30) return;
            $containner.get(0).innerHTML++
            getTime();
        }else{
            if($type.indexOf('month') !== -1 && $containner.get(0).innerHTML == 1) return;
            else if($type.indexOf('day') !== -1 && $containner.get(0).innerHTML == 0) return;
            $containner.get(0).innerHTML--
            getTime();
        }
    })

    $wrapper.hide();
    $datePicker.hide();

    //判断日期非法性
    var judge_arr = [1,3,5,7,8,10,12];

    $('.ensure').on('click',function(){
        var sel_arr = $('.date').get(0).innerHTML.split('-');
        console.log(sel_arr[2]);
        if(judge_arr.indexOf(sel_arr[1]) == -1 && sel_arr[2] == 31){
            alert('木有这一天噢')
        }else if(sel_arr[1] == 2 && sel_arr[2] > 28){
            alert('木有这一天')
        }else{
            $self.val($('.date').get(0).innerHTML);
            $wrapper.hide();
            $datePicker.hide();
        }
    })

    $('.close,.cancel').on('click',function(){
        $wrapper.hide();
        $datePicker.hide();
    })

    $(this).on('click',function(){
        $wrapper.show();
        $datePicker.show();
    })


}