import styled from 'styled-components';


const Wrapper = styled.div`
  line-height: 24px;
`;

const MyInfo = () => {
  return (
    <Wrapper>
      <section>
        <h1>안녕하세요 박준수 입니다.</h1>
        <p>
            앞서서 내가 뭐하는 사람이고 saas같이 (?)무슨 (?)뭐시기를 쓰고
            지금 개발언어의 패턴은 (?)무엇이며 이것과 관련 또는 연계해서 
            (?)어떤 언어나 라이브러리(파생되어 나온거) 또는 프레임워크(기존거에 벗어나 새로운 자신들만의 스타일로 만든거)를 공부하거나 - 할 예정이다
        </p>
        <p>
        요즘 기본적으로 가져가야할 것 
        리액트 리덕스 넥스트 타입스크립트 리액트네이티브도 하면 땡큐
        ( 공부해보면서 내가 지금 사용하는 스킬과 가장 유사한 것은 이런거여서 하기 편했다 뭐 이런 내용도 추가 )
        </p>
      </section>
    </Wrapper>
    )
}
export default MyInfo;