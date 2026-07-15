import HeroBadge from "./Hero/HeroBadge";
import HeroButtons from "./Hero/HeroButtons";
import HeroStats from "./Hero/HeroStats";
import AIChatPreview from "./Hero/AIChatPreview";
import HeroBackground from "./Hero/HeroBackground";

export default function Hero() {
  return (
    <HeroBackground>

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <HeroBadge />

            <h1 className="mt-8 text-6xl font-extrabold leading-tight text-slate-900">

              Learn Commerce
              <br />

              with

              <span className="text-blue-600">
                {" "}
                AI Teacher
              </span>

            </h1>

            <p className="mt-8 text-xl leading-8 text-slate-600">

              India's smartest AI platform for Commerce students.

              Learn faster.

              Practice better.

              Score higher.

            </p>

            <HeroButtons />

            <HeroStats />

          </div>

          {/* Right */}

          <AIChatPreview />

        </div>

      </div>

    </HeroBackground>
  );
}