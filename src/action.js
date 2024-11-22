export function add(product) {
    return {
        type: "ADD",
        payload :  { ...product, id: new Date().getTime() },
    }
};
export const deleteProduit = (productId) => {
    return {
      type: "DELETE_PRODUIT",
      payload: productId,
    };
  };
  export const editProduit = (updatedProduct) => {
    return {
      type: "EDIT_PRODUIT",
      payload: {
        id: updatedProduct.id,
        updatedData: {
          titre: updatedProduct.titre,
          prix: updatedProduct.prix,
          stock: updatedProduct.stock,
        },
      },
    };
  };