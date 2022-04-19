// import { ipcRenderer } from 'electron';
require('application.css');

// ipcRenderer.on('mainchannal', (_, data) => {
//   console.log(data.message);
// })

// const loadAndDisplayData = () => {
//   loadData().then(data => {
//     document.getElementById('message').innerHTML = data.number;
//   });
// }

// const loadData = () => {
//   return new Promise(resolve => {
//     ipcRenderer.send('loaddata');
//     ipcRenderer.once('data', (_, data) => {resolve(data)})
//   })
// }

window.onload = () => {
  // const action = document.getElementById('action');
  // action.addEventListener('click', loadAndDisplayData)
  // action.addEventListener('click', () => {})
  // window.addEventListener('online', () => {
  //   document.getElementById('online').innerHTML = 'You are online';
  //   document.getElementById('offline').innerHTML = null;
  // })
  // window.addEventListener('offline', () => {
  //   document.getElementById('offline').innerHTML = 'You are offline';
  //   document.getElementById('online').innerHTML = null;
  // })
  window.addEventListener('online', () => {
    const alert = new Notification('My app', {
      body: 'You are online'
    })
  })
  window.addEventListener('offline', () => {
    const alert = new Notification('My app', {
      body: 'You are offline'
    })
  })
}