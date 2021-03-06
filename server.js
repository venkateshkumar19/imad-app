var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles=
{
    'article-one':{
    title: 'Article One',
    heading: 'My First Article',
    date: 'Sep 7 2017',
    content:
           `
           <p> This is my first article. Live and let's others live.</p>
            
            <p>
                Love like you'll never be hurt,<br>
                Sing like there's nobody listening,<br>
                And live like it's heaven on earth.<br>
            </p>
            
            <p> It is better to be hated for what you are than to be loved for what you are not </p>
            `
    },
    'article-two':{
    title: 'Article Two',
    heading: 'My Second Article',
    date: 'Sep 7 2017 2:35PM',
    content:
           `
           <p> This is my second article. Topic is about travel.</p>
            
            <p>
                For my part, I travel not to go anywhere, but to go. I travel for travel’s sake. The great affair is to move.
                Robert Louis Stevenson
            </p>
            
            <p> 
            We travel, some of us forever, to seek other places, other lives, other souls.” <br> - Anais Nin 
            </p>
            `
    },
    'article-three':{
    title: 'Article Three',
    heading: 'My Third Article',
    date: 'Sep 7 2017 2:45PM',
    content:
           `
           <p> This is my third . Further about travel..travel.</p>
            
            <p>
                Travel makes one modest. You see what a tiny place you occupy in the world. By Gustave Flaubert
            </p>
            <p>
              I am not the same, having seen the moon shine on the other side of the world. By Mary Anne Radmacher
            </p>
            `
        
    },
};
            function createTemplate(data)
            {
                var title=data.title;
                var heading=data.heading;
                var date=data.date;
                var content=data.content;
                
                
                var htmlTemplate=
            `
            <html>
    <head>
        <title> ${title} </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
        </head>
    
    <body>
        <div class="container">
            
            <div>
            <a href="/"> Home </a>
        </div>
        <hr/>
        <div>
            <h3> ${heading} </h3>
        </div>
        <div>
            ${date}
        </div>
        
        <div>
            ${content}
        </div>
        
        </div>
    </body>
    
</html>
            `;
            return htmlTemplate;
            
            }
            
var counter=0;
app.get('/counter', function(req, res)          
{
    counter=counter+1;
    res.send(counter.toString());
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articleOne[articleName]));
});

app.get('/article-two', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
