const getEmailKey = function () {
  const config = useRuntimeConfig();

  return config.web3FormKey;
};

export default getEmailKey;
