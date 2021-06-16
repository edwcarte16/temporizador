var fechaAhora=new Date();

const nombreEvento = "Navidad";
const mesEvento = 06;
const diaEvento = 20;

document.addEventListener('DOMContentLoaded', () => { 

  //Variables
  const yyyy=fechaAhora.getFullYear();
  const fechaEvento = new Date(yyyy+'/'+mesEvento+'/'+diaEvento+' 00:01 AM');
  
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