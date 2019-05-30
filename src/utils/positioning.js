const positioning = () => {
  const top = Math.round(Math.random() * 80);
  const left = Math.round(Math.random() * 90);
  return { top: top + "%", left: left + "%" };
};

export default positioning;
