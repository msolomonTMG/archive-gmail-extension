addButtonToPage ()

function addButtonToPage () {
  let linkList = document.getElementsByClassName('TK')[0]
  console.log('adding button to page')
  if (!linkList) {
    setTimeout(() => {
      addButtonToPage()
    }, 1000)
  } else {
    console.log('there is a button')
    linkList.innerHTML += archiveButtonTemplate
    document.getElementById("archived").addEventListener("click", goToArchived);
  }
}

const archiveIcon = chrome.runtime.getURL('archive.png')

const archiveButtonTemplate = `
  <div class="aim" id="archived">
    <div class="TO" id="archived-link" data-tooltip="Archived" data-tooltip-align="r" data-tooltip-suspended="true" data-collapsed-nav-tooltip="true">
      <div class="TN bzz aHS-bnq" style="margin-left:0px">
        <div class="qj qr" style="background-image: url('${archiveIcon}')">
        </div>
        <div class="aio UKr6le">
          <span class="nU ">
            <a href="#" target="_top" class="J-Ke n0" title="Archived" aria-label="Archived" tabindex="-1" draggable="false">Archived</a>
          </span>
        </div>
        <div class="nL aif">
        </div>
      </div>
    </div>
  </div>
`

function goToArchived () {
  console.log('going to archived...')
  location.replace('https://mail.google.com/mail/u/0/#search/has%3Anouserlabels+-in%3ASent+-in%3AChat+-in%3ADraft+-in%3AInbox')
  document.getElementById('archived-link').classList.add('nZ')
  document.getElementById('archived-link').classList.add('aiq')
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'activate-archive-button') {
    document.getElementById('archived-link').classList.add('nZ')
    document.getElementById('archived-link').classList.add('aiq')
  } else if (request.action === 'deactivate-archive-button') {
    document.getElementById('archived-link').classList.remove('nZ')
    document.getElementById('archived-link').classList.remove('aiq')
  }
});
