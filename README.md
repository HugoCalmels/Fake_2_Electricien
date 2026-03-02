Fix provisoire :

Remove-Item node_modules -Recurse -Force

Remove-Item .next -Recurse -Force

Remove-Item pnpm-lock.yaml -Force


puis npm i & npm run dev