// import utils from '../utils'
// import {useState} from 'react'
import icons from '../Icons'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    width: inherit;
    height: 100vh;
    background-color: #000;
    color: #fff;
    > div section {
      padding: 20px 40px;
    }
    > div:first-child {
      flex: 1;
      border-right: 1px solid #fff;
      box-shadow: 2px 2px 20px 0px rgba(255, 255, 255, .3);
    }
    > div:nth-child(2) {
      flex: 1.5;
      > section {
        border-bottom: 1px solid #fff;
        box-shadow: 4px 0px 20px 1px rgba(255, 255, 255, .3);
        > dl {
          padding-bottom: 20px;
        > dt { font-size: 22px; font-weight: bold; padding-bottom: 10px; }
        }
        > dl dd {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        > div {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          >.img-wrap > svg {
              width: 30px;
              height: 30px;
          }
          > p {line-height: 26px}
        }
        }
      }
    }
`;

const Main = () => {
  console.log('icons', icons);
  const data = {
    skillsWrap: [{
        title: 'Skills',
        skilList: [
          {name : 'HTML', img : icons.html, id: 0},
          {name : 'CSS', img : icons.css, id: 1},
          {name : 'Javasctipt(ES6+)', img : icons.js, id: 2},
          {name : 'React', img : icons.react, id: 3},
          {name : 'Figma', img : icons.figma, id: 4},
          {name : 'SCSS', img : '', id: 5},
        ]
      },
      {
        title: 'Library',
        skilList: [
          {name : 'StyledComponent', img : '', id: 0},
          {name : 'Framer Motion', img : '', id: 1},
          {name : 'fullCalendar', img : '', id: 2},
          {name : 'Toast UI', img : '', id: 3},
        ]
      },
      {
        title: 'Repository',
        skilList: [
          {name : 'GitHub', img : icons.git, id: 0},
          {name : 'Netlify', img : icons.net, id: 1}
        ]
      },
      {
        title: 'Salesforce',
        skilList: [
          {name : 'LWC', img : icons.sales, id: 0},
          {name : 'AURA', img : '', id: 1},
          {name : 'VisualForce', img : '', id: 2}
        ]
      },
    ]
  };

  console.log('data', data)

  return (<>
  <Wrapper>
    <div>
      <section>
        <p>Joon`s World Port Area</p>
      </section>
    </div>
    <div>
      <section>
          {data.skillsWrap.map((item, index) => (
            <dl>
                <dt key={index}>{item.title}</dt>
                <dd key={index}>
                  {item.skilList.map((it, idx) => (
                    <div key={idx}>
                      {it.img ? <div className='img-wrap'>{it.img}</div> : <div></div>}
                      <p>{it.name}</p>
                      {/* <p> {idx === item.skilList.length - 1 ? `${it.name}` : `${it.name}, `} </p> */}
                    </div>
                  ))}
                </dd>
            </dl>
          ))}
      </section>
    </div>
  </Wrapper>
  </>);
}

export default Main;