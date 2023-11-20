import React, { ReactNode } from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

type Props = {
  children: ReactNode;
  Tipe: string;
};

export default function Layout(props: Props) {
  return (
    <div>
      <Header tipe={props.Tipe}/>
      {props.children}
      <Footer />
    </div>
  );
}