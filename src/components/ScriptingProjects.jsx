import UGCAccount from "./UGCAccount.jsx";
import StaticGallery from "./StaticGallery.jsx";
import ScriptCard from "./ScriptCard.jsx";
import { Reveal } from "./ui.jsx";
import { contentAccounts, staticPosts, scripts } from "../data/scriptingProjects.js";

export default function ScriptingProjects() {
  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24">
      {contentAccounts.map((account, i) => (
        <div key={account.id} className={i > 0 ? "border-t border-ink/10 pt-20 lg:pt-24" : ""}>
          <UGCAccount
            account={account}
            number={i + 1}
            total={contentAccounts.length}
            flip={i % 2 === 1}
            label="Brand account"
            heading="Reels I worked on"
          />
        </div>
      ))}

      <Reveal>
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mute">Static content</p>
            <h4 className="mt-1 font-display text-4xl tracking-[-0.02em]">
              Posts & <span className="italic">carousels</span>
            </h4>
          </div>
          <p className="font-hand text-xl text-ink/60">tap any tile for a closer look</p>
        </div>
        <StaticGallery posts={staticPosts} />
      </Reveal>

      <Reveal>
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mute">Video scripting</p>
          <h4 className="mt-1 font-display text-4xl tracking-[-0.02em]">
            Hooks, then <span className="italic">stories</span>
          </h4>
          <p className="mt-3 leading-relaxed text-mute">
            Every script starts with a hook that earns the next three seconds, then a structure that carries the viewer to
            the end.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {scripts.map((script, i) => (
            <ScriptCard key={i} script={script} index={i} />
          ))}
        </div>
      </Reveal>
    </div>
  );
}
