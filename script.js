function isValidISBN(isbn) {

    console.log(isbn);
    let n = isbn.length;
    if (n != 10) return false;
  
  
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      let digit = isbn[i] - "0";
  
      if (0 > digit || 9 < digit) return false;
  
      sum += digit * (10 - i);
    }
    let last = isbn[9];
    if (last != "X" && (last < "0" || last > "9")) return false;
  
  
    sum += last == "X" ? 10 : last - "0";
  
    return sum % 11 == 0;
  }
  var out = document.getElementById("output");
  
  function validateForm() {
      let x = document.getElementById('input').value;
      if (x == "") {
        alert("empty");
        return false;
      }
      else{
          if(isValidISBN(x)){
              out.innerHTML = "VALID";
          }else{
              out.innerHTML = "NOT VALID";
          }
      }
    }
  
  