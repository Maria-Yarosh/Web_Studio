import Layout from "@/components/layout/layout";
import { PortfolioItem } from "@/pages/portfolio";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/layout/layout.module.css"
import axios from "axios"

export const PHOTOS_API_URL = "https://jsonplaceholder.typicode.com/photos/";

interface ItemProps {
    portfolioItem: PortfolioItem;
}

type Context = {
    params: { id: number }
  }

export async function getServerSideProps({ params }: Context) {
    const url = `${PHOTOS_API_URL}${params.id}`
    const { data } = await axios.get<PortfolioItem[]>(url);
   
    return {
      props: { portfolioItem: data }
    }
   }

export default function Item({ portfolioItem }: ItemProps) {
 return (
   <Layout>
     <div className={styles.item}>
       <h1>Проект: {portfolioItem.title}</h1>
       <Image 
         src={portfolioItem.url} 
         width={400} 
         height={400} 
         alt={portfolioItem.title} />
       <Link className={styles.link} href="/portfolio">Назад к списку работ</Link>
     </div>
   </Layout>
 )
}