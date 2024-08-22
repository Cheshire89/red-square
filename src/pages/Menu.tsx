import { useParams } from "react-router-dom";
import PageBanner from "../components/PageBanner/PageBanner";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MenuItem, VodkaItem, WineItem } from "@models/MenuItem.model";

import VodkaMenuItem from "../components/MenuItems/VodkaMenuItem";
import FoodMenuItem from "../components/MenuItems/FoodMenuItem";
import WineMenuItem from "../components/MenuItems/WineMenuItem";
import apiService from "../services/Api.service";

export default function Menu() {
  const [menuData, setMenuData] = useState<any | null>(null);
  const [data, setData] = useState<any | null>(null);
  const { section } = useParams();

  useEffect(() => {
    if (menuData && section) {
      setData(menuData[section]);
    } else {
      apiService.getMenu().then((res) => {
        setMenuData(() => res.data.data);
        if (section && res.data?.data && res.data?.data[section]) {
          setData(() => res.data.data![section]);
        }
      });
    }
  }, [section, menuData]);

  const renderDinner = (sectionTitle: string, data: any) => (
    <>
      <h3 className="text-uppercase">{sectionTitle}</h3>
      <ul className="list-unstyled">
        {Array.isArray(data[sectionTitle]) &&
          data[sectionTitle].map((item: MenuItem, index: number) => {
            const key = `${sectionTitle}-${index + 1}`;
            return <FoodMenuItem item={item} key={key} />;
          })}
      </ul>
    </>
  );

  const renderVodka = (sectionTitle: string, data: any) => (
    <>
      <h3 className="text-uppercase">{sectionTitle}</h3>
      <ul className="list-unstyled">
        {Array.isArray(data[sectionTitle]) &&
          data[sectionTitle].map((item: VodkaItem, index: number) => {
            const key = `${sectionTitle}-${index + 1}`;
            return <VodkaMenuItem item={item} key={key} />;
          })}
      </ul>
    </>
  );

  const renderSipsAndSnacks = (sectionTitle: string, data: any) => {
    if (sectionTitle !== "wines") {
      return (
        <>
          <h3 className="text-uppercase">{sectionTitle}</h3>
          <ul className="list-unstyled">
            {Array.isArray(data[sectionTitle]) &&
              data[sectionTitle].map((item: MenuItem, index: number) => {
                const key = `${sectionTitle}-${index + 1}`;
                return <FoodMenuItem item={item} key={key} />;
              })}
          </ul>
        </>
      );
    } else {
      return renderWines(sectionTitle, data[sectionTitle]);
    }
  };

  const renderWines = (sectionTitle: string, data: any) => (
    <>
      <h3 className="text-uppercase">{sectionTitle}</h3>
      {Object.keys(data).map((section, index) => {
        return (
          <ul key={section + index} className="list-unstyled">
            <li>
              <strong>{section}</strong>
            </li>
            {Array.isArray(data[section]) &&
              data[section].map((item: WineItem, index: number) => {
                const key = `${section}-${index + 1}`;
                return <WineMenuItem item={item} key={key} />;
              })}
          </ul>
        );
      })}
    </>
  );

  const renderDessert = (data: any) => (
    <ul className="list-unstyled">
      {Array.isArray(data) &&
        data.map((item: MenuItem, index: number) => {
          const key = `${item.itemTitle}-${index + 1}`;
          return <FoodMenuItem item={item} key={key} />;
        })}
    </ul>
  );

  const renderSection = (sectionTitle: string, section: string, data: any) => {
    switch (section) {
      case "dinner":
        return renderDinner(sectionTitle, data);
      case "vodka-bar":
        return renderVodka(sectionTitle, data);
      case "sips-and-snacks":
        return renderSipsAndSnacks(sectionTitle, data);
    }
  };

  return (
    <>
      <PageBanner title={section || ""} />
      {data !== null && (
        <Container>
          <Row>
            {section !== "dessert"
              ? Object.keys(data).map((sectionTitle, index) => (
                  <Col key={sectionTitle + index} xs={12} sm={10}>
                    {section && renderSection(sectionTitle, section, data)}
                  </Col>
                ))
              : renderDessert(data)}
          </Row>
        </Container>
      )}
    </>
  );
}
