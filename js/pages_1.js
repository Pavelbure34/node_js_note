const fundamental = {
    ch01:
        '<h2>What is Javascript and Node.js?</h2>\
        <table>\
            <tr>\
                <th>Javascript</th>\
                <th>Node.js</th>\
            </tr>\
            <tr>\
                <td>\
                    a programming language usually<br>\
                    running on web browser.\
                </td>\
                <td>\
                    Javascript Runtime\
                </td>\
            </tr>\
        </table>'+
        '<section>\
            <h3>What do they do?</h3>\
            <ul class="noBulletPt">\
                <caption>Javascript</caption>\
                <li>allows dynamic web functions.</li>\
            </ul>\
            <ul class="noBulletPt">\
                <caption>Node.js</caption>\
                <li>is a javascript library that\
                    <emR>allows javascript code run on the server</emR>\
                </li>\
            </ul>\
        </section>'+
        '<section>\
            <h3>How?</h3>\
            Javascript code is run on V8 engine which C++ based engine compiles\
            js code in your browser into machine code.<br>\
            Node.js makes a shortcut to that!\
        </section>',
    ch02:
        '<h2>how to install node.js</h2>\
        <div id="album" class="centerItem"></div>\
        <ol>\
            <li>Go to Node.js website.<a href="https://nodejs.org/en/">here</a></li>\
            <li>Click on install and do the rest.</li>\
            <li>Turn on your terminal and type <emB>node -v</emB> to confirm installation.</li>\
        </ol>\
        <ul>\
            <caption>Let&rsquo;s try toyiing with Node JS from terminal.</caption>\
            <li>Type node in cmd.</li>\
            <li>generate js file under any name in the desired directory.</li>\
            <li>you can run js code outside of the browser this way.</li>\
        </ul>',
    ch03:
        '<h2>Role and usage of node.js</h2>\
        <section>\
            <h3 class="centerText">Node JS as server</h3>\
            <div class="indented">\
                The web browser(client) runs the client code but<br>\
                Authentication, database access is better to be done in the server<br>\
                for security reasons. Node JS(js runtime) works like a server for web development.\
            </div>\
        </section>'+
        '<section>\
            <h3 class="centerText">Node JS as more!</h3>\
            <div class="indented">\
                Node js by default executes js code<br>\
                and using this as the build tool is super useful.<br>\
                Angular, React frameworks uses node js.\
            </div>\
        </section>'+
        '<section>\
            <h3 class="centerText">where to practice node.js the best!</h3>\
            <div class="indented">\
                Next.js is the best build tool for practicing node.js!<br>\
                for it allows you to build web pages dynamically on the web server.<br>\
            </div>\
        </section>',
    ch04:
        '<h2>Two ways to execute node.js code</h2>\
        <section>\
            <h3 class="centerText">1.REPL</h3>\
            <blockquote>\
                <ol>\
                    <li><emB>R</emB>ead user input</li>\
                    <li><emB>E</emB>valuate user input</li>\
                    <li><emB>P</emB>rint user input</li>\
                    <li><emB>L</emB>oop</li>\
                </ol>\
            </blockquote>\
            REPL is basic environment triggered when you type node in console.\
            You cannot save anything here so not ideal for node.js code playground.\
        </section>'+
        '<section>\
            <h3 class="centerText">2.Using files</h3>\
            It is used by real applications where you can actually save your code.\
        </section>',
    ch05:
        '',
    ch06:
        ''
}

const javascript = {
    ch01:
        '<h2>Chapter01.rest & spread operator, and reference type</h2>\
        <section>\
            <h3 class="centerText">Reference Type</h3>\
            Reference type refers to the address pointer of that array or any object<br>\
            in the memory. Therefore, you can use push method to append new element into the<br>\
            const array. Similar to reference and pointer in C++.\
        </section>'+
        '<section>\
            <h3 class="centerText">spread operator</h3>\
            <div id="img1"></div>\
            <blockquote>\
                const newArrName = [...arrName, ];\
            </blockquote>\
            This way, you can copy the older array and add new item on top of it.<br>\
            it is a quite common practice for copying the information.\
        </section>\
        <section>\
            <h3 class="centerText">rest operator</h3>\
            <div id="img2"></div>\
            <blockquote>\
                toArray = (...args)=>{\
                  return args;  \
                }\
            </blockquote>\
           this way, when you want to return a array with arguments,<br>\
           you can use this method to ensure the number of arguments are not limited.'+ 
        '</section>',
    ch02:
        '<h2>chapter02.destructuring</h2>\
        When you destructure the object,\
       <div id="img1"></div>\
       It works for any object and its following properties.',
    ch03:
        '<h2>Async code and Promises</h2>\
        <blockquote>\
            Async code is the code which does not execute itself immediately<br>\
             after it is compiled successsfully.\
            Sync code is the opposite.\
        </blockquote>\
        In Node.js we use many many many async codes in our code.\
        <div id="img1"></div>\
        You can execute async code using promise and then function.\
        <ul>\
            <caption>it prevents</caption>\
            <li>nested callbacks</li>\
            <li>organized multiple callbacks</li>\
        </ul>\
        They are good to use since somebody already wrote it for you to use!',
    ch04:
        ''
}