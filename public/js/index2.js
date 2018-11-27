var arr = [];
var input_label = $('.title_selected a').html(); //当前标签
$('.input_label').val(input_label)

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
   show_input_label();
 //清空之前选择的 所有span
 $(".content-box span.span_selected").removeClass('span_selected');
 arr = [];
 showData();
 
})

//选型卡标签点击
$(".content-box  span").click(function() {

    let $target = $(this)
    $(this).toggleClass("span_selected");
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
    console.log("选中标签存到这个数组中",arr);
    
})

//跳过
function next() {
  //清空之前选择的 所有span
  $(".content-box span.span_selected").removeClass('span_selected');
  arr = [];
 
  //选项卡目前被选中的词
  let tab_selected_label = $('.tabs li.title_selected').children().html()
  // console.log('选项卡目前被选中的词', tab_selected_label);
  //获取所有选项卡 文字
  let tabs = $('.tabs li a');
  let sum_tab_title = []; //所有选项卡title内容
  // console.log('tabs', tabs);
  for (let i = 0; i < tabs.length; i++) {
      // console.log('a内容', $(tabs[i]).html());
      sum_tab_title.push($(tabs[i]).html())
  }
  // console.log('所有选项卡title', sum_tab_title);

  let target_next_index;
  for (let j = 0; j < sum_tab_title.length; j++) {
      if (tab_selected_label == sum_tab_title[j]) {
          // this.getIndex(j);
          target_next_index = j+1;
          // return;
      }
  }

 
  let title_lis = $('.tabs li');
  clear_selected();

  //跳转到下一个标签
  if(target_next_index<title_lis.length){ //下一个标签的index是否小于数组长度
    $(title_lis[target_next_index]).addClass('title_selected').children().addClass('white_color');
    let target_next_index_id = $(title_lis[target_next_index]).children().attr("href");
    // console.log("target_next_index_id",target_next_index_id)
    $(target_next_index_id).addClass("active").siblings().removeClass("active");

    show_input_label();

  }else{
    target_next_index=0;
    $(title_lis[target_next_index]).addClass('title_selected').children().addClass('white_color');
    let target_next_index_id = $(title_lis[target_next_index]).children().attr("href");
    console.log("target_next_index_id",target_next_index_id)
    $(target_next_index_id).addClass("active").siblings().removeClass("active");
  }

  showData(arr)

}

var html = "";
//当前标签模块 展示数据
function showData(array) {
    // console.log(1, $('.selected_label'))

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

//清除当前 title 选中效果
function clear_selected() {
    let title_lis = $('.tabs li');
    //清除当前 title 选中效果
    for (let i = 0; i < title_lis.length; i++) {
        if ($(title_lis[i]).hasClass('title_selected')) {
            $(title_lis[i]).removeClass('title_selected').children().removeClass('white_color');
        }
    }
}

//确定
function submit() {
    let number = $('.number').val(); //编号
    let title = $('.title').val(); //标题
    let textarea = $('.number').html(); //全文
    let video_link = $('.number').val(); //视频链接
    let search = $('.video_link').val(); //搜索
    let selected_label = $('.number').val(); //选中标签

    next();
    // let target_index_id = $(title_lis[target_index]).children().attr("href");
    // console.log("target_index_id",target_index_id)
    // $(target_index_id).addClass("active").siblings().removeClass("active");

    //点击确定 跳转下一个关键词
    // for (let p of data) {
    //     keyWords.push(p.input_label);
    // }
    // console.log('输入框关键词', keyWords)

    // let next_index;

    // for (let i = 0; i < keyWords.length; i++) {
    //     if ($(title_lis[i]).hasClass('title_selected')) {
    //         next_index = i;
    //         let selected_key_word = $(title_lis[i]).hasClass('title_selected');
    //         console.log('selected_key_word', selected_key_word);
    //         // $(title_lis[i]).removeClass('title_selected').children().removeClass('white_color');
    //     }
    // }


    // for (let i = 0; i < keyWords.length; i++) {
    //     if (tab_selected_label == keyWords[i]) {
    //         next_index = i + 1; //获取到data里面 跳转到下一个title 的下标
    //     }
    // }
    // if (next_index !== undefined) { //
    //     $(title_lis[next_index]).addClass('title_selected').children().addClass('white_color');
    //     let next_index_id = $(title_lis[next_index]).children().attr("href");
    //     // console.log("target_index_id",target_index_id)
    //     $(next_index_id).addClass("active").siblings().removeClass("active");
    // }

    //等接口吧  到时候 把 右侧选项卡里面title的顺序 和 接口里面的title  顺序对应  写

    showData(arr)
}

function show_input_label(){
  let title_content = $('.title_selected a').html()
  $('.input_label').val(title_content)
}

 
 