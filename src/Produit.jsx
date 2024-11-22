import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const Produit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const produits = useSelector((state) => state.produits.items);
  const produit = produits.find((p) => p.id === Number(id));

  useEffect(() => {
    dispatch({
      type: "AFFICHER_PRODUIT",
      payload: Number(id),
    });
  }, [dispatch, id]);

  if (!produit) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div>
      <h1>{produit.titre}</h1>
      <p>Prix: {produit.prix} MAD</p>
      <p>Stock: {produit.stock}</p>
    </div>
  );
};
