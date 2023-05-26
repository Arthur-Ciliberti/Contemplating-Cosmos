var elemento = document.getElementById(dash_home2);
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