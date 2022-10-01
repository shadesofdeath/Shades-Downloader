const btnport = document.querySelector('#appsportablebutton')
const sport= document.querySelector('#appsportable')
btnport.onclick = (event) => {
  event.preventDefault();

  if (sport.value =="cbport")

  window.location.href="https://github.com/portapps/ungoogled-chromium-portable/releases/download/103.0.5060.114-15/ungoogled-chromium-portable-win64-103.0.5060.114-15-setup.exe";
  
  if (sport.value =="brport")
  
  window.location.href="https://github.com/portapps/brave-portable/releases/download/1.43.89-84/brave-portable-win64-1.43.89-84-setup.exe";
  
  if (sport.value =="ntport")
  
  window.location.href="https://portableapps.com/redir2/?a=Notepad%2B%2BPortable&s=s&d=pa&f=NotepadPlusPlusPortable_8.4.5.paf.exe";
  
  if (sport.value =="gpport")
  
  window.location.href="https://portableapps.com/redir2/?a=GIMPPortable&s=s&d=pa&f=GIMPPortable_2.10.32.paf.exe";
  
  if (sport.value =="tgport")
  
  window.location.href="https://updates.tdesktop.com/tx64/tportable-x64.4.2.4.zip";
  
};