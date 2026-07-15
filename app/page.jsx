"use client";

import { useState, useEffect } from "react";

// 99Digital official logo (pin pair + "Digital" wordmark)
function NineNineDigitalLogo({ height = 34 }) {
  return (
    <svg height={height} viewBox="0 0 168 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="99Digital">
      <path fillRule="evenodd" clipRule="evenodd" d="M32.2334 28.5419C28.2485 28.4623 25.207 24.7718 25.207 20.9041C25.207 16.2727 28.65 12.7788 33.5718 12.7788C38.4936 12.7788 41.9198 16.1638 41.9366 20.7416C41.9516 24.5361 37.5869 28.8669 37.5869 28.8669C37.5869 28.8669 32.8859 33.8965 30.3932 36.6672C29.9214 36.2398 27.0473 33.9046 27.0473 33.9046L32.2334 28.5419ZM33.5718 16.679C31.218 16.679 29.3058 18.5364 29.3058 20.8229C29.3058 23.1093 31.218 24.9668 33.5718 24.9668C35.9256 24.9668 37.8378 23.1093 37.8378 20.8229C37.8378 18.5364 35.9256 16.679 33.5718 16.679Z" fill="#57BFAC"/>
      <mask id="m0" maskUnits="userSpaceOnUse" x="25" y="12" width="17" height="25">
        <path d="M32.2334 28.5419C28.2485 28.4623 25.207 24.7718 25.207 20.9041C25.207 16.2727 28.65 12.7788 33.5718 12.7788C38.4936 12.7788 41.9198 16.1638 41.9366 20.7416C41.9516 24.5361 37.5869 28.8669 37.5869 28.8669C37.5869 28.8669 32.8859 33.8965 30.3932 36.6672C29.9214 36.2398 27.0473 33.9046 27.0473 33.9046L32.2334 28.5419ZM33.5718 16.679C31.218 16.679 29.3058 18.5364 29.3058 20.8229C29.3058 23.1093 31.218 24.9668 33.5718 24.9668C35.9256 24.9668 37.8378 23.1093 37.8378 20.8229C37.8378 18.5364 35.9256 16.679 33.5718 16.679Z" fill="white"/>
      </mask>
      <g mask="url(#m0)">
        <path fillRule="evenodd" clipRule="evenodd" d="M26.9746 33.9055L32.2712 28.4956L34.3992 27.3809L37.5627 29.0287L30.4075 36.7331L26.9746 33.9055Z" fill="#5EA2CA"/>
      </g>
      <path fillRule="evenodd" clipRule="evenodd" d="M14.5498 28.1986C10.5649 28.119 7.52344 24.4285 7.52344 20.5609C7.52344 15.9294 10.9664 12.4355 15.8882 12.4355C20.81 12.4355 24.2362 15.8205 24.253 20.3983C24.268 24.1929 19.9033 28.5236 19.9033 28.5236C19.9033 28.5236 15.2023 33.5532 12.7096 36.3239C12.2378 35.8965 9.36369 33.5613 9.36369 33.5613L14.5498 28.1986ZM15.8882 16.3357C13.5344 16.3357 11.6222 18.1931 11.6222 20.4796C11.6222 22.7661 13.5344 24.6235 15.8882 24.6235C18.2421 24.6235 20.1542 22.7661 20.1542 20.4796C20.1542 18.1931 18.2421 16.3357 15.8882 16.3357Z" fill="#EE5A4B"/>
      <mask id="m1" maskUnits="userSpaceOnUse" x="7" y="12" width="18" height="25">
        <path d="M14.5498 28.1986C10.5649 28.119 7.52344 24.4285 7.52344 20.5609C7.52344 15.9294 10.9664 12.4355 15.8882 12.4355C20.81 12.4355 24.2362 15.8205 24.253 20.3983C24.268 24.1929 19.9033 28.5236 19.9033 28.5236C19.9033 28.5236 15.2023 33.5532 12.7096 36.3239C12.2378 35.8965 9.36369 33.5613 9.36369 33.5613L14.5498 28.1986ZM15.8882 16.3357C13.5344 16.3357 11.6222 18.1931 11.6222 20.4796C11.6222 22.7661 13.5344 24.6235 15.8882 24.6235C18.2421 24.6235 20.1542 22.7661 20.1542 20.4796C20.1542 18.1931 18.2421 16.3357 15.8882 16.3357Z" fill="white"/>
      </mask>
      <g mask="url(#m1)">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.30859 33.5097L14.6319 28.0966L16.7482 26.998L19.8967 28.6329L12.7415 36.3373L9.30859 33.5097Z" fill="#F89C2D"/>
      </g>
      <path fillRule="evenodd" clipRule="evenodd" d="M1.61857 24.2308C0.547914 24.2543 0.73282 24.1837 0 24.2308C0 17.0101 5.83734 0 24.8234 0C41.0144 0 49.5712 15.903 48.1207 26.3308H49.5712C49.5712 26.3308 46.4685 47.7442 24.8234 47.7442C6.70966 47.7442 1.74463 30.719 1.61857 24.2308ZM1.74463 24.2308C1.74463 30.5459 7.52147 46.0003 24.8234 46.0003C38.236 46.0003 44.8801 32.614 44.5726 26.1678C45.4533 26.1678 45.9828 26.2149 45.9878 26.1678C47.0736 16.8606 39.0512 3.03747 24.8234 3.03747C8.08117 3.03747 3.84728 17.2772 3.84728 24.2308C3.63046 24.2308 2.50938 24.2089 1.74463 24.2308Z" fill="#0F4B25"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M162.645 39.6399V9.00244H167.5V39.6399H162.645ZM145.891 40.1804C141.835 40.1804 138.842 37.8984 138.842 33.8863V33.846C138.771 28.8294 142.736 25.1358 151.569 27.2078V25.6763C151.569 24.4151 150.308 23.1539 148.415 22.6133C146.414 22.042 141.655 23.244 140.484 24.0547V20.0008C142.736 19.0098 146.45 18.1645 150.443 18.8297C154.769 19.5504 156.526 22.8386 156.526 25.316L156.639 39.6399H152.021V37.2976H151.842C150.578 38.9192 148.415 40.1804 145.891 40.1804ZM143.908 33.5543C143.908 35.1355 145.171 36.2166 147.333 36.2166C149.767 36.2166 151.209 34.4148 151.569 33.8863V30.7488C151.569 30.7488 149.221 30.1807 147.333 30.3609C145.658 30.5209 143.908 31.6995 143.908 33.5139V33.5543ZM131.921 40.1804C127.027 40.1804 124.57 38.4887 124.57 34.2346L124.531 23.244H120.655V19.0715H124.534V11.2623H129.487V19.0715L135.437 19.0999V23.244H129.467L129.487 33.3338C129.467 35.3157 130.614 36.0364 132.642 36.0364C133.325 36.0364 135.256 35.6761 135.796 35.4959V39.6399C135.095 39.7811 132.858 40.1804 131.921 40.1804ZM112.543 39.5407V19.0715H117.606V39.6399L112.543 39.5407ZM97.221 50C93.4361 50 91.5437 49.2793 90.6419 48.8289L90.6611 48.8087L90.7125 47.0069L90.7325 47.0271C91.8138 47.7478 93.4867 48.4685 97.4014 48.4685C101.808 48.4685 104.191 45.2434 104.191 40.6489V37.3156C102.809 38.5769 101.157 40.0903 97.492 40.0903C92.1292 40.0903 89.2897 35.9412 89.2897 29.5501V29.5098C89.2897 23.0986 92.8951 19.3702 97.7621 19.3702C101.369 19.3702 102.538 20.7395 104.191 22.1809V19.8652L105.784 19.8472V40.5408C105.874 46.3965 102.809 50.0001 97.221 50ZM97.763 38.5589C101.909 38.4688 103.53 36.2346 104.191 35.604V23.9647C103.351 23.0638 101.367 20.7215 97.7621 20.8116C94.1567 20.9017 90.966 23.8956 90.966 29.46V29.5004C90.966 35.0648 93.3464 38.6549 97.763 38.5589ZM81.591 39.5407V19.8472H83.1114V39.5407H81.591ZM52.9004 39.5407V11.3381H60.2741C68.4712 11.3381 74.6259 15.9247 74.6259 24.7754V24.8158C74.6259 33.6867 69.3599 39.5407 61.1131 39.5407H52.9004ZM54.7824 37.9008H61.1131C68.1723 37.9008 72.7457 32.8399 72.7457 24.8158V24.7754C72.7457 17.5177 67.917 12.8466 60.2741 12.8466H54.7048L54.7824 37.9008Z" fill="#0F4B25"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M81.2715 15.2066V13.1346L83.2545 13.154V15.2261L81.2715 15.2066ZM114.709 6.93799C116.948 6.93799 118.766 8.75452 118.766 10.9919C118.766 13.2294 116.948 15.0459 114.709 15.0459C112.471 15.0459 110.654 13.2294 110.654 10.9919C110.654 8.75452 112.471 6.93799 114.709 6.93799Z" fill="#0F4B25"/>
    </svg>
  );
}

