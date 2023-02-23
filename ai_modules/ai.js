async function write(){
    const text = "Welcome to Ask ChatGPT!";
    const typingText = document.getElementById("typing-text");
  
    for (let i = 0; i < text.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 100)); // wait for 100 milliseconds
      typingText.textContent = text.slice(0, i + 1); // set the text content to the first i+1 characters of text
    }
  }
  