/* eslint-disable max-len */
import React from 'react';
import BlogList from './BlogList';
import { NavBar } from './Landing';
import styles from '../css/Blog.module.css';
import Header from './Template/Header';
import Section from './Template/Section';
import Footer from './Template/Footer';
import llamas from '../imgs/Blog-June22/llamas.jpg';
import helpthehungry from '../imgs/Blog-June22/helpthehungry.jpg';
import mangoshake from '../imgs/Blog-June22/mangoshake.jpg';
import cornellkindness from '../imgs/Blog-June22/cornellkindness.png';

export default (): React.ReactElement => (
  <div className={styles.Blog}>
    <NavBar />
    <div className={styles.heading}>Past Issues</div>
    <div className={styles.List}>
      <BlogList
        title="💌 Here for you"
        date="Week of June 22"
        element={(
          <div>
            <Header />
            <Section title="COVID-19 Progress" table center>
              <div>
                <h1 className="section-heading text-center w-100">COVID-19 Progress</h1>
                <p className="message-heading text-center w-100">
                  As the curve continues to flatten, here&apos;s a little encouragement for everyone to continue doing their part to stay home
                  <span role="img" aria-label="home"> 🏠</span>
                </p>
                <img className="image-heading" src={llamas} alt="llamas" />
                <p className="article-title text-center w-100"><strong>May 6: Antibodies of llamas proven to neutralize COVID-19</strong></p>
                <p className="articles text-center w-100">
                  Didn&apos;t think you see llamas on our newsletter, right? Well, scientists have long turned to llamas for antibody research. For example, studies were conducted for SARS, MERS, H.I.V, and influenza. These same antibodies were recently found to be able to neutralize the new virus, with the encouraging results published earlier this Tuesday.
                  <a href="https://www.nytimes.com/2020/05/06/science/llama-coronavirus-antibodies.html">(NYTimes)</a>
                </p>
                <p className="article-title text-center w-100"><strong>May 5: U.K lockdown could be eased from Monday</strong></p>
                <p className="articles text-center w-100">
                  Prime Minister Boris Johnson said that the next phase of the governments strategy, easing lockdown, may begin on Monday. This is because U.K. is past its peak and hopes to rejuvenate the economy as soon as possible. Read more about their plan here!
                  <a href="https://www.bloomberg.com/news/articles/2020-05-06/johnson-says-some-changes-to-u-k-lockdown-likely-from-monday"> (Bloomberg)</a>
                </p>
              </div>
            </Section>
            <Section title="Some Inspiration" table center>
              <div>
                <h1 className="section-heading text-center w-100">Some Inspiration!</h1>
                <p className="message-heading text-center w-100">
                  Featuring some amazing people and projects around the world
                  <span role="img" aria-label="world"> 🌏</span>
                </p>
                <img className="image-heading" src={helpthehungry} alt="help the hungry" />
                <p className="article-title text-center w-100"><strong>Help The Hungry: Top chefs provide free meals</strong></p>
                <p className="articles text-center w-100">
                  Chef in Schools, a charity co-founded by Nicole Pisani and Henry Dimbleby recruited staff from top restaurants to cook for 450 families. I can smell the food from here!
                  <span role="img" aria-label="foods"> 🍛🍔🍣</span>
                </p>
                <p className="article-title text-center w-100"><strong>Virtual pub stand-up comedy</strong></p>
                <p className="articles text-center w-100">
                  The Covid Arms is a virtual comedy pub raising money for The Trussell Trust which provides food banks for the vulnerable. Imagine paying just £2 for laughter and the ability to contribute back to society!
                  <span role="img" aria-label="sunglasses"> 😎</span>
                </p>
              </div>
            </Section>
            <Section title="Productivity" table center>
              <div>
                <h1 className="section-heading text-center w-100">Sweet, Sweet, Productivity!</h1>
                <p className="message-heading text-center w-100">
                  With finals just around the corner, SpreadTheLove is back with some productivity recommendations and fuel for the soul!
                  <span role="img" aria-label="inspiration"> 📚🙇</span>
                </p>
                <p className="productivity-title text-center w-100">
                  <strong>
                    <span role="img" aria-label="productivity">📈</span>
                    Productivity Platforms
                    <span role="img" aria-label="productivity">📈</span>
                  </strong>
                </p>
                <p className="articles text-center w-100">
                  <strong>Samwise: </strong>
                  Is that a Cornell-made task and stress management platform? (we stan!) Samwise is a super effective way to visualize your workload, create actionable tasks, and take control of your schedule. Plus, it has a darn cute mascot!
                  <a href="wwww.samwise.today"> (Samwise)</a>
                </p>
                <p className="articles text-center w-100">
                  <strong>Forest: </strong>
                  Its slogan says it all - Stay focused, be present. Plant a virtual tree and let it grow while you focus on your work. The catch is, if you leave the app halfway, your tree will die!
                  <span role="img" aria-label="trees"> 🌲💀 </span>
                  Coins earned can then be spent to plant real trees on Earth.
                  <a href="https://www.forestapp.cc/"> (Forest)</a>
                </p>
                <p className="productivity-title text-center w-100">
                  <strong>
                    <span role="img" aria-label="productivity">🍭</span>
                    Sweet Treats
                    <span role="img" aria-label="productivity">🍭</span>
                  </strong>

                </p>
                <p className="articles text-center w-100">
                  <strong>Mango Graham Shake: </strong>
                  An easy-to-make refreshing drink for those long studying days. Mango + Graham Crackers + Milk (+ Boba?) =
                  <span role="img" aria-label="yum"> 😋</span>
                  <a href="https://www.youtube.com/watch?v=5ayT729npQo&feature=youtu.be">(Youtube)</a>
                  <a href="https://www.createwithcream.ph/recipe/mango-graham-shake">(Recipe)</a>
                </p>
                <p className="articles text-center w-100">
                  <strong>Egg Tarts: </strong>
                  Who doesnt love eggy goodness! Try out this yummy egg tart recipe thats bound to turn out great - tag us at @samwise.today if you make them
                  <span role="img" aria-label="egg"> 🥚</span>
                  <a href="http://www.skuei.com/recipes/eggtarts/"> (Recipe)</a>
                </p>
                <img className="image-heading" src={mangoshake} alt="mangoshake" />
              </div>
            </Section>
            <Section>
              <div>
                <h1 className="section-heading text-center w-100">Shoutouts!</h1>
                <p className="feature-message text-center w-100">
                  In line with our theme, this weeks shoutout goes to our very own Cornell Kindness Club (
                  <a href="https://www.instagram.com/cornellkindness/">@cornellkindness</a>
                  ). Cornell Kindness Club was founded in 2016 by a kind group of seniors dedicated to
                  spreading kindness through the Cornell campus. We believe all Cornell students are kind,
                  and kind people can be any kind of people. We welcome any students to join us in our mission to be kind,
                  spread love through the Cornell campus, and pay it forward with an act of kindness!
                </p>
                <br />
                <img className="shoutout-image" src={cornellkindness} alt="cornell kindness" />
                <br />
                <p className="feature-message text-center w-100">If you&apos;d like to be featured on next week&apos;s newsletter, fill out our form here. And as always, feel free to share our newsletter with friends, or refer them to our sign-up page at bit.ly/samwise-spreadthelove!</p>
                <br />
                <p className="feature-message text-center w-100">Thanks for tuning in! We&apos;ll see you next week; till then, stay healthy and safe!</p>
                <br />
                <p className="feature-message text-center w-100">Love,</p>
                <p className="articles text-center w-100">The #SpreadTheLove Team</p>
              </div>
            </Section>
            <Footer />
          </div>
        )}
      />
    </div>
  </div>
);