const WEBHOOK_URL = "https://builder5.99digital.co.il/5035/webhook/a798e4cf-d5eb-455f-a76b-84314210f9df";

// Self-contained branded food cover (text-free; app header text renders on top)
const COVER_URI = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwMCIgaGVpZ2h0PSI0MjAiIHZpZXdCb3g9IjAgMCAxNDAwIDQyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IteU15bXnteg16og15DXldeb15wgLSA5OSDXk9eZ15LXmdeY15wiPgogIDxkZWZzPgogICAgPCEtLSBCcmFuZCBncmVlbiBncmFkaWVudCBiYWNrZ3JvdW5kIC0tPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJiZyIgeDE9IjAiIHkxPSIwIiB4Mj0iMTQwMCIgeTI9IjQyMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMxNjgwNEYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjU1IiBzdG9wLWNvbG9yPSIjMEY0QjI1Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzBCM0ExRCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iZ2xvdyIgY3g9IjAuNzgiIGN5PSIwLjMiIHI9IjAuNyI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzFCOUU2MyIgc3RvcC1vcGFjaXR5PSIwLjU1Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFCOUU2MyIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogICAgPCEtLSBQbGF0ZSBncmFkaWVudHMgLS0+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9InBsYXRlIiBjeD0iMC40MiIgY3k9IjAuMzYiIHI9IjAuNzIiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNGRkZGRkYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjgyIiBzdG9wLWNvbG9yPSIjRjNGNUYyIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0UyRTdFMiIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icmltIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI0ZGRkZGRiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNEOERFRDgiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8IS0tIEZvb2QgY29sb3IgZ3JhZGllbnRzIC0tPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJyaWNlIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI0ZCRUZEMiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNFQUQ2QTMiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImNoaWNrZW4iIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjRThBMzNDIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0MyNzAxQiIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0idG9tYXRvIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI0YwNjQxRSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNEMjQwMUEiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyZWVucyIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1N0JGQUMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMkU4RjZFIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJidW4iIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjRTdCNDVDIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0M5OEEzMyIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ic2NyaW0iIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSI0MjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMEY0QjI1IiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjYyIiBzdG9wLWNvbG9yPSIjMEY0QjI1IiBzdG9wLW9wYWNpdHk9IjAuMjUiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMEIzQTFEIiBzdG9wLW9wYWNpdHk9IjAuOSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxmaWx0ZXIgaWQ9InNvZnQiIHg9Ii0yMCUiIHk9Ii0yMCUiIHdpZHRoPSIxNDAlIiBoZWlnaHQ9IjE0MCUiPgogICAgICA8ZmVEcm9wU2hhZG93IGR4PSIwIiBkeT0iMTAiIHN0ZERldmlhdGlvbj0iMTQiIGZsb29kLWNvbG9yPSIjMDAwMDAwIiBmbG9vZC1vcGFjaXR5PSIwLjI4Ii8+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+CgogIDwhLS0gQmFja2dyb3VuZCAtLT4KICA8cmVjdCB3aWR0aD0iMTQwMCIgaGVpZ2h0PSI0MjAiIGZpbGw9InVybCgjYmcpIi8+CiAgPHJlY3Qgd2lkdGg9IjE0MDAiIGhlaWdodD0iNDIwIiBmaWxsPSJ1cmwoI2dsb3cpIi8+CgogIDwhLS0gU3VidGxlIHNjYXR0ZXJlZCBkb3RzIHRleHR1cmUgLS0+CiAgPGcgZmlsbD0iI0ZGRkZGRiIgb3BhY2l0eT0iMC4wNSI+CiAgICA8Y2lyY2xlIGN4PSIxMjAiIGN5PSI3MCIgcj0iNCIvPgogICAgPGNpcmNsZSBjeD0iMjYwIiBjeT0iNDAiIHI9IjMiLz4KICAgIDxjaXJjbGUgY3g9IjYwIiBjeT0iMjAwIiByPSIzIi8+CiAgICA8Y2lyY2xlIGN4PSIyMDAiIGN5PSIzMDAiIHI9IjQiLz4KICAgIDxjaXJjbGUgY3g9IjkwIiBjeT0iMzYwIiByPSIzIi8+CiAgICA8Y2lyY2xlIGN4PSIzNDAiIGN5PSIzNzAiIHI9IjMiLz4KICAgIDxjaXJjbGUgY3g9IjEzMjAiIGN5PSIzNjAiIHI9IjQiLz4KICAgIDxjaXJjbGUgY3g9IjEyNTAiIGN5PSI2MCIgcj0iMyIvPgogIDwvZz4KCiAgPCEtLSA9PT09PSBEZWNvcmF0aXZlIGZvb2QgaWxsdXN0cmF0aW9ucyAocmlnaHQgc2lkZSkgPT09PT0gLS0+CgogIDwhLS0gU3RlYW0gd2lzcHMgYmVoaW5kIHBsYXRlIC0tPgogIDxnIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMTgiPgogICAgPHBhdGggZD0iTTk4MCAxNTAgcSAtMTggLTI2IDAgLTUyIHEgMTggLTI2IDAgLTUyIi8+CiAgICA8cGF0aCBkPSJNMTA0MCAxNDAgcSAtMTggLTI2IDAgLTUyIHEgMTggLTI2IDAgLTUyIi8+CiAgICA8cGF0aCBkPSJNMTEwMCAxNTAgcSAtMTggLTI2IDAgLTUyIHEgMTggLTI2IDAgLTUyIi8+CiAgPC9nPgoKICA8IS0tIE1haW4gcGxhdGUgLS0+CiAgPGcgZmlsdGVyPSJ1cmwoI3NvZnQpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDQwIDI0MCkiPgogICAgPGVsbGlwc2UgY3g9IjAiIGN5PSIwIiByeD0iMjA1IiByeT0iMTcwIiBmaWxsPSJ1cmwoI3JpbSkiLz4KICAgIDxlbGxpcHNlIGN4PSIwIiBjeT0iMCIgcng9IjE3MiIgcnk9IjE0MiIgZmlsbD0idXJsKCNwbGF0ZSkiLz4KICAgIDxlbGxpcHNlIGN4PSIwIiBjeT0iMCIgcng9IjE3MiIgcnk9IjE0MiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDhERUQ4IiBzdHJva2Utd2lkdGg9IjIiLz4KCiAgICA8IS0tIFJpY2UgbW91bmQgKGJhY2spIC0tPgogICAgPHBhdGggZD0iTS0xNTAgNCBxIC02IC03OCA3MCAtODggcSA3MCAtOCA3NiA2MCBxIDIgMzAgLTI4IDQwIHEgLTY0IDIyIC0xMTggLTEyeiIgZmlsbD0idXJsKCNyaWNlKSIvPgogICAgPGcgZmlsbD0iI0Q5QzI4QyIgb3BhY2l0eT0iMC43Ij4KICAgICAgPGVsbGlwc2UgY3g9Ii0xMTAiIGN5PSItNDQiIHJ4PSI1IiByeT0iMyIvPgogICAgICA8ZWxsaXBzZSBjeD0iLTg2IiBjeT0iLTU4IiByeD0iNSIgcnk9IjMiLz4KICAgICAgPGVsbGlwc2UgY3g9Ii02MCIgY3k9Ii00NiIgcng9IjUiIHJ5PSIzIi8+CiAgICAgIDxlbGxpcHNlIGN4PSItOTQiIGN5PSItMjYiIHJ4PSI1IiByeT0iMyIvPgogICAgICA8ZWxsaXBzZSBjeD0iLTY4IiBjeT0iLTE4IiByeD0iNSIgcnk9IjMiLz4KICAgICAgPGVsbGlwc2UgY3g9Ii0zOCIgY3k9Ii0zMCIgcng9IjUiIHJ5PSIzIi8+CiAgICA8L2c+CgogICAgPCEtLSBHcmlsbGVkIGNoaWNrZW4gLyBza2V3ZXIgcGllY2VzIChjZW50ZXIpIC0tPgogICAgPGc+CiAgICAgIDxyZWN0IHg9Ii0zMCIgeT0iLTYyIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiByeD0iMjAiIGZpbGw9InVybCgjY2hpY2tlbikiIHRyYW5zZm9ybT0icm90YXRlKC0xNCAzMCAtNDIpIi8+CiAgICAgIDxyZWN0IHg9Ii0xMCIgeT0iLTE0IiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiByeD0iMjAiIGZpbGw9InVybCgjY2hpY2tlbikiIHRyYW5zZm9ybT0icm90YXRlKC04IDUwIDYpIi8+CiAgICAgIDxyZWN0IHg9IjAiIHk9IjM2IiB3aWR0aD0iMTEwIiBoZWlnaHQ9IjM4IiByeD0iMTkiIGZpbGw9InVybCgjY2hpY2tlbikiIHRyYW5zZm9ybT0icm90YXRlKDQgNTUgNTUpIi8+CiAgICAgIDwhLS0gZ3JpbGwgbWFya3MgLS0+CiAgICAgIDxnIHN0cm9rZT0iIzhBNEQxMSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIG9wYWNpdHk9IjAuNTUiPgogICAgICAgIDxsaW5lIHgxPSI2IiB5MT0iLTU4IiB4Mj0iNDQiIHkyPSItNDAiLz4KICAgICAgICA8bGluZSB4MT0iMjIiIHkxPSItNjYiIHgyPSI2MCIgeTI9Ii00OCIvPgogICAgICAgIDxsaW5lIHgxPSIyNiIgeTE9Ii04IiB4Mj0iNjYiIHkyPSI4Ii8+CiAgICAgICAgPGxpbmUgeDE9IjQ0IiB5MT0iLTE2IiB4Mj0iODQiIHkyPSIwIi8+CiAgICAgICAgPGxpbmUgeDE9IjMwIiB5MT0iNDQiIHgyPSI2OCIgeTI9IjU4Ii8+CiAgICAgICAgPGxpbmUgeDE9IjQ4IiB5MT0iMzgiIHgyPSI4NiIgeTI9IjUyIi8+CiAgICAgIDwvZz4KICAgIDwvZz4KCiAgICA8IS0tIENoZXJyeSB0b21hdG9lcyAtLT4KICAgIDxnPgogICAgICA8Y2lyY2xlIGN4PSItNzAiIGN5PSI3OCIgcj0iMjQiIGZpbGw9InVybCgjdG9tYXRvKSIvPgogICAgICA8Y2lyY2xlIGN4PSItNzAiIGN5PSI3OCIgcj0iMjQiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9IjAuMTgiLz4KICAgICAgPGVsbGlwc2UgY3g9Ii03OCIgY3k9IjY4IiByeD0iNyIgcnk9IjUiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9IjAuNDUiLz4KICAgICAgPGNpcmNsZSBjeD0iLTExOCIgY3k9IjQ4IiByPSIxOCIgZmlsbD0idXJsKCN0b21hdG8pIi8+CiAgICAgIDxlbGxpcHNlIGN4PSItMTI0IiBjeT0iNDEiIHJ4PSI1IiByeT0iNCIgZmlsbD0iI0ZGRkZGRiIgb3BhY2l0eT0iMC40NSIvPgogICAgPC9nPgoKICAgIDwhLS0gRnJlc2ggZ3JlZW5zIC8gaGVyYnMgLS0+CiAgICA8ZyBmaWxsPSJ1cmwoI2dyZWVucykiPgogICAgICA8cGF0aCBkPSJNLTE0MCA5MiBxIDI2IC0yMiA1MiAtNCBxIC0yMCAyNiAtNTIgNHoiLz4KICAgICAgPHBhdGggZD0iTTExMCA3OCBxIDI2IC0yMCA1MCAwIHEgLTIyIDI0IC01MCAweiIvPgogICAgICA8cGF0aCBkPSJNODYgLTg2IHEgMjIgLTE4IDQ0IC0yIHEgLTE4IDIyIC00NCAyeiIvPgogICAgPC9nPgogICAgPGcgc3Ryb2tlPSIjMkU4RjZFIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgb3BhY2l0eT0iMC42Ij4KICAgICAgPHBhdGggZD0iTS0xMjIgOTYgcSAxNCAtMTAgMjggLTQiIGZpbGw9Im5vbmUiLz4KICAgICAgPHBhdGggZD0iTTEyNCA4NCBxIDE0IC0xMCAyNiAtNCIgZmlsbD0ibm9uZSIvPgogICAgPC9nPgogIDwvZz4KCiAgPCEtLSBTbWFsbCBzaWRlIGJvd2wgd2l0aCBzYWxhZCAtLT4KICA8ZyBmaWx0ZXI9InVybCgjc29mdCkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgwMCAzMjApIj4KICAgIDxlbGxpcHNlIGN4PSIwIiBjeT0iMCIgcng9IjkyIiByeT0iNzQiIGZpbGw9InVybCgjcmltKSIvPgogICAgPGVsbGlwc2UgY3g9IjAiIGN5PSItNCIgcng9Ijc0IiByeT0iNTgiIGZpbGw9InVybCgjcGxhdGUpIi8+CiAgICA8cGF0aCBkPSJNLTY2IC0xMCBxIDQgLTQ0IDY2IC00NCBxIDYwIDAgNjYgNDIgcSAyIDIyIC0zMCAzMCBxIC01MiAxMiAtMTAyIC02eiIgZmlsbD0idXJsKCNncmVlbnMpIi8+CiAgICA8Y2lyY2xlIGN4PSItMjQiIGN5PSItMjgiIHI9IjExIiBmaWxsPSJ1cmwoI3RvbWF0bykiLz4KICAgIDxjaXJjbGUgY3g9IjIwIiBjeT0iLTE4IiByPSI5IiBmaWxsPSIjRjA2NDFFIi8+CiAgICA8ZWxsaXBzZSBjeD0iLTIiIGN5PSItNDAiIHJ4PSIxNCIgcnk9IjgiIGZpbGw9IiM3RkQwQkMiIG9wYWNpdHk9IjAuODUiLz4KICA8L2c+CgogIDwhLS0gRmxvYXRpbmcgYmFndWV0dGUgKHRvcCByaWdodCBhY2NlbnQpIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyODAgOTApIHJvdGF0ZSgyOCkiIGZpbHRlcj0idXJsKCNzb2Z0KSI+CiAgICA8cmVjdCB4PSItNzAiIHk9Ii0yNiIgd2lkdGg9IjE0MCIgaGVpZ2h0PSI1MiIgcng9IjI2IiBmaWxsPSJ1cmwoI2J1bikiLz4KICAgIDxwYXRoIGQ9Ik0tNDAgLTI2IGwgMTAgNTIgTS0xMCAtMjYgbCAxMCA1MiBNMjAgLTI2IGwgMTAgNTIiIHN0cm9rZT0iI0E5NzAxRiIgc3Ryb2tlLXdpZHRoPSIzIiBvcGFjaXR5PSIwLjU1Ii8+CiAgICA8cGF0aCBkPSJNLTU4IDAgcSA1OCAtMjIgMTE2IDAiIHN0cm9rZT0iIzVFQTY4QiIgc3Ryb2tlLXdpZHRoPSIxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPC9nPgoKICA8IS0tIEZvcmsgJiBrbmlmZSBpY29uIChsZWZ0IGFjY2VudCkgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUwIDI1MCkiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMjIiPgogICAgPHBhdGggZD0iTTAgLTcwIHYgNjAgTS0xNCAtNzAgdiAzMCBNMTQgLTcwIHYgMzAgTTAgLTEwIHYgODAiLz4KICAgIDxwYXRoIGQ9Ik02MCAtNzAgcSAyMiA2IDIyIDUwIHEgMCAxNCAtMjIgMTYgdiA3NCIvPgogIDwvZz4KCiAgPCEtLSBCb3R0b20gc2NyaW0gZm9yIHRleHQgbGVnaWJpbGl0eSBpbiBhcHAgLS0+CiAgPHJlY3Qgd2lkdGg9IjE0MDAiIGhlaWdodD0iNDIwIiBmaWxsPSJ1cmwoI3NjcmltKSIvPgoKCjwvc3ZnPgo=";

