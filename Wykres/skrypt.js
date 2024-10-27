const labels = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
        const temperatureData1 = [-8, -9, -5, -1, 0, 1, -3];
        const temperatureData2 = [-7, -5, -1, 2, 1, -3, -4];
        const temperatureData3 = [-6, -1, 2, 3, 2, 0, -2];

        
        const ctx = document.getElementById('multiChart').getContext('2d');

        
        const multiChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Tarnow',
                    data: temperatureData1,
                    borderColor: 'rgb(255, 99, 132)',
                    borderWidth: 5,
                    fill: false,
                    cubicInterpolationMode: 'monotone'
                },
                {
                    label: 'Warszawa',
                    data: temperatureData2,
                    borderColor: 'rgb(54, 162, 235)',
                    borderWidth: 5,
                    fill: false,
                    cubicInterpolationMode: 'monotone'
                },
                {
                    label: 'Gdansk',
                    data: temperatureData3,
                    borderColor: 'rgb(75, 192, 192)',
                    borderWidth: 5,
                    fill: false,
                    cubicInterpolationMode: 'monotone'
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'category',
                        position: 'bottom'
                    },
                    y: {
                        type: 'linear',
                        position: 'left'
                    }
                },
                plugins: {
                  legend: {
                    align: "center",
                    position: "bottom"
                  },
                  title: {display: true, text: 'Temperatura powietrza w miastach  01.01.2024 - 07.01.2024'}, // <-- title!
                }
            }
        });