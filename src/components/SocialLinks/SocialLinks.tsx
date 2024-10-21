import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";
import styles from "./SocialLinks.module.scss";
import { setSocial } from "@socialStore/social.slice";
import { useCallback, useEffect, useMemo } from "react";
import PocketBase from "pocketbase";
import { SocialState } from "@socialStore/social.model";

export default function SocialLinks(props: any) {
  const pb = useMemo(
    () => new PocketBase(process.env.REACT_APP_API_URL),
    []
  );
  const name = useSelector((state: RootState) => state.profile.appName);
  const social: any = useSelector((state: RootState) => state.social);
  const dispatch = useDispatch();

  const init = useCallback(async () => {
    const social: SocialState = await pb
      .collection("social")
      .getFirstListItem(`profile="${process.env.REACT_APP_ID}"`);

    if (social) {
      const { instagram, twitter, facebook, yelp, opentable } = social;
      dispatch(
        setSocial({
          instagram,
          twitter,
          facebook,
          yelp,
          opentable,
        })
      );
    }
  }, [pb, dispatch]);

  useEffect(() => {
    if (!social?.facebook) {
      init();
    }
  }, [init, social]);

  const containerClass = `list-inline ${styles.socialLinks} ${props.alt && styles["socialLinks--alt"]
    }`;
  const iconClass = (key: string) =>
    key !== "opentable" ? "fa-brands fa-" + key : "fa-solid fa-circle-dot";

  return (
    <ul className={`${containerClass}`}>
      {social &&
        Object.keys(social).map((key) => (
          <li className="list-inline-item" key={key}>
            <Link to={social[key]} title={`${name} ${key}`} target="_blank">
              <i className={iconClass(key)}></i>
            </Link>
          </li>
        ))}
    </ul>
  );
}
