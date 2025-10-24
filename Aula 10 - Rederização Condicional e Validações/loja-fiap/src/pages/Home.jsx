import { useState, useEffect } from "react";
import SectionContainer from "../components/SectionContainer";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [electronics, setElectronics] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [mensClothing, setMensClothing] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {

    setIsLoading(true)

    fetch(`${API_URL}/category/electronics`)
      .then((res) => res.json())
      .then((data) => setElectronics(data));

    fetch(`${API_URL}/category/jewelery`)
      .then((res) => res.json())
      .then((data) => setJewelery(data));

    fetch(`${API_URL}/category/men's clothing`)
      .then((res) => res.json())
      .then((data) => setMensClothing(data));
    
    fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .finally(() => setIsLoading(false));

  }, []);

  const filtrados = allProducts
        .filter(pegaItem => pegaItem.title.includes('jacdsadaket') || pegaItem.title.includes('codsadaat') || pegaItem.description.includes('jasadasdcket') || pegaItem.description.includes('codsadaat'));

  if (isLoading) {
    return <h1>Loading....</h1>
  }

  return (
    <div>
      <SectionContainer title="Eletrônicos">
        {electronics.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Joias">
        {jewelery.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Roupas Masculinas">
        {mensClothing.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Amados dos queriduxos">
        {allProducts
        .filter(pegaItem => pegaItem.rating.rate >= 4)
        .sort((a,b) => b.rating.rate - a.rating.rate || b.price - a.price)
        .map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>
      
      <SectionContainer title="Abaixos de $20">
        {allProducts
        .filter(pegaItem => pegaItem.price >= 0 && pegaItem.price < 20)
        .sort((a,b) => a.price - b.price)
        .map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>
      
      <SectionContainer title="Jaquetas & Casacos">
        {filtrados.length > 0 ? 
        filtrados
        .sort((a,b) => a.price - b.price)
        .map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
      
        : 
        <p>Nenhum produto encontrado...</p>

      }
      </SectionContainer>
    </div>
  );
}
