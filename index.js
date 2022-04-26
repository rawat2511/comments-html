const obj = {
    id: "001",
    author: "albert",
    body: "Whats the status?",
    timestamp: "Tue Apr 26 2022 23:01:10 GMT+0530 (India Standard Time)",
    points: "2",
    replies: [
      {
        id: "003",
        author: "haren",
        body: "Wrote the test suites, waiting for approval?",
        timestamp: "Tue Apr 26 2022 23:05:10 GMT+0530 (India Standard Time)",
        points: "3",
        replies: [
          {
            id: "004",
            author: "albert",
            body: "Thanks for the update!",
            timestamp: "Tue Apr 26 2022 23:10:10 GMT+0530 (India Standard Time)",
            points: "8",
            replies: [
                {
                    id: "004",
                    author: "albert",
                    body: "Thanks for the update!",
                    timestamp: "Tue Apr 26 2022 23:15:10 GMT+0530 (India Standard Time)",
                    points: "8"
                },
                {
                    id: "004",
                    author: "albert",
                    body: "Thanks for the update!",
                    timestamp: "Tue Apr 26 2022 23:18:10 GMT+0530 (India Standard Time)",
                    points: "8"
                },
                {
                    id: "004",
                    author: "albert",
                    body: "Thanks for the update!",
                    timestamp: "Tue Apr 26 2022 23:28:10 GMT+0530 (India Standard Time)",
                    points: "8",
                    replies: [
                        {
                            id: "004",
                            author: "albert",
                            body: "Thanks for the update!",
                            timestamp: "Tue Apr 26 2022 23:30:10 GMT+0530 (India Standard Time)",
                            points: "8"
                        },
                        {
                            id: "004",
                            author: "albert",
                            body: "Thanks for the update!",
                            timestamp: "Tue Apr 26 2022 23:37:10 GMT+0530 (India Standard Time)",
                            points: "8"
                        },
                        {
                            id: "004",
                            author: "albert",
                            body: "Thanks for the update!",
                            timestamp: "Tue Apr 26 2022 23:39:10 GMT+0530 (India Standard Time)",
                            points: "8"
                        }
                    ]
                }
            ]

          }
          
        ]
      },
      {
        id: "002",
        author: "Nrupul",
        body: "looking forward for the demo!",
        timestamp: "Tue Apr 26 2022 23:02:10 GMT+0530 (India Standard Time)",
        points: "2"
      }
    ]
};


var root = document.getElementById('root');

function createComments(obj, root) {
    const { id, author, body, timestamp, points } = obj;
    var div = document.createElement('div');
    div.className = "comment";

    if( obj.replies ) {
        var btn = document.createElement('button');
        btn.className = 'btn';
        btn.innerText = "+";
        div.appendChild(btn);
        var count = 0;
        btn.addEventListener('click', () => {
            for( var i = 0; i < obj.replies.length; i++ ) {
                createComments(obj.replies[i], div);
            }
        })
    }

    var content = document.createElement('div');
    content.className = 'content';

    const milliSec = new Date().getTime() - new Date(timestamp).getTime();
    let mins = milliSec / 1000 / 60;
    mins = Math.floor(mins);
    
    var p = document.createElement('p');
    p.className = 'para';
    p.innerText = author + " " + points + " points " + mins + " minutes ago";
    div.appendChild(p);

    var comment = document.createElement('p');
    comment.className = 'comment1';
    comment.innerText = body;
    div.appendChild(comment);

    content.appendChild(p);
    content.appendChild(comment);
    div.appendChild(content);
    root.appendChild(div);

}

createComments(obj, root);

