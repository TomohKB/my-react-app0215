import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ count, setCount ] = useState(0);
  // console.log(count);

  // useEffect(() => {
  //   console.log(`カウントが変わった！現在のカウントは、${count}`);
  // }, [count]);


  const [ text, setText ] = useState("");
  // console.log(text);
  

  useEffect(() => {
    console.log(`カウントが変わりました！現在：${count}`);
    document.title = `現在のカウント： ${count}`;
  }, [count]);

  // useEffect(()=> {
  //   if(text ===""){
  //     alert("リセットされました");
  //   }
  // }, [text]);


  return (
    <>
      <h1>カウントするよ</h1>
      <button onClick={() => setCount(count + 1)}>増やす</button>
      <button onClick={() => setCount(count - 1)}>減らす</button>
      <p>現在の数値：{count}</p>
      <button onClick={() => setCount(0)}>0にする</button>

      <h2>ここのコメントしてね</h2>
      {/* <input type='text' value={text} onChange={(e) => setText(e.target.value)}></input> */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <p>入力内容: {text}</p>
      <button onClick={() => setText("")}>リセット</button>
      {/* <p>{text === "" ? "リセットされました！" : ""}</p> */}
      <p>{text === "" ? "リセットされました！" : ""}</p>
    </>
  );
}

export default App
