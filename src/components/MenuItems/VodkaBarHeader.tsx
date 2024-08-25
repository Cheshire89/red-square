import { Row, Col } from "react-bootstrap";

const infusionFlavors = [
  "Raspberry",
  "Cranberry",
  "Black Currant",
  "Strawberry",
  "Pineapple",
  "Grapefruit",
  "Orange",
  "Lemon",
  "Mint",
  "Fig",
  "Honey",
  "Black Cherry",
  "Beet",
  "Anise",
  "Black Pepper",
  "Red Pepper",
  "Dill",
  "Garlic",
  "Horseradish",
];

export default function VodkaBarHeader() {
  return (
    <Row>
      <Col
        className="mt-5"
        xs={12}
        sm={{
          span: 4,
        }}
      >
        <h3 className="menu__section-header header-spaced">
          Red Square Infusions
        </h3>
        <ul className="list-unstyled menu-list">
          <li>
            <p>
              <span>Shot</span>
              <span>$5</span>
            </p>
          </li>
          <li>
            <p>
              <span>Carafe</span>
              <span>$35</span>
            </p>
          </li>
        </ul>
        <ul className="list-unstyled menu-list">
          {infusionFlavors.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Col>
    </Row>
  );
}
