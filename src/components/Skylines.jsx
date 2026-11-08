// Flat SVG silhouettes drawn on a 1200x200 canvas; colors come from CSS (.sk-far / .sk-near / .sk-glow).

function Pagoda({ cx, base, tiers, w, gap }) {
  const roofs = [];
  for (let t = 0; t < tiers; t += 1) {
    const y = base - t * gap;
    const hw = w - t * ((w * 0.55) / tiers);
    roofs.push(
      <g key={t}>
        {t < tiers - 1 && <rect x={cx - hw + 16} y={y - gap + 8} width={(hw - 16) * 2} height={gap - 8} />}
        <path
          d={`M${cx - hw - 12} ${y - 10}Q${cx - hw + 6} ${y + 4} ${cx - hw + 22} ${y - 1}L${cx + hw - 22} ${y - 1}Q${cx + hw - 6} ${y + 4} ${cx + hw + 12} ${y - 10}L${cx + hw} ${y + 8}L${cx - hw} ${y + 8}Z`}
        />
      </g>,
    );
  }
  const top = base - (tiers - 1) * gap;
  return (
    <g>
      <rect x={cx - w - 6} y={base + 8} width={(w + 6) * 2} height={200 - base - 8} />
      {roofs}
      <polygon points={`${cx - 6},${top - 10} ${cx},${top - 42} ${cx + 6},${top - 10}`} />
      <circle cx={cx} cy={top - 45} r="3" />
    </g>
  );
}

function Mushroom({ cx, h, r }) {
  const y = 200 - h;
  return (
    <g>
      <path d={`M${cx - 5} 200L${cx - 3} ${y}L${cx + 3} ${y}L${cx + 5} 200Z`} />
      <path d={`M${cx - r} ${y + 4}Q${cx} ${y - r * 1.5} ${cx + r} ${y + 4}Q${cx} ${y + 14} ${cx - r} ${y + 4}Z`} />
    </g>
  );
}

function Torii({ cx, s = 1 }) {
  return (
    <g transform={`translate(${cx} 200) scale(${s})`}>
      <rect x="-34" y="-110" width="10" height="110" />
      <rect x="24" y="-110" width="10" height="110" />
      <path d="M-54 -112Q0 -96 54 -112L50 -126Q0 -111 -50 -126Z" />
      <rect x="-42" y="-92" width="84" height="7" />
      <rect x="-5" y="-108" width="10" height="17" />
    </g>
  );
}

function Peaks({ list }) {
  return (
    <>
      {list.map(([x, h, w]) => (
        <polygon key={x} points={`${x - w},200 ${x - 4},${200 - h} ${x + 3},${200 - h + 6} ${x + w},200`} />
      ))}
    </>
  );
}

function Mondstadt() {
  return (
    <>
      <path className="sk-far" d="M0 200V140Q120 100 260 135T520 130T800 118T1060 132T1200 124V200Z" />
      <g className="sk-near">
        <path d="M0 200V172Q200 150 400 168T800 164T1200 168V200Z" />
        {/* windmill */}
        <polygon points="162,176 198,176 190,100 170,100" />
        <g className="windmill">
          {[0, 90, 180, 270].map((a) => (
            <rect key={a} x="177" y="46" width="6" height="54" transform={`rotate(${a} 180 100)`} />
          ))}
        </g>
        <circle cx="180" cy="100" r="6" />
        {/* Favonius Cathedral */}
        <rect x="610" y="116" width="60" height="62" />
        <polygon points="640,34 651,116 629,116" />
        <rect x="612" y="92" width="12" height="30" />
        <polygon points="618,70 627,92 609,92" />
        <rect x="656" y="92" width="12" height="30" />
        <polygon points="662,70 671,92 653,92" />
        {/* houses */}
        {[760, 812, 872, 330, 384].map((x) => (
          <g key={x}>
            <rect x={x} y="150" width="40" height="30" />
            <polygon points={`${x - 5},150 ${x + 20},126 ${x + 45},150`} />
          </g>
        ))}
        {/* trees */}
        {[250, 470, 560, 720, 960, 1040, 1120].map((x, i) => (
          <circle key={x} cx={x} cy={166 - (i % 3) * 4} r={14 + (i % 2) * 4} />
        ))}
      </g>
    </>
  );
}

function Liyue() {
  return (
    <>
      <g className="sk-far">
        <Peaks list={[[60, 130, 26], [125, 92, 22], [380, 112, 24], [445, 142, 28], [930, 122, 26], [1004, 152, 30], [1092, 96, 22], [1162, 126, 26]]} />
      </g>
      <g className="sk-near">
        <path d="M0 200V176Q300 160 600 174T1200 170V200Z" />
        <Pagoda cx={600} base={150} tiers={3} w={74} gap={30} />
        <Pagoda cx={250} base={168} tiers={2} w={44} gap={26} />
        <Pagoda cx={950} base={168} tiers={2} w={44} gap={26} />
        {[130, 330, 860, 1070].map((x) => (
          <g key={x}>
            <rect x={x} y="168" width="30" height="20" />
            <polygon points={`${x - 6},168 ${x + 15},152 ${x + 36},168`} />
          </g>
        ))}
      </g>
    </>
  );
}

