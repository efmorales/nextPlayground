import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Price Title',
 description: 'SEO Price Description',
 keywords: ['Price', 'Discounts', 'Checkout']
};

export default function PricePage () {
    return (
        <>
            <span className="text-4xl">Price Page</span>
        </>
    )
}