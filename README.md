# Funniest One-Line Out-of-Office Reply

[![make.fun](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8.svg)](https://make.fun/c/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
[![Rank](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/maelaozera/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/rank.svg)](https://make.fun/c/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
[![Reward](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/maelaozera/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/reward.svg)](https://make.fun/c/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)

Entry for the [Funniest One-Line Out-of-Office Reply](https://make.fun/c/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8) bounty on [make.fun](https://make.fun).

## The entry

> I'm on annual leave, which is corporate for hiding from you in a legally approved way.

## How it works

`main.ts` (Node 22) writes the single one-line out-of-office reply to
`/output/entry.txt`. The program is fully deterministic — a fixed string, no
randomness, no network, no clock — so every run produces byte-identical
output. It validates the gate locally before writing: UTF-8 text, 1–160
characters, a single line, not only white space.

## Run

```sh
node main.ts
```
