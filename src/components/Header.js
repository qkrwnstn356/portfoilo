import styled from 'styled-components'

const Wrapper = styled.header`
    width: 100%;
    height: 40px;
    padding: 10px 40px;
    background-color: gray;
    color: #fff;
`;
const Header = () => {
 return (
    <Wrapper>
        <h1>Header</h1>
    </Wrapper>
 );
};

export default Header;