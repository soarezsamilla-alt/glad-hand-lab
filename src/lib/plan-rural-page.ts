const comparacaoSplit = { url: "/comparacao-split.jpg" };

export const pageCss = String.raw`
:root{
  --navy:#0a1a2c; --navy-2:#0c2138; --navy-card:#102339; --navy-border:rgba(255,255,255,.08);
  --lime:#c2f53c; --lime-deep:#a9e600;
  --red:#ff4d4d; --red-soft:#ffe6e6;
  --white:#ffffff; --ink:#0c1622; --muted-d:rgba(255,255,255,.66); --muted-l:#6b7585;
  --lavender:#eaf0ff; --lavender-bd:#dbe4ff; --blue:#2f6bff;
  --gold:#c9a02f; --green:#27a844;
  --radius:18px; --shadow-card:0 18px 40px -20px rgba(8,15,30,.55); --maxw:1140px;
}
.pr *{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--navy);overflow-x:hidden}
.pr{font-family:'Inter',system-ui,Arial,sans-serif;background:var(--navy);color:var(--white);line-height:1.55;-webkit-font-smoothing:antialiased}
.pr img{max-width:100%;display:block}
.pr a{color:inherit;text-decoration:none}
.pr button{font-family:inherit;cursor:pointer;border:none;background:none}
.pr :focus-visible{outline:3px solid var(--lime);outline-offset:3px;border-radius:6px}

.pr .wrap{max-width:var(--maxw);margin:0 auto;width:100%}
.pr .sec{padding:clamp(54px,8vw,92px) 20px;position:relative}
.pr .sec--navy{background:var(--navy)}
.pr .sec--white{background:var(--white);color:var(--ink)}
.pr .sec--red{background:var(--red);color:#fff}
.pr .sec-title{font-family:'Montserrat',sans-serif;font-weight:800;font-size:clamp(1.55rem,4.4vw,2.55rem);line-height:1.12;text-align:center;text-transform:uppercase;letter-spacing:-.5px}
.pr .sec--navy .sec-title{color:#fff}.pr .sec--white .sec-title{color:var(--ink)}
.pr .sec-sub{text-align:center;max-width:640px;margin:16px auto 0;font-size:clamp(.98rem,2.4vw,1.12rem)}
.pr .sec--navy .sec-sub{color:var(--muted-d)}.pr .sec--white .sec-sub{color:var(--muted-l)}
.pr .mark{background:var(--lime);color:#0a1a2c;padding:.02em .18em;border-radius:3px;-webkit-box-decoration-break:clone;box-decoration-break:clone}
.pr .mark-dark{background:var(--ink);color:#fff;padding:.02em .2em;border-radius:3px;-webkit-box-decoration-break:clone;box-decoration-break:clone}
.pr .lime-text{color:var(--lime)}
.pr .lime-ul{color:#fff;border-bottom:4px solid var(--lime);padding-bottom:3px;display:inline-block;line-height:1}
@keyframes prBtnPulse{0%,100%{transform:scale(1);box-shadow:0 14px 30px -10px rgba(169,230,0,.55)}50%{transform:scale(1.03);box-shadow:0 18px 36px -10px rgba(169,230,0,.75)}}
.pr .btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-family:'Montserrat',sans-serif;font-weight:800;text-transform:uppercase;letter-spacing:.4px;font-size:clamp(.92rem,2vw,1.05rem);background:var(--lime);color:#0a1a2c;padding:19px 40px;border-radius:999px;box-shadow:0 14px 30px -10px rgba(169,230,0,.55);transition:transform .18s ease,box-shadow .18s ease,filter .18s ease;text-align:center;animation:prBtnPulse 2.4s ease-in-out infinite;will-change:transform}
.pr .btn:hover{animation-play-state:paused;transform:translateY(-2px) scale(1.03);filter:brightness(1.04);box-shadow:0 20px 38px -12px rgba(169,230,0,.7)}
.pr .btn:active{animation-play-state:paused;transform:translateY(0) scale(.99)}
@media (prefers-reduced-motion:reduce){.pr .btn{animation:none}}
.pr .btn .arr{font-weight:900}
.pr .eyebrow{display:inline-flex;align-items:center;gap:8px;font-family:'Montserrat',sans-serif;font-weight:800;font-size:.74rem;letter-spacing:.6px;text-transform:uppercase;padding:8px 16px;border-radius:999px}
.pr .reveal{opacity:0;transform:translateY(26px);transition:opacity .6s ease,transform .6s ease}
.pr .reveal.in{opacity:1;transform:none}

.pr .topbar{position:sticky;top:0;z-index:60;background:var(--red);color:#fff;text-align:center;font-family:'Montserrat',sans-serif;font-weight:800;text-transform:uppercase;font-size:clamp(.7rem,2.3vw,.9rem);letter-spacing:.5px;padding:11px 16px;display:flex;align-items:center;justify-content:center;gap:9px}
.pr .topbar svg{width:16px;height:16px;flex:none}
.pr .topbar #pr-viewers{display:inline-block;background:#fff;color:var(--red);padding:2px 10px;border-radius:999px;font-weight:900;margin:0 4px;box-shadow:0 2px 6px rgba(0,0,0,.2)}

.pr .hero{background:var(--navy);text-align:center;padding:clamp(40px,6vw,60px) 20px clamp(56px,8vw,80px)}
.pr .hero .badge-top{margin-bottom:18px;background:rgba(194,245,60,.12);color:var(--lime);border:1px solid rgba(194,245,60,.3)}
.pr .hero h1{font-family:'Montserrat',sans-serif;font-weight:800;font-size:clamp(1.8rem,5.6vw,3.15rem);line-height:1.12;letter-spacing:-1px;max-width:920px;margin:0 auto}
.pr .hero h1 .sub-line{display:block;color:var(--lime);margin-top:8px}
.pr .hero-text{max-width:600px;margin:26px auto 0;color:var(--muted-d);font-size:clamp(1rem,2.6vw,1.15rem)}
.pr .hero-text b{color:#fff}
.pr .hero-mock{max-width:520px;margin:32px auto 0;border-radius:16px;overflow:hidden;box-shadow:0 30px 60px -28px rgba(0,0,0,.7);animation:prBonusPulse 3s ease-in-out infinite;will-change:transform}
@media (prefers-reduced-motion: reduce){.pr .hero-mock{animation:none}}
.pr .notify-pill{display:inline-flex;align-items:center;gap:9px;margin:26px auto 0;background:transparent;border:1px solid var(--navy-border);padding:13px 22px;border-radius:999px;color:#dfe7ef;font-size:.92rem;font-weight:500}
.pr .hero .btn{margin-top:26px}
.pr .trust-line{margin-top:16px;color:var(--muted-d);font-size:.8rem;letter-spacing:.5px;text-transform:uppercase;font-weight:600}

.pr .grid-4{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;margin-top:46px;max-width:900px;margin-left:auto;margin-right:auto}
.pr .feat-card{background:var(--navy-card);border:1px solid var(--navy-border);border-radius:var(--radius);padding:30px 22px;text-align:center;transition:transform .2s ease,border-color .2s ease}
.pr .feat-card:hover{transform:translateY(-4px);border-color:rgba(194,245,60,.4)}
.pr .feat-ic{width:52px;height:52px;margin:0 auto 16px;display:grid;place-items:center;color:var(--lime)}
.pr .feat-ic svg{width:34px;height:34px}
.pr .feat-card h3{font-family:'Montserrat',sans-serif;font-weight:800;text-transform:uppercase;font-size:.95rem;letter-spacing:.3px;margin-bottom:10px}
.pr .feat-card p{color:var(--muted-d);font-size:.86rem}

.pr .carousel{position:relative;margin-top:38px}
.pr .carousel-track{display:flex;gap:16px;overflow-x:auto;padding:6px 2px 20px;scroll-snap-type:x mandatory;scroll-behavior:smooth;scrollbar-width:thin}
.pr .carousel-track::-webkit-scrollbar{height:8px}
.pr .carousel-track::-webkit-scrollbar-thumb{background:#3a516c;border-radius:8px}
.pr .sec--white .carousel-track::-webkit-scrollbar-thumb{background:#cfd6dd}
.pr .img-card{flex:0 0 auto;width:clamp(240px,30vw,300px);scroll-snap-align:center;border-radius:16px;overflow:hidden;background:var(--navy-card);box-shadow:var(--shadow-card);border:1px solid var(--navy-border)}
.pr .img-card img{width:100%;height:100%;object-fit:cover;aspect-ratio:3/4;background:#1a2c42}
.pr .testi-card{aspect-ratio:auto}
.pr .testi-card img{aspect-ratio:9/16;object-fit:cover}
.pr .cbtn{position:absolute;top:calc(50% - 16px);transform:translateY(-50%);width:44px;height:44px;border-radius:50%;border:2px solid var(--lime);background:var(--white);display:grid;place-items:center;color:#1a1a1a;box-shadow:0 6px 16px -8px rgba(0,0,0,.4);z-index:4}
.pr .cbtn:hover{background:var(--lime)}
.pr .cprev{left:-8px}.pr .cnext{right:-8px}
@media(max-width:600px){.pr .cprev{left:2px}.pr .cnext{right:2px}.pr .cbtn{width:38px;height:38px}}
.pr .carousel--sample .carousel-track{scroll-snap-type:x mandatory;overflow:hidden}
.pr .carousel--sample .img-card{flex:0 0 100%;width:100%;background:transparent;border:none;box-shadow:none;border-radius:0;display:flex;align-items:center;justify-content:center;scroll-snap-align:center}
.pr .carousel--sample .img-card img{width:auto;max-width:min(100%,420px);height:auto;max-height:55vh;aspect-ratio:auto;object-fit:contain;display:block;margin:0 auto;background:transparent}
.pr .carousel--testi .img-card img{max-width:min(100%,560px);max-height:60vh}

.pr .ba{max-width:920px;margin:42px auto 0;position:relative;border-radius:18px;overflow:hidden;box-shadow:var(--shadow-card);aspect-ratio:16/9;background:#1a2c42}
.pr .ba img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}
.pr .ba-overlay{position:absolute;inset:0;display:grid;grid-template-columns:1fr 1fr;align-items:start;z-index:2;padding:18px}
.pr .ba-overlay .ba-badge{justify-self:start;align-self:start}
.pr .ba-overlay .ba-badge.good{justify-self:end}
.pr .ba-divider{position:absolute;top:0;bottom:0;left:50%;width:4px;background:#fff;transform:translateX(-50%);z-index:3}
.pr .ba-badge{display:inline-flex;align-items:center;gap:8px;background:#fff;padding:7px 14px;border-radius:999px;font-family:'Montserrat',sans-serif;font-weight:800;font-size:.78rem;color:#1c1c1c;box-shadow:0 6px 16px -8px rgba(0,0,0,.4)}
.pr .ba-badge.bad{color:#d23030}.pr .ba-badge.good{color:#1f8a36}
.pr .cmp-wrap{display:grid;grid-template-columns:1fr 1fr;gap:24px;max-width:880px;margin:36px auto 0}
.pr .cmp-card{background:#f6f7f9;border-radius:16px;padding:26px 24px;box-shadow:0 10px 26px -18px rgba(0,0,0,.3)}
.pr .cmp-pill{display:flex;align-items:center;justify-content:center;gap:8px;font-family:'Montserrat',sans-serif;font-weight:800;font-size:.86rem;padding:11px;border-radius:10px;text-transform:uppercase;margin-bottom:18px}
.pr .cmp-pill.bad{background:#fff;color:var(--red);border:1px solid #ffd5d5}
.pr .cmp-pill.good{background:var(--lime);color:#1a1a1a}
.pr .cmp-li{display:flex;align-items:flex-start;gap:10px;padding:7px 0;font-size:.92rem;font-weight:600;color:#33414f}
.pr .cmp-li svg{width:18px;height:18px;flex:none;margin-top:2px}
.pr .x-ic{color:var(--red)}.pr .v-ic{color:var(--green)}

.pr .split{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;max-width:920px;margin:44px auto 0}
.pr .split-img{border-radius:16px;overflow:hidden;box-shadow:var(--shadow-card)}
.pr .split-img img{width:100%;aspect-ratio:4/3;object-fit:cover;background:#2d5a2b}
.pr .check-list{list-style:none;display:flex;flex-direction:column;gap:16px}
.pr .check-list li{display:flex;align-items:center;gap:12px;font-size:clamp(.95rem,2.2vw,1.08rem);font-weight:500}
.pr .check-list li svg{width:22px;height:22px;color:var(--lime);flex:none}

.pr .kit-flag{display:flex;justify-content:flex-start;max-width:1040px;margin:0 auto 18px}
.pr .kit-card{max-width:1040px;margin:0 auto;background:#fff;border-radius:26px;padding:clamp(26px,4vw,46px);display:grid;grid-template-columns:1fr 1.1fr;gap:40px;align-items:center;box-shadow:var(--shadow-card);color:var(--ink)}
.pr .kit-mock{position:relative;border-radius:14px;overflow:hidden}
.pr .kit-mock img{width:100%;border-radius:14px;background:#e7efe1}
.pr .flag-red{position:absolute;top:14px;left:-6px;background:var(--red);color:#fff;font-family:'Montserrat',sans-serif;font-weight:800;font-size:.66rem;padding:7px 14px;border-radius:6px;letter-spacing:.5px;box-shadow:0 8px 16px -8px rgba(0,0,0,.4);text-transform:uppercase;z-index:2}
.pr .item-tag{display:inline-block;background:#eafbe0;color:#3f8a1f;font-family:'Montserrat',sans-serif;font-weight:800;font-size:.66rem;letter-spacing:1px;padding:5px 12px;border-radius:6px;margin-bottom:12px}
.pr .kit-card h2{font-family:'Montserrat',sans-serif;font-weight:900;font-size:clamp(1.4rem,3.4vw,2rem);text-transform:uppercase;line-height:1.1;color:var(--ink)}
.pr .kit-card .lead{font-style:italic;font-weight:600;color:#34404c;margin:14px 0 20px;font-size:1rem}
.pr .kit-list{list-style:none;display:flex;flex-direction:column;gap:14px}
.pr .kit-list li{display:flex;gap:12px;align-items:flex-start}
.pr .kit-list li svg{width:20px;height:20px;color:var(--green);flex:none;margin-top:2px}
.pr .kit-list b{font-family:'Montserrat',sans-serif;font-weight:700;font-size:.96rem;color:var(--ink);display:block}
.pr .kit-list small{color:#7b96b0;font-size:.82rem}
.pr .kit-more{display:block;margin-top:22px;text-align:center;color:var(--red);font-family:'Montserrat',sans-serif;font-weight:800;font-size:.92rem;text-transform:uppercase}

.pr .bonus-pill{display:flex;justify-content:center;margin:24px 0 8px}
.pr .bonus-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:30px}
.pr .bonus-card{background:#fff;border-radius:16px;overflow:hidden;box-shadow:var(--shadow-card);color:var(--ink);display:flex;flex-direction:column}
.pr .bonus-cover{position:relative;background:#0f2036}
@keyframes prBonusPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}
.pr .bonus-cover img{display:block;margin:0 auto;max-width:88%;max-height:220px;width:auto;height:auto;aspect-ratio:auto;object-fit:contain;padding:14px 0;animation:prBonusPulse 3s ease-in-out infinite;will-change:transform}
@media (prefers-reduced-motion: reduce){.pr .bonus-cover img{animation:none}}
.pr .bonus-num{position:absolute;top:10px;left:10px;background:var(--ink);color:var(--lime);font-family:'Montserrat',sans-serif;font-weight:800;font-size:.6rem;letter-spacing:.6px;padding:5px 10px;border-radius:6px}
.pr .bonus-body{padding:18px 18px 22px;display:flex;flex-direction:column;flex:1}
.pr .bonus-body h3{font-family:'Montserrat',sans-serif;font-weight:800;text-transform:uppercase;font-size:.92rem;color:var(--ink);margin-bottom:8px;line-height:1.2}
.pr .bonus-body p{color:#7b96b0;font-size:.83rem;flex:1}
.pr .bonus-price{display:flex;align-items:center;gap:10px;margin-top:14px;font-family:'Montserrat',sans-serif;font-weight:800}
.pr .bonus-price .old{color:#9aa6b2;text-decoration:line-through;font-size:.86rem}
.pr .bonus-price .free{color:#3f8a1f;background:#eafbe0;padding:3px 12px;border-radius:999px;font-size:.78rem;letter-spacing:.5px}

.pr .steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin:48px 0 40px}
.pr .step{text-align:center}
.pr .step-num{width:50px;height:50px;margin:0 auto 16px;border-radius:50%;background:var(--lime);color:#0a1a2c;font-family:'Montserrat',sans-serif;font-weight:900;font-size:1.3rem;display:grid;place-items:center;box-shadow:0 10px 24px -10px rgba(169,230,0,.6)}
.pr .step h3{font-family:'Montserrat',sans-serif;font-weight:800;text-transform:uppercase;font-size:.92rem;margin-bottom:9px}
.pr .step p{color:var(--muted-d);font-size:.85rem;max-width:230px;margin:0 auto}
.pr .center-btn{display:flex;justify-content:center}

.pr .price-flag{display:flex;justify-content:center;margin:14px 0 26px}
.pr .price-flag .eyebrow{background:var(--red-soft);color:#e23b3b}
.pr .countdown{display:flex;gap:10px;justify-content:center;margin:6px 0 22px}
.pr .cd-box{background:var(--ink);color:#fff;border-radius:12px;padding:12px 14px;min-width:64px;text-align:center}
.pr .cd-box b{font-family:'Montserrat',sans-serif;font-weight:900;font-size:1.5rem;display:block;line-height:1;color:var(--lime)}
.pr .cd-box span{font-size:.6rem;letter-spacing:1px;text-transform:uppercase;color:#aeb9c6}
.pr .price-single{max-width:460px;margin:28px auto 0}
.pr .price-card{border:2px solid var(--lime);border-radius:22px;padding:34px 28px;text-align:center;color:var(--ink);position:relative;background:linear-gradient(180deg,#f4ffe2,#fff 30%);box-shadow:0 30px 60px -30px rgba(120,180,20,.5)}
.pr .best-tag{position:absolute;top:-15px;left:50%;transform:translateX(-50%);background:var(--ink);color:var(--lime);font-family:'Montserrat',sans-serif;font-weight:800;font-size:.64rem;letter-spacing:.5px;padding:7px 18px;border-radius:999px;text-transform:uppercase;white-space:nowrap}
.pr .price-card h3{font-family:'Montserrat',sans-serif;font-weight:800;text-transform:uppercase;font-size:1.35rem;color:var(--ink);margin-bottom:6px}
.pr .price-old{color:#9aa6b2;text-decoration:line-through;font-size:.92rem;margin-top:6px}
.pr .price-now{font-family:'Montserrat',sans-serif;font-weight:900;font-size:clamp(2.4rem,6vw,3rem);color:var(--ink);line-height:1;margin:2px 0 4px}
.pr .price-tagline{font-size:.8rem;color:#6f8a1c;font-weight:800;text-transform:uppercase;letter-spacing:.3px;margin-bottom:16px}
.pr .price-mock{width:min(100%,360px);margin:10px auto 18px;border-radius:10px;overflow:hidden;animation:prBonusPulse 3s ease-in-out infinite;will-change:transform}
@media (prefers-reduced-motion: reduce){.pr .price-mock{animation:none}}
.pr .price-mock img{width:100%}
.pr .price-list{list-style:none;text-align:left;display:flex;flex-direction:column;gap:11px;margin:8px 0 20px}
.pr .price-list li{display:flex;gap:10px;align-items:flex-start;font-size:.9rem;font-weight:600;color:#34414f}
.pr .price-list li svg{width:17px;height:17px;flex:none;margin-top:2px;color:var(--green)}
.pr .price-card .btn{width:100%}
.pr .price-warn{color:var(--red);font-family:'Montserrat',sans-serif;font-weight:800;font-size:.72rem;text-transform:uppercase;margin-top:14px;line-height:1.3}
.pr .price-safe{font-size:.74rem;color:#8b97a3;margin-top:6px}

.pr .creator{max-width:940px;margin:38px auto 0;background:var(--navy-card);border:1px solid var(--navy-border);border-radius:22px;padding:clamp(26px,4vw,42px);display:grid;grid-template-columns:.8fr 1.2fr;gap:34px;align-items:center}
.pr .creator-photo{border-radius:16px;overflow:hidden;box-shadow:var(--shadow-card)}
.pr .creator-photo img{width:100%;aspect-ratio:4/5;object-fit:cover;background:#1a2c42}
.pr .creator h3{font-family:'Montserrat',sans-serif;font-weight:900;font-size:1.5rem;color:#fff;margin-bottom:4px}
.pr .creator .role{color:var(--lime);font-weight:700;font-size:.9rem;margin-bottom:14px}
.pr .creator p{color:var(--muted-d);font-size:.95rem}
.pr .creator-stats{display:flex;gap:26px;margin-top:22px;flex-wrap:wrap}
.pr .creator-stats div b{font-family:'Montserrat',sans-serif;font-weight:900;font-size:1.5rem;color:var(--lime);display:block;line-height:1}
.pr .creator-stats div span{font-size:.72rem;color:var(--muted-d);text-transform:uppercase;letter-spacing:.5px}

.pr .faq-list{max-width:740px;margin:42px auto 0}
.pr .faq-item{border-bottom:1px solid #e6e9ee}
.pr .faq-q{width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px;text-align:left;padding:20px 4px;font-family:'Montserrat',sans-serif;font-weight:700;font-size:clamp(.95rem,2.3vw,1.05rem);color:var(--ink)}
.pr .faq-q svg{width:20px;height:20px;flex:none;transition:transform .3s ease;color:#5a6b7a}
.pr .faq-item.open .faq-q svg{transform:rotate(180deg)}
.pr .faq-a{max-height:0;overflow:hidden;transition:max-height .35s ease}
.pr .faq-a p{padding:0 4px 22px;color:#5a6675;font-size:.94rem}

.pr .guarantee{display:flex;gap:22px;align-items:center;max-width:880px;margin:0 auto}
.pr .guar-seal{width:96px;height:96px;flex:none;border-radius:50%;background:radial-gradient(circle at 50% 38%,#f3d250,#b88c1d);display:grid;place-items:center;color:#3a2c06;font-family:'Montserrat',sans-serif;font-weight:900;text-align:center;line-height:1;box-shadow:0 10px 24px -10px rgba(0,0,0,.4);border:3px solid #fff3c4}
.pr .guar-seal b{font-size:1.5rem;display:block}.pr .guar-seal span{font-size:.5rem;letter-spacing:1.5px}
.pr .guar-text h3{font-family:'Montserrat',sans-serif;font-weight:800;text-transform:uppercase;font-size:clamp(1rem,2.6vw,1.25rem);color:var(--ink);margin-bottom:8px}
.pr .guar-text p{color:#586572;font-size:.94rem}.pr .guar-text b{color:var(--ink)}

.pr .footer{background:#fff;color:var(--ink);text-align:center;padding:20px 20px 60px}
.pr .footer .brand{font-family:'Montserrat',sans-serif;font-weight:800;font-style:italic;font-size:1.35rem;color:var(--ink);margin-bottom:6px}
.pr .footer .ed{font-family:'Montserrat',sans-serif;font-weight:700;font-size:.74rem;letter-spacing:.5px;color:#9aa6b2;text-transform:uppercase}
.pr .footer .links{display:flex;gap:24px;justify-content:center;margin:14px 0;font-family:'Montserrat',sans-serif;font-weight:700;font-size:.72rem;letter-spacing:.5px;color:#7b8794;text-transform:uppercase}
.pr .footer .links a:hover{color:var(--ink)}
.pr .footer .disc{max-width:680px;margin:0 auto;font-size:.7rem;color:#9aa6b2;line-height:1.5}

.pr .toast{position:fixed;left:18px;bottom:18px;z-index:80;background:#fff;color:var(--ink);border-radius:12px;padding:13px 18px 13px 14px;display:flex;gap:12px;align-items:center;box-shadow:0 18px 40px -16px rgba(0,0,0,.4);max-width:290px;transform:translateY(160%);opacity:0;transition:transform .45s cubic-bezier(.2,.8,.2,1),opacity .45s}
.pr .toast.show{transform:translateY(0);opacity:1}
.pr .toast .ti{width:40px;height:40px;border-radius:10px;background:#eafbe0;display:grid;place-items:center;flex:none;color:var(--green)}
.pr .toast .tn{font-family:'Montserrat',sans-serif;font-weight:800;font-size:.86rem;line-height:1.2}
.pr .toast .tm{font-size:.66rem;color:#8b97a3;letter-spacing:.4px;text-transform:uppercase;margin-top:2px}

@media(max-width:900px){
  .pr .grid-4,.pr .steps-grid{grid-template-columns:repeat(2,1fr)}
  .pr .bonus-grid{grid-template-columns:repeat(2,1fr)}
  .pr .kit-card,.pr .split,.pr .creator{grid-template-columns:1fr;gap:28px}
  .pr .cmp-wrap{grid-template-columns:1fr;max-width:440px}
}
@media(max-width:560px){
  .pr .grid-4,.pr .steps-grid,.pr .bonus-grid{grid-template-columns:1fr;max-width:360px;margin-left:auto;margin-right:auto}
  .pr .guarantee{flex-direction:column;text-align:center}
  .pr .btn{padding:17px 26px;width:100%;max-width:340px}
  .pr .creator-stats{gap:18px;justify-content:center}
}
@media(prefers-reduced-motion:reduce){
  *{scroll-behavior:auto!important}
  .pr .reveal{opacity:1;transform:none;transition:none}
  .pr .btn:hover,.pr .feat-card:hover{transform:none}
}
`;

