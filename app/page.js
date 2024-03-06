import { FooterBanner, FeatureProducts, HeroBanner } from "./ui";
import { Suspense } from "react";
import Spinner from "./ui/Spinner";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <HeroBanner />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <FeatureProducts />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <FooterBanner />
        </Suspense>
    </>
  );
}
