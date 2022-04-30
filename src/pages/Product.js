import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import styled from 'styled-components'
import { Add, Remove } from "@material-ui/icons";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
 
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;

`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
  font-weight: bold;
  opacity: 80%;
  font-size: 30px;
  margin-bottom: 15px;
`;

const Detail = styled.div`
font-size: 15px;
margin: 5px 4px;
font-family: Arial, Helvetica, sans-serif;

`

const Desc = styled.p`
  margin: 10px 4px;
  font-size: 12px;
  opacity: 80%;
`;

const Price = styled.span`
  font-weight: 300;
  font-size: 20px;
  margin: 5px 4px;

`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 10px 4px;
  display: flex;
  justify-content: space-between;

`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 15px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 2px;
  font-size: 10px;
`;

const FilterSizeOption = styled.option`
font-size: 10px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
margin-top:30px;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 20px;
  height: 20x;
  border-radius: 5px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
font-size: 10px;
  padding: 5px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
  background-color: #f8f4f4;
  }
`;



const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
          <ImgContainer>
            <Image src="https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-victoriavine-ring-68268125_1025699_ED_M.jpg"></Image>
          </ImgContainer>

          <InfoContainer>
              <Title>Vine Ring</Title>
              <Detail>Mô tả chi tiết:</Detail>
                <Desc>Nspired by nature, Tiffany Victoria captures the beauty of flowers and vines with a mix of expertly cut diamonds. This ring features a round tanzanite at its center and an organic vine motif of marquise diamonds. Creating color, light and movement, Tiffany Victoria designs are proof that more diamonds are always better.</Desc>
              <Price>$15.000</Price>

              <FilterContainer>
                <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="gray" />
                </Filter>
                <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
                </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
          </InfoContainer>


      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
