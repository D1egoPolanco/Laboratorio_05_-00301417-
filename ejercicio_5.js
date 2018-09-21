function area_circulo() {
     
    this.areaCirculo = function (radio) {
      return Math.PI * Math.pow(radio,2);
    }
   
  }
  var f = new area_circulo();
  console.log ("El área de un círculo de radio es " + f.areaCirculo(2))
