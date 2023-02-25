function onClickHandler() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
      chrome.tabs.executeScript(tabs[0].id, {
        code: 'document.body.style.zoom = "160%"; document.body.style.filter = "grayscale(1)";'
      });
    });
  };
  
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('button').addEventListener('click', onClickHandler);
  });

function stopExtension() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
      chrome.tabs.executeScript(tabs[0].id, {
        code: 'document.body.style.zoom = "100%"; document.body.style.filter = "none";'
      });
    });
    window.close();
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('button').addEventListener('click', onClickHandler);
    document.getElementById('stopButton').addEventListener('click', stopExtension);
  });