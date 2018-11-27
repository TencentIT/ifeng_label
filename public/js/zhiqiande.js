var arr = [];
var current_label = $('.title_selected a').html(); //当前标签
$('.current_label').val(current_label)

//选项卡点击切换
$(".tabs :has([data-toggle=tab])").on("click", "[data-toggle=tab]", e => {
    var $tar = $(e.target);
    $tar.addClass("white_color").parent().siblings().children().removeClass("white_color");
    $tar.parent().addClass("title_selected").siblings().removeClass("title_selected");
    if (!$tar.parent().is(".active")) {
        $tar.parent().addClass("active")
            .siblings().removeClass("active");
        var id = $tar.attr("href");
        $(id).addClass("active")
            .siblings().removeClass("active");
    }
    let title_content = $('.title_selected a').html()
    $('.current_label').val(title_content)
})

//选型卡标签点击
$(".content-box  span").click(function() {

    let $target = $(this)
    $(this).toggleClass("span_selected");

    console.log(4, $target.hasClass('span_selected'));

    var span_content = $(this).html();

    if ($target.hasClass('span_selected')) {
        arr.push($(this).html()); //存数组
        showData(arr);
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == $(this).html()) {
                arr.splice(i, 1);
                showData(arr);
            }
        }
    }



    console.log(arr);
})



//跳过
function next() {
    let li_titles = $(".tabs li a"); //获取li
    console.log(li_titles)
    for (let i = 0; i < li_titles.length; i++) {
        console.log($(li_titles[i]).is('.title_selected'))
        if ($(li_titles[i]).is('.title_selected')) {

            // $(li_titles[i + 1]).addClass('title_selected').siblings().removeClass('title_selected')
            if (i !== li_titles.length - 1) {
                $(li_titles[i + 1]).addClass("title_selected").siblings().removeClass("title_selected");
            }
        }

    }

}

var html = "";
//当前标签模块 展示数据
function showData(array) {
    console.log(1, $('.selected_label'))

    html = "";
    // $('.selected_label').empty();
    for (let i = 0; i < array.length; i++) {
        html += `<span>${array[i]}</span>`;
        // $(".selected_label").append()
    }
    // console.log(html)
    // html = "";
    $(".selected_label").html(html)
}

function getIndex(i) {
    var next_index = parseInt(i) + 1;
    // console.log(999, i);
    return next_index;
}


//确定
function submit() {
    let number = $('.number').val(); //编号
    let title = $('.title').val(); //标题
    let textarea = $('.number').html(); //全文
    let video_link = $('.number').val(); //视频链接
    let search = $('.video_link').val(); //搜索
    let selected_label = $('.number').val(); //选中标签

    current_label = $('.title_selected a').html();


    //清空之前选择的 
    $(".content-box span.span_selected").removeClass('span_selected')
    arr = [];


    // 发请求给后端 

    //获取tab选项卡当前选中
    let title_lis = $('.tabs li');
    // console.log(title_lis);
    var next_index;
    for (let i = 0; i < title_lis.length; i++) {
        if ($(title_lis[i]).hasClass('title_selected')) {
            next_index = this.getIndex(i);
            $(title_lis[i]).removeClass('title_selected').children().removeClass('white_color');

        }

    }

    $(title_lis[3]).addClass('title_selected').children().addClass('white_color');

    //当前标签
    // current_label = $(title_lis[next_index]).children().html()
    // $('.current_label').val(current_label)

    //title 切换

    // $(title_lis[next_index]).addClass('title_selected').children().addClass('white_color');

    // //title下面div切换
    // var next_index_id = $(title_lis[next_index]).children().attr("href");
    // // console.log("next_index_id", next_index_id)
    // $(next_index_id).addClass("active")
    //     .siblings().removeClass("active");


    console.log(777, arr)
    showData(arr)
}