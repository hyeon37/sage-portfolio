
//script
window.onload = function() {
    let ipt = document.getElementById('ipt')
    , btn = document.getElementById('btn')
    , rdo = document.getElementsByName('testRadio')
    , chk = document.getElementsByName('testCheck')
    , slct = document.getElementById('slct')
    , iptTxt = document.getElementById('iptTxt')
    , rdoTxt = document.getElementById('rdoTxt')
    , chkTxt = document.getElementById('chkTxt')
    , slctTxt = document.getElementById('slctTxt');

    btn.addEventListener('click', function() {
        iptTxt.innerText = ipt.value;
    });
    rdo.forEach(r => {
        r.addEventListener('change', function() {
            rdoTxt.innerText = r.value;
        });
    })
    let chkArr = [];
    chk.forEach(c => {
        c.addEventListener('change', function() {
            if(this.checked){
                chkArr.push(c.value);
            } else {
                chkArr.splice(chkArr.indexOf(c.value),1);
            }
            chkTxt.innerText = chkArr.join("");
        });
    })
}