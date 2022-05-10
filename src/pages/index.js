import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './index.module.css';

export default function Home() {
    return (
        <Layout
            noFooter={true}
            description="">
            <div className={clsx("container", styles.container)}>
                <div className='row'>
                    <div className={clsx("col col--4 col--offset-1", styles.intro)}>
                        <h1 className={clsx('welcome', styles.welcome)}>Hi👋 I'm a back-end develop engineer</h1>
                        <Link
                            className={clsx("button button--secondary button--lg", styles.button)}
                            to={useBaseUrl("/docs/intro")}>Start</Link>
                    </div>
                    <div className="col col--6 col--offset-1">
                        <img src='img/freelancer.svg' alt=''/>
                    </div>
                </div>
            </div>
            <footer className={clsx('footer', styles.footer)}>
                <p>Copyright © {new Date().getFullYear()}
                    <a href='https://github.com/chriy'> Chris Yang</a> Inc. Built with
                    <a href="https://docusaurus.io"> Docusaurus.</a>
                </p>
            </footer>
        </Layout>
    );
}

