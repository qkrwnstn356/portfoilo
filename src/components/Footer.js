import styled from 'styled-components'

const Wrapper = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    padding: 10px 20px;
    background-color: gray;
    color: #fff;
`;

const Footer = () => {
    return (
        <Wrapper>
            <h1>Footer</h1>
        </Wrapper>
    );
}

export default Footer;