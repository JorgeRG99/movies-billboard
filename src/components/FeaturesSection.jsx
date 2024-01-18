import { FEATURES } from "../config";
import { Feature } from "./Feature";
import { Pricing } from "./Icons/Pricing";
import { Security } from "./Icons/Security";
import { Vip } from "./Icons/Vip";

export default function FeaturesSection() {
  return (
    <section className="w-full flex flex-col gap-20 px-8 md:px-6 py-20 text-white">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
        Why Choose Our Platform?
      </h2>
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => {
            return (
              <li key={crypto.randomUUID()}>
                <Feature
                  title={feature.title}
                  description={feature.description}
                >
                  {index === 0 ? (
                    <Pricing />
                  ) : index === 1 ? (
                    <Security />
                  ) : (
                    <Vip />
                  )}
                </Feature>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