function Inazuma() {
  return (
    <>
      <path className="sk-far" d="M0 200V150Q180 118 360 146T720 138T1060 144T1200 136V200Z" />
      <g className="sk-near">
        <path d="M0 200V176Q300 160 600 174T1200 170V200Z" />
        <Torii cx={300} s={1.05} />
        <Torii cx={1010} s={0.7} />
        <Pagoda cx={720} base={156} tiers={4} w={92} gap={30} />
        {/* sakura trees */}
        {[120, 470, 560, 880, 1130].map((x, i) => (
          <g key={x}>
            <rect x={x - 3} y="150" width="6" height="30" />
            <circle cx={x} cy="142" r={20 + (i % 2) * 6} />
            <circle cx={x - 16} cy="154" r="13" />
            <circle cx={x + 16} cy="154" r="13" />
          </g>
        ))}
      </g>
    </>
  );
}

function Sumeru() {
  return (
    <>
      <path className="sk-far" d="M0 200V150Q200 120 420 148T800 140T1200 138V200Z" />
      <g className="sk-near">
        <path d="M0 200V178Q300 162 600 176T1200 172V200Z" />
        <Mushroom cx={90} h={78} r={44} />
        <Mushroom cx={200} h={46} r={28} />
        <Mushroom cx={360} h={92} r={52} />
        <Mushroom cx={490} h={40} r={24} />
        {/* Akademiya dome */}
        <path d="M690 200V150Q790 70 890 150V200Z" />
        <rect x="778" y="52" width="24" height="40" />
        <polygon points="790,30 804,56 776,56" />
        {[706, 736, 846, 876].map((x) => (
          <rect key={x} x={x} y="150" width="8" height="50" />
        ))}
        <Mushroom cx={1000} h={70} r={40} />
        <Mushroom cx={1100} h={44} r={26} />
        <Mushroom cx={1170} h={86} r={34} />
      </g>
    </>
  );
}

function Fontaine() {
  return (
    <>
      <path className="sk-far" d="M0 200V150Q200 130 420 150T800 142T1200 146V200Z" />
      <g className="sk-near">
        {/* Opera Epiclese */}
        <rect x="500" y="130" width="400" height="70" />
        <path d="M590 130Q700 30 810 130Z" />
        <polygon points="700,0 708,44 692,44" />
        <rect x="500" y="84" width="34" height="50" />
        <polygon points="517,52 540,86 494,86" />
        <rect x="866" y="84" width="34" height="50" />
        <polygon points="883,52 906,86 860,86" />
        {[548, 578, 608, 788, 818, 848].map((x) => (
          <rect key={x} x={x} y="100" width="8" height="36" />
        ))}
        {/* side buildings */}
        <rect x="240" y="146" width="90" height="54" />
        <path d="M240 146Q285 108 330 146Z" />
        <rect x="1000" y="140" width="110" height="60" />
        <path d="M1000 140Q1055 96 1110 140Z" />
      </g>
      <g className="waves">
        <g className="wave wave--a">
          <path d="M0 178Q50 164 100 178T200 178T300 178T400 178T500 178T600 178T700 178T800 178T900 178T1000 178T1100 178T1200 178T1300 178T1400 178T1500 178T1600 178T1700 178T1800 178T1900 178T2000 178T2100 178T2200 178T2300 178T2400 178V200H0Z" />
        </g>
        <g className="wave wave--b">
          <path d="M0 188Q50 176 100 188T200 188T300 188T400 188T500 188T600 188T700 188T800 188T900 188T1000 188T1100 188T1200 188T1300 188T1400 188T1500 188T1600 188T1700 188T1800 188T1900 188T2000 188T2100 188T2200 188T2300 188T2400 188V200H0Z" />
        </g>
      </g>
    </>
  );
}

function Natlan() {
  return (
    <>
      <polygon className="sk-far" points="0,200 90,120 150,150 240,96 330,200" />
      <polygon className="sk-far" points="880,200 960,130 1040,108 1120,150 1200,118 1200,200" />
      <g className="sk-near">
        {/* volcano */}
        <polygon points="360,200 520,64 560,64 720,200" />
        <ellipse className="sk-glow crater" cx="540" cy="64" rx="22" ry="6" />
        <g className="lava">
          <path d="M530 68Q520 110 540 140T520 200" />
          <path d="M548 68Q560 100 548 130T572 200" />
        </g>
        <path d="M0 200V176L70 160L120 178L200 156L270 176L360 200Z" />
        <path d="M720 200L800 170L860 184L940 160L1020 182L1100 164L1200 178V200Z" />
        {/* totem spires */}
        <polygon points="840,200 850,120 860,200" />
        <polygon points="990,200 1000,138 1010,200" />
      </g>
    </>
  );
}

const SCENES = { mondstadt: Mondstadt, liyue: Liyue, inazuma: Inazuma, sumeru: Sumeru, fontaine: Fontaine, natlan: Natlan };

export default function Skyline({ region }) {
  const Scene = SCENES[region];
  return (
    <svg className="skyline" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <Scene />
    </svg>
  );
}
