'use client'

import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowRight, Camera, MapPin, Menu, Minus, X } from 'lucide-react'

const images = {
  hero: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1800&q=85',
  philosophy: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85',
  story: 'https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=1200&q=85',
  storySmall: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=85',
  gallery: [
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85',
  ],
}

const products = [
  ['Senja Latte', 'Espresso, steamed milk, and our signature caramel blend.', 'Rp 28.000', 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=85'],
  ['Kopi Aren', 'Double espresso, fresh milk, and Indonesian palm sugar.', 'Rp 25.000', 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=85'],
  ['Sea Salt Mocha', 'Rich chocolate, espresso, milk, and a subtle sea salt finish.', 'Rp 30.000', 'https://images.unsplash.com/photo-1578374173705-6e5f4a6f6f3a?auto=format&fit=crop&w=800&q=85'],
  ['Butter Croissant', 'Flaky, buttery, freshly baked every morning.', 'Rp 22.000', 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85'],
]

const categories = ['Coffee', 'Non-Coffee', 'Food', 'Pastry']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [category, setCategory] = useState('Coffee')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <a href="#home" className="wordmark">KOPI <span>SENJA</span></a>
        <div className="nav-links">
          {['Home', 'Our Story', 'Menu', 'Locations', 'Contact'].map((item) => <a href={`#${item === 'Our Story' ? 'story' : item.toLowerCase()}`} key={item}>{item}</a>)}
        </div>
        <a href="#reserve" className="nav-cta">Reserve a Table <ArrowRight size={15} /></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && <div className="mobile-menu">{['Home', 'Our Story', 'Menu', 'Locations', 'Contact'].map((item) => <a onClick={() => setMenuOpen(false)} href={`#${item === 'Our Story' ? 'story' : item.toLowerCase()}`} key={item}>{item}<ArrowRight size={17} /></a>)}<a className="mobile-reserve" href="#reserve">Reserve a Table <ArrowRight size={16} /></a></div>}
      </nav>

      <section id="home" className="hero">
        <img src={images.hero} alt="Warm coffee shop interior with sunlight" />
        <div className="hero-overlay" />
        <div className="hero-content reveal">
          <p className="eyebrow light">SPECIALTY COFFEE <span>•</span> EST. 2021</p>
          <h1>Coffee made<br /><em>for slow moments.</em></h1>
          <p className="hero-copy">Thoughtfully sourced beans, carefully crafted drinks, and a space designed for conversations, creativity, and good days.</p>
          <div className="hero-actions"><a href="#menu" className="button button-light">Explore Our Menu <ArrowRight size={16} /></a><a href="#locations" className="text-link light-link">Find Our Coffee Shop <ArrowDownRight size={16} /></a></div>
        </div>
        <div className="hero-location"><MapPin size={15} /> Bangkinang, Riau</div>
        <div className="scroll-cue"><span>Scroll to explore</span><Minus size={25} /></div>
      </section>

      <section className="philosophy section-pad" id="about">
        <div className="philosophy-image reveal"><img src={images.philosophy} alt="Barista pouring coffee" /><span>01 <Minus size={14} /> 04</span></div>
        <div className="philosophy-copy reveal"><p className="eyebrow">OUR PHILOSOPHY</p><h2>More than just<br /><em>a cup of coffee.</em></h2><p>At Kopi Senja, we believe coffee is more than a drink. It is a reason to slow down, connect, and enjoy the little moments.</p><div className="stamp-grid"><span>EST. 2021</span><span>SPECIALTY COFFEE</span><span>LOCAL ROAST</span><span>GOOD MOMENTS</span></div></div>
      </section>

      <section id="menu" className="menu-section section-pad">
        <div className="section-heading"><div><p className="eyebrow">OUR FAVORITES</p><h2>Made with <em>intention.</em></h2></div><a href="#menu" className="text-link">View Full Menu <ArrowRight size={16} /></a></div>
        <div className="category-tabs" role="tablist">{categories.map((item) => <button role="tab" aria-selected={category === item} onClick={() => setCategory(item)} className={category === item ? 'active' : ''} key={item}>{item}</button>)}</div>
        <div className="product-grid">{products.map(([name, description, price, image], index) => <article className="product reveal" key={name}><div className="product-image"><img src={image} alt={name} /><span>0{index + 1}</span></div><div className="product-info"><div><h3>{name}</h3><p>{description}</p></div><strong>{price}</strong></div></article>)}</div>
      </section>

      <section id="story" className="story section-pad"><div className="story-copy reveal"><p className="eyebrow">OUR STORY</p><h2>Born from a love for good coffee <em>and good company.</em></h2><p>Kopi Senja started with a simple idea: create a place where great coffee and meaningful moments can exist in the same space.</p><p>From carefully selected beans to locally inspired flavors, every detail is considered to make you feel at home.</p><a href="#about" className="text-link">Discover Our Story <ArrowRight size={16} /></a></div><div className="story-images reveal"><img className="story-main" src={images.story} alt="Friends enjoying coffee together" /><img className="story-small" src={images.storySmall} alt="Fresh coffee on a wooden table" /><span className="story-note">GOOD COFFEE<br />GOOD COMPANY</span></div></section>

      <section className="features"><div className="feature-intro"><p className="eyebrow">THE SENJA WAY</p><p>Small details make a better moment.</p></div>{[['01', 'Carefully Sourced', 'We work with trusted coffee producers and select beans with character.'], ['02', 'Freshly Brewed', 'Every cup is prepared with attention to detail.'], ['03', 'Made Locally', 'Local ingredients meet modern coffee culture.'], ['04', 'Your Place to Stay', 'A warm space for work, conversations, and slow afternoons.']].map(([number, title, text]) => <div className="feature" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</section>

      <section className="gallery section-pad"><div className="section-heading"><div><p className="eyebrow">A PLACE TO LINGER</p><h2>Come as you are.</h2></div><a href="#instagram" className="text-link">@kopisenja <Camera size={16} /></a></div><div className="gallery-grid">{images.gallery.map((image, i) => <div className={`gallery-item gallery-${i + 1}`} key={image}><img src={image} alt="Kopi Senja coffee shop atmosphere" /></div>)}</div></section>

      <section id="locations" className="location section-pad"><div className="location-copy"><p className="eyebrow">FIND US</p><h2>Come by<br /><em>for a cup.</em></h2><div className="location-details"><h3>KOPI SENJA — BANGKINANG</h3><p>Jl. Example No. 24<br />Bangkinang Kota, Kampar, Riau</p><div className="hours"><span>MONDAY – FRIDAY <b>08:00 – 22:00</b></span><span>SATURDAY – SUNDAY <b>08:00 – 23:00</b></span></div><p className="phone">+62 812-3456-7890</p></div><div className="location-actions"><a href="#locations" className="button button-dark">Get Directions <ArrowRight size={16} /></a><a href="#contact" className="text-link">Contact Us <ArrowRight size={16} /></a></div></div><div className="map-visual"><div className="map-lines" /><div className="map-pin"><MapPin size={20} /></div><span>Bangkinang<br /><small>Kampar, Riau</small></span></div></section>

      <section id="reserve" className="reserve"><img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1800&q=75" alt="Coffee and pastry on a table" /><div className="reserve-overlay" /><div className="reserve-content"><p className="eyebrow light">MAKE A MOMENT OF IT</p><h2>Your next good<br /><em>moment starts here.</em></h2><p>Planning a meeting, catching up with friends, or simply looking for a quiet corner?</p><a href="#contact" className="button button-light">Reserve a Table <ArrowRight size={16} /></a><a href="#contact" className="text-link light-link">Contact Us <ArrowRight size={16} /></a></div></section>

      <section id="instagram" className="instagram section-pad"><div className="section-heading"><div><p className="eyebrow">FOLLOW ALONG</p><h2>@kopisenja</h2></div><a href="#instagram" className="text-link">Follow us on Instagram <ArrowRight size={16} /></a></div><div className="insta-grid">{images.gallery.map((image) => <img key={image} src={image} alt="Kopi Senja on Instagram" />)}</div></section>

      <footer id="contact"><div className="footer-top"><div className="footer-brand"><a href="#home" className="wordmark">KOPI <span>SENJA</span></a><p>A good coffee,<br />a better moment.</p></div><div><p className="footer-label">EXPLORE</p><a href="#home">Home</a><a href="#story">Our Story</a><a href="#menu">Menu</a><a href="#locations">Locations</a></div><div><p className="footer-label">CONTACT</p><a href="tel:+6281234567890">+62 812-3456-7890</a><a href="mailto:hello@kopisenja.id">hello@kopisenja.id</a></div><div><p className="footer-label">SOCIAL</p><a href="#instagram">Instagram</a><a href="#instagram">TikTok</a><a href="#contact">WhatsApp</a></div></div><div className="footer-bottom"><span>© 2026 Syawalan Finanda. All rights reserved.</span><span>Website concept by Syawalan Finanda</span></div></footer>
    </main>
  )
}
