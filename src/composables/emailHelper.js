const getEmailKey = function () {
  const config = useRuntimeConfig();

  return config.public.form;
};

export default getEmailKey;
