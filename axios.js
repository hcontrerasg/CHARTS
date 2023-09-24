const obtenerPeliculas= async()=>{
try{
const respuesta = await axios.get(`https://api.themoviedb.org/3/movie/popular`,{
params:{
    //api_key: "da682616bf2871c77072acd5de38ff5f",
    languaje: "es-MX"
},
headers: {
    "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTY4MjYxNmJmMjg3MWM3NzA3MmFjZDVkZTM4ZmY1ZiIsInN1YiI6IjY1MGM1ZGE5ZjkyNTMyMDBlYTkxM2JkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nzCOETdqMm6y7xyjSm3jwgmmgPRSA5nQcMvdITXC2T0"
}
})
console.log(respuesta);
} catch(error){
    console.log(error);
}
}

obtenerPeliculas();
