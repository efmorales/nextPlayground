import type { Metadata } from 'next';

export const metadata : Metadata = {
 title: 'SEO Contact Title',
 description: 'SEO Contact Description',
 keywords: ['Contact', 'Information', 'Hi']
};

export default function ContactPage () {
    return (
        <>
            <span className="text-4xl">Contact</span>
        </>
    )
}