import React, { Component } from 'react'
import styles from '../css/Blog.module.css'
import { NavBar } from './Landing'
import firebase from '../firebase/api'

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