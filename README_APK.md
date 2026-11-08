# Dead By Dead — gerar o APK

## Opção A — GitHub Actions (sem instalar nada)
1. Crie um repositório no GitHub e envie **todo o conteúdo desta pasta** (inclui `.github/workflows/build-apk.yml`).
2. Aba **Actions** > **Build APK** > **Run workflow** (também roda sozinho a cada push em `main`).
3. Ao terminar (uns 5–8 min), abra a execução e baixe **DeadByDead-apk** em *Artifacts*. Dentro está o `app-debug.apk`.
4. No Android: copie o APK, permita "instalar apps desconhecidos" e instale.

## Opção B — no seu computador (Node 18+, JDK 17, Android SDK)
`npm run setup` e depois `npm run apk` → `android/app/build/outputs/apk/debug/app-debug.apk`.

## Atualizar o jogo depois
Edite `www/index.html`, faça push (Opção A) ou rode `npm run sync` (Opção B).
O jogo é um arquivo único, sem dependências externas, e salva suas configurações em localStorage (funciona no WebView).
