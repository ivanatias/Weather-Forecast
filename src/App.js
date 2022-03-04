import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import { useState } from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";
import Loading from "./components/Loading";
import Empty from "./components/Empty";
import { fetchData } from "./API/httpRequest";


function App() {
  const [query, setQuery] = useState({});
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("")

  const { data, status, isFetching, isError, refetch } = useQuery("weather",
    () => fetchData(query),
    {
      enabled: false,
      refetchOnWindowFocus: false,
    })

  console.log(data);

  return (
    <Container as="main" className=" py-3">
      <h1 className="text-center">Weather Forecast App</h1>
      <Search
        query={query}
        setQuery={setQuery}
        fetch={refetch}
        setCountry={setCountry}
        setCityName={setCityName}
      />
      {isFetching ? <Loading /> :
        isError ? "Error!" :
          status === "success" ? data ? <Weather forecast={data} country={country} city={cityName} /> : <Empty /> : null}
    </Container>
  );
}

export default App;
