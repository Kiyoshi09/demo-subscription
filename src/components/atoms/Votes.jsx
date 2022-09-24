import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

export const Votes = () => {
  return (
    <VoteArea>
      <Vote>
        <VoteButton>
          <FontAwesomeIcon icon={faCirclePlus} size="lg"/><span style={{ marginLeft: "7px" }}>My List</span>
        </VoteButton>
      </Vote>

      <Vote>
        <VoteButton>
          <FontAwesomeIcon icon={faThumbsUp} size="lg"/><span style={{ marginLeft: "7px" }}>Like</span>
        </VoteButton>
      </Vote>

    </VoteArea>
  );
}

const VoteArea = styled.div`
  display: flex;
  padding-top: 20px;
`;


const Vote = styled.div`
  padding: 10px;
`;

const VoteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 115px;
  height: 45px;
  border-radius: 7px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;