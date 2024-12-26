// import Image from "next/image";
// import styles from "./page.module.css";
// import { Card } from "@/components/Card";
// import Head from "@/components/Header";

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head />
//       <div>
//         <h2>Hello</h2>

//         <Card
//           name="Anya"
//           description={
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laudantium laboriosam minus veritatis recusandae quibusdam temporibus, veniam, iusto vel omnis ad? Obcaecati cumque maiores ratione repellat. Omnis illo modi dolores."
//           }
//           imgUrl={
//             "https://i.pinimg.com/736x/ee/73/c7/ee73c7f10be14161a2ee427f21c0e562.jpg"
//           }
//         />
//         <Card
//           name="Ekko"
//           description={"lorem,"}
//           imgUrl={
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDEQwV33U4122yp2Zfdvn00E0fObt1MsEhTQ&s"
//           }
//         />
//       </div>
//     </div>
//   );
// // }

"use client";
import React, { useState } from "react";
import ProfilePage from "./profile/page";

let a = 10;

export default function Page() {
  const [number, setNumber] = useState(10);

  function buttonCliked() {
    setNumber(number + 1);
    a = a + 1;
  }
  return (
    <div>
      <p>page {number}</p>
      {/* <p>page {a}</p> */}
      <button onClick={buttonCliked}>increase</button>
    </div>
  );
}
