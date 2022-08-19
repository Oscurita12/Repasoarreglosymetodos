let peliculas=[
    {nombre:"Harry Potter", genero:"ciencia ficcion", costo:2000},
    {nombre:"Dragon Ball Super", genero:"anime", costo:3000},
    {nombre:"Wakanda Forever", genero:"ciencia ficcion", costo:5000},
    {nombre:"Django sin cadenas", genero:"ciencia ficcion", costo:1500},
    {nombre:"El viaje de Chihiro", genero:"anime", costo:60}
]

let filtro=peliculas.filter(pelicula => pelicula.genero=="ciencia ficcion")
console.log(filtro)

let filtro2=peliculas.filter(pelicula => pelicula.costo > 2000 )
console.log(filtro2)

//peliculas de anime y buscar si alguna de ellas cuesta 3000
let filtro4 = peliculas.filter(pelicula => pelicula.genero=="anime")
let busqueda1 = filtro4.find(busco => busco.costo==3000)
console.log(busqueda1)

//Agregas todos los costos quitando los miles 
let mapeo = peliculas.map(function(pelicula){
    return pelicula.costo=pelicula.costo/1000
})

console.log(peliculas)

let mapeo2 = peliculas.map(function(pelicula){
    return pelicula.nombre="Clara"
})
