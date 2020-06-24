import React from 'react';
import * as firebase from 'firebase/app';
import BlogList from './BlogList';
import { NavBar } from './Landing';
import styles from '../css/Blog.module.css';
import Bear from '../imgs/samwise-bear.png';

interface IMyComponentProps {
  someDefaultValue: string
}

interface IMyComponentState {
  emails: Array<String>
}

class Blog extends React.Component<IMyComponentProps, IMyComponentState> {
  constructor(props: IMyComponentProps) {
    super(props);
    this.state = { emails: [] };
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  componentDidMount() {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      const db = firebase.firestore();
      const emails = await db.collection('emails_id').get();
      // eslint-disable-next-line array-callback-return
      emails.docs.map((email) => {
        this.setState((prevState) => {
          const list = [...prevState.emails, email.data().email];
          return { emails: list };
        // eslint-disable-next-line react/destructuring-assignment
        }, () => console.log(this.state.emails));
      });
    };
    fetchData();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render() {
    return (
      <div className={styles.Blog}>
        <NavBar />
        <div className={styles.heading}>Past Issues</div>
        <div className={styles.List}>
          <BlogList
            key="key1"
            title="💌 Here for you"
            date="Week of June 22"
            img={Bear}
          />
        </div>
        <div className={styles.List}>
          <BlogList
            key="key2"
            title="💌 Here for you"
            date="Week of June 22"
            img={Bear}
          />
        </div>
      </div>
    );
  }
}

export default Blog;
