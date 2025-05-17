document.addEventListener('DOMContentLoaded', function() {
    var bodyContent = document.body.innerHTML;
    document.body.innerHTML = '<div id="body-container">' + bodyContent + '</div>';
});