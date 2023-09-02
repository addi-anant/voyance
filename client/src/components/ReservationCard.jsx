import {
  Grade,
  CurrencyRupee,
  AddCircleOutline,
  RemoveCircleOutline,
} from "@mui/icons-material";
import styled from "styled-components";
import useWindowDimensions from "../hooks/useWindowDimensions";
import DatePickerComponent from "./DatePickerComponent";

const Container = styled.div`
  flex: 1;
  display: flex;
  padding: 20px 0px;
  justify-content: center;
  width: 100%;
  height: max-content;
  position: sticky;
  top: 90px;
  right: 0px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  max-width: 350px;
  background-color: white;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.5%;
  margin-bottom: 10px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  padding-top: 5px;
`;

const Price = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: ${(props) =>
    props.type === "cost" || props.type === "final" ? "16px" : "24px"};
  font-weight: ${(props) => (props.type === "cost" ? "" : "bold")};
  color: ${(props) =>
    props.discount === "yes" || props.type === "cost" ? "#7f8487" : ""};
  text-decoration: ${(props) =>
    props.discount === "yes" ? "line-through" : ""};
`;

const Duration = styled.p`
  padding: 5px 0px 2px 5px;
  font-family: "Roboto", sans-serif;
`;

const RatingContainer = styled.div`
  gap: 5px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: max-content;
  padding-bottom: 4px;
`;

const Rating = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
`;

const TripDetails = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  width: 100%;
  padding: 10px 0px;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: ${(props) => (props.type === "guest" ? "center" : "")};
  flex-direction: ${(props) => (props.type === "guest" ? "row" : "column")};
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 2px;
  text-transform: uppercase;
  font-family: "Bree Serif", serif;
`;

const Input = styled.input`
  font-size: 14px;
  outline: none;
  border: none;
  background-color: white;
  border-bottom: 1px solid lightgray;
  font-family: "Roboto", sans-serif;

  ::placeholder {
    font-size: 14px;
    font-family: "Roboto", sans-serif;
  }
`;

const GuestContainer = styled.div`
  display: flex;
  width: 50px;
  flex-direction: column;
`;

const GuestValueContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 15px;
  border-radius: 10px;
  border: none;
  background-color: #0ead69;
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;

  &:hover {
    opacity: 0.5;
    transition: all 0.2s;
  }
`;

const DataWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5px;
`;

const Data = styled.p`
  color: ${(props) => (props.type === "final" ? " " : "#7f8487")};
  font-weight: ${(props) => (props.type === "final" ? "bold" : "")};
  font-size: ${(props) => (props.type === "final" ? "16px" : "14px")};
  text-decoration: underline;
  font-family: "Montserrat", sans-serif;
`;

const Hr = styled.hr`
  color: lightgray;
  margin: 10px 0px;
`;

const ReservationCard = ({
  data,
  setModal,
  beginDate,
  setBeginDate,
  endDate,
  setEndDate,
  stay,
  guest,
  setGuest,
  checkoutHandler,
}) => {
  /* Width of window: */
  const { width } = useWindowDimensions();

  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const today = date.getFullYear() + "-" + month + "-" + day;

  return (
    <Container>
      <Wrapper>
        {/* Reservation Component: */}
        <TopContainer>
          <PriceContainer>
            <CurrencyRupee style={{ fontSize: "22px", padding: "2px" }} />
            <Price>{data?.cost}</Price>
            <Duration>night</Duration>
          </PriceContainer>
          <RatingContainer>
            <Grade style={{ fontSize: "24px", color: "#E6B325" }} />
            <Rating>{data?.rating}</Rating>
          </RatingContainer>
        </TopContainer>

        <TripDetails>
          {/* Check-IN: */}
          <InputContainer>
            <Label>CHECK-IN</Label>
            {width <= 768 ? (
              <Input
                type="date"
                value={beginDate}
                min={today}
                onChange={(event) => setBeginDate(event.target.value)}
              />
            ) : (
              <DatePickerComponent date={beginDate} setDate={setBeginDate} />
            )}
          </InputContainer>

          {/* Check-OUT: */}
          <InputContainer>
            <Label>CHECK-OUT</Label>
            {width <= 768 ? (
              <Input
                type="date"
                value={endDate}
                min={beginDate}
                onChange={(event) => setEndDate(event.target.value)}
              />
            ) : (
              <DatePickerComponent date={endDate} setDate={setEndDate} />
            )}
          </InputContainer>
          <InputContainer type="guest">
            <GuestContainer>
              <Label>GUESTS</Label>
              <Input placeholder={guest} disabled />
            </GuestContainer>
            <GuestValueContainer>
              <RemoveCircleOutline
                style={{
                  transform: "scale(1.2)",
                  color: "#4ee2ec",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setGuest(guest === 1 ? guest : guest - 1);
                }}
              />
              <AddCircleOutline
                style={{
                  transform: "scale(1.2)",
                  color: "#4ee2ec",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setGuest(guest === data?.guest ? guest : guest + 1);
                }}
              />
            </GuestValueContainer>
          </InputContainer>
        </TripDetails>

        <Hr />

        <DataWrapper>
          <Data>{`${data?.cost} x ${stay} nights`}</Data>
          <PriceContainer>
            <CurrencyRupee
              style={{ fontSize: "18px", padding: "2px", color: "#7f8487" }}
            />
            <Price type="cost">{data?.cost * stay}</Price>
          </PriceContainer>
        </DataWrapper>

        <Button onClick={() => checkoutHandler(data?.cost * stay, data?.name)}>
          Reserve
        </Button>

        {/* Handling Modal Feature */}
        {width <= 768 && <Button onClick={() => setModal(0)}>Close</Button>}
      </Wrapper>
    </Container>
  );
};

export default ReservationCard;