const EMPLOYEES = [
  "יובל", "בועז", "קורל", "אן", "יבגני", "בר", "חגי", "עדן",
  "אנה", "נטע", "דניאל", "טל", "יוסף", "יהונתן", "ירין", "דין",
  "ויקה", "איתי", "אייל", "אלה", "עידן", "אחר",
];

const DAYS = [
  { key: "sun", label: "יום א׳" },
  { key: "mon", label: "יום ב׳" },
  { key: "tue", label: "יום ג׳" },
  { key: "wed", label: "יום ד׳" },
  { key: "thu", label: "יום ה׳" },
];

// Maps JS getDay() (0=Sun) to our day keys; Fri/Sat fall back to Sunday
const JS_DAY_TO_KEY = { 0: "sun", 1: "mon", 2: "tue", 3: "wed", 4: "thu", 5: "sun", 6: "sun" };

const MENU = {
  sun: {
    mains: ["שניצל מטוגן", "שניצלונים בשומשום", "צלי עגל פטריות", "כרעים עוף צלוי", "שיפודי פרגית", "סטיק פרגית גריל", "עוף סיני מוקפץ", "חזה עוף על האש", "קבאב טחינה"],
    veg: ["שניצל דק (טבעול)", "בלינצ'ס פטריות", "פשטידת ירקות", "דג מרוקאי"],
    sides: ["אורז + ירקות", "אורז לבן", "אורז בעשבי תיבול", "תפו\"א פרוס צהוב", "תפודים ברוזמרין", "ספגטי פיקנטי", "רביולי בשר ברוטב עגבניות", "קוסקוס", "תבשיל ירקות", "אפונה וגזר ברוטב", "ירקות קלויים", "פטריות חמות", "בטטה בקרמל"],
  },
  mon: {
    mains: ["בקר סצ'ואן", "עוף סיני מוקפץ בצ'לי", "שיפודי פרגית", "חזה על האש", "סטיק פרגית על האש", "נתחי פרגית בבצל ויין", "כרעים בתנור", "שניצל בשומשום", "שווארמה טורקית", "מפרום"],
    veg: ["שניצל תירס/רגיל", "בלינצ'ס תפו\"א", "פשטידת בטטה וירקות"],
    sides: ["קישואים תאילנדי", "רביולי תפו\"א ברוטב", "אורז מג'דרה/לבן", "אורז סיני", "פתיתים אפויים", "תפו\"א סירות/רוזמרין", "פסטה פנה עגבניות", "דואט תפו\"א בטטה", "שעועית ירוקה", "קוסקוס", "תבשיל ירקות", "אנטיפסטי", "צ'יפס", "כוסמת"],
  },
  tue: {
    mains: ["שיפודי פרגית על האש", "סטיק פרגית סלסה", "קציצות ברוטב עגבניות", "קבאב טחינה", "כבד עוף בצל ויין", "מפרום", "עוף סיני בטמפורה", "כרעים עוף בתנור", "עוף בפירות יבשים", "שניצל", "כרוב ממולא"],
    veg: ["שקשוקה", "קציצות ירקות", "רביולי בטטה ברוטב סלסה", "קציצות דגים ברוטב מרוקאי", "פילה מושט בלימון"],
    sides: ["קוסקוס", "תבשיל ירקות", "ספגטי פיקנטי", "פירה בייתי", "נודלס", "אורז פירות יבשים", "אורז צהוב עם אפונה", "בטטה קלויה", "פטריות חמות", "זיתים מרוקאים", "תפו\"א עשבי תיבול", "תפו\"א פרוס צהוב", "תפודים ברוזמרין", "רביולי בשר סלסה", "כוסמת"],
  },
  wed: {
    mains: ["סטיק פרגית על האש", "שיפודי פרגית פיקנטי", "חזה על האש צ'מצורי", "מעורב ירושלמי", "כרעים בגריל", "גולש", "שניצל בשומשום", "קציצות עוף פיקנטי", "קובה בשר מטוגן", "כרעים בדבש", "קציצות עוף ברוטב", "עוף סיני מוקפץ", "המבורגר", "שווארמה"],
    veg: ["פשטידת ירקות", "שניצל תירס", "פשטידת גזר", "דג פילה מושט מטוגן"],
    sides: ["פסטה פוזילי מוקפץ", "אורז לבן עם ירקות", "אורז לבן/בצל מטוגן", "רביולי בשר ברוטב זיתים", "תפו\"א פרוס צהוב", "קוביות תפו\"א פפריקה", "פלפל צבעוני קלוי", "ירקות אנטיפסטי", "אפונה ברוטב עגבניות", "קוסקוס", "תבשיל ירקות", "ירקות מוקפצים", "צ'יפס"],
  },
  thu: {
    mains: ["שניצל בשומשום", "חזה עוף ברוטב פיקנטי", "שיפודי פרגית על האש", "סטיק פרגית צ'מצורי", "שניצל חרדל ושום", "כבד עוף בצל ויין", "כרעים עוף בשזיפים", "מפרום / מוסקה", "קציצות בקר מטוגן", "כרעים בגריל / דבש", "עוף סיני בטמפורה", "קובה בשר מטוגן", "פלפל ממולא", "טורטיה מטוגנת עוף עם פטריות", "טורטיה מטוגנת בקר טלה"],
    veg: ["פשטידת פטריות", "פשטידת בצל", "קציצות דג מרוקאי", "פילה מושט מרוקאי", "סלמון בתנור בשמן זית"],
    sides: ["בטטה בקרמל", "אורז מג'דרה", "אורז סיני", "אורז לבן", "תפו\"א ברוזמרין", "פתיתים עם בצל", "קוסקוס", "פירה בייתי", "תבשיל ירקות", "ירקות פרובנס", "שעועית ירוקה מוקפצת", "פטריות חמות", "רביולי תפו\"א בצל מטוגן", "חציל מטוגן (בטמפורה)"],
  },
};

