import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { editProduit } from "./action";

export const EditProduit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const produits = useSelector((state) => state.produits.items);
  const produitToEdit = produits.find((produit) => produit.id === parseInt(id));

  const [titre, setTitre] = useState("");
  const [prix, setPrix] = useState("");
  const [stock, setStock] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (produitToEdit) {
      setTitre(produitToEdit.titre);
      setPrix(produitToEdit.prix);
      setStock(produitToEdit.stock);
      setLoading(false);
    } else {
      setLoading(false);
      setError("Produit non trouvé");
    }
  }, [produitToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      id: produitToEdit.id,
      titre,
      prix: Number(prix),
      stock: Number(stock),
    };
    dispatch(editProduit(updatedProduct));
    navigate("/produits");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Modifier le Produit</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Titre</label>
          <input
            type="text"
            className="form-control"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Prix</label>
          <input
            type="number"
            className="form-control"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Stock</label>
          <input
            type="number"
            className="form-control"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enregistrer
        </button>
      </form>
    </div>
  );
};
