# simple-calculator

![Screen Shot 2024-09-06 at 18 37 35](https://github.com/user-attachments/assets/81d2b1d4-9030-4a63-a241-aef32bc4f257)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Stack

- NextJS v14
- React 18
- Playwright (end to end) v1.47
- Jest v29
- TS 5

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

For unit testing just run `yarn test`

For end-to-end testing you should start the project and call playwright:

- run `yarn dev` the service should be available at `http://localhost:3000`
- then run `yarn playwright`
