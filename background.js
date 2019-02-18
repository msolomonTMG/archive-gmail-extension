chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log(changeInfo)
  if (changeInfo.url === archiveUrl) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      chrome.tabs.sendMessage(tabs[0].id, {action: 'activate-archive-button'}, function(response) {});  
    })
  } else if (changeInfo.url && changeInfo.url !== archiveUrl) {
    console.log('deactivate because url is: ' + changeInfo.url)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      chrome.tabs.sendMessage(tabs[0].id, {action: 'deactivate-archive-button'}, function(response) {});  
    })
  }
})

const archiveUrl = 'https://mail.google.com/mail/u/0/#search/has%3Anouserlabels+-in%3ASent+-in%3AChat+-in%3ADraft+-in%3AInbox'
