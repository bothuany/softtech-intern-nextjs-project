import React, { useCallback, useEffect, useState } from "react";
import dir from "@/config/dir.json";
import { Container, Grid, TextField } from "@mui/material";
import Product from "@/components/Product";
import CustomSearchBar from "@/components/CustomUI/CustomSearchBar";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";

export default function ProductsPage({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(data.products);
  const [searchedProducts, setSearchedProductsProducts] = useState([]);
  const [searchMode, setSearchMode] = useState(false);
  const [page, setPage] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(data.total);

  const fetchData = async () => {
    if (products.length >= total) return;
    setIsLoading(true);
    try {
      const response = await fetch(
        dir.api + `products?skip=${(page - 1) * 9}&limit=9`
      );
      const { products: fetchedProducts } = await response.json();

      setProducts((prevProducts) => [...prevProducts, ...fetchedProducts]);
      setPage(page + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSearhedData = useCallback(async () => {
    if (searchTerm === "") return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          dir.api + `products/search?q=${searchTerm}&skip=0&limit=${total}`
        );
        const { products: fetchedProducts } = await response.json();

        setSearchedProductsProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchTerm]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    fetchData();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  useEffect(() => {
    if (searchTerm === "") setSearchMode(false);
  }, [searchTerm]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Navbar/>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
          <CustomSearchBar>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  setSearchMode(true);
                  fetchSearhedData();
                }
              }}
              sx={{ marginBottom: "2rem" }}
            />
          </CustomSearchBar>
          {isLoading && <Loading />}

          <Grid container spacing={3}>
            {searchMode &&
              searchedProducts?.map((product) => <Product product={product} />)}
            {!searchMode &&
              products?.map((product) => <Product product={product} />)}
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}

export async function getServerSideProps() {
  const response = await fetch(dir.api + "products?skip=0&limit=9");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
