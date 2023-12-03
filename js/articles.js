function clearFeedContent() {
    var paragraphs = document.getElementsByClassName('feed-item-desc');
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerHTML = '';
    }
    var links = document.getElementsByClassName('feed-item-title');
    for (var i = 0; i < links.length; i++) {
        links[i].innerHTML = '';
        links[i].href = '#';
    }
    var links_title = document.getElementsByClassName('feed-title');
    for (var i = 0; i < links_title.length; i++) {
        links_title[i].innerHTML = '';
        links_title[i].href = '#';
    }
    var divys = document.getElementsByTagName('div');
    for (var i = 0; i < divys.length; i++) {
        divys[i].innerHTML = '';
    }
}

var lastFeedType = null;
function showFeed(feedType) {
    console.log("last feedType is & should be null " + lastFeedType);
    console.log("feedType is and should be what I clicked on " + feedType);
    clearFeedContent();
    var displaySection = document.getElementById('news-feed-content');

    if (lastFeedType === feedType) {
        console.log("Cleared the display for the same feedType: " + feedType);
        clearFeedContent();
        lastFeedType = null;
    } else {
        lastFeedType = feedType;
        console.log("lastFeedType is now " + lastFeedType);

        let scriptElement;
        switch (feedType) {
            case 'umich':
                scriptElement = document.createElement('script');
                scriptElement.src = "//rss.bloople.net/?url=https%3A%2F%2Frecord.umich.edu%2Ffeed%2F&showtitle=false&type=js";
                displaySection.appendChild(scriptElement);
                break;
            case 'tech':
                scriptElement = document.createElement('script');
                scriptElement.src = "//rss.bloople.net/?url=https%3A%2F%2Fwww.techrepublic.com%2Frssfeeds%2Farticles%2F&showtitle=false&type=js";
                displaySection.appendChild(scriptElement);
                break;
            case 'sports':
                scriptElement = document.createElement('script');
                scriptElement.src = "//rss.bloople.net/?url=http%3A%2F%2Fsports.espn.go.com%2Fespn%2Frss%2Fnews&showtitle=false&type=js";
                displaySection.appendChild(scriptElement);
                break;
            default:
                displaySection.innerHTML = `<p>Select a news feed to display.</p>`;
        }
    }
}