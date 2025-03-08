import './App.css'
import Parent from './components/Parent';
import Counter from './components/Counter';
import InputValue from './components/InputValue';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Header title="タイトル" />
      <Counter />
      <InputValue />
      <Parent />
      <Footer title="終わり" />
    </div>
  );
}



export default App;

//   const numbers = [1, 2, 3, 4];
//   const evenNumbers = numbers.filter((num) => num % 2 === 0)

//   console.log(evenNumbers);

//   const persons = [
//     { id: 1, name: "山田太郎" },
//     { id: 2, name: "花子 "},
//     { id: 3, name: "佐藤次郎 "},
//     { id: 4, name: "木村" }
//   ];

//   const addPersons = persons.filter((person) => person.name.length >= 5)

//   console.log(addPersons);
  
  
//   const [ count, setCount ] = useState(0);
//   const handleClick = () => {
//     setCount(count + 1);
//   }
//   // console.log(count);

//   // useEffect(() => {
//   //   console.log(`カウントが変わった！現在のカウントは、${count}`);
//   // }, [count]);


//   const [ text, setText ] = useState("");
//   // console.log(text);
  

//   useEffect(() => {
//     console.log(`カウントが変わりました！現在：${count}`);
//     document.title = `現在のカウント： ${count}`;
//   }, [count]);

//   // useEffect(()=> {
//   //   if(text ===""){
//   //     alert("リセットされました");
//   //   }
//   // }, [text]);

//   // type User = {
//   //   id: number;
//   //   name: string;
//   //   email: string;
//   // }

//   // const [ users, setUsers] = useState<User[]>([]);

//   // useEffect(() => {
//   //   fetch("https://jsonplaceholder.typicode.com/users")
//   //     .then((res) => res.json()) //受け取ったデータをjsonに変換する
//   //     .then((data: User[]) => {
//   //       console.log(data);
//   //       setUsers(data) //JSONデータをusersの状態位保存する
//   //     });
//   // }, []);

//   type User = {
//     id: string;
//     name: string;
//     email: string;
//   }

//   const [ users, setUsers ] = useState<User[]>([]);

  

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data: User[]) => {
//         console.log(data);
//         setUsers(data)
//       })
//       .catch((error) => console.error("データ取得の失敗", error));
//   }, []);

//   // const prefectures = ["Tokyo", "Osaka", "Hokkaido"]
//   // const populations = [1400000, 8800000, 5200000]

//   // const mergedData = prefectures.map((prefecture, index) => {
//   //   return {
//   //     name: prefecture,
//   //     population: populations[index],
//   //   };
    
//   // })

//   // console.log("県のデータ：", mergedData);
  

//   // const fruits = ["Apple", "Banana", "Cherry"]
//   // const prices = [150, 200, 300]

//   // const mergedData = fruits.map((fruit, index) => {
//   //   return {
//   //     name: fruit,
//   //     price: prices[index]
//   //   }
//   // })

//   // console.log("結果：", mergedData);

//   type Student = {
//     name: string,
//     score: number,
//     age: number
//   }

//   const students = ["Alice", "Bob", "Charlie"];
//   const scores = [85, 92, 78];
//   const ages = [16, 17, 16];

//   const mergedData: Student[] = students.map((student, index) => {
//     return {
//       name: student,
//       score: scores[index],
//       age: ages[index]
//     }
//   })
//   console.log("詳細:", mergedData);
  
  
//   return (
//     <>
//       <h1>カウントするよ</h1>
//       <button onClick={handleClick}>増やす</button>
//       <button onClick={() => setCount(count - 1)}>減らす</button>
//       <p>現在の数値：{count}</p>
//       <button onClick={() => setCount(0)}>0にする</button>

//       <h2>ここのコメントしてね</h2>
//       {/* <input type='text' value={text} onChange={(e) => setText(e.target.value)}></input> */}
//       <input
//         type="text"
//         value={text}
//         id='comment'
//         onChange={(e) => setText(e.target.value)}
//       ></input>
//       <p>入力内容: {text}</p>
//       <button onClick={() => setText("")}>リセット</button>
//       {/* <p>{text === "" ? "リセットされました！" : ""}</p> */}
//       <p>{text === "" ? "リセットされました！" : ""}</p>

//       {/* <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul> */}

//       <ul>
//         {users.map((user) => {
//           return (
//             <li key={user.id}>{user.name} & {user.email}</li>
//           );
//         })}
//       </ul>
//       {/* <label for='name-input'>ここに「名前：」と表示</label>
//       <input type='text' id='name-input'></input> */}
//       {/* <label>
//         名前：
//         <input type='text'></input>
//       </label> */}

//       <label htmlFor="email">
//         <input
//           type='checkbox'
//           id='email'
//         />
//         メールの通知を受け取る
//       </label>

//       <Parent />
//     </>
//   );
// }

// export default App
