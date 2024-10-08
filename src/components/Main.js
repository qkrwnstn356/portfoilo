// import {useState} from 'react'
import utils from '../utils'
import {useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    width: inherit;
    height: 715px;
    background-color: #000;
    color: #fff;
    > div {
      padding: 40px;
    }
    > div:first-child {
      flex: 1;
      border-right: 1px solid #fff;
    }
    > div:nth-child(2) {
      flex: 1.5;
    }
`;

const Main = (BodyProps) => {
  const BodyPropsList = utils.clone(BodyProps.favorList);
  const [state, setState] = useState({name: "박준수", gender: "남자"});

  const changeInput = (e) => { 
    setState({...state, [e.currentTarget.name] : e.currentTarget.value}); 
  }
  return (<>
  <Wrapper>
    <div>
      <div>
          <input name="name" value={state.name} onChange={changeInput} placeholder="이름을 입력해주세요."/>
      </div>
      <div>
        <select name="gender" value={BodyPropsList.gender} onChange={changeInput}>
          {BodyPropsList.map(item => {return <option key={item.id}>{item.gender}</option>})}
        </select>
      </div>
    </div>
    <div>
      <div>
        <p>스킬 : HTML, CSS, Javasctipt, ECMA6, React, fullCalendar, StyledComponent, Toast UI </p>
        <p>Repository : GitHub, Netlify </p>
        <p>Salesforce : LWC, AURA Component, VisualForce  test test</p>
      </div>
    </div>
  </Wrapper>
  </>);
}

export default Main;