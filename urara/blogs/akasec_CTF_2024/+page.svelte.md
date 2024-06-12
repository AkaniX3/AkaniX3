---
title: 'Akasec CTF 2024 writeup'
image: '/hello-world/urara.webp'
alt: 'AkasecCTF'
created: 2024-6-11
tags:
  - 'CTF'
  - 'Forensics'
---

My writeup on Akasec CTF on the challs solved by my team 'Bits & Pieces' and we placed rank 13th on this ctf event, it was a pretty good run this time!

## Forensics:

### Portugal

meow

## Crypto:

### Lost

```py
m=724154397787031699242933363312913323086319394176220093419616667612889538090840511506381320998293481458429167685676367015744314015744
n=5113166966960118603250666870544315753374750136060769465485822149528706374700934720443689630473991177661169179462100732951725871457633686010946951736764639
e=2
c=329402637167950119278220170950190680807120980712143610290182242567212843996710001488280098771626903975534140478814872389359418514658167263670496584963653
P.<x> = PolynomialRing(Zmod(n), implementation='NTL')
pol = (m + x)^e - c
roots = pol.small_roots(epsilon=1/50)
print("Potential solutions:")
for root in roots:
      a = root+m
      print(root+m)
```

Here the code attempts to find small roots of the polynomial using the small_roots method with an epsilon value of 1/50. The small_roots method is used to find roots of a polynomial where the roots are known to be small relative to the modulus n.

```
roots = pol.small_roots(epsilon=1/50)
```
Then we iterate through the found roots, add each root to m, and prints the result. The addition of m to each root is done because the polynomial was defined as (m+x), so the roots found are offsets from m.

The encryption operation for RSA with exponent 2 can be written as:

𝑐
=
(
𝑚
+
𝑘
)
2
m
o
d
 
 
𝑛
c=(m+k) 
2
 modn

where k is some small value. The polynomial 
(
𝑚
+
𝑥
)
2
−
𝑐
(m+x) 
2
 −c is constructed and the small roots method is used to find the possible values of k. By adding these roots back to m, the code attempts to recover the original plaintext m.

## Developing

Start a development server:

```bash
# http://127.0.0.1:5173
pnpm dev
```

or listen to different IP and port:

```py
# http://127.0.0.1:3000
pnpm dev --port 3000

# http://0.0.0.0:3000
nr dev --host 0.0.0.0 --port 3000
```

## Building

Create a production version of ur blog:

```bash
pnpm build
```

u can preview the built app with `pnpm preview`.

## Documentation

For full documentation, visit [urara-docs.netlify.app](https://urara-docs.netlify.app).
