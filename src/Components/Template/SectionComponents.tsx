import React from 'react';

type props = {
  header: string,
  message: string
  emoji?: string
  image?: string
  alt?: string
  link?: string
}

export const SectionHeader = ({ header, message, emoji, image, alt, link }: props)
: React.ReactElement => (
  <div>
    <h1 className="section-heading text-center w-100">{header}</h1>
    <p className="message-heading text-center w-100">
      {message}
      <span role="img" aria-label="home">
        {' '}
        {emoji}
      </span>
    </p>
    {link
      ? <a href={link}><img className="image-heading" src={image} alt={alt} /></a>
      : <img className="image-heading" src={image} alt={alt} />}

  </div>
);

export const findLinkTitle = (text: string): string => {
  let website = text.split('/', 3)[2].split('.')[1];
  website = website.replace(website[0], website[0].toUpperCase());
  return ` (${website})`;
};

export const Articles = ({ header, message, link, emoji }: props): React.ReactElement => (
  <div>
    <p className="article-title text-center w-100"><strong>{header}</strong></p>
    <p className="articles text-center w-100">
      {message}
      {emoji ? <span role="img">{emoji}</span> : null}
      <a href={link}>{link ? findLinkTitle(link) : null}</a>
    </p>
  </div>
);
