// interface ChildProps {
//     title: string;
//     age: number
// }
// //ルール決める役目

// const Parent = ()=> {
//     return(
//         <Child 
//             title="Hello, World"
//             age={23} />
//     )
// }
// // 親は子にtitleとageというデータを渡す

// const Child = (props: ChildProps)=> {
//     return (
//       <div>
//         <h1>{props.title}</h1>
//         <p>私は、{props.age}歳です</p>
//       </div>
//     );
// }
// // 子が持っているデータ(props)の型はChildPropsです

// export default Parent;

interface ChildProps {
  title: string;
  age: number
}

const Parent = () => {
  return (
    <Child 
      title="Hello, world"
      age={23} />
  )
}

const Child = (props: ChildProps) => {
  return (
    <div>
      <h1>ブログ名：{props.title}</h1>
      <p>私は{props.age}歳です</p>
    </div>
  );
}



export default Parent;

// const Parent = ()=> {
//     return(
//         <Counter count={5} />
//     )
// }
// // ParentからCounterへcount={5}を渡す

// const Counter = (props: {count: number})=> {
//     console.log(props);
    
//     return (
//         <h1>現在のカウント：{props.count}</h1>
        
//     )
// }
// CounterコンポーネントにcountというnumberのPropsを渡して表示している

// export default Parent;

// const Parent = () => {
//     const userList = ["Alice", "Bob", "Charlie"]

//     return (
//         <UserList userList={userList} />
//     )
// }
// //渡す値が配列になったから

// const UserList = (props: { userList: string[]}) => {
//     return (
//         <ul>
//             {props.userList.map((user, index) => {
//                 return (
//                     <li key={index}>{user}</li>
//                 )
//             })}
//         </ul>
//     )
// }

// export default Parent;

// const Parent = ()=> {
//     const userList = ["Alice", "Bob"]
//     return (
//         <UserList userList={userList} />
//     )
// }

// const UserList = (props: {userList: string[]})=> {
//     return(
//         <ul>
//             {props.userList.map((user, index) => (
//                 <li key={index}>{user}</li>
//             ))}
//         </ul>
//     )
// }
// export default Parent;

// const Parent = ()=> {
//     const handleClick = ()=> {
//         alert("ボタンが押されました")
//     }
//     return(
//         <Button onClick={handleClick} />
//     )
// }
// //親は子(Button)にonClick関数を渡している

// const Button = (props: {onclick: () => void})=> {
//     console.log(props);
    
//     return(
//         <button onClick={props.onClick}>クリック</button>
//     )
// }
// //onClick関数を持った子(Button)は

// export default Parent;

// const Parent = () => {
//     const handleClick = () => {
//         alert("押されました");
//     }
//     return (
//         <Button onClick={handleClick} />
//     )
// }

// const Button = (props: {onClick: () => void}) => {
//     console.log(props);
//     return (
//         <button onClick={props.onClick}>クリック</button>
//     )
// }

// interface GreetingName {
//     name: string;
//     age: number
// }

// const Parent = () => {
//     return (
//         <Greeting 
//         name="桜"
//         age={23} />
//     )
// }

// const Greeting = (props: GreetingName) => {
//     console.log(props);
    
//     return(
//         <div>
//             <p>こんにちは、{props.name}さん</p>
//         </div>
//     )
// }

// export default Parent