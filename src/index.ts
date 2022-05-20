let llegadaColectivo;
llegadaColectivo = prompt("Llego el colectivo? (Y/N): ");

while (llegadaColectivo === "N") {
  console.log("Esperando el colectivo");
  llegadaColectivo = prompt("Llego el colectivo? (Y/N): ");
}
console.log("Llego el colectivo");
