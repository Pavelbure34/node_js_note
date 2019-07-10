const graphQL = {
    day01:
        '<h2>Why? GraphQL</h2>\
        <section>\
            <emR>GraphQL</emR> is <emB>graph Query Language</emB>.\
            It allows us to use any kind of client or mobile platform we want connecting to\
            any kind of database we want.'+
            '<ul>\
                <li>Fast,Flexible, and easy to maintain.</li>\
                <li>can work with HTTP or HTTPS protocols.</li>\
            </ul> \
            <div>\
                <div class="clearB"></div>\
                <div class="floatL">\
                    <img\
                        src="./img/graphQL/day01/restAPI.png"\
                        style="width:500px;height:250px;"\
                        alt="restAPI"\
                    >\
                    <br><span class="imgSub">\
                        Rest API\
                    </span>\
                </div>'+
                '<div class="floatL">\
                    <img\
                        src="./img/graphQL/day01/graphQL.png"\
                        style="width:500px;height:250px;"\
                        alt="graphQL"\
                    >\
                    <br><span class="imgSub">\
                        GraphQL\
                    </span>\
                </div>'+
                '<div class="clearB"></div>\
            </div>\
            <section>\
                <div class="clearB"></div>\
                <div class="floatL">\
                    REST API\
                    <ul>\
                        <li>Server determines what kind data is requested.</li>\
                        <li>Regardless of platform, it is uniform in reqest causing inflexibility.</li>\
                    </ul>\
                </div>\
                <div class="floatL">\
                    GraphQL allows...\
                    <ul>\
                        <li>Client determines what kind of data it needs and<br>'+
                            'server merely gives only\
                            what are requested.\
                        </li>\
                        <li>Based on platforms, it can flexibly changes the request.</li>\
                    </ul>\
                </div>\
                <div class="clearB"></div>\
            </section>\
        </section>',
    day02:
        '<h2>Graph and graph query</h2>'+
        '<section>\
            <h3 class="centerText">What is Graph in GraphQL?</h3>\
            <div class="centerItem">\
                <img\
                src="img/graphQL/day02/example.png"\
                width="600"\
                height="300"\
                alt="graphQL example"\
                ><br><span class="imgSub">\
                    Graph Example\
                </span>\
            </div>\
            Graph is not the one you think in the math and statistics.<br>\
            In graphQL, graph shows how datas are called, returned, and how it\
            looks like in structure.<br> \
        </section>'+
        '<section>\
        <h3 class="centerText">graph Query</h3>\
        <div>\
            <h4>Simple query</h4>\
            <div class="clearB"></div>\
            <img\
                src="img/graphQL/day02/query.png"\
                width="450"\
                height="300"\
                style="float:left;"\
                alt="query"\
            >\
            <div class="floatL">\
                When we fetch the data from db, we do the query.\
                <ul>\
                    <caption>you may find</caption>\
                    <li>similar to javascript object</li>\
                    <li>no comma just space between key.</li>\
                    <li>When typing wrong key, it will show error.</li>\
                </ul>\
            </div>\
            <div class="clearB"></div>'+
            '<h4>graph nested Query</h4>\
            <div class="clearB"></div>\
            <img\
                src="./img/graphQL/day02/nestedquery.png"\
                width="450"\
                height="300"\
                style="float:left;"\
                alt="nested_query"\
            >\
            <div class="floatL">\
                In real life,query can be really complicated\
                <ul>\
                    <caption>When query on object</caption>\
                    <li>specify the property of the object</li>\
                    <li>under the nested paranthesis.</li>\
                    <li>if the return value is in...\
                        <ul>\
                            <li>simple data with !: always single simple data</li>\
                            <li>special name with !:always special object data.</li>\
                            <li>data type closed with [] !: always arrays</li>\
                        </ul>\
                    </li>\
                </ul>\
            </div>\
            <div class="clearB"></div>\
        </div>'+
        '</section>',
    day03:
        '',
    day04:
        ''
}

const apollo = {
    day01:
        ''
}