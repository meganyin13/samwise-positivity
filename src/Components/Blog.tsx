import React, { Component } from 'react'
import styles from '../css/Blog.module.css'
import { NavBar } from "./Landing"
import firebase from "../firebase/api"

interface IMyComponentProps {
    someDefaultValue: string
}

interface IMyComponentState {
    emails: Array<String>
}

class Blog extends Component<IMyComponentProps, IMyComponentState> {
    constructor(props: IMyComponentProps) {
        super(props) 
        this.state = {emails: []}
    }

    componentDidMount() {
        const fetchData = async () => {
            const db = firebase.firestore()
            const emails = await db.collection("emails_id").get()
            emails.docs.map(email => {
                this.setState(prevState => {
                    var list = [...prevState.emails, email.data().email]
                    return {emails: list}
                }, () => console.log(this.state))
            })
        }
        fetchData()
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className={styles.Blog}>
                </div>
            </div>
        )
    }
}

export default Blog