import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faThumbsUp, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";

export const Votes = ({ mid, poster }) => {

  const [ isInWishList, setIsInWishList ] = useState(false);
  const [ isLike, setIsLike ] = useState(false);

  const onClickWishList = () => {
    setIsInWishList(prevIsWishList => !prevIsWishList);

    const lsWishList = localStorage.getItem("tealdemo-st-wish");
    let o = {};

    if(lsWishList) {
      o = JSON.parse(lsWishList);
      o[mid] = (typeof o[mid] !== 'undefined' ? !o[mid] : true);
    }
    else {
      o[mid] = true;
    }

    localStorage.setItem("tealdemo-st-wish", JSON.stringify(o));

    const lsWishPoster = localStorage.getItem("tealdemo-st-wish-poster");
    let p = {};

    if(lsWishPoster) {
      p = JSON.parse(lsWishPoster);
    }

    p[mid] = poster;
    localStorage.setItem("tealdemo-st-wish-poster", JSON.stringify(p));
  }

  const onClickLike = () => {
    setIsLike(prevIsLike => !prevIsLike);

    const lsLike = localStorage.getItem("tealdemo-st-like");
    let o = {};

    if(lsLike) {
      o = JSON.parse(lsLike);
      o[mid] = (typeof o[mid] !== 'undefined' ? !o[mid] : true);
    }
    else {
      o[mid] = true;
    }

    localStorage.setItem("tealdemo-st-like", JSON.stringify(o));
  }

  useEffect(() => {
    const lsLike = localStorage.getItem("tealdemo-st-like");
    if(lsLike) {
      const aLike = JSON.parse(lsLike);

      if(aLike[mid] === true){
        setIsLike(true);
      }
      else {
        setIsLike(false);
      }
    }

    const lsWishList = localStorage.getItem("tealdemo-st-wish");
    if(lsWishList) {
      const aWlist = JSON.parse(lsWishList);

      if(aWlist[mid] === true){
        setIsInWishList(true);
      }
      else {
        setIsInWishList(false);
      }
    }
  }, [])

  return (
    <VoteArea>
      <Vote>
        <VoteButton onClick={onClickWishList}>
          {
            isInWishList &&
            <><FontAwesomeIcon icon={faCircleCheck} size="lg"/></>
          }
          {
            isInWishList ||
            <><FontAwesomeIcon icon={faCirclePlus} size="lg"/><span style={{ marginLeft: "7px" }}>My List</span></>
          }
        </VoteButton>
      </Vote>

      <Vote>
        <VoteButton onClick={onClickLike}>
          {
            isLike &&
            <><FontAwesomeIcon icon={faCircleCheck} size="lg"/><span style={{ marginLeft: "5px" }}>Like!</span></>
          }
          {
            isLike ||
            <><FontAwesomeIcon icon={faThumbsUp} size="lg"/><span style={{ marginLeft: "7px" }}>Like</span></>
            
          }
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