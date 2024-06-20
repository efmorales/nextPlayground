import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords: ['About Page', 'Enzo', 'Information', '...']

};

export default function AboutPage () {
    return (
        <>
            <span className="text-4xl">About Page</span>
        </>
    )
}