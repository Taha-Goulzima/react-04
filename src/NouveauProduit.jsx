import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./action";
import "./backgrounds.css";
import { useNavigate } from "react-router-dom";

export const NouveauProduit = () => {
  const [titre, setTitre] = useState("");
  const [prix, setPrix] = useState("");
  const [stock, setStock] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    if (!titre || !prix || !stock) {
      alert("fill all the inputs");
      return;
    }

    const productId = Date.now();

    dispatch(
      add({ id: productId, titre, prix: Number(prix), stock: Number(stock) })
    );
    navigate(`/produits/${productId}`);

    setTitre("");
    setPrix("");
    setStock("");
  };

  return (
    <div className="w-50 text-center m-5 bgd p-5 arounded">
      <form onSubmit={handleClick}>
        <div className="form-group p-3">
          <label htmlFor="Titre">Titre :</label> <br />
          <input
            type="text"
            id="Titre"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group p-3">
          <label htmlFor="Prix">Prix :</label> <br />
          <input
            type="number"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group p-3">
          <label htmlFor="Stock">Stock :</label> <br />
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="form-control"
          />
        </div>
        <input
          type="submit"
          value="Ajouter"
          disabled={!titre || !prix || !stock}
          className="btn btn-outline-light mt-4 p-2"
        />
      </form>
    </div>
  );
};
