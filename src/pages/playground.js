import React from 'react';
import {
  Body1,
  Body2,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  NavText,
  ButtonMeta,
  ButtonMetaLarge,
} from '../components';
import { Footer } from '../components/marginals/Footer/Footer';

export default function Playground() {

  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenuOpen = () =>
    menuOpen ? setMenuOpen(false) : setMenuOpen(true)
  return (
    <div>
      <Footer />
    </div>
  );
}
