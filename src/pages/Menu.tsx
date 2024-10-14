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

  // const [menuData, setMenuData] = useState<any | null>(null);
  const [data, setData] = useState<any | null>(null);
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

  // const init = useCallback(async () => {
  //   const data = await pb
  //     .collection("menu")
  //     .getFirstListItem(
  //       `profile_id="${process.env.REACT_APP_ID}" && name="${section}"`
  //     )
  //     .then((menu) =>
  //       pb.collection("category").getFullList({
  //         filter: `menu_id?~"${menu.id}"`,
  //       })
  //     )
  //     .then((categories) =>
  //       pb.collection("menuItem").getFullList({
  //         filter: categories.map(({ id }) => `category_id?~"${id}"`).join("||"),
  //         expand: "category_id",
  //       })
  //     );

  //   console.log("data", data);
  // }, []);

  const renderDinner = (sectionTitle: string, data: any) => (
    <>
      <h3 className="menu__section-header header-spaced">{sectionTitle}</h3>
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
      <h3 className="menu__section-header header-spaced">{sectionTitle}</h3>
      <ul className="list-unstyled menu-list">
        {Array.isArray(data[sectionTitle]) &&
          data[sectionTitle].map((item: VodkaItem, index: number) => {
            const key = `${sectionTitle}-${index + 1}`;
            return <VodkaMenuItem item={item} key={key} />;
          })}
      </ul>
    </>
  );

  const renderSipsAndSnacks = (sectionTitle: string, data: any) => {
    if (sectionTitle !== "wine") {
      return (
        <>
          <h3 className="menu__section-header header-spaced">{sectionTitle}</h3>
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
      <h3 className="menu__section-header header-spaced">{sectionTitle}</h3>
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

  const renderDessert = (data: any) => {
    // console;
    return (
      <ul className="list-unstyled">
        {Array.isArray(data) &&
          data.map((item: MenuItem, index: number) => {
            const key = `${item.name}-${index + 1}`;
            return <FoodMenuItem item={item} key={key} />;
          })}
      </ul>
    );
  };

  const renderSection = (sectionTitle: string, section: string, data: any) => {
    switch (section) {
      case "wine":
        return renderWines(sectionTitle, data);
      case "vodka-bar":
        return renderVodka(sectionTitle, data);
      case "sips-and-snacks":
        return renderSipsAndSnacks(sectionTitle, data);
      default:
        return renderDinner(sectionTitle, data);
    }
  };

  const isDrinks = (sectionTitle: string): boolean => {
    return sectionTitle === "wine" || sectionTitle === "cocktails";
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
                    span: isDrinks(sectionTitle) ? 6 : 12,
                  }}
                >
                  {section && renderSection(sectionTitle, section, menuData)}
                </Col>
              ))}
            </Row>
          </Container>
        </ContentBlock>
      )}
    </>
  );
}
