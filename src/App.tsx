import axios from 'axios'
import './App.css'
import {useState} from 'react'

function App() {

  const [username, setUsername] = useState("")
  const [name, setName] = useState("Loading...")
  const [bio, setBio] = useState("Loading...")
  const [avatar_url, setAvatarURL] = useState("https://th.bing.com/th/id/OIP.NNdjGN5of2i1diwSLBfNtgHaJ3?rs=1&pid=ImgDetMain")
  
  type GithubData = {
    name:string;
    bio:string;
    avatar_url:string
  }

  const handlePesquisa = () =>{
   axios.get<GithubData>(`https://api.github.com/users/${username}`).then((response)=>{
    setName(response.data.name)
    setBio(response.data.bio)
    setAvatarURL(response.data.avatar_url)
    console.log(response.data)
  })


  }

  return (
    <div className="container-geral">
      <div className='container'>

        <header className='header-top'><h2>Projeto EMIDES2AM</h2> <img id='imgGit' src="https://pngimg.com/uploads/github/github_PNG80.png" alt="" />
        </header>
        
        <main>
          <div className='form' >
            
            <input type="text" placeholder='Digite o usuário' onChange={(e) => setUsername(e.target.value)} />
            <img id="imgbtn"src="https://static.vecteezy.com/system/resources/thumbnails/001/504/972/small/search-icon-free-vector.jpg" onClick={handlePesquisa} />
          </div>
          <div className="conteudo">
            <div className='conteudo2'>
              <img src={avatar_url} title="Loading..."/>
              <h1>{name}</h1>
              <p>{bio}</p>
            </div>
          </div>
        </main>

      </div>


    </div>
  )
}

export default App
