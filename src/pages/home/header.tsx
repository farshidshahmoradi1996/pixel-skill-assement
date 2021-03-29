import { Label } from "components";
import styled from "styled-components";

const StyledHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: palevioletred;
`;

export const HomeHeader: React.FC = () => {
  return (
    <StyledHeading>
      <Label size={"lg"}>Pixel Todo List</Label>
    </StyledHeading>
  );
};
