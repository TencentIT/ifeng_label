$(".tabs:has([data-toggle=tab])")
    .on("click", "[data-toggle=tab]", e => {
        var $tar = $(e.target);
        if (!$tar.parent().is(".active")) {
            $tar.parent().addClass("active")
                .siblings().removeClass("active");
            var id = $tar.attr("href");
            $(id).addClass("active")
                .siblings().removeClass("active");
        }
    })

//模拟数据
var arr1 = {
    "uname": "demo1",
    "age": 1,
    "email": "2212122@qq.com",
    "phone": "455454545"
}
var arr2 = {
    "title": [{
            "title_name": "人文情怀1",
            "label": ["标签1", "标签1", "标签1"]
        },
        {
            "title_name": "人文情怀2",
            "label": ["标签2", "标签2", "标签2"]
        },
        {
            "title_name": "人文情怀3",
            "label": ["标签3", "标签3", "标签3"]
        }
    ]
}

// $.ajax({
//     url: "http://localhost:3003/ifeng1/testData",
//     type: "get",
//     dataType: "json",
//     success: function(res) {
//         var products = res;

//         console.log(7, res);
//         var html = "";
//         for (var { uname, email }
//             of products) {
//             html += `<span>${uname}</span> <span>${email}</span>`
//         }
//         console.log(666, html)

//         $("#content1").html(html);
//     }
// })

var html = "";
html = `name:<span>${arr1.uname}</span>`;
$("#td1").html(html);

html = "";
html = `age:<span>${arr1.age}</span>`;
$("#td2").html(html);

html = "";
html = `email:<span>${arr1.email}</span>`;
$("#td3").html(html);

html = "";
html = `phone:<span>${arr1.phone}</span>`;
$("#td4").html(html);

let selected_label = $("#selected_label");
$("#my-tabs .container div span").click(function() {
    // alert($(this).html())
    selected_label.append(`<span>${$(this).html()}</span>`)
})