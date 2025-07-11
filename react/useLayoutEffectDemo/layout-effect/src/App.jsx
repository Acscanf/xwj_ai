import { 
  useState ,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react'
import './App.css'

// function App() {
//   // 响应式对象
//   const boxRef = useRef();
//   console.log(boxRef.current , boxRef)

//   useEffect(() => {
//     console.log("useEffect height" , boxRef.current.offsetHeight);
//   }, [])

//   useLayoutEffect(() => {
//     console.log("useLayoutEffect height", boxRef.current.offsetHeight);
//   }, [])
//   return (
//     <>
//       <div ref={boxRef} style={{height: 100}}></div>
//     </>
//   )
// }

// function App() {
//   const [count, setCount] = useState('sfasfasdfasdfasdfasdfasdfdasfadsfasfsadfdsfgfdsgfdhj');
//   const ref = useRef();
//   // useEffect(() => {
//   //   setCount("曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：‘我爱你’。如果非要给这份爱加上一个期限，我希望是一万年。")
//   //   ref.current.style.height = '200px';
//   // }, [])
//   useLayoutEffect(() => {
//     // 阻塞渲染  同步的感觉
//     setCount("曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：‘我爱你’。如果非要给这份爱加上一个期限，我希望是一万年。")
//     ref.current.style.height = '200px';
//   }, [])

//   return (
//     <div ref = {ref} style={{height:'50px' , background: 'lightblue'}}>
//       {count}
//     </div>
//   )
// }

function Modal() {
  const ref = useRef();
  useLayoutEffect(() => {
    const height = ref.current.offsetHeight;
    ref.current.style.marginTop = `${(window.innerHeight - height) / 2}px`;
  }, []) 

  return <div ref={ref} style={{background: 'pink' , position: 'absolute' , width: '200px' , height: '200px'}}>我是弹窗</div>
}

function App() {

  return (
    <>
      <Modal />
    </>
  )
}

export default App