const PERSONAL_SALADS = [
  "חומוס", "טחינה ביתית", "כרוב בלימון", "חציל במיונז", "חציל פיקנטי",
  "חמוצים", "כרוב אדום", "אבוקדו (בעונה)", "ירקות טריים", "סלק אדום",
  "גזר מרוקאי", "גזר באננס", "טבולה", "גזר בלימון", "מטבוחה", "סלסה",
  "צ'רצ'י", "פלפל קלוי אדום", "פלפל חריף", "סלט ביצים", "קולסלאו",
];

const HEALTH_SALADS = [
  "יווני - ירקות העונה, בולגרית",
  "טונה - טונה, ביצה קשה, ירקות",
  "קליפורניה - ירקות טריים עם חזה עוף על האש (מנה מלאה)",
];

const BAGUETTES = [
  "באגט טוניסאי",
  "באגט פרגית",
  "באגט שניצל",
  "באגט חזה עוף",
];

// Opt-out choice for the quantity groups (toppings / personal salads). Picking
// it clears everything else in the group and counts as a single, complete
// selection on its own.
const NONE_SIDES = "לא מעוניין בתוספות";
const NONE_SALADS = "לא מעוניין בסלטים";

const TODAY_KEY = JS_DAY_TO_KEY[new Date().getDay()];
const TODAY_LABEL = new Date().toLocaleDateString("he-IL", { weekday: "long", day: "numeric", month: "long" });

