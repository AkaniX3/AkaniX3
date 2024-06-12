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

The encryption operation for RSA with exponent 2 can be written as: <cite>c = (m+k)<sup>e</sup> mod n</cite>

where k is some small value. The polynomial <cite>(m+x)<sup>e</sup> - c</cite> is constructed and the small roots method is used to find the possible values of k. By adding these roots back to m, the code attempts to recover the original plaintext m.

Flag: `AKASEC{c0pp3r5m17h_4774ck_1n_1ov3_w17h_5m4ll_3xp0n3nts}`

### Power Over All

meow


visit [urara-docs.netlify.app](https://urara-docs.netlify.app).
