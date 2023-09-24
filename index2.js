// Variable global para almacenar el número de página
let pagina = 1;


const cargarPeliculas = async () => {
    try {
        // Hacer una solicitud a la API de TMDb
        const respuesta = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
            params: {
                language: "es-MX",
                page: pagina
            },
            headers: {
                "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTY4MjYxNmJmMjg3MWM3NzA3MmFjZDVkZTM4ZmY1ZiIsInN1YiI6IjY1MGM1ZGE5ZjkyNTMyMDBlYTkxM2JkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nzCOETdqMm6y7xyjSm3jwgmmgPRSA5nQcMvdITXC2T0"
            }
        });

        // Verificar el estado de la respuesta
        if (respuesta.status === 200) {
            // Extraer y mapear datos relevantes de las películas
            const peliculasData = respuesta.data.results.slice(0, 20).map(pelicula => ({
                title: pelicula.title,
                vote_average: pelicula.vote_average
            }));

            // Extraer títulos y votos de las películas
            const titulos = peliculasData.map(pelicula => pelicula.title);
            const votos = peliculasData.map(pelicula => pelicula.vote_average);

            // Obtener el contexto del gráfico
            const ctx = document.getElementById('chart').getContext('2d');
            
            // Crear un gráfico de barras
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: titulos,
                    datasets: [{
                        label: 'Ranking de Películas',
                        data: votos,
                        backgroundColor: 'rgba(0, 7, 1, 0.57)',
                        borderColor: 'rgba(0, 0, 0, 0)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 10
                        }
                    }
                }
            });

        } else if (respuesta.status === 401) {
            console.log('Pusiste la llave mal');
        } else if (respuesta.status === 404) {
            console.log('La película que buscas no existe');
        } else {
            console.log('Hubo un error y no sabemos que pasó');
        }

    } catch (error) {
        console.log(error);
    }
}

// Llamar a la función para cargar las películas
cargarPeliculas();