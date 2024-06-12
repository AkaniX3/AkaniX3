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

```py
roots = pol.small_roots(epsilon=1/50)
```
Then we iterate through the found roots, add each root to m, and prints the result. The addition of m to each root is done because the polynomial was defined as (m+x), so the roots found are offsets from m.

The encryption operation for RSA with exponent 2 can be written as: c = (m+k)<sup>e</sup> mod n

where k is some small value. The polynomial (m+x)<sup>e</sup> - c is constructed and the small roots method is used to find the possible values of k. By adding these roots back to m, the code attempts to recover the original plaintext m.

Flag: `AKASEC{c0pp3r5m17h_4774ck_1n_1ov3_w17h_5m4ll_3xp0n3nts}`

### Power Over All

meow

### Twin
```py
e=5
n=6689395968128828819066313568755352659933786163958960509093076953387786003094796620023245908431378798689402141767913187865481890531897380982752646248371131
c1=3179086897466915481381271626207192941491642866779832228649829433228467288272857233211003674026630320370606056763863577418383068472502537763155844909495261
c2=6092690907728422411002652306266695413630015459295863614266882891010434275671526748292477694364341702119123311030726985363936486558916833174742155473021704
n1=n
n2=n

def my_gcd(a, b): 
    return a.monic() if b == 0 else my_gcd(b, a % b) 

R.<m2>=Zmod(n)[]
for k in range(256):
   f1=(m2*256+k)^e-c1
   f2=m2^e-c2
   if(my_gcd(f1, f2).coefficients()[0] != 1): # finds the potential
        res = (my_gcd(f1, f2).small_roots()[0] * 256) + k 
        print(long_to_bytes(Integer(res))) # prints the flag
```
We need to exploit a specific relationship between the plaintext messages encrypted as c1 and c2 under the same RSA modulus and small exponent e=5. It iterates over potential values of k, calculates the GCD of the resulting polynomials, and checks for non-trivial solutions that can be used to derive the plaintext.
```py
   if(my_gcd(f1, f2).coefficients()[0] != 1): # finds the potential
```
If the leading coefficient of the GCD is not 1, it indicates a potential solution. it uses the small_roots method to find the potential message, converts it to a readable format, and prints it.

Flag: `AKASEC{be_on_the_right_side_of_history_free_palestine}`

### My Calculus Lab

meow

visit [urara-docs.netlify.app](https://urara-docs.netlify.app).
