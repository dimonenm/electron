import { ipcRenderer, dialog } from 'electron';
require('application.css');

ipcRenderer.on('mainchannal', (_, data) => {
  console.log(data.message);
})

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
  const action = document.getElementById('action');
  // action.addEventListener('click', loadAndDisplayData)
  action.addEventListener('click', () => {
    dialog.showMessageBox({message: 'clicked'})
  })
}