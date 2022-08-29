var select = document.getElementById('site');

document.getElementById("button").onclick = function(){
    var value = select.value
    if (value == "win11")
    {
        window.location.href = "https://archive.org/download/22622.575.220729-1215.-ni-release-svc-prod-2-clientmulti-x-64-fre-en-us/22621.575.220729-1215.NI_RELEASE_SVC_PROD2_CLIENTMULTI_X64FRE_EN-US.ISO";
    }
    else if (value == "win10")
    {
        window.location.href = "https://www.yahoo.com/";
    }
    else if (value == "win8")
    {
        window.location.href = "https://www.msn.com/";
    }
};