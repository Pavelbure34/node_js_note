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
        }
    },
    javascript:{
        ch01:()=>{
            $("#main").html();
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
    }
}