// Orders may only be sent between 00:00 and 09:14 Israel time (Asia/Jerusalem).
const ORDER_WINDOW_END_MINUTES = 9 * 60 + 14; // 09:14

function israeliMinutesNow() {
  // Current time-of-day in minutes, evaluated in the Asia/Jerusalem timezone
  // regardless of the device's local timezone.
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jerusalem",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const hour = parseInt(parts.find(p => p.type === "hour").value, 10) % 24;
  const minute = parseInt(parts.find(p => p.type === "minute").value, 10);
  return hour * 60 + minute;
}

function isOrderWindowOpen() {
  const m = israeliMinutesNow();
  return m >= 0 && m <= ORDER_WINDOW_END_MINUTES;
}

async function sendToWebhook(payload) {
  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (e) {
    console.error("Webhook error:", e);
  }
}

export default function FoodOrderApp() {
  const [employee, setEmployee] = useState("");
  const [customName, setCustomName] = useState("");
  const day = TODAY_KEY; // locked to today's menu
  const [mealType, setMealType] = useState("main"); // "main" | "health" | "baguette"
  const [main, setMain] = useState(null);
  const [sides, setSides] = useState([]);
  const [salads, setSalads] = useState([]);
  const [healthSalad, setHealthSalad] = useState(null);
  const [healthSide, setHealthSide] = useState(null);
  const [baguette, setBaguette] = useState(null);
  const [comments, setComments] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [toast, setToast] = useState(null);
  const [windowOpen, setWindowOpen] = useState(true);

  // Keep the order window status in sync with the Israeli clock. Start true to
  // match the server render and avoid hydration mismatch, then re-check on mount
  // and every 15s so the button disables itself the moment 09:14 passes.
  useEffect(() => {
    const update = () => setWindowOpen(isOrderWindowOpen());
    update();
    const id = setInterval(update, 15000);
    return () => clearInterval(id);
  }, []);

  const menu = MENU[day];

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2800);
  };

  const resetSelections = () => {
    setMain(null); setSides([]); setSalads([]);
    setHealthSalad(null); setHealthSide(null); setBaguette(null);
    setComments(""); setDone(false);
  };

  const onEmployeeChange = (e) => { setEmployee(e.target.value); setCustomName(""); resetSelections(); };
  const onMealTypeChange = (t) => { setMealType(t); resetSelections(); };

  // Quantity-based: an item can be chosen up to twice; 2 total per group.
  const countOf = (arr, item) => arr.filter(x => x === item).length;

  const addSide = (item) => {
    setDone(false);
    if (item === NONE_SIDES) { setSides([NONE_SIDES]); return; }
    setSides((prev) => {
      const base = prev.filter(x => x !== NONE_SIDES);
      return base.length < 2 ? [...base, item] : base;
    });
  };
  const removeSide = (item) => {
    setDone(false);
    setSides((prev) => {
      const i = prev.indexOf(item);
      if (i === -1) return prev;
      return [...prev.slice(0, i), ...prev.slice(i + 1)];
    });
  };

  const addSalad = (item) => {
    setDone(false);
    if (item === NONE_SALADS) { setSalads([NONE_SALADS]); return; }
    setSalads((prev) => {
      const base = prev.filter(x => x !== NONE_SALADS);
      return base.length < 2 ? [...base, item] : base;
    });
  };
  const removeSalad = (item) => {
    setDone(false);
    setSalads((prev) => {
      const i = prev.indexOf(item);
      if (i === -1) return prev;
      return [...prev.slice(0, i), ...prev.slice(i + 1)];
    });
  };

  const isOther = employee === "אחר";
  const effectiveName = isOther ? customName.trim() : employee;
  const nameReady = !!effectiveName;

  // A group is complete once it has 2 picks or the "לא מעוניין" opt-out.
  const sidesDone = sides.includes(NONE_SIDES) || sides.length === 2;
  const saladsDone = salads.includes(NONE_SALADS) || salads.length === 2;
  const sidesHint = sides.includes(NONE_SIDES) ? "לא מעוניין" : `${sides.length}/2 נבחרו`;
  const saladsHint = salads.includes(NONE_SALADS) ? "לא מעוניין" : `${salads.length}/2 נבחרו`;

  const mainComplete = main && sidesDone && saladsDone;
  const healthComplete = healthSalad && (healthSalad.startsWith("קליפורניה") || healthSide);
  const baguetteComplete = baguette && saladsDone;
  const isComplete = nameReady && (mealType === "main" ? mainComplete
    : mealType === "health" ? healthComplete
    : baguetteComplete);

  const handleSubmit = async () => {
    if (!isComplete) return;
    if (!isOrderWindowOpen()) {
      setWindowOpen(false);
      showToast("ההזמנות נסגרו להיום");
      return;
    }
    setSending(true);
    const order = mealType === "main"
      ? { meal_type: "ארוחה עסקית", main, sides, salads }
      : mealType === "health"
      ? { meal_type: "סלט בריאות", health_salad: healthSalad, side: healthSalad.startsWith("קליפורניה") ? null : healthSide }
      : { meal_type: "באגט", baguette, salads };
    await sendToWebhook({
      employee: effectiveName,
      is_custom_name: isOther,
      day: DAYS.find(d => d.key === day)?.label,
      ...order,
      comments: comments.trim() || null,
      action: done ? "changed" : "selected",
      timestamp: new Date().toISOString(),
    });
    setSending(false);
    setDone(true);
    showToast("ההזמנה נשלחה בהצלחה");
  };

  const isCalifornia = healthSalad?.startsWith("קליפורניה");

  return (
    <div style={s.page} dir="rtl">
      <style>{cssReset}</style>
      {toast && <div style={s.toast}>✓ {toast}</div>}

      {/* Header */}
      <header style={s.header}>
        {/* Food cover banner */}
        <div style={s.cover}>
          <div style={s.coverScrim} />
          <div style={s.coverContent}>
            <h1 style={s.brand}>99 דיגיטל · הזמנת אוכל</h1>
            <div style={s.cateringRow}>
              <span style={s.cateringDot} />
              <span style={s.cateringText}>בשיתוף מעדני אבי · שירותי קייטרינג</span>
            </div>
          </div>
          <span style={s.coverDate}>{TODAY_LABEL}</span>
        </div>
      </header>

      <main style={s.main}>
        <div style={s.card}>
          {/* Employee */}
          <div style={s.field}>
            <label style={s.label}>שם העובד</label>
            <div style={s.selectWrap}>
              <select style={s.select} value={employee} onChange={onEmployeeChange}>
                <option value="">בחר/י את שמך…</option>
                {EMPLOYEES.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
              <span style={s.selectArrow}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            {isOther && (
              <input
                style={{ ...s.input, marginTop: 10 }}
                value={customName}
                onChange={(e) => { setDone(false); setCustomName(e.target.value); }}
                placeholder="הקלד/י את שמך…"
                autoFocus
              />
            )}
          </div>

          {employee && (
            <>
              {/* Today's menu banner */}
              <div style={s.dayBanner}>
                תפריט {DAYS.find(d => d.key === day)?.label} · {TODAY_LABEL}
              </div>

              {/* Meal type toggle */}
              <div style={s.field}>
                <label style={s.label}>סוג הארוחה</label>
                <div style={s.toggle}>
                  <button onClick={() => onMealTypeChange("main")}
                    style={{ ...s.toggleBtn, ...(mealType === "main" ? s.toggleActive : {}) }}>
                    ארוחה עסקית
                  </button>
                  <button onClick={() => onMealTypeChange("health")}
                    style={{ ...s.toggleBtn, ...(mealType === "health" ? s.toggleActive : {}) }}>
                    סלט בריאות
                  </button>
                  <button onClick={() => onMealTypeChange("baguette")}
                    style={{ ...s.toggleBtn, ...(mealType === "baguette" ? s.toggleActive : {}) }}>
                    באגטים
                  </button>
                </div>
              </div>

              <div style={s.rule} />

              {/* MAIN MEAL FLOW */}
              {mealType === "main" && (
                <>
                  <Section title="מנה עיקרית" hint="בחר/י אחת">
                    <Chips items={[...menu.mains, ...menu.veg]} selected={main ? [main] : []}
                      onToggle={(i) => { setDone(false); setMain(i === main ? null : i); }} />
                  </Section>

                  <Section title="תוספות" hint={sidesHint}>
                    <QtyChips items={[...menu.sides, NONE_SIDES]} counts={countOf} arr={sides}
                      onAdd={addSide} onRemove={removeSide} atLimit={sidesDone} noneItem={NONE_SIDES} />
                  </Section>

                  <Section title="סלטים אישיים" hint={saladsHint}>
                    <QtyChips items={[...PERSONAL_SALADS, NONE_SALADS]} counts={countOf} arr={salads}
                      onAdd={addSalad} onRemove={removeSalad} atLimit={saladsDone} noneItem={NONE_SALADS} />
                  </Section>
                </>
              )}

              {/* HEALTH SALAD FLOW */}
              {mealType === "health" && (
                <>
                  <Section title="סלט בריאות" hint="בחר/י אחד">
                    <Chips items={HEALTH_SALADS} selected={healthSalad ? [healthSalad] : []}
                      onToggle={(i) => { setDone(false); setHealthSalad(i === healthSalad ? null : i); setHealthSide(null); }} />
                  </Section>
                  {healthSalad && !isCalifornia && (
                    <Section title="תוספת" hint="בחר/י אחת">
                      <Chips items={menu.sides} selected={healthSide ? [healthSide] : []}
                        onToggle={(i) => { setDone(false); setHealthSide(i === healthSide ? null : i); }} />
                    </Section>
                  )}
                  {isCalifornia && (
                    <p style={s.note}>סלט קליפורניה הוא מנה מלאה — אין צורך בתוספת.</p>
                  )}
                </>
              )}

              {/* BAGUETTE FLOW */}
              {mealType === "baguette" && (
                <>
                  <Section title="באגטים" hint="בחר/י אחד">
                    <Chips items={BAGUETTES} selected={baguette ? [baguette] : []}
                      onToggle={(i) => { setDone(false); setBaguette(i === baguette ? null : i); }} />
                  </Section>

                  <Section title="סלטים אישיים" hint={saladsHint}>
                    <QtyChips items={[...PERSONAL_SALADS, NONE_SALADS]} counts={countOf} arr={salads}
                      onAdd={addSalad} onRemove={removeSalad} atLimit={saladsDone} noneItem={NONE_SALADS} />
                  </Section>
                </>
              )}

              {/* Comments */}
              <div style={s.field}>
                <label style={s.label}>הערות</label>
                <textarea
                  style={s.textarea}
                  value={comments}
                  onChange={(e) => { setDone(false); setComments(e.target.value); }}
                  placeholder="בקשות מיוחדות, אלרגיות, רמת חריפות…"
                  rows={3}
                />
              </div>

              {/* Submit */}
              {!windowOpen && (
                <p style={s.note}>
                  ההזמנות סגורות כעת.
                </p>
              )}
              <button
                style={{ ...s.submit, ...(isComplete && windowOpen && !sending ? {} : s.submitDisabled) }}
                disabled={!isComplete || !windowOpen || sending}
                onClick={handleSubmit}>
                {sending ? "שולח…" : !windowOpen ? "ההזמנות סגורות" : done ? "עדכן הזמנה" : "שלח הזמנה"}
              </button>

              {done && !sending && (
                <div style={s.summary}>
                  <strong>{effectiveName.split(" ")[0]}</strong>, ההזמנה שלך ל{DAYS.find(d=>d.key===day)?.label} נקלטה ✓
                </div>
              )}
            </>
          )}
        </div>

        <footer style={s.footer}>
          מעדני אבי - רח׳ אחד העם 17, נתניה · טל׳ 09-8626436 · נייד 053-6230268
        </footer>
      </main>
    </div>
  );
}

