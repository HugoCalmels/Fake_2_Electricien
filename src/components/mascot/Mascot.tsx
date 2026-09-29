// Mascotte FakeElec : électricien façon réclame années 50 (personnage original).
// Buste coupé en bas, prévu pour « sortir » du bas d'un bloc.

const INK = "#1d1a16";
const SKIN = "#f6d7b8";
const SKIN_SHADE = "#e8bf98";
const HAIR = "#3b2a1e";
const JACKET = "#2c4f78";
const JACKET_SHADE = "#223f61";
const SHIRT = "#fbf5e6";
const RED = "#c8452d";

export default function Mascot({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 360" aria-hidden="true">
      <g stroke={INK} strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
        {/* ===== Buste : veste de travail ===== */}
        <path d="M 58 360 C 58 296 92 266 150 262 C 208 266 242 296 242 360 Z" fill={JACKET} />
        {/* Col de chemise en V */}
        <path d="M 122 264 L 150 304 L 178 264 C 168 258 132 258 122 264 Z" fill={SHIRT} />
        <path d="M 122 264 L 112 292 L 138 286 Z M 178 264 L 188 292 L 162 286 Z" fill={SHIRT} />
        {/* Poche avec tournevis */}
        <path d="M 176 312 L 212 312 L 210 346 L 178 346 Z" fill={JACKET_SHADE} />
        <path d="M 188 312 L 188 290" fill="none" stroke="#9aa3a6" strokeWidth="6" />
        <rect x="182" y="298" width="12" height="18" rx="3" fill={RED} strokeWidth="4" />
        {/* Écusson éclair */}
        <circle cx="108" cy="322" r="15" fill={SHIRT} strokeWidth="4" />
        <path d="M 111 310 L 101 324 L 108 324 L 104 335 L 115 320 L 108 320 Z" fill={RED} strokeWidth="2.5" />

        {/* ===== Cou ===== */}
        <path d="M 132 226 L 132 266 C 142 274 158 274 168 266 L 168 226 Z" fill={SKIN} />
        <path d="M 134 250 C 144 256 156 256 166 250" fill="none" stroke={SKIN_SHADE} strokeWidth="6" />

        {/* ===== Oreilles ===== */}
        <path d="M 84 150 C 66 146 64 178 86 184" fill={SKIN} />
        <path d="M 216 150 C 234 146 236 178 214 184" fill={SKIN} />

        {/* ===== Tête ===== */}
        <path
          d="M 150 74 C 198 74 220 108 218 156 C 216 204 190 236 150 236 C 110 236 84 204 82 156 C 80 108 102 74 150 74 Z"
          fill={SKIN}
        />

        {/* ===== Cheveux : banane gominée ===== */}
        <path
          d="M 84 148 C 70 104 84 54 134 42 C 170 32 216 46 228 84 C 234 104 226 120 212 118 C 208 102 196 96 184 102 C 174 92 158 92 150 102 C 154 82 136 66 114 76 C 98 84 92 102 96 124 C 90 130 86 138 84 148 Z"
          fill={HAIR}
        />
        {/* Mèche qui retombe sur le front */}
        <path d="M 150 102 C 136 108 130 122 136 134 C 128 128 124 114 130 104 Z" fill={HAIR} strokeWidth="4" />
        {/* Reflets de la brillantine */}
        <path d="M 112 62 C 134 48 166 44 194 54" fill="none" stroke="#6b4a33" strokeWidth="4" />
        <path d="M 196 66 C 208 72 216 82 218 94" fill="none" stroke="#6b4a33" strokeWidth="4" />

        {/* ===== Visage ===== */}
        {/* Sourcils */}
        <path d="M 106 136 Q 121 124 137 132" fill="none" strokeWidth="6" />
        <path d="M 164 128 Q 180 118 196 128" fill="none" strokeWidth="6" />
        {/* Œil ouvert */}
        <ellipse cx="122" cy="156" rx="7" ry="10" fill={INK} />
        <circle cx="124.5" cy="152" r="2.4" fill="#fff" stroke="none" />
        {/* Clin d'œil */}
        <path d="M 164 158 Q 178 148 192 158" fill="none" strokeWidth="5" />
        <path d="M 194 150 L 200 146 M 195 158 L 202 158" fill="none" strokeWidth="3" />
        {/* Nez */}
        <path d="M 152 158 Q 140 182 156 186" fill="none" strokeWidth="4.5" />
        {/* Grand sourire */}
        <path d="M 108 194 Q 150 240 198 190 Q 152 212 108 194 Z" fill="#fff" strokeWidth="4.5" />
        <path d="M 104 186 Q 100 196 108 202" fill="none" strokeWidth="4" />
        <path d="M 200 180 Q 208 190 202 198" fill="none" strokeWidth="4" />
        {/* Joues */}
        <circle cx="104" cy="178" r="8" fill={RED} opacity="0.18" stroke="none" />
        <circle cx="198" cy="172" r="8" fill={RED} opacity="0.18" stroke="none" />

        {/* ===== Bras replié, pouce levé ===== */}
        {/* Manche : de l'épaule au coude, puis avant-bras vertical */}
        <path
          d="M 104 272 C 92 292 78 312 58 314 C 40 314 32 300 34 284 L 38 214 L 80 214 L 78 272 C 86 276 96 274 104 272 Z"
          fill={JACKET}
        />
        <path d="M 76 226 L 74 280" fill="none" stroke={JACKET_SHADE} strokeWidth="6" />
        {/* Poignet de chemise */}
        <rect x="34" y="204" width="50" height="16" rx="4" fill={SHIRT} />
        {/* Pouce */}
        <rect x="40" y="116" width="24" height="54" rx="12" fill={SKIN} />
        <path d="M 44 132 C 50 128 56 128 60 132" fill="none" strokeWidth="3" />
        {/* Poing */}
        <rect x="28" y="158" width="62" height="50" rx="20" fill={SKIN} />
        <path d="M 36 174 C 50 170 66 170 82 174 M 36 190 C 50 186 66 186 82 190" fill="none" strokeWidth="3.5" />
      </g>
    </svg>
  );
}
