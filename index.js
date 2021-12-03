// Valor Futuro

let vf_r = document.getElementById("vf_resultado"); // Valor Futuro
let vf_vp = document.getElementById("vf_vp"); // Valor Presente
let vf_i = document.getElementById("vf_i"); //Interés del periodo
let vf_n = document.getElementById("vf_n"); // Número de periodos

let vf_btn = document.getElementById("vf_btn");

function calcularVF() {
  let vp_val = parseFloat(vf_vp.value);
  let i_val = parseFloat(vf_i.value);
  let n_val = parseFloat(vf_n.value);
  let vf_val = vp_val * Math.pow(1 + i_val, n_val);
  vf_r.innerHTML = `Valor Futuro = ${vf_val.toFixed(2)}`;
}

vf_btn.addEventListener("click", calcularVF);

// Valor Presente

let vp_r = document.getElementById("vp_resultado"); // Valor Presente Resultado
let vp_vf = document.getElementById("vp_vf"); // Valor Futuro
let vp_i = document.getElementById("vp_i"); //Interés del periodo
let vp_n = document.getElementById("vp_n"); // Número de periodos

let vp_btn = document.getElementById("vp_btn");

function calcularVP() {
  let vf_val = parseFloat(vp_vf.value);
  let i_val = parseFloat(vp_i.value);
  let n_val = parseFloat(vp_n.value);
  let vp_val = vf_val / Math.pow(1 + i_val, n_val);
  vp_r.innerHTML = `Valor Presente = ${vp_val.toFixed(2)}`;
}

vp_btn.addEventListener("click", calcularVP);

// Interés del periodo

let ip_r = document.getElementById("ip_resultado"); // Interés del periodo Resultado
let ip_vf = document.getElementById("ip_vf"); // Valor Futuro
let ip_vp = document.getElementById("ip_vp"); //Valor Presente
let ip_n = document.getElementById("ip_n"); // Número de periodos

let ip_btn = document.getElementById("ip_btn");

function calcularIP() {
  let vf_val = parseFloat(ip_vf.value);
  let vp_val = parseFloat(ip_vp.value);
  let n_val = parseFloat(ip_n.value);
  let ip_val = Math.pow(vf_val / vp_val, 1 / n_val) - 1;
  ip_r.innerHTML = `Valor Presente = ${ip_val.toFixed(2)}`;
}

ip_btn.addEventListener("click", calcularIP);

// Número de periodos

let np_r = document.getElementById("np_resultado"); // Número de periodos Resultado
let np_vf = document.getElementById("np_vf"); // Valor Futuro
let np_vp = document.getElementById("np_vp"); //Valor Presente
let np_i = document.getElementById("np_i"); //Interés del periodo

let np_btn = document.getElementById("np_btn");

function calcularNP() {
  let vf_val = parseFloat(np_vf.value);
  let vp_val = parseFloat(np_vp.value);
  let i_val = parseFloat(np_i.value);
  let np_val = Math.log(vf_val / vp_val) / Math.log(1 + i_val);
  np_r.innerHTML = `Número de Periodos = ${np_val.toFixed(2)}`;
}

np_btn.addEventListener("click", calcularNP);
