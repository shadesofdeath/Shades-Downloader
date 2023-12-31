const btnwin = document.querySelector('#linuxbutton')
const sbx = document.querySelector('#sitelinux')
btnwin.onclick = (event) => {
  event.preventDefault();

  if (sbx.value =="ubuntu")

  window.location.href="https://mirrors.nxtgen.com/ubuntu-mirror/ubuntu-releases/22.04.3/ubuntu-22.04.3-desktop-amd64.iso";
 
  if (sbx.value =="mint")

  window.location.href="https://mirrors.layeronline.com/linuxmint/stable/21/linuxmint-21-cinnamon-64bit.iso";
 
  if (sbx.value =="pop")

  window.location.href="https://iso.pop-os.org/22.04/amd64/intel/12/pop-os_22.04_amd64_intel_12.iso";
 
  if (sbx.value =="zorin")

  window.location.href="https://mirrors.edge.kernel.org/zorinos-isos/16/Zorin-OS-16.1-Core-64-bit.iso";
 
  if (sbx.value =="elementary")

  window.location.href="https://sgp1.dl.elementary.io/download/MTY2MTk2MDk3Mw==/elementaryos-6.1-stable.20211218-rc.iso";
 
  if (sbx.value =="cent")

  window.location.href="http://mirror.eu.oneandone.net/linux/distributions/centos/7.9.2009/isos/x86_64/CentOS-7-x86_64-Everything-2009.iso";
  
  if (sbx.value =="solus")

  window.location.href="https://mirrors.rit.edu/solus/images/4.3/Solus-4.3-Budgie.iso";
 
  if (sbx.value =="arch")

  window.location.href="https://geo.mirror.pkgbuild.com/iso/latest/archlinux-x86_64.iso"
};
