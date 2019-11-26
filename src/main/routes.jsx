import React from "react";

import {
  Route,
  Switch,
  Redirect,
  HashRouter,
  BrowserRouter
} from "react-router-dom";
import Avaliacoes from "../avaliacoes/avaliacoes";
import Filmes from "../filmes/filmes";
import FilmeGenero from "../filme_genero/FilmeGenero";
import Generos from "../generos/generos";
import PalavrasChave from "../palavras_chave/PalavrasChave";
import Usuarios from "../usuarios/Usuarios";
import ConsultaObrigatoria1 from "../consultas_obrigatorias/1";
import ConsultaObrigatoria2 from "../consultas_obrigatorias/2";
import ConsultaObrigatoria3 from "../consultas_obrigatorias/3";
import ConsultaObrigatoria4 from "../consultas_obrigatorias/4";
import ConsultaObrigatoria5 from "../consultas_obrigatorias/5";
import ConsultaObrigatoria6 from "../consultas_obrigatorias/6";
import ConsultaObrigatoria7 from "../consultas_obrigatorias/7";
import ConsultaObrigatoria8 from "../consultas_obrigatorias/8";
import ConsultaObrigatoria9 from "../consultas_obrigatorias/9";
import ConsultaObrigatoria10 from "../consultas_obrigatorias/10";

export default props => (
  <HashRouter>
    <Switch>
      <Route path="/avaliacoes" component={Avaliacoes}></Route>
      <Route exact path="/filmes" component={Filmes}></Route>
      <Route path="/filme-genero" component={FilmeGenero}></Route>
      <Route path="/generos" component={Generos}></Route>
      <Route path="/palavras-chave" component={PalavrasChave}></Route>
      <Route path="/usuarios" component={Usuarios}></Route>
      <Route
        path="/consulta-obrigatoria/1"
        component={ConsultaObrigatoria1}
      ></Route>
      <Route
        path="/consulta-obrigatoria/2"
        component={ConsultaObrigatoria2}
      ></Route>
      <Route
        path="/consulta-obrigatoria/3"
        component={ConsultaObrigatoria3}
      ></Route>
      <Route
        path="/consulta-obrigatoria/4"
        component={ConsultaObrigatoria4}
      ></Route>
      <Route
        path="/consulta-obrigatoria/5"
        component={ConsultaObrigatoria5}
      ></Route>
      <Route
        path="/consulta-obrigatoria/6"
        component={ConsultaObrigatoria6}
      ></Route>
      <Route
        path="/consulta-obrigatoria/7"
        component={ConsultaObrigatoria7}
      ></Route>
      <Route
        path="/consulta-obrigatoria/8"
        component={ConsultaObrigatoria8}
      ></Route>
      <Route
        path="/consulta-obrigatoria/9"
        component={ConsultaObrigatoria9}
      ></Route>
      <Route
        path="/consulta-obrigatoria/10"
        component={ConsultaObrigatoria10}
      ></Route>
      <Route component={Filmes} />
    </Switch>
  </HashRouter>
);
