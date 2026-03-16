// Dark Mode
function toggleDark(){ document.body.classList.toggle("dark"); }

// Load Series & Models
function loadSeries(){
  const brand = document.getElementById("brand").value;
  const seriesSelect = document.getElementById("series");
  seriesSelect.innerHTML = "<option value=''>Select Series</option>";
  document.getElementById("model").innerHTML = "<option value=''>Select Model</option>";
  for(let series in phonesDB[brand]){
    let opt = document.createElement("option");
    opt.value = series;
    opt.textContent = series;
    seriesSelect.appendChild(opt);
  }
}

function loadModels(){
  const brand = document.getElementById("brand").value;
  const series = document.getElementById("series").value;
  const modelSelect = document.getElementById("model");
  modelSelect.innerHTML = "<option value=''>Select Model</option>";
  for(let model in phonesDB[brand][series]){
    let opt = document.createElement("option");
    opt.value = model;
    opt.textContent = model;
    modelSelect.appendChild(opt);
  }
}

function showPhoneData(){
  const brand = document.getElementById("brand").value;
  const series = document.getElementById("series").value;
  const model = document.getElementById("model").value;
  if(!brand || !series || !model) return;
  const data = phonesDB[brand][series][model];
  const specsDiv = document.getElementById("phoneSpecs");
  specsDiv.innerHTML = `
    <b>${brand} ${model}</b><br>
    RAM: ${data.RAM}<br>
    Storage: ${data.Storage}<br>
    Processor: ${data.Processor}<br>
    Launch Year: ${data.Year}<br>
    Famous For: ${data.Famous}<br>
    Best At: ${data.BestAt}
  `;
}

// Phone Health Analyzer
function analyzePhone(){
  const model = document.getElementById("model").value;
  if(!model){ alert("Select a phone first"); return; }
  const brand = document.getElementById("brand").value;
  const series = document.getElementById("series").value;
  const data = phonesDB[brand][series][model];

  let score = 100;
  const ramGB = parseInt(data.RAM);
  if(ramGB<6) score -= 25;

  const usedStorage = 80; // simulate
  const totalStorage = 128;
  const percent = (usedStorage/totalStorage)*100;
  if(percent>80) score -= 30;

  document.getElementById("healthScore").innerHTML="Phone Health Score: "+score+"/100";

  const tips = score<50 ? "Phone may lag, clear cache or remove apps."
             : score<80 ? "Performance average, minor optimization recommended."
             : "Phone performance is good.";
  document.getElementById("performanceTips").innerHTML=tips;

  document.getElementById("storageBar").style.width = percent+"%";

  drawPerformanceChart(usedStorage, totalStorage-usedStorage);
}

// Performance Pie Chart
function drawPerformanceChart(used, free){
  const canvas = document.getElementById("performanceChart");
  const ctx = canvas.getContext("2d");
  canvas.width = 300; canvas.height = 200;
  const total = used+free;
  const usedAngle = (used/total)*Math.PI*2;
  ctx.clearRect(0,0,300,200);

  ctx.beginPath(); ctx.moveTo(150,100);
  ctx.arc(150,100,80,0,usedAngle);
  ctx.fillStyle="#ff4d4d"; ctx.fill();

  ctx.beginPath(); ctx.moveTo(150,100);
  ctx.arc(150,100,80,usedAngle,Math.PI*2);
  ctx.fillStyle="#4caf50"; ctx.fill();
}

// Virus / Malware Checker
function checkVirus(){
  let score = 0;
  if(document.getElementById("highStorage").checked) score +=25;
  if(document.getElementById("unknownApps").checked) score +=25;
  if(document.getElementById("batteryDrain").checked) score +=20;
  if(document.getElementById("backgroundApps").checked) score +=20;

  const risk = score<=30 ? "Safe" : score<=60 ? "Moderate Risk" : "High Risk";

  let recommendations = "";
  if(risk==="Moderate Risk"){
    recommendations="Clear cache, remove 1–3 unknown apps, limit background apps";
  } else if(risk==="High Risk"){
    recommendations="Clear cache, remove unknown apps, limit background apps, avoid unsafe downloads";
  } else recommendations="Phone looks safe";

  document.getElementById("virusResult").innerHTML=`Security Score: ${score} /100<br>Risk Level: ${risk}<br>Recommended Actions: ${recommendations}`;
}

// Simulated Internet Speed
function speedTest(){
  const speed = Math.floor(Math.random()*80)+20;
  document.getElementById("speedResult").innerHTML=`Estimated Speed: ${speed} Mbps`;
}

// Optimize Simulator
function optimizePhone(){
  const output = document.getElementById("optimizeResult");
  output.innerHTML="Optimizing...";
  setTimeout(()=>{ output.innerHTML="Phone Optimized! Estimated speed +15%"; },1500);
}

// Comparison Tool
function fillComparisonSelects(){
  const compare1 = document.getElementById("compare1");
  const compare2 = document.getElementById("compare2");
  for(let brand in phonesDB){
    let opt1 = document.createElement("option"); opt1.value=brand; opt1.textContent=brand;
    let opt2 = document.createElement("option"); opt2.value=brand; opt2.textContent=brand;
    compare1.appendChild(opt1); compare2.appendChild(opt2);
  }
}

function loadCompareModels(selectId, modelId){
  const brand = document.getElementById(selectId).value;
  const modelSelect = document.getElementById(modelId);
  modelSelect.innerHTML="<option value=''>Select Model</option>";
  for(let series in phonesDB[brand]){
    for(let model in phonesDB[brand][series]){
      let opt = document.createElement("option");
      opt.value = `${series}::${model}`;
      opt.textContent = model;
      modelSelect.appendChild(opt);
    }
  }
}

function showComparison(){
  const sel1 = document.getElementById("compare1Model").value;
  const sel2 = document.getElementById("compare2Model").value;
  if(!sel1 || !sel2) return;
  const [series1, model1] = sel1.split("::");
  const [series2, model2] = sel2.split("::");
  const brand1 = document.getElementById("compare1").value;
  const brand2 = document.getElementById("compare2").value;

  const p1 = phonesDB[brand1][series1][model1];
  const p2 = phonesDB[brand2][series2][model2];

  document.getElementById("comparisonResult").innerHTML=`
  <b>${brand1} ${model1}</b> vs <b>${brand2} ${model2}</b><br>
  RAM: ${p1.RAM} vs ${p2.RAM}<br>
  Storage: ${p1.Storage} vs ${p2.Storage}<br>
  Processor: ${p1.Processor} vs ${p2.Processor}<br>
  Launch Year: ${p1.Year} vs ${p2.Year}<br>
  Famous For: ${p1.Famous} vs ${p2.Famous}<br>
  Best At: ${p1.BestAt} vs ${p2.BestAt}
  `;
}
