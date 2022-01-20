import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import { useState } from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";


function App() {
  const [query, setQuery] = useState({});

  const { data, status, isFetching, isError, refetch } = useQuery("weather", {
    enabled: false,
    refetchOnWindowFocus: false,
  })


  return (
    <Container className=" py-3">
      <h1 className="text-center">Weather Forecast App</h1>
      <Search query={query} setQuery={setQuery} fetch={refetch} />
      {isFetching ? "Loading ..." :
        isError ? "Error!" :
          status === "success" ? data ? <Weather /> : "No results" : null}
    </Container>
  );
}

export default App;
