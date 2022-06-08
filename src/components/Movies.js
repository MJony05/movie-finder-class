import Movie from "./Movie";

export default function Movies(props){
  const {movies=[]} = props
  return(
    <div className="movies">
      {movies.length?movies.map(el=>(<Movie key={el.imdbID} {...el} />)):<h3>Nothing Found</h3>}
      {movies.map(el=><Movie key={el.imdbID} {...el} />)}
    </div>
  )
}