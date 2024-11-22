import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduit } from "./action";
import './btns.css'
import './backgrounds.css'
export const Produits = () => {
  const produits = useSelector((state) => state.produits.items);
  console.log(produits);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduit(id));
  };

  return (
    <div className="container mt-5 bgd p-5 rounded">
      <h2>Liste des Produits</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Prix</th>
            <th>Stock</th>
            <th>
              <Link className="btn addBtn btn-outline " to="/new">
                Nouveau Produit
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {produits.map((produit) => (
            <tr key={produit.id}>
              <td>{produit.titre}</td>
              <td>{produit.prix} MAD</td>
              <td>{produit.stock}</td>
              <td className="justify-content-end">
                <Link
                  to={`/produits/${produit.id}`}
                  className="btn btn-outline showBtn m-1"
                >
                  Afficher
                </Link>
                <Link
                  to={`/produits/edit/${produit.id}`}
                  className="btn btn-outline editBtn m-1"
                >
                  Modifier
                </Link>
                <button
                  className="btn delBtn m-1"
                  onClick={() => handleDelete(produit.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
