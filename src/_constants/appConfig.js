const AppConfig = {
  baseUrl:
    window &&
    window.location &&
    window.location.origin &&
    window.location.origin.includes("product")
      ? "http://localhost:1337/api" //  staging
      : "http://localhost:1337/api", // production
};

export default AppConfig;
