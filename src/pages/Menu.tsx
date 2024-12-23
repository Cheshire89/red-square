import { useParams } from "react-router-dom";
import PageBanner from "../components/PageBanner/PageBanner";
import { useEffect } from "react";
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
  getMenuStatus,
  getOrder,
  getPage,
  setPage,
} from "@menuStore/menu.slice";

export default function Menu() {
  const dispatch = useDispatch<any>();
  const menuPage = useSelector(getPage);
  const menuData = useSelector(getMenuData);
  const menuStatus = useSelector(getMenuStatus);
  const menuOrder = useSelector(getOrder);

  const { section } = useParams();

  useEffect(() => {
    const page = section.replace(/-/g, " ");
    if (menuPage !== page) {
      dispatch(setPage(page));
    }
    if (menuStatus === "idle") {
      dispatch(getMenuDataByPageName(page));
    }
  }, [section, menuStatus, dispatch, menuPage]);

  const renderVodka = (data: any) => (
    <>
      {data &&
        Object.entries(data).map(([title, value]) => (
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
        ))}
    </>
  );

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
      {data &&
        Object.keys(data).map((section, index) => {
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

  const dontRenderHeader = (sectionTitle: string): boolean => {
    const sections = ["vodka", "dessert"];
    return sections.includes(sectionTitle);
  };

  return (
    <>
      <PageBanner
        title={section || ""}
        background={
          process.env.REACT_APP_ID === "eilv81c1e648nhv"
            ? `${section}.jpg`
            : "dinner.jpg"
        }
      />
      {menuData !== null && menuOrder !== null && (
        <ContentBlock>
          <Container>
            {section === "vodka-bar" && <VodkaBarHeader />}
            <Row>
              {menuOrder.map((sectionTitle, index) => (
                <Col className="mt-5" key={sectionTitle + index} xs={12}>
                  {!dontRenderHeader(sectionTitle) &&
                    menuData[sectionTitle] && (
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
