import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { FC } from 'react';
// import { defineComponent } from 'react-router-dom'

type Props = {
  title: string;
  linkPath: string;
};

export const NavigationLink: FC<Props> = ({ title, linkPath }) => (
  <li className={styles.li}>
    <Link to={linkPath}>{title}</Link>
  </li>
);
// Link使い方
// <Link to="page1">Sample Page1</Link>
