const btnadb = document.querySelector('#adobebutton')
const sbad = document.querySelector('#siteadobe')
btnadb.onclick = (event) => {
  event.preventDefault();

  if (sbad.value =="photoshop")

  window.location.href = "https://archive.org/download/adobe-photoshop-2022-23.2.2/Adobe_Photoshop_2022_23.2.2.iso";
 
  if (sbad.value =="premier")

  window.location.href = "https://archive.org/download/setup_20220124/Setup.exe";
 
  if (sbad.value =="ıllustrator")

  window.location.href = "https://archive.org/download/adobe-illustrator-2022-26.1/Adobe_Illustrator_2022_26.1.iso";
 
  if (sbad.value =="acrobat")

  window.location.href = "https://archive.org/download/adobe.-acrobat.-pro.-dc.-2022.x-64.-multilingual/Adobe.Acrobat.Pro.DC.2022.x64.Multilingual.iso";
 
};