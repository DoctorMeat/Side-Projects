function encodeText() {
    const inputText = document.getElementById('textInput').value;
    const encodedText = btoa(inputText);
    document.getElementById('result').value = encodedText;
}

function decodeText() {
    const encodedText = document.getElementById('textInput').value;
    try {
        const decodedText = atob(encodedText);
        document.getElementById('result').value = decodedText;
    } catch (error) {
        document.getElementById('result').value = 'Invalid Base64 input';
    }
}

function moveText(direction) {
    const inputText = document.getElementById('textInput').value;
    const resultText = document.getElementById('result').value;

    if (direction === 'up') {
        // Move text from result to input
        document.getElementById('textInput').value = resultText;
        document.getElementById('result').value = '';
    } else if (direction === 'down') {
        // Move text from input to result
        document.getElementById('result').value = inputText;
        document.getElementById('textInput').value = '';
    }
}


document.getElementById('youFoundMe').addEventListener('click', function() {
    // Redirect to the secret route
    window.location.href = 'secret.html';
});

// Display the hidden button after a delay (just for demonstration)
setTimeout(function() {
    document.getElementById('youFoundMe').style.display = 'block';
}, 3000);
