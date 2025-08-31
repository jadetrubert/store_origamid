import React from "react";
import styles from "./Contato.module.css";
import image from "../assets/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft "}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={image} alt="typewriter" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>Email: contato@gmai.com</li>
          <li>+55 99 9999-9999</li>
          <li>Rua das Flores, 365, Jardim das Oliveiras, São Paulo, Brazil</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