function Section({ title, hint, children }) {
  return (
    <div style={s.section}>
      <div style={s.sectionHead}>
        <span style={s.sectionTitle}>{title}</span>
        <span style={s.sectionHint}>{hint}</span>
      </div>
      {children}
    </div>
  );
}

function Chips({ items, selected, onToggle, atLimit }) {
  return (
    <div style={s.chips}>
      {items.map((item) => {
        const isSel = selected.includes(item);
        const disabled = atLimit && !isSel;
        return (
          <button key={item}
            onClick={() => onToggle(item)}
            disabled={disabled}
            style={{
              ...s.chip,
              ...(isSel ? s.chipActive : {}),
              ...(disabled ? s.chipDisabled : {}),
            }}>
            {item}
          </button>
        );
      })}
    </div>
  );
}

// Quantity chips: tap to add (same item can be added up to twice), with a
// stepper showing count and a minus control once selected.
function QtyChips({ items, counts, arr, onAdd, onRemove, atLimit, noneItem }) {
  const noneSelected = noneItem && arr.includes(noneItem);
  return (
    <div style={s.chips}>
      {items.map((item) => {
        // The opt-out ("לא מעוניין") is a plain single-select toggle, not a
        // quantity chip — no ×count stepper.
        if (item === noneItem) {
          return (
            <button key={item}
              onClick={() => noneSelected ? onRemove(item) : onAdd(item)}
              style={{ ...s.chip, ...(noneSelected ? s.chipActive : {}) }}>
              {item}
            </button>
          );
        }
        const n = counts(arr, item);
        const isSel = n > 0;
        const canAdd = !atLimit;
        if (!isSel) {
          return (
            <button key={item}
              onClick={() => onAdd(item)}
              disabled={!canAdd}
              style={{ ...s.chip, ...(!canAdd ? s.chipDisabled : {}) }}>
              {item}
            </button>
          );
        }
        return (
          <span key={item} style={{ ...s.chip, ...s.chipActive, ...s.qtyChip }}>
            <button onClick={() => onRemove(item)} style={s.qtyBtn} aria-label="הסר">−</button>
            <span style={s.qtyLabel}>{item}</span>
            <span style={s.qtyCount}>×{n}</span>
            <button onClick={() => onAdd(item)} disabled={!canAdd}
              style={{ ...s.qtyBtn, ...(!canAdd ? s.qtyBtnOff : {}) }} aria-label="הוסף">+</button>
          </span>
        );
      })}
    </div>
  );
}

