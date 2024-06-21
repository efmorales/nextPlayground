import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SEO Contact Title',
    description: 'SEO Contact Description',
    keywords: ['Contact', 'Information', 'Hi']
};

export default function ContactPage() {
    return (
        <div className='flex flex-col items-center p-24'>
            <span className="text-7xl">Contact Page</span>
        </div>
    )
}