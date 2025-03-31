'use client';
import { usePathname } from "next/navigation"
export default function NotFound(){
    const pathname=usePathname();
    const productId=pathname.split('/')[2];
    const reviewId=pathname.split('/')[4];
    return(
        <div>
            <h2>Page Not Found</h2>
            <p>review {reviewId} not found for product {productId}</p>
        </div>
    )
}