const cssReset = `
  @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@400;500;600;700;800&display=swap');
  select:focus { border-color:#1B9E63 !important; box-shadow:0 0 0 3px rgba(27,158,99,0.12); }
  input:focus { border-color:#1B9E63 !important; box-shadow:0 0 0 3px rgba(27,158,99,0.12); }
  textarea:focus { border-color:#1B9E63 !important; box-shadow:0 0 0 3px rgba(27,158,99,0.12); }
  button { font-family: inherit; }
`;

// 99Digital brand palette
// Green primary (logo "ital" + links), light-grey canvas, white cards,
// soft grey hairlines, with the logo's orange kept as a small warm accent.
const CREAM = "#F5F6F5";       // light cool-grey canvas (matches app background)
const INK = "#2D3A34";         // deep slate-green text
const RED = "#1B9E63";         // brand green — primary action
const RED_DEEP = "#16804F";    // pressed/hover depth
const AMBER = "#F0641E";       // logo orange — small warm accent
const AMBER_SOFT = "#E6F4EC";  // soft green wash for highlights
const LINE = "#E4E7E5";        // cool grey hairline
const MUTED = "#8A958F";       // muted grey-green secondary text

const s = {
  page: {
    minHeight: "100vh",
    background: CREAM,
    fontFamily: "'Assistant', 'Segoe UI', system-ui, sans-serif",
    color: INK,
  },
  header: {
    background: "#fff",
    borderBottom: `1px solid ${LINE}`,
  },
  cover: {
    position: "relative",
    minHeight: 170,
    backgroundImage: `url(${COVER_URI})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "flex-end",
  },
  coverScrim: {
    position: "absolute", inset: 0,
    background:
      "linear-gradient(180deg, rgba(11,58,29,0) 0%, rgba(11,58,29,0.10) 55%, rgba(11,58,29,0.55) 100%)",
  },
  coverContent: {
    position: "relative", zIndex: 1,
    maxWidth: 640, width: "100%", margin: "0 auto",
    padding: "0 24px 20px",
  },
  coverDate: {
    position: "absolute", left: 24, bottom: 18, zIndex: 2,
    fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.92)",
    background: "rgba(11,58,29,0.45)", padding: "5px 12px",
    borderRadius: 20, backdropFilter: "blur(4px)",
    textShadow: "0 1px 6px rgba(0,0,0,0.3)",
  },
  brand: {
    fontSize: 27, fontWeight: 800, letterSpacing: "-0.6px",
    lineHeight: 1.15, color: "#fff", margin: 0,
    textShadow: "0 1px 12px rgba(0,0,0,0.35)",
  },
  cateringRow: {
    display: "flex", alignItems: "center", gap: 7, marginTop: 7,
  },
  cateringDot: {
    width: 6, height: 6, borderRadius: "50%", background: AMBER, flexShrink: 0,
  },
  cateringText: {
    fontSize: 13, color: "rgba(255,255,255,0.92)", fontWeight: 500,
    textShadow: "0 1px 8px rgba(0,0,0,0.3)",
  },
  main: { maxWidth: 640, margin: "0 auto", padding: "28px 20px 50px" },
  card: {
    background: "#fff", border: `1px solid ${LINE}`, borderRadius: 16,
    padding: "26px 24px", boxShadow: "0 2px 24px rgba(140,120,80,0.06)",
  },
  field: { marginBottom: 20 },
  label: {
    display: "block", fontSize: 15, fontWeight: 700, color: INK,
    letterSpacing: "0.2px", marginBottom: 10,
  },
  selectWrap: { position: "relative" },
  select: {
    width: "100%", padding: "12px 16px", border: `1px solid ${LINE}`,
    borderRadius: 10, fontSize: 15, color: INK, background: CREAM,
    appearance: "none", cursor: "pointer", outline: "none",
  },
  input: {
    width: "100%", boxSizing: "border-box", padding: "12px 16px",
    border: `1px solid ${LINE}`, borderRadius: 10, fontSize: 15,
    color: INK, background: CREAM, outline: "none", fontFamily: "inherit",
  },
  selectArrow: {
    position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)",
    color: RED, display: "flex", alignItems: "center",
    pointerEvents: "none",
  },
  dayBanner: {
    textAlign: "center", fontSize: 14, fontWeight: 700, color: RED_DEEP,
    background: AMBER_SOFT, borderRadius: 10, padding: "10px 14px",
    marginBottom: 20,
  },
  toggle: {
    display: "flex", gap: 6, background: CREAM, padding: 4,
    borderRadius: 12, border: `1px solid ${LINE}`,
  },
  toggleBtn: {
    flex: 1, padding: "10px", border: "none", borderRadius: 8,
    background: "transparent", fontSize: 14, fontWeight: 700,
    color: MUTED, cursor: "pointer", transition: "all 0.12s",
  },
  toggleActive: {
    background: "#fff", color: RED_DEEP,
    boxShadow: "0 1px 5px rgba(27,158,99,0.15)",
  },
  rule: { height: 1, background: LINE, margin: "4px 0 22px" },
  section: { marginBottom: 24 },
  sectionHead: {
    display: "flex", alignItems: "baseline", gap: 10, marginBottom: 12,
  },
  sectionTitle: { fontSize: 16, fontWeight: 800, color: INK },
  sectionHint: {
    fontSize: 12, color: RED_DEEP, fontWeight: 700,
    background: AMBER_SOFT, padding: "2px 9px", borderRadius: 20,
  },
  chips: { display: "flex", flexWrap: "wrap", gap: 8 },
  chip: {
    padding: "8px 14px", border: `1px solid ${LINE}`, borderRadius: 22,
    background: "#fff", fontSize: 13.5, color: "#5C5343", cursor: "pointer",
    transition: "all 0.12s",
  },
  chipActive: {
    background: RED, borderColor: RED, color: "#fff", fontWeight: 600,
    boxShadow: "0 2px 10px rgba(27,158,99,0.30)",
  },
  chipDisabled: { opacity: 0.4, cursor: "not-allowed" },
  qtyChip: {
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: "5px 8px",
  },
  qtyLabel: { fontWeight: 600 },
  qtyCount: { fontSize: 12, opacity: 0.9, fontWeight: 700 },
  qtyBtn: {
    width: 22, height: 22, borderRadius: "50%", border: "none",
    background: "rgba(255,255,255,0.25)", color: "#fff",
    fontSize: 16, lineHeight: 1, fontWeight: 700, cursor: "pointer",
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0,
  },
  qtyBtnOff: { opacity: 0.35, cursor: "not-allowed" },
  textarea: {
    width: "100%", boxSizing: "border-box", padding: "12px 14px",
    border: `1px solid ${LINE}`, borderRadius: 10, fontSize: 15,
    color: INK, background: CREAM, outline: "none", resize: "vertical",
    fontFamily: "inherit", lineHeight: 1.5,
  },
  note: {
    fontSize: 13, color: MUTED, background: CREAM,
    padding: "10px 14px", borderRadius: 10, margin: "0 0 8px",
  },
  submit: {
    width: "100%", padding: "16px", border: "none", borderRadius: 12,
    background: `linear-gradient(135deg, ${RED} 0%, ${RED_DEEP} 100%)`,
    color: "#fff", fontSize: 16, fontWeight: 800,
    cursor: "pointer", marginTop: 8, transition: "all 0.15s",
    boxShadow: "0 4px 14px rgba(27,158,99,0.30)", letterSpacing: "0.3px",
  },
  submitDisabled: {
    background: "#EBDDCB", color: "#fff", cursor: "not-allowed",
    boxShadow: "none",
  },
  summary: {
    marginTop: 16, padding: "14px", background: AMBER_SOFT,
    borderRadius: 10, fontSize: 14, color: RED_DEEP, textAlign: "center",
  },
  footer: {
    textAlign: "center", fontSize: 12, color: MUTED,
    marginTop: 28, lineHeight: 1.6,
  },
  toast: {
    position: "fixed", top: 20, left: "50%", transform: "translateX(-50%)",
    background: INK, color: "#fff", padding: "11px 24px", borderRadius: 50,
    fontSize: 14, fontWeight: 600, zIndex: 999,
    boxShadow: "0 6px 24px rgba(0,0,0,0.2)",
  },
};
