import "./MovieInfo.css"; // APPLYING EXTERNAL CSS

// FUNCTIONAL COMPONENT => RETURNING HTML LOOKING LIKE CODE
function MovieInfo() {
  const movie = {
    title: "Harry Potter and the Half blood Prince",
    rating: 10,
    genre: "Fantasy",
  };

  // Saving the value of the className in the constant and using it
  const movieInfoClassValue = "movieComponentInfo";

  // We can have the attributes in a object and then spread it in the element
  const movieDetailProps = {
    className: "movieDetail",
  };

  return (
    // SOLITION ONE TO => EXPRESSION CAN HAVE ONLY ONE PARENT ELEMTN
    // <div>
    //   <h3>Movie Info Component</h3>
    //   <p>Movie title: {movie.title}</p>
    //   <p>Movie rating: {movie.rating}</p>
    // </div>

    // SOLUTON TWO TO => EXPRESSION CAN HAVE ONLY ONE PARENT ELEMTN
    // <></> => React FRAGMENT, you may also see it as <React.Fragment></React.Fragment>
    // We can use fragment if we don't have to style their wrapper
    <>
      <h3 className={movieInfoClassValue}>Movie Info Component</h3>
      <p {...movieDetailProps}>Movie title: {movie.title}</p>
      <p className="movieDetail">Movie rating: {movie.rating}</p>
    </>
  );
}

export default MovieInfo;
