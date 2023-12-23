import React, {useState, useEffect} from 'react'
import './Input.css';
import Elements from './Elements';
import img from './imgs/613b8f9fcca005d3a35aa80e5587383c.jpg'

export default function Input(props) {

  const [text, setText] = useState('');
  const Entered = (event) => {
    setText(event.target.value);
  }

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <div className='appStyles' style={{ height: `${windowHeight}px`, backgroundColor: 'dark' }}>
    <div><h1 className="centerStyle">{props.title}</h1></div>
    <div className='containerStyles'>
      <form className='formStyles'>
        <input type="text" id="textbox" name="textbox" value={text} placeholder='Enter....' className='inputStyles' onChange={Entered}/>
      </form>
    </div>
    <div className='containers'>
        <Elements Text={text}/>
        {text==='' ? (
        <img src={img} alt="" className='imageStyles' />
        ) : (console.log())
        }
    </div>
    </div>
    </>
  )
}


