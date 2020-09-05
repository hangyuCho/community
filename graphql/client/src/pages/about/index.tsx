import React, { FunctionComponent } from 'react';
import PageLayout from '../../components/layouts/AppPageLayout';
import Link from 'next/link';

interface OwnProps {}

type Props = OwnProps;

const About: FunctionComponent<Props> = () => {
    return (
        <PageLayout title="About | Next.js + TypeScript Example">
            <h1>About</h1>
            <p>This is the about page</p>
            <p>
                <Link href="/">
                    <a>Go home</a>
                </Link>
            </p>
        </PageLayout>
    );
};

export default About;
