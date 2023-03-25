// conditional rendering using "if" statment

// function Item ({name,isPacked}){
//     return <li>{isPacked} </li>

// }

// export default function PackgingList()
// {
//     return(
//     <>
//         <h1>CHECK PACKAGING LIST</h1>
//         <ul>
//             <Item name={"helmet"} isPacked={true}></Item>
//             <Item name={"Medicine"} isPacked={false}></Item>
//             <Item name={"Laptot"} isPacked={true}></Item>
//             <Item name={"Cloths"} isPacked={false}></Item>
//             <Item name={"Keys"} isPacked={true}></Item>
//         </ul>
//     </>
//     );
// }

// const people = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist',
//     'abul kalam azad:astronout'
//   ];
// export default function  PackagingList(){
//     const item =people.map( person=> <li> {person} </li>);
//     return <ul>{item}</ul>
// }                         

// export default function Drink({name}){
//   let part ,caffin,age;

//   if (name==='tea'){
//     part='leaf';
//     caffin='15-70mg';
//     age='4000 years';
//   }
//   else if(name==='coffee'){

//     part='bean';
//     caffin='80-150mg';
//     age='1000 years';
//   }
// return(
// <>
// <h1>{name}</h1>
// <dl>
//   <dt>part of plant </dt>
//   <dd>{part}</dd>
//   <dt>caffine content </dt>
//   <dd>{caffin}</dd>
//   <dt>age </dt>
//   <dd>{age}</dd>

// </dl>

// </>

// );

// }
// export  const People = [{
//     id: 0,
//     name: 'Creola Katherine Johnson',
//     profession: 'mathematician',
//     accomplishment: 'spaceflight calculations',
//     imageId: 'MK3eW3A'
//   }, {
//     id: 1,
//     name: 'Mario José Molina-Pasquel Henríquez',
//     profession: 'chemist',
//     accomplishment: 'discovery of Arctic ozone hole',
//     imageId: 'mynHUSa'
//   }, {
//     id: 2,
//     name: 'Mohammad Abdus Salam',
//     profession: 'physicist',
//     accomplishment: 'electromagnetism theory',
//     imageId: 'bE7W1ji'
//   }, {
//     id: 3,
//     name: 'Percy Lavon Julian',
//     profession: 'chemist',
//     accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
//     imageId: 'IOjWm71'
//   }, {
//     id: 4,
//     name: 'Subrahmanyan Chandrasekhar',
//     profession: 'astrophysicist',
//     accomplishment: 'white dwarf star mass calculations',
//     imageId: 'lrWQx8l'
//   }];


//   export default  function getImageUrl(person) {
//     return (
//       'https://i.imgur.com/' +
//       person.imageId +
//       's.jpg'
//     );
//   }  