function viajando_pela_galaxia(){
    var select1 = document.getElementById('select1');
    var value1 = select1.options[select1.selectedIndex].value;

    var luz = (9461000000000);
    var temp_luz = (365);

    var km_mercurio_distancia = (77000000);
    var km_venus_distancia = (61000000);
    var km_marte_distancia = (82000000);
    var km_jupiter_distancia = (590000000);
    var km_saturno_distancia = (1200000000);
    var km_urano_distancia = (2700000000);
    var km_netuno_distancia = (4300000000);

    var luz_mercurio = (km_mercurio_distancia/luz);
    var luz_venus = (km_venus_distancia/luz);
    var luz_marte = (km_marte_distancia/luz);
    var luz_jupiter = (km_jupiter_distancia/luz);
    var luz_saturno = (km_saturno_distancia/luz);
    var luz_urano = (km_urano_distancia/luz);
    var luz_netuno = (km_netuno_distancia/luz);

    var tempo_luz_mercurio= (luz_mercurio*temp_luz);
    var tempo_luz_venus= (luz_venus*temp_luz);
    var tempo_luz_marte= (luz_marte*temp_luz);
    var tempo_luz_jupiter= (luz_jupiter*temp_luz);
    var tempo_luz_saturno= (luz_saturno*temp_luz);
    var tempo_luz_urano= (luz_urano*temp_luz);
    var tempo_luz_netuno= (luz_netuno*temp_luz);
                                // tempoLuz*meses*dias*horasDiarias*umaHora*segundos
    var tempo_contavel_luz_mercurio= (tempo_luz_mercurio*12*30);
    var tempo_contavel_luz_venus= (tempo_luz_venus*12*30);
    var tempo_contavel_luz_marte= (tempo_luz_marte*12*30);
    var tempo_contavel_luz_jupiter= (tempo_luz_jupiter*12*30);
    var tempo_contavel_luz_saturno= (tempo_luz_saturno*12*30);
    var tempo_contavel_luz_urano= (tempo_luz_urano*12*30);
    var tempo_contavel_luz_netuno= (tempo_luz_netuno*12*30);
    
    if (value1 == 'mercurio'){
        resultado_anos_luz.innerHTML=` <br><br>
        A distância da Terra para Mercurio é de 77 milhões de quilômetros da Terra,<br>
        com a velociade média de um foguete 28.440 Km/h demoraria para chegar até lá 40 dias e 2 horas,<br>
        se descontar alguns desvios para não colidir.<br>
        Já em velocidade da LUZ você chegaria em ${tempo_contavel_luz_mercurio} segundos! Incrivelmente rápido!
        `
    }

    if (value1 == 'venus'){
        resultado_anos_luz.innerHTML=` <br><br>
        A distância da Terra para Vênus é de 61 milhões de quilômetros de distância da Terra,<br>
        com a velociade média de um foguete 28.440 Km/h demoraria para chegar até lá 32 dias,<br>
        se descontar alguns desvios para não colidir.<br>
        Já em velocidade da LUZ você chegaria em ${tempo_contavel_luz_venus} segundos! Incrivelmente rápido!
        `
    }

    if (value1 == 'marte'){
        resultado_anos_luz.innerHTML=` <br><br>
        A distância da Terra para Marte é de 82 milhões de quilômetros de distância da Terra,<br>
        com a velociade média de um foguete 28.440 Km/h demoraria para chegar até lá  42 dias e meio (1/2),<br>
        se descontar alguns desvios para não colidir.<br>
        Já em velocidade da LUZ você chegaria em ${tempo_contavel_luz_marte} segundos! Incrivelmente rápido!
        `
    }

    if (value1 == 'jupiter'){
        resultado_anos_luz.innerHTML=` <br><br>
        A distância da Terra para Júpiter é de 590 milhões de quilômetros da Terra,<br>
        com a velociade média de um foguete 28.440 Km/h demoraria para chegar até lá  306 dias, <br>
        se descontar alguns desvios para não colidir.<br>
        Já em velocidade da LUZ você chegaria em ${tempo_contavel_luz_jupiter} segundos! Incrivelmente rápido!
        `
    }

    if (value1 == 'saturno'){
        resultado_anos_luz.innerHTML=` <br><br>
        A distância da Terra para Saturno é de 1.2 bilhão de quilômetros da Terra,<br>
        com a velociade média de um foguete 28.440 Km/h demoraria para chegar até lá  622 dias,<br>
        se descontar alguns desvios para não colidir.<br>
        Já em velocidade da LUZ você chegaria em ${tempo_contavel_luz_saturno} segundos! Incrivelmente rápido!
        `
    }

    if (value1 == 'urano'){
        resultado_anos_luz.innerHTML=` <br><br>
        A distância da Terra para Urano é de 2.7 bilhões de quilômetros da Terra,<br>
        com a velociade média de um foguete 28.440 Km/h demoraria para chegar até lá  3,8 anos, <br>
        se descontar alguns desvios para não colidir. <br>
        Já em velocidade da LUZ você chegaria em ${tempo_contavel_luz_urano} segundos! Incrivelmente rápido!
        `
    }

    if (value1 == 'netuno'){
        resultado_anos_luz.innerHTML=` <br><br>
        A distância da Terra para Netuno é de 4.3 bilhões de quilômetros da Terra, <br>
        com a velociade média de um foguete 28.440 Km/h demoraria para chegar até lá  6,16 anos, <br>
        se descontar alguns desvios para não colidir. <br>
        Já em velocidade da LUZ você chegaria em ${tempo_contavel_luz_netuno} segundos! Incrivelmente rápido!
        `
    }
    
}
var elemento = document.getElementById("dash_home1");
const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
            label: 'Temperatura',
            data: [22, 24, 27, 23, 20, 18],
            borderWidth: 1
        },
        {
          label: 'Umidade',
          data: [90, 89, 93, 87, 88, 82],
          borderWidth: 1
        }
    ]
      },

      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });


//     var elemento = document.getElementById("dash_home2");
// const ctx2 = document.getElementById('myChart');

//     new Chart(ctx2, {
//         type: 'bar',
//         data: {
//         labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
//         datasets: [{
//             label: 'Temperatura',
//             data: [22, 24, 27, 23, 20, 18],
//             borderWidth: 1
//         },
//         {
//           label: 'Umidade',
//           data: [90, 89, 93, 87, 88, 82],
//           borderWidth: 1
//         }
//     ]
//       },

//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });