import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/menu";
import Rodape from "componentes/rodape";
import PaginaPadrao from "componentes/Pagina Padrao";
import Post from "paginas/post";
import NãoEncontrado from "paginas/nãoEncontrado";

function App() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
          <Route path="/" element={<PaginaPadrao/>}>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobre-mim" element={<SobreMim />} />
          </Route>
          <Route path="posts/:id" element={<Post/>}/>
          <Route path="*"  element={<NãoEncontrado/>}/> 
      </Routes>

      <Rodape/>
    </BrowserRouter>
  )
}

export default App;
