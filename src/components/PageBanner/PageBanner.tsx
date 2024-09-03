import styles from "./PageBanner.module.scss";

interface PageBannerParams {
  title: string;
  background?: string;
}

export default function PageBanner({ title, background }: PageBannerParams) {
  return (
    <div className={styles.pageBanner}>
      <span
        className="overlay"
        style={{
          backgroundImage: background ? `url(/${background})` : "",
        }}
      ></span>
      <h1 className="text-uppercase header text-center text-bold">
        {title.replace(/-/g, " ")}
      </h1>
    </div>
  );
}
