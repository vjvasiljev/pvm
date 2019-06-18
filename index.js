
const inputPrice = document.querySelector("#input");
const myForm = document.querySelector("form");
inputPrice.onclick = function () { myForm.reset() };
inputPrice.oninput = function calcTaxes() {

  let startPrice = inputPrice.value;
  startPrice = startPrice.replace(',', '.');
  let endPrice = startPrice * 1.21;
  console.log(endPrice)
  endPrice = Math.floor(endPrice * 100) / 100;
  console.log(endPrice)
  document.querySelector("#result").innerHTML = endPrice;


  const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };
  copyToClipboard(endPrice);
};
