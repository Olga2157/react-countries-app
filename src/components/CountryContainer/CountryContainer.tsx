import React, { FC } from "react";
import { Country } from "../../model/country-response";
import { Container } from "reactstrap";
import { CardCountryDetail } from "./CountryDetails/CardCountryDetail";
import { CardCountryWithImg } from "./CountryDetails/CardWithImg";
import { CardCountryWithLink } from "./CountryDetails/CardWithLink";
import classNames from "classnames";
import "./CountryContainer.scss";

type CountryContainerProps = {
  country?: Country | null;
  display?: boolean;
};

export const CountryContainer: FC<CountryContainerProps> = (props) => {
  const countryName = props.country?.name.official;
  const countryPopulation = props.country?.population;
  const countryFlag = props.country?.flags.png;
  const countryCoatOfArms = props.country?.coatOfArms.png;
  const countryRegion = props.country?.region;
  const countrySubRegion = props.country?.subregion;
  const countryCapital = props.country?.capital?.at(0);
  const countryArea = props.country?.area;
  const countryContinent = props.country?.continents;
  const countryContinents = countryContinent?.join(" , ");

  const countryLanguages = props.country?.languages;
  let languages: string | undefined = "";
  if (countryLanguages) {
    languages = Object.values(countryLanguages).join(" , ");
  }
  const countryMapLink = props.country?.maps.googleMaps;
  const countryLatLng = props.country?.latlng;

  let notFoundClass = classNames("d-none");
  if (props.display) {
    notFoundClass = "";
  }

  return (
    <Container className={notFoundClass}>
      <CardCountryDetail
        detailId={"detail-country-name"}
        param={"Country"}
        value={countryName}
      />
      <CardCountryDetail param={"Population"} value={countryPopulation} />
      <CardCountryWithImg param={"Flag"} value={countryFlag} />
      <CardCountryWithImg param={"Coat of Arms"} value={countryCoatOfArms} />
      <CardCountryDetail
        param={"Region"}
        value={countryRegion}
        desc={"Subregion: " + countrySubRegion}
      />
      <CardCountryDetail
        detailId={"detail-country-capital"}
        param={"Capital"}
        value={countryCapital}
      />
      <CardCountryDetail param={"Area"} value={countryArea} desc="km^2" />
      <CardCountryDetail param={"Continent"} value={countryContinents} />
      <CardCountryDetail param={"Languages"} value={languages} />
      <CardCountryWithLink
        linkId="map"
        param={"Geographic information"}
        mapLink={countryMapLink}
        desc={"LatLng: " + countryLatLng}
      />
    </Container>
  );
};
