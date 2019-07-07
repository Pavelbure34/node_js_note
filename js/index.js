$(document).ready(()=>{

});

const nav = {
    fundamental:{
        ch01:()=>{
            $("#main").html(fundamental.ch01);
        },
        ch02:()=>{
            let src=[
                './img/fundamental/ch02/homepage.png',
                './img/fundamental/ch02/confirm.png',
                './img/fundamental/ch02/node_example.png'
            ];
            let text=[
                'Where to install Node.js',
                'Confirming installation',
                'What node js can do'
            ];
            $("#main").html(fundamental.ch02);
            funcs.album(
                "album",
                src,
                800,500,
                "next",
                "prev",
                text
            );
        },
        ch03:()=>{
            $("#main").html(fundamental.ch03); 
        },
        ch04:()=>{
            $("#main").html(fundamental.ch04); 
        },
        ch05:()=>{
            $("#main").html(fundamental.ch05); 
        }
    },
    javascript:{
        ch01:()=>{
            $("#main").html(javascript.ch01);
            funcs.img(
                "img1",
                "./img/javascript/day01/spread.png",
                700,200,
                "spread operator"
            );
            funcs.img(
                "img2",
                "./img/javascript/day01/rest.png",
                700,200,
                "rest operator"
            );
        },
        ch02:()=>{
            $("#main").html(javascript.ch02);
            funcs.img(
                "img1",
                "./img/javascript/day02/destructure.png",
                700,200,
                "destructuring"
            );
        },
        ch03:()=>{
            $("#main").html(javascript.ch03);
            funcs.img(
                "img1",
                "./img/javascript/day03/async_promise.png",
                700,200,
                "async funcs and promises"
            );
        },
        ch04:()=>{
            $("#main").html(javascript.ch04);
        }
    },
    node:{
        ch01:()=>{
            $("#main").html(node.ch01);
        },
        ch02:()=>{
            $("#main").html(node.ch02);
        }
    },
    next:{
        ch01:()=>{
            $("#main").html();
        }
    },
    mongo:{
        ch01:()=>{
            $("#main").html();
        }
    },
    graphQL:{
        ch01:()=>{
            $("#main").html(graphQL.day01);
        }
    },
    apollo:{
        ch01:()=>{
            $("#main").html();
        }   
    }
}