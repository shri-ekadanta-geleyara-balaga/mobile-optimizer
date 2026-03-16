const phonesDB = {
  "Samsung": {
    "Galaxy S": {
      "S21": {RAM:"8GB", Storage:"128GB", Processor:"Snapdragon 888", Year:"2021", Famous:"Flagship performance", BestAt:"Gaming, Photography"}
    },
    "Galaxy Note": {
      "Note 20": {RAM:"8GB", Storage:"256GB", Processor:"Snapdragon 865", Year:"2020", Famous:"Stylus & productivity", BestAt:"Work, Gaming"}
    },
    "Galaxy A": {
      "A52": {RAM:"6GB", Storage:"128GB", Processor:"Snapdragon 720G", Year:"2021", Famous:"Mid-range Camera", BestAt:"Photos, Battery"}
    },
    "Galaxy M": {
      "M32": {RAM:"6GB", Storage:"128GB", Processor:"MediaTek Helio G80", Year:"2021", Famous:"Budget performance", BestAt:"Battery"}
    },
    "Galaxy Z": {
      "Z Fold 3": {RAM:"12GB", Storage:"256GB", Processor:"Snapdragon 888", Year:"2021", Famous:"Foldable design", BestAt:"Multitasking"}
    }
  },
  "Apple": {
    "iPhone SE": {
      "SE 2022": {RAM:"4GB", Storage:"128GB", Processor:"A15 Bionic", Year:"2022", Famous:"Compact & fast", BestAt:"Photos, Gaming"}
    },
    "iPhone 13": {
      "13 Pro": {RAM:"6GB", Storage:"128/256GB", Processor:"A15 Bionic", Year:"2021", Famous:"Camera & performance", BestAt:"Photos, Gaming"}
    },
    "iPhone 14": {
      "14 Pro": {RAM:"6GB", Storage:"128/256GB", Processor:"A15 Bionic", Year:"2022", Famous:"Smooth Performance", BestAt:"Gaming, Photos"}
    }
  },
  "Xiaomi": {
    "Mi": {"Mi 11": {RAM:"8GB", Storage:"128/256GB", Processor:"Snapdragon 888", Year:"2021", Famous:"Flagship Camera", BestAt:"Photos, Gaming"}},
    "Redmi Note": {"Note 10": {RAM:"6GB", Storage:"128GB", Processor:"Snapdragon 678", Year:"2021", Famous:"Budget Camera", BestAt:"Battery"}},
    "Redmi": {"Redmi 10": {RAM:"4GB", Storage:"64GB", Processor:"MediaTek Helio G88", Year:"2021", Famous:"Affordable", BestAt:"Battery"}},
    "Poco": {"Poco X3": {RAM:"6GB", Storage:"128GB", Processor:"Snapdragon 732G", Year:"2020", Famous:"Gaming on Budget", BestAt:"Gaming"}}
  },
  "OnePlus": {
    "OnePlus Nord": {"Nord 2": {RAM:"8GB", Storage:"128GB", Processor:"MediaTek Dimensity 1200", Year:"2021", Famous:"Smooth Display", BestAt:"Gaming"}},
    "OnePlus": {"OnePlus 9": {RAM:"8GB", Storage:"128GB", Processor:"Snapdragon 888", Year:"2021", Famous:"Performance", BestAt:"Gaming, Photos"}}
  }
  // You can continue adding other brands the same way
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
