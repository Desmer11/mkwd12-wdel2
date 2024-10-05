interface SecondChildProps {
  title: string;
  cities: string[];

  isAuthenticated?: boolean; // This makes this property optional, meaning it can be provided by the parent or it may not
}

export const SecondChild = (props: SecondChildProps) => {
  console.log("Props in second child using TS:", props);
  const { title, cities, isAuthenticated } = props;
  return (
    <>
      <h3> Second Child </h3>
      <h2>{title}</h2>

      <ol>
        <li>{cities[0]}</li>
        <li>{cities[1]}</li>
        <li>{cities[2]}</li>
      </ol>

      <p>
        {isAuthenticated ? "YOU ARE AUTHENTICATED" : "YOU ARE NOT AUTHETICATED"}
      </p>

      {isAuthenticated ? (
        <div>
          <h2>Is logged in </h2>
        </div>
      ) : (
        <div>
          <h2>Is not logged in</h2>
        </div>
      )}
    </>
  );
};
