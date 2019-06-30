const funcs = {
    img:(id,src,width,height,text)=>{
        $("#"+id).html(
            '<div id="'+id+'">'+
                '<img'+
                    'src='+src+
                    'width="'+width+'"'+
                    'height="'+height+'"'+
                    'alt="img"'+
                '>'+
                '<div class="indented>'+
                    '<span class="imgSub">'+text+'</span>'+
                '</div>'+
            '</div>'
        );
    },
    button:(id,onPress)=>{
        $("#"+id).click(onPress);
    },
    album:(id,src,width,height,btn1,btn2,text)=>{
        let max = src.length;
        let index = 0;
        $("#"+id).html(
            '<div id="'+id+'">'+
                '<img'+
                    'src='+src[index]+
                    'style="'+
                        'width:'+width+'px;'+
                        'height:'+height+'px;'+
                    '"'+
                    'alt="album"'+
                '>'+
                '<div class="indented">'+
                    '<span class="imgSub">'+text[index]+'</span>'+
                '</div>'+
                '<div>'+
                    '<button id="'+btn1+'">next</button>'+
                    '<button id="'+btn2+'">previous</button>'+
                '</div>'+
            '</div>'
        );
        funcs.button(btn1,()=>{
            if (index > 0){
                index--;
            }
            $("#"+id+" img").attr("src",src[index]);
            $("#"+id+" .indented span").html(text[index]);
        });
        funcs.button(btn2,()=>{
            if (index < max-1){
                index++;
            }
            $("#"+id+" img").attr("src",src[index]);
            $("#"+id+" .indented span").html(text[index]);
        });
    }
}