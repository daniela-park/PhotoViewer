import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {PhotoViewer} from '../PhotoViewer/PhotoViewer';
import {ImgSelector} from '../ImgSelector/ImgSelector';

function App() {
  const [selectedUrl, setSelectedUrl] = useState("https://picsum.photos/id/237/1600/900.jpg");

const handleClick = (url : any) => setSelectedUrl(url);

  return (
      <div className="flexContainer">
          <h2>React Photo Viewer</h2>
          <PhotoViewer src={selectedUrl}/>
          <ImgSelector
          selectedUrl={selectedUrl}
          onClick={handleClick}
          />
      </div>
  );
}



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App