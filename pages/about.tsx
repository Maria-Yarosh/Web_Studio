import Layout from "@/components/layout/layout";
import styles from "./../styles/about.module.css";
import _Kz8nHVg_tGI from "../public/team/arlington-research-Kz8nHVg_tGI-unsplash.jpg";
import _g1Kr4Ozfoac from "../public/team/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import _5fNmWej4tAA from "../public/team/scott-graham-5fNmWej4tAA-unsplash.jpg";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <h1>О компании</h1>
      <div>
        <p>
            «Страница «О нас» — это страница на вашем сайте, 
            которая рассказывает вашим читателям все о вас. 
            Она содержит подробное описание, охватывающее все 
            аспекты вашего бизнеса и вас как предпринимателя. 
            Сюда могут входить продукты или услуги, которые вы 
            предлагаете, история вашего бизнеса, ваша миссия и 
            видение, цель, а также, возможно, что-то о ваших будущих
             целях. Страница «О нас» — это отличная возможность
              рассказать убедительную историю о вашем бизнесе».
        </p>
      </div>
      <div className={styles.list}>
    <div className={styles.item}>
    <h3>Отдел маркетинга</h3>
    <div className={styles.content}>
      <Image
        className={styles.image}
        src={_Kz8nHVg_tGI}
        alt="https://unsplash.com/photos/Kz8nHVg_tGI"
      />
      <div> __ текст __ </div>
    </div>
  </div>
 
 
  <div className={styles.item}>
    <h3>Инженеры-разработчики</h3>
    <div className={styles.content}>
      <Image
        className={styles.image}
        src={_g1Kr4Ozfoac}
        alt="https://unsplash.com/photos/g1Kr4Ozfoac"
      />
      <div> __ текст __ </div>
    </div>
  </div>
 
 
  <div className={styles.item}>
    <h3>Отдел продаж</h3>
    <div className={styles.content}>
      <Image
        className={styles.image}
        src={_5fNmWej4tAA}
        alt="https://unsplash.com/photos/5fNmWej4tAA"
      />
      <div> __ текст __ </div>
    </div>
  </div>
 </div>
    </Layout>
  );
}
