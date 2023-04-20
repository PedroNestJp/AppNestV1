// import { useState, useEffect } from 'react';
// import { db, auth } from '../firebase';

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     // Busca a lista de produtos no Firestore e atualiza o estado local
//     db.collection('products').onSnapshot((snapshot) => {
//       setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
//     });

//     // Verifica se o usuário está autenticado e busca a lista de favoritos no Firestore
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         db.collection('users')
//           .doc(user.uid)
//           .collection('favorites')
//           .onSnapshot((snapshot) => {
//             setFavorites(snapshot.docs.map((doc) => doc.id));
//           });
//       }
//     });

//     return unsubscribe;
//   }, []);

//   const handleAddToFavorites = (productId) => {
//     // Verifica se o usuário está autenticado
//     const user = auth.currentUser;
//     if (!user) {
//       alert('Você precisa estar logado para adicionar um produto aos favoritos!');
//       return;
//     }

//     // Adiciona o produto aos favoritos do usuário no Firestore
//     db.collection('users')
//       .doc(user.uid)
//       .collection('favorites')
//       .doc(productId)
//       .set({ addedAt: new Date() })
//       .then(() => {
//         alert('Produto adicionado aos favoritos com sucesso!');
//       })
//       .catch((error) => {
//         alert('Ocorreu um erro ao adicionar o produto aos favoritos: ' + error.message);
//       });
//   };

//   return (
//     <div>
//       <h2>Lista de Produtos</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.name} - R${product.price.toFixed(2)}{' '}
//             <button onClick={() => handleAddToFavorites(product.id)} disabled={favorites.includes(product.id)}>
//               {favorites.includes(product.id) ? 'Favorito' : 'Adicionar aos Favoritos'}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ProductList;
