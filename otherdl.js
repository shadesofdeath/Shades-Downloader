const btnOT = document.querySelector('#appsotherbutton')
const sbOTH = document.querySelector('#appsother')
btnOT.onclick = (event) => {
  event.preventDefault();

  if (sbOTH.value =="chrome")

  window.location.href = "https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B56D0894A-9830-6B18-ECB9-D28E4FE6CFAD%7D%26lang%3Dtr%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26installdataindex%3Dempty/update2/installers/ChromeSetup.exe";
 
  if (sbOTH.value =="operagx")

  window.location.href = "https://net.geo.opera.com/opera_gx/stable/windows?utm_tryagain=yes&utm_source=opera.com_via_opera_com&utm_medium=roc&utm_campaign=(none)_via_opera_com_https&utm_content=%2Ftr%2Fgx&http_referrer=https%3A%2F%2Fwww.opera.com%2Ftr%2Fgx%3Fedition%3Dstd-1%26utm_content%3D3323_DL%26utm_source%3DPWNgames%26utm_medium%3Dpa%26utm_campaign%3DPWN_TR%26utm_id%3D96e5d5cffc10432f9ba16ae932a7a03a&utm_site=opera_com&&utm_lastpage=opera.com/gx&dl_token=70827192";
 
  if (sbOTH.value =="malware")

  window.location.href = "https://www.malwarebytes.com/api/downloads/mb-windows?filename=MBSetup-37335.37335.exe";
 
  if (sbOTH.value =="java")

  window.location.href = "https://dl6.filehippo.com/289/f31/402ec3c3818fde0523817e8510cb448f08/jre-8u201-windows-x64.exe?signature=e9d0179b476b19c6a35045b14f70efda&expires=1662003535&url=https%3A%2F%2Ffilehippo.com%2Fdownload_jre-64%2F&filename=jre-8u201-windows-x64.exe";

  if (sbOTH.value =="7zip")

  window.location.href = "https://d3.7-zip.org/a/7z2201-x64.exe";
 
};