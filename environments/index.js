const environments = {
  development: {
    URL: "http://localhost:9000"
  }
};

export default environments[process.env.REACT_APP_ENV] ||
  environments[Object.keys(environments)[0]];
