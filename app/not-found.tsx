// app/not-found.tsx
import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import Header from '@/components/site/Header'
import Footer from '@/components/site/Footer'

export const metadata: Metadata = {
  title: '404 – Page Not Found | Grab Your Cab',
  description: 'The page you are looking for does not exist or has been moved.',
}

const pageCss = `
:root{
  --red:#9f1c33;--red-dark:#7e1628;--slate:#33414f;
  --ink:#212529;--text:#444;--muted:#666;
  --line:#e1e1e1;--bg:#ffffff;--grey:#f5f5f5;
  --maxw:1200px;--r:6px;--shadow:0 2px 10px rgba(0,0,0,.08);
}
.nf *{box-sizing:border-box}
.nf{font-family:"Inter","Segoe UI",Roboto,Arial,sans-serif;color:var(--text);background:var(--bg);line-height:1.6;font-size:15px;-webkit-font-smoothing:antialiased}
.nf .container{max-width:var(--maxw);margin:0 auto;padding:0 20px;width:100%}

/* hero */
.nf .nf-hero{position:relative;background:var(--slate);color:#fff;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden;isolation:isolate;padding:70px 0 60px}
.nf .nf-hero::after{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,rgba(33,43,54,.45) 0%,rgba(33,43,54,.9) 100%)}
.nf .nf-hero .code{font-family:"Poppins","Inter",sans-serif;font-size:clamp(72px,14vw,140px);font-weight:800;line-height:1;color:#fff;letter-spacing:2px;margin:0 0 10px;text-shadow:0 6px 24px rgba(0,0,0,.35)}
.nf .nf-hero .code span{color:var(--red)}
.nf .nf-hero h1{color:#fff;font-size:clamp(20px,3vw,30px);font-weight:700;margin:0 0 10px;font-family:"Poppins","Inter",sans-serif}
.nf .nf-hero p{color:#e6e6e6;font-size:15px;max-width:56ch;margin:0 auto}

/* body */
.nf .nf-body{padding:55px 0}
.nf .nf-card{max-width:760px;margin:0 auto;background:#fff;border:1px solid var(--line);border-radius:var(--r);box-shadow:var(--shadow);padding:28px 24px;text-align:center}
.nf .nf-card h2{font-family:"Poppins","Inter",sans-serif;color:var(--ink);font-size:clamp(18px,2.4vw,22px);font-weight:700;margin:0 0 8px}
.nf .nf-card p{color:var(--muted);font-size:14.5px;margin:0 0 22px}
.nf .nf-actions{display:flex;flex-wrap:wrap;gap:12px;justify-content:center}
.nf .btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:11px 22px;border-radius:var(--r);font-weight:600;font-size:14px;font-family:"Poppins","Inter",sans-serif;transition:background .18s,border-color .18s,color .18s,transform .18s;border:1px solid transparent;cursor:pointer}
.nf .btn-primary{background:var(--red);color:#fff}
.nf .btn-primary:hover{background:var(--red-dark);transform:translateY(-1px)}
.nf .btn-ghost{background:#fff;color:var(--ink);border-color:var(--line)}
.nf .btn-ghost:hover{border-color:var(--red);color:var(--red)}

/* quick links */
.nf .nf-links{margin-top:34px}
.nf .nf-links h3{font-family:"Poppins","Inter",sans-serif;color:var(--ink);font-size:16px;font-weight:600;margin:0 0 14px;text-align:center}
.nf .nf-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;max-width:760px;margin:0 auto}
.nf .nf-link{display:block;background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:14px 16px;text-align:center;color:var(--ink);font-weight:600;font-size:14px;transition:box-shadow .18s,border-color .18s,color .18s}
.nf .nf-link:hover{border-color:var(--red);color:var(--red);box-shadow:var(--shadow)}

@media (max-width:620px){
  .nf .container{padding:0 16px}
  .nf .nf-body{padding:36px 0}
  .nf .nf-hero{padding:56px 0 44px}
}
`

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="nf">
        <style dangerouslySetInnerHTML={{ __html: pageCss }} />

        {/* HERO */}
        <section className="nf-hero">
          <div className="container">
            <p className="code">4<span>0</span>4</p>
            <h1>Oops! Page Not Found</h1>
            <p>
              The page you are looking for might have been removed, renamed, or
              is temporarily unavailable.
            </p>
          </div>
        </section>

        {/* BODY */}
        <section className="nf-body">
          <div className="container">
            <div className="nf-card">
              <h2>Let&apos;s get you back on track</h2>
              <p>
                Try checking the URL for typos, or use one of the options below
                to continue your journey.
              </p>
              <div className="nf-actions">
                <Link href="/" className="btn btn-primary">
                  ← Back to Home
                </Link>
                <Link href="/self-drive-car-rental-delhi" className="btn btn-ghost">
                  Self Drive Cars in Delhi
                </Link>
              </div>

            
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default NotFound