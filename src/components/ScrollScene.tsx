import { useEffect, useRef, useState, type ReactNode } from "react";

export type SceneStep = { id: string; label: string; title: string; body: string; extra?: ReactNode; screen: ReactNode };

type ScrollSceneProps = {
  tone: "dark" | "light";
  device: "phone" | "browser";
  address?: string;
  steps: readonly SceneStep[];
  outro: ReactNode;
};

/** 스크롤 위치에 따라 고정된 기기 목업의 화면이 바뀌는 장면. */
export default function ScrollScene({ tone, device, address, steps, outro }: ScrollSceneProps) {
  const [active, setActive] = useState(steps[0].id);
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll<HTMLElement>("[data-step]");
    if (!items) return;
    // 화면 중앙선을 지난 마지막 단계를 활성으로 둔다. 앵커 이동·새로고침 위치에서도 상태가 맞는다.
    const sync = () => {
      const center = window.innerHeight / 2;
      let current = steps[0].id;
      items.forEach((item) => {
        if (item.getBoundingClientRect().top < center && item.dataset.step) current = item.dataset.step;
      });
      setActive(current);
    };
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(sync);
    };
    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [steps]);

  return (
    <div className={`scroll-scene scene-${tone}`}>
      <div className="scene-track">
        <div className="scene-stage">
          <div className={`scene-device scene-${device}`} aria-hidden="true">
            {address && <div className="device-bar"><span>● ● ●</span><span>{address}</span></div>}
            <div className="device-body">
              {steps.map((step) => (
                <div key={step.id} className={`device-screen${active === step.id ? " is-active" : ""}`}>{step.screen}</div>
              ))}
            </div>
          </div>
          <p className="scene-caption">설명을 위해 재구성한 화면입니다. 실제 서비스 화면과 다릅니다.</p>
        </div>
        <ol className="scene-steps" ref={listRef}>
          {steps.map((step) => (
            <li key={step.id} data-step={step.id} className={active === step.id ? "is-active" : undefined}>
              <span className="detail-number">{step.label}</span>
              <h4>{step.title}</h4>
              <p>{step.body}</p>
              {step.extra}
            </li>
          ))}
        </ol>
      </div>
      <div className="scene-outro">{outro}</div>
    </div>
  );
}
