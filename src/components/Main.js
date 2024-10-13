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
      padding: 40px 0;
      section {
        padding: 20px 40px;
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
      }
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

  const data = {
    skillsWrap: [{
        title: 'skill',
        skilList: [
          {name : 'HTML', img : '', id: 0},
          {name : 'CSS', img : '', id: 1},
          {name : 'Javasctipt', img : '', id: 2},
          {name : 'ECMA6', img : '', id: 3},
          {name : 'React', img : '', id: 4},
          {name : 'StyledComponent', img : '', id: 5},
          {name : 'fullCalendar', img : '', id: 6},
          {name : 'Toast UI', img : '', id: 7}
        ]
      },
      {
        title: 'Repository',
        skilList: [
          {name : 'GitHub', img : '', id: 0},
          {name : 'Netlify', img : '', id: 1}
        ]
      },
      {
        title: 'Salesforce',
        skilList: [
          {name : 'LWC', img : '', id: 0},
          {name : 'AURA Component', img : '', id: 1},
          {name : 'VisualForce', img : '', id: 2}
        ]
      },
    ]
  };

  console.log('data', data)
  const BodyPropsList = utils.clone(BodyProps.favorList);
  const [state, setState] = useState({name: "박준수z", gender: "남자"});

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
      <section>
          {data.skillsWrap.map((item, index) => (
            <dl>
                <dt key={index}>{item.title}</dt>
                <dd>{item.skilList.map((it, idx) => (<span key={idx}>  {idx === item.skilList.length - 1 ? `${it.name}` : `${it.name}, `} </span>))}</dd>
            </dl>
          ))}
      </section>
    </div>
  </Wrapper>
  </>);
}

export default Main;