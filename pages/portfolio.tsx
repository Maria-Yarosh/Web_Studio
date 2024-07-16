import Layout from "@/components/layout/layout";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./../styles/portfolio.module.css"
import axios from "axios";

export const PHOTOS_API_URL = "https://jsonplaceholder.typicode.com/photos/";

export interface PortfolioItem {
    albumId: any;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

type ItemsByGroup = [string, PortfolioItem[]][];

const prepareData = (items: PortfolioItem[]) =>  {

    let albums: ItemsByGroup = [];
    while (items.length>0){
    let albumId = items[0].albumId;
    const result = items.filter((item) => item.albumId === albumId);        
    items = items.filter((item) => item.albumId !== albumId);        
    albums.push(["Название "+ albumId ,result])
    } 
   return albums;
}


export default function Portfolio() {

    const [loading, setLoading] = useState(true);
    const [itemsByGroup, setItems] = useState<ItemsByGroup | null>(null);

    const load = async () => {
        try {
            const { data } = await axios.get<PortfolioItem[]>(PHOTOS_API_URL);
            const prepared = prepareData(data.slice(0, 7));
            setItems(prepared);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    const { push } = useRouter();
         
    useEffect(() => {
        load();
    }, []);

    if (loading) {
        return (
            <Layout>
                ... loading ...
            </Layout>
        )
    }

    return (
        <Layout>
        <h1>Наши работы</h1>
     
     
        {itemsByGroup?.length ? (
          <div>
            {itemsByGroup.map((group, i) => (
              <div key={i} className={styles.groupWrapper}>
                <h2>{group[0]}</h2>
     
     
                <div className={styles.listGroup}>
                  {group[1].map(({ id, title, thumbnailUrl }) => (
                    <div
                      key={id}
                      className={styles.groupItem}
                      onClick={() => push(`/portfolio/${id}`)}
                    >
                      <Image src={thumbnailUrl} width={150} height={150} alt={title} />
                      <h3>{title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : <div>Ничего не найдено</div>}
      </Layout>
     )
}