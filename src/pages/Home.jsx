import React from 'react';
import Hero from '../containers/Hero';
import Header from '../components/Header';
import PriceCard from '../components/PriceCard';
import '../styles/pages/home.css';

const Home = () => {
  return (
    <>
      <Header />
      <section className='Home'>
        <Hero />
        <div className='Prices'>
          <h2>Nuestros planes</h2>
          <main className='Prices__list'>
            <PriceCard
              price='$32'
              title='Plan web basico'
              items={['1 user', '10 downloads per month', 'Roster files']}
            />
            <PriceCard
              price='$39'
              title='Plan web e-commerce'
              items={['5 user', 'Unlimited downloads', 'Custom packs', 'Fully-editable files', '200+ custom icons']}
            />
            <PriceCard
              price='$35'
              title='Plan personalizado'
              items={['3 user', '20 downloads per month', '100 custom icons']}
            />
          </main>
        </div>
      </section>
    </>
  );
}

export default Home;