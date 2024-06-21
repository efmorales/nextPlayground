import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Price Title',
    description: 'SEO Price Description',
    keywords: ['Price', 'Discounts', 'Checkout']
};

export default function PricingPage() {
    return (
        <div className='flex flex-col items-center p-24'>
            <span className="text-7xl">Pricing Page</span>
        </div>
    )
}