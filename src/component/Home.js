import React from "react";
import ImageSlider from "./ImageSlider";
import ClientsOur from "./ClientsOur";
import ManageCom from "./ManageCom";
import Unseen from "./Unseen";
import Design from "./Design";
import Helping from "./Helping";
import Masking from "./Masking";

function Home() {
  return (
    <main className="pt-16 px-4">
      <ImageSlider />
      <ClientsOur />
      <ManageCom />
      <Unseen />
      <Helping />
      <Design />
      <Masking />
    </main>
  );
}

export default Home;
