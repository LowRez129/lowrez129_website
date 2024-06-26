import styled from "styled-components";

const ProfileContainer = styled.main`
    display: grid;
    gap: 10px;
    padding: 10px;
    min-height: 0;
    min-width: 0;
    background-color: dodgerblue;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 20% 5% 5% 1fr;
    grid-template-areas:
        "picture picture"
        "profile_name icon_container"
        "profile_name button_container"
        "description description"
    ;

    @media screen and (min-width: 600px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 10% 1fr;
        grid-template-areas:
            "profile_name button_container icon_container"
            "picture description description"
        ;
    }
`;

const ProfileHeader = styled.div`
    background-color: deepskyblue;
    font-size: xx-large;
    display: grid;
    justify-content: center;
    align-items: center;
    border: solid black;
    grid-area: profile_header;
`;

const ProfilePicture = styled.img`
    height: 100%;
    width: 100%;
    background-color: deepskyblue;
    grid-area: picture;
`;

const ProfileName = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: deepskyblue;
    padding: 10px;
    grid-area: profile_name;
`;

const ProfileDescription = styled.div`
    grid-area: description;
    overflow: auto;
`;

const LinkIconContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100%;
    grid-area: icon_container;
    background-color: black;
    border: solid black 3px;
    gap: 3px;
`;

const LinkIcon = styled.img`
    height: 100%;
    width: 100%;
    background-color: deepskyblue;
    &:hover,
    &:active {
        background-color: greenyellow;
    }
`;

const Description = styled.div`
    background-color: deepskyblue;
    padding: 10px;
    height: 100%;
    box-sizing: border-box;
`;

const ButtonContainer = styled.div`
    border: solid black 3px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-area: button_container;
    gap: 3px;
    background-color: black;
`;

const Button = styled.button`
    border: none;
    background-color: deepskyblue;
    &:hover,
    &:active {
        background-color: greenyellow;
    }
`;

export { 
    ProfileContainer, ProfileHeader, ProfilePicture, 
    ProfileName, ProfileDescription, LinkIconContainer, 
    LinkIcon, Description, ButtonContainer, Button
};