export const pageHtml = String.raw`<div class="pr">
<div class="topbar">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
  <span>👀 <span id="pr-viewers"><span id="pr-viewers-count">10</span> personas</span> están viendo esta página ahora</span>
</div>

<header class="hero">
  <span class="eyebrow badge-top">Edición Premium 2026</span>
  <h1>
    +100 Proyectos de Propiedades Rurales Productivas
    <span class="sub-line">que transforman tu tierra parada en una fuente de ingresos mensuales</span>
  </h1>
  <p class="hero-text">La biblioteca más completa de proyectos rurales de América Latina: <b>+100 planos profesionales</b> con medidas reales, divisiones estratégicas y layouts listos para ejecutar.</p>
  <div class="hero-mock"><img src="https://www.image2url.com/r2/default/images/1778629380417-163aca0b-6a61-4810-bc20-bc6912fb1e2b.png" alt="Mockup del Pack Plan Rural"></div>
  <div class="notify-pill">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
    Acceso inmediato en tu correo · Pago 100% seguro
  </div>
  <div><a href="#pricing" class="btn">Quiero mi Proyecto por $9,00</a></div>
  <div class="trust-line">★ Acceso inmediato · 7 días de garantía ★</div>
</header>

<section class="sec sec--navy">
  <div class="wrap reveal">
    <h2 class="sec-title">Lo que va a cambiar <span class="lime-ul">en tu propiedad</span></h2>
    <p class="sec-sub" style="font-style:italic">Basta de improvisar — aquí ejecutas con claridad</p>
    <div class="grid-4">
      <div class="feat-card">
        <div class="feat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 5s3-1 5 0 5 0 5 0v14s-3-1-5 0-5 0-5 0V5Z"/><path d="M12 5s3-1 5 0 5 0 5 0v14s-3-1-5 0-5 0-5 0"/></svg></div>
        <h3>Planifica con Visión Profesional</h3>
        <p>Deja de adivinar qué hacer con tu terreno. Ahora sigues proyectos listos con división estratégica.</p>
      </div>
      <div class="feat-card">
        <div class="feat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg></div>
        <h3>Sabe Dónde Va Cada Cosa</h3>
        <p>Casa, cultivos, animales, riego… todo ya posicionado para el mejor flujo y aprovechamiento.</p>
      </div>
      <div class="feat-card">
        <div class="feat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"/></svg></div>
        <h3>Deja de Perder Tiempo</h3>
        <p>Sin errores, sin intentos, sin desperdicio. Proyectos con medidas reales para aplicación directa.</p>
      </div>
      <div class="feat-card">
        <div class="feat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></div>
        <h3>Empieza en Minutos</h3>
        <p>Abre el proyecto y aplícalo directo en tu terreno. Recíbelo al instante en tu correo.</p>
      </div>
    </div>
  </div>
</section>

<section class="sec sec--white">
  <div class="wrap reveal">
    <h2 class="sec-title">📖 Una muestra del <span class="mark">material que vas a recibir</span></h2>
    <p class="sec-sub">Ejemplos reales de las páginas que vas a recibir. Cada proyecto con estándar editorial profesional.</p>
    <div class="carousel carousel--sample" id="sample-carousel" data-carousel data-autoplay="3500">
      <button class="cbtn cprev" data-prev aria-label="Anterior"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m15 18-6-6 6-6"/></svg></button>
      <div class="carousel-track" data-track>
        <div class="img-card"><img src="https://www.image2url.com/r2/default/images/1779227478825-868e1785-44e5-4fd5-bf0e-aa8791f8a54c.png" alt="Muestra 01"></div>
        <div class="img-card"><img src="https://www.image2url.com/r2/default/images/1779227527836-7e9d7bb3-c918-41e2-95c0-39e80dee8196.png" alt="Muestra 02"></div>
        <div class="img-card"><img src="https://www.image2url.com/r2/default/images/1779227580437-27b3966c-241e-418b-bdfd-38e28079f541.png" alt="Muestra 03"></div>
        <div class="img-card"><img src="https://www.image2url.com/r2/default/images/1779227648888-85c1e9e8-0d02-4d79-89f1-951f7ede0c01.png" alt="Muestra 04"></div>
        <div class="img-card"><img src="https://www.image2url.com/r2/default/images/1779227686186-73c64665-434b-45e6-92d5-310175b4f083.png" alt="Muestra 05"></div>
        <div class="img-card"><img src="https://www.image2url.com/r2/default/images/1779227721192-f5bc4948-4530-4b83-b1ff-e3a8a42eff09.png" alt="Muestra 06"></div>
        <div class="img-card"><img src="https://www.image2url.com/r2/default/images/1779228796729-063bc753-d313-4b18-ad7e-34738b1f2283.png" alt="Muestra 07"></div>
        <div class="img-card"><img src="https://www.image2url.com/r2/default/images/1779227831149-3f632b9b-e796-4e8f-b5a2-0d7596a49079.png" alt="Muestra 08"></div>
        <div class="img-card"><img src="https://www.image2url.com/r2/default/images/1779227882622-fd2c3720-9941-487a-9225-813b6be2beec.png" alt="Muestra 09"></div>
        <div class="img-card"><img src="https://www.image2url.com/r2/default/images/1779227946126-db94f760-60fb-40ca-ba51-3ddbf2c8ff92.png" alt="Muestra 10"></div>
      </div>
      <button class="cbtn cnext" data-next aria-label="Siguiente"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m9 18 6-6-6-6"/></svg></button>
    </div>
    <p class="sec-sub" style="margin-top:10px;font-size:.9rem"><b>Nota:</b> los +100 proyectos siguen el mismo estándar editorial premium.</p>
  </div>
</section>

<section class="sec sec--navy">
  <div class="wrap reveal">
    <h2 class="sec-title">Mira la diferencia <span class="mark">Sin los Proyectos</span> y <span class="mark">Con los Proyectos</span></h2>
    <div class="ba" id="ba">
      <img src="${comparacaoSplit.url}" alt="Comparación: sin los proyectos vs con +100 proyectos" loading="lazy" width="1024" height="576">
      <div class="ba-divider" aria-hidden="true"></div>
      <div class="ba-overlay">
        <span class="ba-badge bad"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d23030" stroke-width="2.6"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/></svg> Sin los Proyectos</span>
        <span class="ba-badge good"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1f8a36" stroke-width="2.6"><circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/></svg> Con +100 Proyectos</span>
      </div>
    </div>
    <div class="cmp-wrap">
      <div class="cmp-card">
        <div class="cmp-pill bad"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="m6 6 12 12M18 6 6 18"/></svg> Sin los proyectos</div>
        <div class="cmp-li"><svg class="x-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="m6 6 12 12M18 6 6 18"/></svg> Tierra parada sin uso</div>
        <div class="cmp-li"><svg class="x-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="m6 6 12 12M18 6 6 18"/></svg> No sabes por dónde empezar</div>
        <div class="cmp-li"><svg class="x-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="m6 6 12 12M18 6 6 18"/></svg> Mezclas todo sin organización</div>
        <div class="cmp-li"><svg class="x-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="m6 6 12 12M18 6 6 18"/></svg> Dependes de ideas sueltas de internet</div>
      </div>
      <div class="cmp-card">
        <div class="cmp-pill good"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M20 6 9 17l-5-5"/></svg> Con los proyectos</div>
        <div class="cmp-li"><svg class="v-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M20 6 9 17l-5-5"/></svg> Terreno dividido con estrategia</div>
        <div class="cmp-li"><svg class="v-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M20 6 9 17l-5-5"/></svg> Cada área con función clara</div>
        <div class="cmp-li"><svg class="v-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M20 6 9 17l-5-5"/></svg> Más productividad y más ingresos</div>
        <div class="cmp-li"><svg class="v-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M20 6 9 17l-5-5"/></svg> Planificación profesional en tu mano</div>
      </div>
    </div>
  </div>
</section>

<section class="sec sec--navy">
  <div class="wrap reveal" style="text-align:center">
    <span class="eyebrow" style="background:#0e2a1a;color:var(--lime)">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></svg> Resultado Inmediato
    </span>
    <h2 class="sec-title" style="margin-top:16px">Vas a <span class="lime-text">ver resultados al instante</span></h2>
    <p class="sec-sub">Imagina mirar tu terreno y <b style="color:#fff">saber exactamente qué hacer</b> en cada parte.</p>
    <div class="split" style="text-align:left">
      <div class="split-img"><img src="https://www.image2url.com/r2/default/images/1782948649831-c8d0ed2e-6149-4bb8-8cf2-a8027feb68f5.jpeg" alt="Productor viendo resultados inmediatos con Plan Rural" loading="lazy" width="1024" height="768"></div>
      <ul class="check-list">
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg> Planificas todo en pocos días</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg> Organizas tu propiedad con claridad</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg> Creas nuevas fuentes de ingresos</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg> Dejas de depender de prueba y error</li>
      </ul>
    </div>
  </div>
</section>

<section class="sec sec--navy">
  <div class="reveal">
    <div class="kit-flag">
      <span class="eyebrow" style="background:var(--lime);color:#1a1a1a">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg> Todo esto está incluido en tu kit
      </span>
    </div>
    <div class="kit-card">
      <div class="kit-mock">
        <span class="flag-red">Acceso Inmediato</span>
        <img src="https://www.image2url.com/r2/default/images/1782948795231-bec3f465-9115-4564-9f83-2d9405d6dec1.webp" alt="Kit +100 Proyectos">
      </div>
      <div>
        <span class="item-tag">ÍTEM 01</span>
        <h2>+100 Proyectos de Propiedades Rurales Productivas</h2>
        <p class="lead">No es un curso ni un manual teórico. Es una biblioteca visual completa, lista para elegir, imprimir y ejecutar.</p>
        <ul class="kit-list">
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg><span><b>Proyectos con Medidas Reales</b><small>Planos técnicos dimensionados en metros</small></span></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg><span><b>Divisiones por Vocación Productiva</b><small>Café, hortalizas, ganadería, piscicultura y más</small></span></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg><span><b>Adaptados a 5 Regiones Climáticas</b><small>Tropical húmedo, sabana, semiárido, templado y andino</small></span></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg><span><b>Acceso Vitalicio e Inmediato</b><small>Compra una vez y úsalo siempre</small></span></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg><span><b>Actualizaciones Gratuitas</b><small>Siempre nuevos modelos incluidos</small></span></li>
        </ul>
        <span class="kit-more">+ 6 Bonos Exclusivos abajo 👇</span>
      </div>
    </div>
  </div>
</section>

<section class="sec sec--navy">
  <div class="wrap reveal">
    <h2 class="sec-title">Y no termina aquí… <span class="lime-text">¡hay más!</span></h2>
    <p class="sec-sub">Tu acceso incluye además estos 6 bonos estratégicos, totalmente GRATIS.</p>
    <div class="bonus-pill"><span class="eyebrow" style="background:var(--lime);color:#1a1a1a">+ 6 Bonos Exclusivos</span></div>
    <div class="bonus-grid">
      <article class="bonus-card"><div class="bonus-cover"><span class="bonus-num">Bono 01</span><img src="https://www.image2url.com/r2/default/images/1779852503723-bc1919ff-8525-41c5-a1cf-a4dc71e59516.png" alt="Construcciones Rurales"></div><div class="bonus-body"><h3>Pack de Construcciones Rurales</h3><p>10 planos listos de gallineros, chiqueros, establos y tanques.</p><div class="bonus-price"><span class="old">$17 USD</span><span class="free">GRATIS</span></div></div></article>
      <article class="bonus-card"><div class="bonus-cover"><span class="bonus-num">Bono 02</span><img src="https://www.image2url.com/r2/default/images/1779852710951-007dd71c-0497-42d0-92bf-536511d4cf51.png" alt="Calculadora ROI"></div><div class="bonus-body"><h3>Calculadora de ROI Productivo</h3><p>Calculadora editable con retorno financiero estimado.</p><div class="bonus-price"><span class="old">$17 USD</span><span class="free">GRATIS</span></div></div></article>
      <article class="bonus-card"><div class="bonus-cover"><span class="bonus-num">Bono 03</span><img src="https://www.image2url.com/r2/default/images/1779852637100-d9699970-3a9f-4c2b-8d55-bff2c730c7ad.png" alt="Plantas Compañeras"></div><div class="bonus-body"><h3>Guía de Plantas Compañeras</h3><p>Aprende qué plantar junto para aumentar la productividad.</p><div class="bonus-price"><span class="old">$17 USD</span><span class="free">GRATIS</span></div></div></article>
      <article class="bonus-card"><div class="bonus-cover"><span class="bonus-num">Bono 04</span><img src="https://www.image2url.com/r2/default/images/1779852899013-b3dfc03f-a441-47b6-91d5-022748be9f30.png" alt="Energía Solar"></div><div class="bonus-body"><h3>Manual de Energía Solar Rural</h3><p>Dimensiona sistemas solares para casas, pozos y riego.</p><div class="bonus-price"><span class="old">$17 USD</span><span class="free">GRATIS</span></div></div></article>
      <article class="bonus-card"><div class="bonus-cover"><span class="bonus-num">Bono 05</span><img src="https://www.image2url.com/r2/default/images/1779889057973-9851ad9e-b9ce-46dd-8e8d-a1e76b788c25.png" alt="Cultivos Alto Valor"></div><div class="bonus-body"><h3>Guía de Cultivos de Alto Valor</h3><p>Descubre las plantas más rentables por m².</p><div class="bonus-price"><span class="old">$17 USD</span><span class="free">GRATIS</span></div></div></article>
      <article class="bonus-card"><div class="bonus-cover"><span class="bonus-num">Bono 06</span><img src="https://www.image2url.com/r2/default/images/1779896748774-3c025729-45f8-4d9f-ab03-ee8c368aa1ee.png" alt="Agua y Riego"></div><div class="bonus-body"><h3>Manual de Agua y Riego</h3><p>Capta agua de lluvia, arma cisternas y riego eficiente.</p><div class="bonus-price"><span class="old">$17 USD</span><span class="free">GRATIS</span></div></div></article>
    </div>
    <div class="center-btn" style="margin-top:36px"><a href="#pricing" class="btn">Quiero mi Proyecto por $9,00 <span class="arr">›</span></a></div>
  </div>
</section>

<section class="sec sec--white">
  <div class="wrap reveal">
    <h2 class="sec-title">Quienes compraron, <span class="mark">recomiendan</span></h2>
    <p class="sec-sub">Resultados reales y comentarios de productores que ya usan Plan Rural.</p>
    <div class="carousel carousel--sample carousel--testi" data-carousel data-autoplay="4000">
      <button class="cbtn cprev" data-prev aria-label="Anterior"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m15 18-6-6 6-6"/></svg></button>
      <div class="carousel-track" data-track>
        <div class="img-card testi-card"><img src="https://www.image2url.com/r2/default/images/1778637463831-fff617a2-1307-4006-b7a7-2b35037e57c7.png" alt="Testimonio 01"></div>
        <div class="img-card testi-card"><img src="https://www.image2url.com/r2/default/images/1778637789011-de4100ad-82ff-401f-be3d-d381a3f5679e.png" alt="Testimonio 02"></div>
        <div class="img-card testi-card"><img src="https://www.image2url.com/r2/default/images/1778638049492-5c823441-bc0b-4efb-9a58-f3a4bc8b0bcc.png" alt="Testimonio 03"></div>
        <div class="img-card testi-card"><img src="https://www.image2url.com/r2/default/images/1778636217662-148f37cc-1c82-403e-b5b2-382b7420f389.png" alt="Testimonio 04"></div>
        <div class="img-card testi-card"><img src="https://www.image2url.com/r2/default/images/1778636316874-a0464222-93ee-420e-a099-ef453dbea104.png" alt="Testimonio 05"></div>
        <div class="img-card testi-card"><img src="https://www.image2url.com/r2/default/images/1778636394813-07c11f56-46b7-49a5-9834-4f24846eeb3e.png" alt="Testimonio 06"></div>
      </div>
      <button class="cbtn cnext" data-next aria-label="Siguiente"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m9 18 6-6-6-6"/></svg></button>
    </div>
  </div>
</section>

<section class="sec sec--navy">
  <div class="wrap reveal">
    <h2 class="sec-title">Empieza a organizar <span class="lime-text">en minutos</span></h2>
    <div class="steps-grid">
      <div class="step"><div class="step-num">1</div><h3>Realiza el Pago</h3><p>Acceso inmediato tras la confirmación de compra.</p></div>
      <div class="step"><div class="step-num">2</div><h3>Recibe por Correo</h3><p>Tu usuario y contraseña llegan en segundos.</p></div>
      <div class="step"><div class="step-num">3</div><h3>Abre los Proyectos</h3><p>Descarga los PDFs desde el celular, tablet o computadora.</p></div>
      <div class="step"><div class="step-num">4</div><h3>Aplica en tu Tierra</h3><p>Sigue los planos y transforma tu propiedad.</p></div>
    </div>
    
  </div>
</section>

<section class="sec sec--white" id="pricing">
  <div class="wrap reveal">
    <h2 class="sec-title">Asegura ahora con un <span class="lime-text" style="-webkit-text-stroke:.5px #9bc52a">precio especial</span></h2>
    <p class="sec-sub">Incluye acceso vitalicio, todos los bonos y 7 días de garantía total.</p>
    <div class="price-single">
      <div class="price-card">
        <span class="best-tag">★ Acceso Completo ★</span>
        <h3>Acceso Completo</h3>
        <p style="text-align:center;font-family:'Montserrat',sans-serif;font-weight:800;text-transform:uppercase;letter-spacing:.5px;color:var(--muted-l);font-size:.8rem;margin:8px 0 4px">La oferta termina en:</p>
        <div class="countdown" id="countdown">
          <div class="cd-box"><b id="cd-h">23</b><span>Horas</span></div>
          <div class="cd-box"><b id="cd-m">59</b><span>Min</span></div>
          <div class="cd-box"><b id="cd-s">59</b><span>Seg</span></div>
        </div>
        <p class="price-old">De $137 USD por</p>
        <p class="price-now">$9,00</p>
        <p class="price-tagline">Pago único · Acceso vitalicio + Bonos</p>
        <div class="price-mock"><img src="https://www.image2url.com/r2/default/images/1778629380417-163aca0b-6a61-4810-bc20-bc6912fb1e2b.png" alt="Acceso Completo"></div>
        <ul class="price-list">
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M20 6 9 17l-5-5"/></svg> +100 proyectos completos</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M20 6 9 17l-5-5"/></svg> <b style="font-weight:700">Bono 1:</b> Construcciones Rurales</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M20 6 9 17l-5-5"/></svg> <b style="font-weight:700">Bono 2:</b> Calculadora ROI</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M20 6 9 17l-5-5"/></svg> <b style="font-weight:700">Bono 3:</b> Plantas Compañeras</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M20 6 9 17l-5-5"/></svg> <b style="font-weight:700">Bono 4:</b> Energía Solar Rural</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M20 6 9 17l-5-5"/></svg> <b style="font-weight:700">Bono 5:</b> Guía de Cultivos Pro</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M20 6 9 17l-5-5"/></svg> <b style="font-weight:700">Bono 6:</b> Manual de Agua/Riego</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M20 6 9 17l-5-5"/></svg> Acceso prioritario a nuevos proyectos</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M20 6 9 17l-5-5"/></svg> Actualizaciones gratuitas semanales</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M20 6 9 17l-5-5"/></svg> Garantía de 7 días</li>
        </ul>
        <a href="https://pay.hotmart.com/K105902897X?checkoutMode=10" class="btn" target="_blank" rel="noopener">Quiero mi Proyecto por $9,00 <span class="arr">›</span></a>
        <p class="price-warn">🔥 No vas a encontrar este precio después.</p>
        <p class="price-safe">Pago 100% seguro · Acceso inmediato</p>
      </div>
    </div>
  </div>
</section>

<section class="sec sec--navy">
  <div class="wrap reveal" style="text-align:center">
    <span class="eyebrow" style="background:rgba(194,245,60,.12);color:var(--lime);border:1px solid rgba(194,245,60,.3)">★ Conoce al Creador ★</span>
    <h2 class="sec-title" style="margin-top:16px">Quién está detrás de <span class="lime-text">Plan Rural</span></h2>
    <div class="creator" style="text-align:left">
      <div class="creator-photo"><img src="https://www.image2url.com/r2/default/images/1778714848819-60a6bb5e-390a-4372-8731-66d19e3ed55b.png" alt="Alejandro Martínez"></div>
      <div>
        <h3>Alejandro Martínez</h3>
        <p class="role">Fundador y Creador</p>
        <p>Ingeniero agrónomo con más de 15 años de experiencia en planificación rural en toda América Latina. Ha visitado más de 3.000 propiedades en 8 países. Su misión es democratizar el conocimiento rural profesional.</p>
        <div class="creator-stats">
          <div><b>15+</b><span>Años exp.</span></div>
          <div><b>3k+</b><span>Propiedades</span></div>
          <div><b>12 mil</b><span>Productores</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec sec--white">
  <div class="wrap reveal">
    <h2 class="sec-title">Preguntas <span class="lime-text" style="-webkit-text-stroke:.5px #9bc52a">frecuentes</span></h2>
    <div class="faq-list" id="faq">
      <div class="faq-item"><button class="faq-q">¿Cómo recibo los materiales tras la compra? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><p>Apenas se confirma el pago, recibes en tu correo el acceso con usuario y contraseña.</p></div></div>
      <div class="faq-item"><button class="faq-q">¿Necesito tener experiencia en agricultura? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><p>No. Los proyectos están pensados para que cualquier persona los aplique, incluso sin experiencia técnica.</p></div></div>
      <div class="faq-item"><button class="faq-q">¿Los proyectos sirven para cualquier región? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><p>Sí. Están adaptados a 5 regiones climáticas de América Latina.</p></div></div>
      <div class="faq-item"><button class="faq-q">¿En qué formato se entrega el material? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><p>100% digital, en archivos PDF de alta calidad.</p></div></div>
      <div class="faq-item"><button class="faq-q">¿Funciona para terrenos pequeños? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><p>Sí. Hay proyectos desde 0,5 hasta 5 hectáreas.</p></div></div>
      <div class="faq-item"><button class="faq-q">¿Qué diferencia hay con contratar un agrónomo? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><p>Un proyecto a la medida cuesta miles. Aquí recibes +100 proyectos por un precio único.</p></div></div>
      <div class="faq-item"><button class="faq-q">¿Y si no me gusta el material? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><p>7 días de garantía incondicional. Te devolvemos cada centavo.</p></div></div>
    </div>
  </div>
</section>

<section class="sec sec--white" style="padding-top:0">
  <div class="wrap reveal">
    <div class="guarantee">
      <div class="guar-seal"><div><b>7</b><span>DÍAS</span></div></div>
      <div class="guar-text">
        <h3>Garantía Incondicional de 7 Días</h3>
        <p>Tenemos tanta confianza en el valor de <b>Plan Rural</b> que asumimos todo el riesgo. Si en 7 días no estás 100% satisfecho, te devolvemos <b>cada centavo</b>.</p>
      </div>
    </div>
  </div>
</section>

<footer class="footer">
  <div class="wrap">
    <div class="brand">PLAN RURAL</div>
    <div class="ed">Edición Premium <span id="year">2026</span> · Todos los derechos reservados</div>
    <div class="links"><a href="#">Términos de Uso</a><a href="#">Política de Privacidad</a></div>
    <p class="disc">Este sitio no está afiliado a Facebook, Instagram, Google ni a ninguna otra plataforma. Los resultados dependen del esfuerzo y la aplicación práctica del cliente.</p>
  </div>
</footer>

<div class="toast" id="toast" role="status">
  <div class="ti"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4"/></svg></div>
  <div><div class="tn" id="toastName">Juan P., de Bogotá</div><div class="tm" id="toastMeta">Acaba de comprar · ahora mismo</div></div>
</div>
</div>`;

