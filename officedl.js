const btnoff = document.querySelector('#officebutton')
const sboff = document.querySelector('#siteoffice')
btnoff.onclick = (event) => {
  event.preventDefault();

  if ( sboff.value =="2007")

  window.location.href = "https://archive.org/download/microsoft-office-2007-preactivated/Microsoft%20Office%202007.iso";
 
  if ( sboff.value =="2010")

  window.location.href = "https://archive.org/download/microsoft-office-2010-professional-english_202005/Microsoft%20Office%202010%20Professional%20English.zip";
 
  if ( sboff.value =="2013")

  window.location.href = "https://archive.org/download/office-2013-64bit/Office_2013_32bit.iso";
 
  if ( sboff.value =="2016")

  window.location.href = "https://archive.org/download/office-2016_202110/Office%202016.iso";
 
  if ( sboff.value =="2019")

  window.location.href = "https://archive.org/download/microsoft-office-2019_202110/Microsoft%20Office%202019.iso";
 
  if ( sboff.value =="2021")

  window.location.href = "https://archive.org/download/microsoft-office-2021-pro-plus-v-2103-build-13901.20400-x-64-file-cr/Microsoft%20Office%202021Pro%20Plus%20v2103%20Build%2013901.20400%20x64%20%5BFileCR%5D.zip";
  
  if ( sboff.value =="libre")

  window.location.href = "https://ftp.gwdg.de/pub/tdf/libreoffice/stable/7.4.0/win/x86/LibreOffice_7.4.0_Win_x86.msi";
 
  if ( sboff.value =="activator")

  window.location.href = "https://github.com/massgravel/Microsoft-Activation-Scripts/releases/download/1.6/MAS_1.6_Password_1234.7z";
};