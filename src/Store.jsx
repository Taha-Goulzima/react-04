const store = {
  produits: {
    items: [
      { id: 1, titre: "P1", prix: 100, stock: 10 },
      { id: 2, titre: "P2", prix: 20, stock: 5 },
    ],
  },
  selectedProduct: null,
};
export const Store = (state = store, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      return {
        ...state,
        produits: {
          ...state.produits,
          items: [...state.produits.items, payload],
        },
      };
    case "DELETE_PRODUIT":
      return {
        ...state,
        produits: {
          ...state.produits,
          items: state.produits.items.filter(
            (produit) => produit.id !== payload
          ),
        },
      };
    case "EDIT_PRODUIT":
      return {
        ...state,
        produits: {
          ...state.produits,
          items: state.produits.items.map((produit) =>
            produit.id === action.payload.id
              ? { ...produit, ...payload.updatedData }
              : produit
          ),
        },
      };
    case "AFFICHER_PRODUIT":
      return {
        ...state,
        selectedProduct: state.produits.items.find(
          (produit) => produit.id === payload
        ),
      };
    default:
      return state;
  }
};
