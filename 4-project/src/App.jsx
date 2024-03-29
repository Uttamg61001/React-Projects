import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {

  const [data, setData] = useState(null);
  const[loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{

    const fetchFoodData = async() => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL); 
        const json = await response.json();
  
        setData(json);
        setLoading(false);
        
      } catch (error) {
        setError("Unable to fetch data");
        
      }
    };
    fetchFoodData();
  }, [] );

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading....</div>

  return (
  <Container>
    <TopContainer>
      <div className="logo">
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className="search">
        <input placeholder="Search Food" />
      </div>
      </TopContainer>
      <FilterContainer>
        <Button>All</Button>
        <Button>BreakFast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>

      <SearchResult data = {data}/>
      
  </Container>

  );
};

export default App;

const Container = styled.div`
  background-color: blueviolet;
  max-width: 100;
  margin: 0 auto;
`;
const TopContainer = styled.div`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: black;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }

  }
  
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 40px;
`;
export const Button = styled.button`
  background: red;
  border-radius: none;
  padding: 6px 12px;
  color: white;
`;

