var fechaAhora=new Date();
// Aquí se pueden colocar los eventos que se requieran, siempre con la misma estructura que se indica en la siguiente línea:
// var nombreDeEvento = [año, mes, día, 'nombre del evento'];
var diaMadres = [fechaAhora.getFullYear(), 06, 12, 'El Día de la madre'];
var navidad = [fechaAhora.getFullYear(), 10, 13, 'Navidad'];
var cumpleaños = [fechaAhora.getFullYear(), 08, 11, 'El Cumpleaños de X'];
var cumpleaños2 = [fechaAhora.getFullYear(), 06, 09, 'El Cumpleaños de Y'];
var cumpleaños3 = [fechaAhora.getFullYear(), 07, 14, 'El Cumpleaños de Z'];

// Arreglos (arrays) -- En el arreglo "eventos" se debe escribir separado por comas, el nombre de cada evento que se agregue.
var eventos = [cumpleaños2, navidad, cumpleaños3, diaMadres, cumpleaños];
let meses = [];
let dias = [];

// Variables
var mesActual=fechaAhora.getMonth()+1;
var diaActual=fechaAhora.getDate();

var nombreEvento;
var minMes; //minMes hace referencia al mes más cercano 
var minDia; //minDia hace referencia al día más cercano 

for(let i=0,len=eventos.length;i<len;i++){

  if(mesActual <= (eventos[i])[1]){ //Si el mes actual es menor o igual al mes del evento.
    meses.push((eventos[i])[1]); //Almacenar los meses de todos los eventos.
    
    minMes = meses[0];
    for(let i=0,len=meses.length;i<len;i++){ //Encuentra el mes menor; es decir, el mes más próximo.
      if(meses[i] < minMes){
        minMes = meses[i];
      }
    }

    if(minMes == (eventos[i])[1]){ //Si el mes del evento es igual al mes más próximo.
      if(((eventos[i])[2])>=diaActual){ //Condición para que se agreguen sólo los días próximos y no días de eventos pasados.
        dias.push((eventos[i])[2]); //Almacenar los días de los eventos del mes más próximo.
      }
    
      minDia = dias[0];
      for(let i=0,len=dias.length;i<len;i++){ //Encuentra el día menor; es decir, el más próximo.  
        if(dias[i] < minDia){
          minDia = dias[i];
          console.log('minDia: '+minDia);
        }
      }
    }
  }
  
  eventos.forEach(buscarNombre);
  function buscarNombre(item, index) {
    if(item[1] == minMes && item[2] == minDia){
      nombreEvento = eventos[index][3];
    }
  }
}

document.addEventListener('DOMContentLoaded', () => { 

  //Variables
  var yyyy=fechaAhora.getFullYear();
  const fechaEvento = new Date(yyyy+'/'+minMes+'/'+minDia+' 00:01 AM');
  
  // Elementos del DOM html
  const textoDias = document.querySelector('#days');
  const textoHoras = document.querySelector('#hours');
  const textoMinutos = document.querySelector('#minutes');
  const textoSegundos = document.querySelector('#seconds');
  const textoNombreEvento = document.querySelector('#nameEvent');
  const imagenEvento = document.getElementById('imagenEvento');
  const conteoRegresivo = document.getElementById('conteoRegresivo');
  
  // Conversión de milisegundos a las demás unidades
  const convertirASegundos = 1000;
  const convertirAMinutos = convertirASegundos * 60;
  const convertirAHoras = convertirAMinutos * 60;
  const convertirADias = convertirAHoras * 24
  
  //Función para la cuenta regresiva
  function cuentaRegresiva() {
    // Calcs
    const fechaAhora = new Date()
    const duracion = fechaEvento - fechaAhora;
    const diasRestantes = Math.floor(duracion / convertirADias);
    const horasRestantes = Math.floor((duracion % convertirADias) / convertirAHoras);
    const minutosRestantes = Math.floor((duracion % convertirAHoras) / convertirAMinutos);
    const segundosRestantes = Math.floor((duracion % convertirAMinutos) / convertirASegundos);
  
    // Colocar textos en los span
    textoDias.textContent = diasRestantes;
    textoHoras.textContent = horasRestantes;
    textoMinutos.textContent = minutosRestantes;
    textoSegundos.textContent = segundosRestantes;
    textoNombreEvento.textContent = nombreEvento;

    if(diasRestantes <= 0 && horasRestantes <= 0 && minutosRestantes <= 0 && segundosRestantes <= 0){
      imagenEvento.style.display = 'block';
      conteoRegresivo.style.display = 'none';
    }
  
    else{
      imagenEvento.style.display = 'none';
      conteoRegresivo.style.display = 'block';
    }
  }
  
  //Llamado de la función "cuentaRegresiva"
  cuentaRegresiva();
  // Ejecución de la función "cuentaRegresiva" cada segundo
  setInterval(cuentaRegresiva, 1000);
});