const positioning = () => {
  const top = Math.round(Math.random() * 100);
  const left = Math.round(Math.random() * 100);
  return { top: top + "%", left: left + "%" };
};

export default positioning;
