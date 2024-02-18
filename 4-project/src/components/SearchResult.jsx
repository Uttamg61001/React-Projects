import styled from "styled-components";
import { BASE_URL, Button } from "../App";
const SearchResult = ({data}) => {
    return (
    <FoodCardContainer>
        <FoodCards>
            {data?.map((name, image, text, price)=>(
                <FoodCard key={name}>
                    <div className="food_image">
                        <img src={BASE_URL + image}/>
                        <div className="food-info">
                            <h3>{name}</h3>
                            <p>{text}</p>
                        </div>
                        <Button>${price.tofixed(2)}</Button>
                    </div>
                </FoodCard>
            ))}
        </FoodCards>
      </FoodCardContainer>
    );
};

export default SearchResult;

const FoodCardContainer = styled.section`
  height: calc(100vh - 256px);
  background-image: url("/bg.png");
  background-size: cover;


`
const FoodCards = styled.div``
const FoodCard = styled.div``