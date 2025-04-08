console.log("Azure Demo App Loaded");

setInterval(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(data => console.log("Pinged dummy API:", data.title));
}, 5000);
