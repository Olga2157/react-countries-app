import React, { FC, useState } from "react";
import { Country } from "../model/country-response";
import { Header } from "./Header";
import { AppSearchForm } from "./Form/AppSearchForm";
import { CountryContainer } from "./CountryContainer/CountryContainer";
import { NotFound } from "./NotFound";
import { Footer } from "./Footer/Footer";

export const HomePage: FC = () => {
  const [country, setCountry] = useState<Country | null>(null);
  const [notFoundStatus, setNotFoundStatus] = useState<boolean | undefined>(
    undefined
  );
  const backendUrl =
    "https://countries-api-olga2157-fec11481ae88.herokuapp.com/countries/";

  const handleClick = (message: string) => {
    fetch(`${backendUrl}${message}`)
      .then((response) => {
        setNotFoundStatus(false);
        if (!response.ok)
          throw new Error("Request finished with status " + response.status);
        else return response.json();
      })
      .then((data) => {
        if (data) {
          setCountry(data);
        }
      })
      .catch((error) => {
        setCountry(null);
        setNotFoundStatus(true);
      });
  };

  return (
    <>
      <div id="wrapper">
        <Header />
        <AppSearchForm clickFunction={handleClick} />
        <CountryContainer
          display={notFoundStatus === false}
          country={country}
        />
        <NotFound display={notFoundStatus} />
      </div>
      <Footer />
    </>
  );
};
