document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to the 'Read More' buttons
    const readMoreButtons = document.querySelectorAll('.btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('You clicked the Read More button!');
        });
    });

    // Example of dynamically adding a new blog post
    function addBlogPost(title, date, content) {
        const main = document.querySelector('main');
        
        const article = document.createElement('article');
        
        const h2 = document.createElement('h2');
        h2.textContent = title;
        
        const time = document.createElement('time');
        time.setAttribute('datetime', date);
        time.textContent = new Date(date).toDateString();
        
        const pDate = document.createElement('p');
        pDate.textContent = `Posted on `;
        pDate.appendChild(time);
        pDate.innerHTML += ` by Shyam`;
        
        const pContent = document.createElement('p');
        pContent.textContent = content;
        
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-sm');
        button.textContent = 'Read More';
        button.addEventListener('click', function() {
            alert('You clicked the Read More button!');
        });

        article.appendChild(h2);
        article.appendChild(pDate);
        article.appendChild(pContent);
        article.appendChild(button);
        
        main.appendChild(article);
    }

    // Add a sample blog post after 5 seconds
    setTimeout(function() {
        addBlogPost('Blog Post Title 4', '2024-07-19', 'This is the content of the fourth blog post. It\'s just a sample text to illustrate the layout.');
    }, 5000);
});
