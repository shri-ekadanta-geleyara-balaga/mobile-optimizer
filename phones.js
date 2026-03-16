const phonesDB = {
  "Samsung": {
    "Galaxy S": {},
    "Galaxy Note": {},
    "Galaxy A": {},
    "Galaxy M": {},
    "Galaxy Z": {}
  },
  "Apple": {
    "iPhone SE": {},
    "iPhone 12": {},
    "iPhone 13": {},
    "iPhone 14": {},
    "iPhone 15": {}
  },
  "Xiaomi": {
    "Mi": {},
    "Redmi Note": {},
    "Redmi": {},
    "Poco": {}
  },
  "OnePlus": {
    "OnePlus Nord": {},
    "OnePlus": {}
  },
  "Realme": {
    "Realme Narzo": {},
    "Realme GT": {},
    "Realme C": {}
  },
  "Vivo": {
    "Vivo V": {},
    "Vivo Y": {},
    "Vivo X": {}
  },
  "Oppo": {
    "Oppo Reno": {},
    "Oppo A": {},
    "Oppo F": {}
  },
  "Motorola": {
    "Moto G": {},
    "Moto E": {},
    "Moto Edge": {}
  },
  "Google": {
    "Pixel 6": {},
    "Pixel 7": {},
    "Pixel 8": {}
  },
  "Huawei": {
    "P Series": {},
    "Mate Series": {},
    "Nova Series": {}
  }
};

// Pre-fill brand dropdown
window.onload = function(){
  const brandSelect = document.getElementById("brand");
  for(let brand in phonesDB){
    let option = document.createElement("option");
    option.value = brand;
    option.textContent = brand;
    brandSelect.appendChild(option);
  }

  // For comparison
  fillComparisonSelects();
}
