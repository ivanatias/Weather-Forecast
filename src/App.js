import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import { useState } from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";
import { fetchData } from "./API/httpRequest";


function App() {
  const [query, setQuery] = useState({});

  const { data, status, isFetching, isError, refetch } = useQuery("weather",
    () => fetchData(query),
    {
      enabled: false,
      refetchOnWindowFocus: false,
    })

  console.log(data);

  return (
    <Container className="d-flex flex-column align-items-center py-3">
      <h1 className="text-center">Weather Forecast App</h1>
      <Search query={query} setQuery={setQuery} fetch={refetch} />
      {isFetching ? "Loading ..." :
        isError ? "Error!" :
          status === "success" ? data ? <Weather /> : "No results" : null}
    </Container>
  );
}

export default App;
