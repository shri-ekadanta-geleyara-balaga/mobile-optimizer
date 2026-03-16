const phonesDB = {
  "Samsung": {
    "Galaxy S": {
      "S21": {RAM:"8GB", Storage:"128/256GB", Processor:"Snapdragon 888", Year:"2021", Famous:"Flagship performance", BestAt:"Gaming, Photography"},
      "S22": {RAM:"8GB", Storage:"128/256GB", Processor:"Snapdragon 8 Gen 1", Year:"2022", Famous:"Camera, Speed", BestAt:"Gaming, Photos"}
    },
    "Galaxy A": {
      "A52": {RAM:"6GB", Storage:"128GB", Processor:"Snapdragon 720G", Year:"2021", Famous:"Mid-range Camera", BestAt:"Photos, Battery"}
    }
  },
  "Apple": {
    "iPhone 13": {
      "iPhone 13": {RAM:"4GB", Storage:"128/256GB", Processor:"A15 Bionic", Year:"2021", Famous:"Camera & Performance", BestAt:"Photos, Gaming"}
    },
    "iPhone 14": {
      "iPhone 14": {RAM:"6GB", Storage:"128/256GB", Processor:"A15 Bionic", Year:"2022", Famous:"Smooth Performance", BestAt:"Gaming, Photos"}
    }
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
