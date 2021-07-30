export const scrollTo = (id) => {
  if (document) {
    const element = document.getElementById(id);

    if (element) {
      element.scrollTo({ behavior: 'smooth' });
      element.scrollIntoView({
        behavior: 'smooth',
        block: id === 'sponsors' ? 'nearest' : 'center',
      });
      element.focus();
    }
  }
};
