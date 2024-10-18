import { useParams } from "react-router-dom";
import PageBanner from "../components/PageBanner/PageBanner";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MenuItem, VodkaItem, WineItem } from "@models/MenuItem.model";

import VodkaMenuItem from "../components/MenuItems/VodkaMenuItem";
import FoodMenuItem from "../components/MenuItems/FoodMenuItem";
import WineMenuItem from "../components/MenuItems/WineMenuItem";
import { ContentBlock } from "../components/ContentBlock/ContentBlock";
import "./Menu.scss";
import VodkaBarHeader from "../components/MenuItems/VodkaBarHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  getMenuData,
  getMenuDataByPageName,
  getMenuError,
  getMenuStatus,
  getPage,
  setPage,
} from "@menuStore/menu.slice";

const starters: {
  name: string;
  desc: string;
  price: number;
  is_vegan: boolean;
  is_gluten_free: boolean;
  is_raw: boolean;
}[] = [
  {
    name: "Mac & Cheese",
    desc: "",
    price: 8,
    is_vegan: false,
    is_gluten_free: false,
    is_raw: false,
  },
  {
    name: "Goat cheese polenta",
    desc: "",
    price: 7,
    is_vegan: false,
    is_gluten_free: false,
    is_raw: false,
  },
  {
    name: "Mashed potatoes",
    desc: "",
    price: 7,
    is_vegan: false,
    is_gluten_free: false,
    is_raw: false,
  },
  {
    name: "Cucumber-Mint salad",
    desc: "",
    price: 7,
    is_vegan: false,
    is_gluten_free: false,
    is_raw: false,
  },
];

export default function Menu() {
  const dispatch = useDispatch<any>();
  const menuPage = useSelector(getPage);
  const menuData = useSelector(getMenuData);
  const menuStatus = useSelector(getMenuStatus);
  const menuError = useSelector(getMenuError);

  const { section } = useParams();

  useEffect(() => {
    const page = section.replace(/\-/g, " ");
    if (menuPage !== page) {
      dispatch(setPage(page));
    }
    if (menuStatus === "idle") {
      dispatch(getMenuDataByPageName(page));
    }
  }, [section, menuStatus, dispatch]);

  const renderVodka = (data: any) => {
    return Object.entries(data).map(([title, value]) => {
      return (
        <div className="mb-5">
          <strong>{title}</strong>
          <ul className="list-unstyled menu-list">
            {Array.isArray(value) &&
              value.map((item: VodkaItem, index: number) => {
                const key = `${title.replace(/\s/g, "")}-${index + 1}`;
                return <VodkaMenuItem item={item} key={key} />;
              })}
          </ul>
        </div>
      );
    });
  };

  const renderFood = (sectionTitle: string, data: any) => (
    <>
      <ul className="list-unstyled">
        {Array.isArray(data[sectionTitle]) &&
          data[sectionTitle].map((item: MenuItem, index: number) => {
            const key = `${sectionTitle}-${index + 1}`;
            return <FoodMenuItem item={item} key={key} />;
          })}
      </ul>
    </>
  );

  const renderWines = (data: any) => (
    <>
      {Object.keys(data).map((section, index) => {
        return (
          <ul key={section + index} className="list-unstyled">
            <li className="foodItem">
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

  const renderSection = (sectionTitle: string, data: any) => {
    switch (sectionTitle) {
      case "wine":
        return renderWines(data[sectionTitle]);
      case "vodka":
        return renderVodka(data[sectionTitle]);
      default:
        return renderFood(sectionTitle, data);
    }
  };

  const isDrinks = (sectionTitle: string): boolean => {
    const sections = ["wine", "cocktails"];
    return sections.includes(sectionTitle);
  };

  const dontRenderHeader = (sectionTitle: string): boolean => {
    const sections = ["vodka", "dessert"];
    return sections.includes(sectionTitle);
  };

  return (
    <>
      <PageBanner title={section || ""} background={`${section}.jpg`} />
      {menuData !== null && (
        <ContentBlock>
          <Container>
            {section === "vodka-bar" && <VodkaBarHeader />}
            <Row>
              {Object.keys(menuData).map((sectionTitle, index) => (
                <Col
                  className="mt-5"
                  key={sectionTitle + index}
                  xs={12}
                  sm={{
                    span: isDrinks(sectionTitle) && section !== "wine" ? 6 : 12,
                  }}
                >
                  {!dontRenderHeader(sectionTitle) && (
                    <h3 className="menu__section-header header-spaced">
                      {sectionTitle}
                    </h3>
                  )}

                  {section && renderSection(sectionTitle, menuData)}
                </Col>
              ))}
            </Row>
          </Container>
        </ContentBlock>
      )}
    </>
  );
}
