import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Produit } from "./Produit";
import { Produits } from "./Produits";
import { NouveauProduit } from "./NouveauProduit";
import { Categories } from "./Categories";
import { Layout } from "./layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { NotFound } from "./NotFound";
import { EditProduit } from "./EditProduit";

function App() {
  return (
    <div className="App text-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Produits />} />
            <Route path="/produits/:id" element={<Produit />} />
            <Route path="/produits/edit/:id" element={<EditProduit />} />
            <Route path="/new" element={<NouveauProduit />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
