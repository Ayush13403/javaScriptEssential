var xhr = new XMLHttpRequest();
var url = './health_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() { 
    // Assuming the response is in the format { articles: [...] }
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');
  
    // Loop through the articles and create the necessary HTML elements
    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        // Create and append title
        var title = document.createElement('h2');
        title.textContent = article.title;

        // Create and append description
        var description = document.createElement('p');
        description.textContent = article.description;

        // Create and append "Ways to Achieve" section
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        // Create and append "Benefits" section
        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        // Append all elements to the articleDiv
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        // Append articleDiv to the container in the DOM
        articlesDiv.appendChild(articleDiv);
    });
};

xhr.send();
