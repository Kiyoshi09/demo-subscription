import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCircleUser, faRightFromBracket, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Auth } from 'aws-amplify';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { memo } from "react";

export const HeaderMovie = memo(({SearchMode, SearchKeyword}) => {
  console.log("[Rendering] === HeaderMovie ==="); 

  const [ isSearch, setIsSearch ] = useState(0);
  const [ isMenuOpen, setIsMenuOpen ] = useState(0);
  const insideRef = useRef(null);
  const accountRef = useRef(null);
  const navigate = useNavigate();

  const onButtonClick = () => {
    if(isMenuOpen === 0) {
      setIsMenuOpen(1);
    }
    else {
      setIsMenuOpen(0);
    }
  };

  const onSignOut = () => {

    window.utag && 
      window.utag.link({
        "tealium_event": "signout",
      });

    signOut();
    navigate("/");
  }

  const onOpenAccountPage = () => {
    toast("🥹 sorry but the account page is under construction...", {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    
  }

  // 検索ボックスの内側外側をクリックしたときの挙動をセット
  useEffect(() => {
    const el = insideRef.current;

    if(!el) return;

    const handleClickOutside = (e) => {
      if(!el?.contains(e.target)) {
        // 検索ボックスを非表示にする
        //setIsSearch(0);
        // メニューの表示を消す
        setIsMenuOpen(0);
        // 検索モードをOff
        //SearchMode(0);
      }
      else {
        // 検索ボックスを表示する
        setIsSearch(1);
        // 検索モードをON
        SearchMode(1);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    }

  }, [insideRef, SearchMode]);

  // アカウントエリアにマウスがある、ない場合の挙動をセット
  useEffect(() => {
    const el = accountRef.current;

    if(!el) return;

    const handleMouseOutside = (e) => {
      if(el?.contains(e.target)) {
        setIsMenuOpen(1);
      }
    }

    document.addEventListener("mouseover", handleMouseOutside);

    return () => {
      document.removeEventListener("mouseover", handleMouseOutside);
    }


  }, [accountRef])

  const onChange = (e) => {
    //console.log(`typing : ${e.target.value}`);
    SearchKeyword(e.target.value);
  }

  const cancelSearch = () => {
    // 検索ボックスを非表示にする
    setIsSearch(0);
    // 検索モードをOff
    SearchMode(0);

    // 検索キーワードをクリア
    SearchKeyword("");
    document.getElementById("search").value = "";
  }

  return (
    <HeaderContainer>
      <HeaderContainerLogo>
        <img src="https://kiyotaro.cloud/images/2021_Tealium_logo.png" alt="" />
      </HeaderContainerLogo>
      <HeaderContainerRight>
        <HeaderSearchArea ref={insideRef}>
          <FontAwesomeIconSearch icon={faSearch} size="lg" issearch={isSearch}/>
          <SearchBox id="search" type="text" placeholder="Title, people, genres" issearch={isSearch} onChange={onChange}></SearchBox>
          {
            isSearch &&
            <SearchCloseButton href="#" onClick={cancelSearch}>
              <FontAwesomeIcon icon={faCircleXmark} size="lg" color="black"/>
            </SearchCloseButton>
          }
        </HeaderSearchArea>
        <HeaderContainerSignIn ref={accountRef}>
          <CircleAccountIcon />
          <MyAccountLink onClick={onButtonClick}>
            {/* <FontAwesomeIconAccount icon={faGhost} size="2x" /> */}
            <img style={{width: "50px", borderRadius: "10px", paddingTop: "5px"}} src="https://www.kiyotaro.cloud/images/profile.png" alt="" />
          </MyAccountLink>
          <AccountMenuArea ismenuopen={isMenuOpen}>
            <AccountMenuItem>
              <FontAwesomeIcon icon={faCircleUser} size="lg" />
              <AccountMenuItemLink href="#" onClick={onOpenAccountPage}>Account</AccountMenuItemLink>
            </AccountMenuItem>
            <AccountMenuItem>
              <FontAwesomeIcon icon={faRightFromBracket} size="lg" />
              <AccountMenuItemLink href="/" onClick={onSignOut}>Sign Out</AccountMenuItemLink>
            </AccountMenuItem>
          </AccountMenuArea>
        </HeaderContainerSignIn>
      </HeaderContainerRight>
      <ToastContainer />
    </HeaderContainer>
  );
});

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  padding-top: 30px;
  width: 100%;
  z-index: 10;
  //background-color: rgba(15, 15, 15, 0.2);
  background-color: rgba(15, 15, 15, 1.0);
`;

const HeaderContainerLogo = styled(HeaderContainer)`
    position: relative;
    width: 100%;
    background-color: transparent;

    > img {
      position: absolute;
      width: 200px;
      height: 70px;
      top: 50%;
      margin-top: -45px;
      margin-left: 30px;
    }
`;

const HeaderContainerSignIn = styled(HeaderContainer)`
  position: relative;
  width: 20%;
  text-align: right;
  margin-right: 70px;
  background-color: transparent;
  top: -9px;
`;

const CircleAccountIcon = styled.span`
  display: inline-block;
  position: relative;
  top: -21px;
  left: 12px;
  background-color: transparent;
  width: 50px;
  height: 50px; 
  border-radius: 50%;
  border: 0px solid #ccc;
`;

const MyAccountLink = styled.a`
  position: absolute;
  display: inline-block;
  border-radius: 5px;
  left: 10px;
  margin-top: -25px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

const AccountMenuArea = styled.div`
  position: absolute;
  display: ${props => props.ismenuopen === 0 ? "none" : "flex" };
  flex-direction: column;
  width: 170px;
  height: 100px;
  top: 90px;
  left: -40px;
  text-align: left;
  background-color: #000;
  color: #fff;
`;

const AccountMenuItem = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin: auto 20px;
`;

const AccountMenuItemLink = styled.a`
  display: block;
  width: 100px;
  padding-left: 10px;
  text-decoration: none;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;

const HeaderContainerRight = styled.div`
  display: flex;
  width: 100%;
`;

const HeaderSearchArea = styled.div`
  width: 100%;
  text-align: right;

  &:hover {
    cursor: pointer;
  }
`;

const SearchBox = styled.input`
  position: relative;
  top: 6px;
  margin-right: 15px;
  border: ${props => (props.issearch === 1 ? "0px solid #ccc" : "3px solid #ccc")};
  outline: none;
  background-size: 22px;
  background-position: 13px;
  background-color: ${props => props.issearch === 1 ? "fff" : "transparent"};
  border-radius: ${props => props.issearch === 1 ? "7px" : "25px"};
  width: ${props => props.issearch === 1 ? "350px" : "50px"};
  height: 40px;
  padding-left: ${props => props.issearch === 1 ? "45px" : "25px"};
  padding-right: 25px;
  padding-top: 15px;
  padding-bottom: 15px;
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
  }
`;

const FontAwesomeIconSearch = styled(FontAwesomeIcon)`
  position: relative;
  top: 6px;
  left: 37px;
  color: ${props => props.issearch === 1 ? "black" : "#ccc"};
  z-index: 11;
`;

const SearchCloseButton = styled.a`
  display: inline-block;
  position: relative;
  top: 6px;
  left: -45px;
`;


async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}