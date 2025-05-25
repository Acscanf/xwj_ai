document.getElementById('changeColor').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      function: setPageBackgroundColor
    });
  });
});

function setPageBackgroundColor() {
  document.body.style.backgroundColor = 'green';
}