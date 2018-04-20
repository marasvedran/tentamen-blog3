// JavaScript för att implementera kraven A-D.

let products = [];

$.getJSON( "https://jsonplaceholder.typicode.com/posts", function( data ) {
    posts = data;
    console.log(posts);

    let items = [];
    $.each( data, function( key, post ) {
        let likes = Math.floor(Math.random() * 100);
        items.push( "<li id='" + key + "'>" + post.title + " " + " " +
            post.body + " Likes " +likes+ "<button>Load Comments</button>" + "</li>" );
    });

    $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
    }).appendTo( "body" );

});

let postid = [];

$.getJSON( "https://jsonplaceholder.typicode.com/comments", function( data ) {
    comments = data;
    console.log(comments);

    let com = [];
    $.each( data, function( key, comments ) {
    $("body").delegate("button", "click", function () {
        $(this).after( "<li id='" + key + "'>" + comments.name + " " + " " + comments.body + "</li>"
        );
    })
    })
});