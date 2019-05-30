const positioning = () => {
  const top = Math.round(Math.random() * 100);
  const left = Math.round(Math.random() * 100);
  if (top > 50) {
    const bottom = 100 - top;
    return { bottom: bottom + "%", left: left + "%" };
  }
  if (left > 50) {
    const right = 100 - left;
    return { top: top + "%", right: right + "%" };
  }
  if (left > 50 && top > 50) {
    const right = 100 - left;
    const bottom = 100 - top;
    return { bottom: bottom + "%", right: right + "%" };
  }
  return { top: top + "%", left: left + "%" };
};

export default positioning;
