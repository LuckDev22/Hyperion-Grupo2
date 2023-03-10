import styled from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
min-width: 100%;
max-width: 1200px;
background-color: transparent;
align-items: center;
padding: 10px;
justify-content: space-between;

.gamestore{
    color: var(--primary-color);
}

> div{
    display: flex;
    gap: 5px;
    font-weight: 700;
    color: white;
}
nav{
    display: flex;
    gap: 10px;
    color: white;
}

img{
    margin-top: 15px;
}
.chakra-avatar__badge{
 transform: translate(30%, 70%);
 width: 15px;
 height: 15px;
}
.cartContainer{
    position: relative;
}
.cartContainer> button{
    border-radius: 20px;
    color: white;
}

.cartContainer > span{
    background-color: var(--primary-color);
    height: 18px;
    width: 18px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    position: absolute;
    bottom: 0px;
    right: 10px;
    font-size: smaller;
    font-weight: 700;
}
span > p{
    position: absolute;
    bottom: -2px;
    right: 5px;
}

.btnsLogReg > button{
    background-color: rgba(255,255,255,0.2);
    border-radius: 20px;
    color: white;
    height: 30px;
    padding: 0 10px;
}
.btnsLogReg{
    display: flex;
    gap: 10px;
    align-items: center;
}
`