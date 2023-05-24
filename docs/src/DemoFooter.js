import React from 'react'

const s = {
  footer: {
    position: 'relative',
    width: '100%',
    padding: '6em  0',
    backgroundColor: '#2f2c2c',
    textAlign: 'center'
  },
  footer__grid: {
    position: 'relative',
    maxWidth: '95%',
    margin: '0 auto'
  },
  footer__border: {
    height: '1px',
    width: '100%',
    marginBottom: '4em',
    border: '0',
    backgroundColor: 'rgba(255,255,255,0.4)'
  },
  footer__icon: {
    width: '3em',
    margin: '0 auto',
    textAlign: 'center'
  },
  footer__icon_vector: {
    fill: '#fff'
  }
}

export default function DemoHeader() {
  return (
    <section style={s.footer}>
      <div style={s.footer__grid}>
        <hr style={s.footer__border} />
        <div style={s.footer__icon}>
          <svg
            style={s.footer__icon_vector}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M262.468 0H251.85C153.818 0 72.902 79.089 72.902 177.126v324.407c0 4.026 2.884 7.684 6.511 9.431 3.617 1.747 8.214 1.257 11.354-1.257l45.149-36.007 35.303 35.23c4.087 4.087 10.744 4.087 14.831 0l34.471-34.454 34.462 34.454c4.087 4.087 10.713 4.087 14.8 0l34.456-34.454 34.454 34.454c4.087 4.087 10.709 4.087 14.796 0l34.454-34.454 34.453 34.454a10.452 10.452 0 0 0 7.398 3.065c1.349 0 2.129-.255 3.427-.797 3.908-1.614 5.878-5.436 5.878-9.666V177.126C439.098 79.089 360.499 0 262.468 0zm155.705 476.275-23.411-23.991c-4.087-4.087-10.418-4.087-14.505 0l-34.309 34.454-34.381-34.454a10.35 10.35 0 0 0-7.362-3.065 10.392 10.392 0 0 0-7.38 3.065l-34.444 34.454-34.449-34.454a10.455 10.455 0 0 0-14.792 0l-34.454 34.454-34.452-34.454c-3.77-3.77-10.357-4.107-14.51-.777l-35.897 28.252V177.126c0-86.502 71.527-156.201 158.023-156.201h10.617c86.495 0 155.705 69.699 155.705 156.201v299.149z" />
            <path d="M194.383 156.262c-14.423 0-26.157 11.73-26.157 26.157s11.733 26.157 26.157 26.157c14.421 0 26.156-11.73 26.156-26.157s-11.735-26.157-26.156-26.157zm0 31.388a5.237 5.237 0 0 1-5.231-5.231 5.237 5.237 0 0 1 5.231-5.231 5.239 5.239 0 0 1 5.231 5.231 5.238 5.238 0 0 1-5.231 5.231zM319.935 156.262c-14.422 0-26.157 11.73-26.157 26.157s11.735 26.157 26.157 26.157 26.157-11.73 26.157-26.157-11.735-26.157-26.157-26.157zm0 31.388a5.238 5.238 0 0 1-5.231-5.231c0-2.881 2.345-5.231 5.231-5.231s5.231 2.35 5.231 5.231a5.238 5.238 0 0 1-5.231 5.231z" />
          </svg>
        </div>
        <p style={s.footer__copy}>
          A little thing by{' '}
          <a href="https://stephenscaff.com" target="_blank" rel="noreferrer">
            Stephen Scaff
          </a>
        </p>
      </div>
    </section>
  )
}
