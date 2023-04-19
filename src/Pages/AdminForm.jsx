// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

// initializeApp();

// const db = getFirestore();


// import React, { useState } from "react";
// import firebase from "firebase/app";
// import "firebase/firestore";

// function AdminForm() {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");

//   // Função para enviar os dados do formulário para o Cloud Firestore
//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     // Obter uma referência para a coleção "produtos"
//     const produtosRef = firebase.firestore().collection("produtos");

//     // Adicionar os valores ao Cloud Firestore
//     produtosRef
//       .add({
//         name: name,
//         description: description,
//         price: price,
//       })
//       .then(() => {
//         // Limpar o formulário após o envio bem-sucedido
//         setName("");
//         setDescription("");
//         setPrice("");
//       })
//       .catch((error) => {
//         console.error("Erro ao enviar os dados do formulário: ", error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Nome:</label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//       />

//       <label htmlFor="description">Descrição:</label>
//       <textarea
//         id="description"
//         name="description"
//         value={description}
//         onChange={(event) => setDescription(event.target.value)}
//       />

//       <label htmlFor="price">Preço:</label>
//       <input
//         type="number"
//         id="price"
//         name="price"
//         value={price}
//         onChange={(event) => setPrice(event.target.value)}
//       />

//       <button type="submit">Adicionar Produto</button>
//     </form>
//   );
// }

// export default AdminForm;


// // const docRef = db.collection('users').doc('alovelace');

// // await docRef.set({
// //   first: 'Ada',
// //   last: 'Lovelace',
// //   born: 1815
// // })

// // const aTuringRef = db.collection('users').doc('aturing');

// // await aTuringRef.set({
// //   'first': 'Alan',
// //   'middle': 'Mathison',
// //   'last': 'Turing',
// //   'born': 1912
// // });


// // const snapshot = await db.collection('users').get();
// // snapshot.forEach((doc) => {
// //   console.log(doc.id, '=>', doc.data());
// // });



// //1 Definir um documento

// //Para criar ou substituir 
// //um único documento, use os métodos set() a seguir específicos da linguagem:


// const Data = {
//     name: 'Los Angeles',
//     state: 'CA',
//     country: 'USA'
//   };
  
//   // Add a new document in collection "cities" with ID 'LA'
//   var res = await db.collection('cities').doc('LA').set(Data);


// //Se o documento não existir, ele será criado. Se o documento existir, o conteúdo dele será
// //substituído pelos dados recém-fornecidos como mostrado a seguir, a menos que você especifique 
// //que os dados devam ser incorporados ao documento:

// const cityRef = db.collection('cities').doc('BJ');
// const response = await cityRef.set({
//   capital: true
// }, { merge: true });

// //Se você não tiver certeza de que o documento existe, ignore a opção 
// //de mesclar novos dados com qualquer documento atual para evitar a substituição de
// // documentos inteiros. Para documentos com mapas, especificar um conjunto com um campo
// // que contém um mapa vazio substituirá o campo do mapa do documento de destino.



// //Tipos de dados

// //O Cloud Firestore permite gravar uma variedade de tipos de dados em um 
// //documento, incluindo strings, booleanos, números, datas, nulos, além de matrizes e 
// //objetos aninhados. O Cloud Firestore sempre armazena números como duplos, independentemente do
// // tipo de número que você usa no código.

// const data = {
//     stringExample: 'Hello, World!',
//     booleanExample: true,
//     numberExample: 3.14159265,
//     dateExample: Timestamp.fromDate(new Date('December 10, 1815')),
//     arrayExample: [5, true, 'hello'],
//     nullExample: null,
//     objectExample: {
//       a: 5,
//       b: true
//     }
//   };
  
//   const res = await db.collection('data').doc('one').set(data);

// //  Adicionar um documento
// //Ao usar set() para criar um documento, você precisa especificar um ID para ele. Exemplo:

// await db.collection('cities').doc('new-city-id').set(data)

// //No entanto, às vezes não há um ID significativo para o documento. É mais prático
// // que o Cloud Firestore gere um automaticamente para você. Para fazer isso, chame os
// // métodos add() específicos da linguagem a seguir:

// // Add a new document with a generated id.
// const res = await db.collection('cities').add({
//     name: 'Tokyo',
//     country: 'Japan'
//   });
  
//   console.log('Added document with ID: ', res.id);


//   //Em alguns casos, pode ser útil criar uma referência de documento com um ID gerado 
//   //automaticamente, para usá-la mais tarde. Para este caso de uso, chame doc():

//   const newCityRef = db.collection('cities').doc();

// // Later...
// const res = await newCityRef.set({
//   // ...
// });
// //Nos bastidores, .add(...) e .doc().set(...) são completamente 
// //equivalentes, portanto, use o que for mais conveniente.