export function initPage(root: HTMLElement): () => void {
  const timers: number[] = [];
  const observers: IntersectionObserver[] = [];

  const PH =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='100%25' height='100%25' fill='%23223047'/%3E%3Ctext x='50%25' y='50%25' fill='%237c8ba0' font-family='Arial' font-size='18' text-anchor='middle' dominant-baseline='middle'%3EImagem%3C/text%3E%3C/svg%3E";
  root.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", function (this: HTMLImageElement) {
      if (this.src !== PH) this.src = PH;
    });
  });

  const yearEl = root.querySelector("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  root.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  observers.push(io);


  root.querySelectorAll<HTMLElement>("[data-carousel]").forEach((c) => {
    const track = c.querySelector<HTMLElement>("[data-track]");
    const prev = c.querySelector<HTMLElement>("[data-prev]");
    const next = c.querySelector<HTMLElement>("[data-next]");
    if (!track) return;
    const step = () => {
      const card = track.querySelector(".img-card");
      return card ? (card as HTMLElement).getBoundingClientRect().width + 16 : 300;
    };
    prev?.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
    next?.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));

    const autoplayMs = Number(c.getAttribute("data-autoplay") || 0);
    if (autoplayMs > 0) {
      let paused = false;
      c.addEventListener("mouseenter", () => { paused = true; });
      c.addEventListener("mouseleave", () => { paused = false; });
      timers.push(window.setInterval(() => {
        if (paused) return;
        const s = step();
        const maxLeft = track.scrollWidth - track.clientWidth - 2;
        if (track.scrollLeft >= maxLeft) {
          track.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          track.scrollBy({ left: s, behavior: "smooth" });
        }
      }, autoplayMs));
    }
  });

  root.querySelectorAll<HTMLElement>("#faq .faq-item").forEach((item) => {
    const q = item.querySelector<HTMLElement>(".faq-q");
    const a = item.querySelector<HTMLElement>(".faq-a");
    q?.addEventListener("click", () => {
      const open = item.classList.contains("open");
      root.querySelectorAll<HTMLElement>("#faq .faq-item").forEach((it) => {
        it.classList.remove("open");
        const aa = it.querySelector<HTMLElement>(".faq-a");
        if (aa) aa.style.maxHeight = "";
      });
      if (!open && a) {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });

  const h = root.querySelector<HTMLElement>("#cd-h");
  const m = root.querySelector<HTMLElement>("#cd-m");
  const s = root.querySelector<HTMLElement>("#cd-s");
  const pad = (n: number) => (n < 10 ? "0" + n : "" + n);
  const tick = () => {
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    const diff = Math.max(0, end.getTime() - now.getTime());
    if (h) h.textContent = pad(Math.floor(diff / 3.6e6));
    if (m) m.textContent = pad(Math.floor((diff % 3.6e6) / 6e4));
    if (s) s.textContent = pad(Math.floor((diff % 6e4) / 1000));
  };
  tick();
  timers.push(window.setInterval(tick, 1000));

  const people: [string, string][] = [
    ["Juan P., de Bogotá", "Acaba de comprar · ahora mismo"],
    ["María G., de Lima", "Acaba de comprar · hace 2 min"],
    ["Carlos R., de Ciudad de México", "Acaba de comprar · hace 4 min"],
    ["Andrés M., de Quito", "Acaba de comprar · hace 7 min"],
    ["Sofía L., de Medellín", "Acaba de comprar · hace 9 min"],
    ["Diego T., de Guayaquil", "Acaba de comprar · hace 12 min"],
  ];
  const toast = root.querySelector<HTMLElement>("#toast");
  const tn = root.querySelector<HTMLElement>("#toastName");
  const tm = root.querySelector<HTMLElement>("#toastMeta");
  let p = 0;
  const showToast = () => {
    if (!toast || !tn || !tm) return;
    tn.textContent = people[p][0];
    tm.textContent = people[p][1];
    toast.classList.add("show");
    timers.push(window.setTimeout(() => toast.classList.remove("show"), 4500));
    p = (p + 1) % people.length;
  };
  timers.push(window.setTimeout(showToast, 3500));
  timers.push(window.setInterval(showToast, 11000));

  // Contador dinâmico de "pessoas vendo a página"
  const viewersEl = root.querySelector<HTMLElement>("#pr-viewers-count");
  if (viewersEl) {
    let current = 10;
    timers.push(
      window.setInterval(() => {
        const delta = Math.floor(Math.random() * 3) - 1; // -1, 0, +1
        current = Math.max(5, Math.min(15, current + delta));
        viewersEl.textContent = String(current);
      }, 2500)
    );
  }


  return () => {
    timers.forEach((t) => {
      clearTimeout(t);
      clearInterval(t);
    });
    observers.forEach((o) => o.disconnect());
  };
}
