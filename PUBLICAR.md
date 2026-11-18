# Como publicar o site (WS Engenharia Digital)

Site estático (Vite + React) publicado na **raiz** do domínio:

- **URL:** https://wsengenhariadigital.com.br/
- **Destino no servidor (FTP):** `/wsengenhariadigital.com.br/htdocs`
- **Pasta do build:** `dist/` (gerada por `npm run build`)

> A pasta `anima/` (Galeria Anima, em https://wsengenhariadigital.com.br/anima) vive dentro de `htdocs/`
> e **não é afetada** por este deploy — os arquivos do site ficam ao lado dela.

---

## Publicação rápida (o dia a dia)

```powershell
cd F:\codigos\ws-informatica
powershell -NoProfile -ExecutionPolicy Bypass -File .\deploy.ps1
```

Isso faz, em sequência:

1. `npm run build` — gera o `dist/` atualizado;
2. envia **todos** os arquivos de `dist/` para `/wsengenhariadigital.com.br/htdocs` via FTP.

Nada é **apagado** no servidor: o script apenas envia/sobrescreve os arquivos do build.

---

## Opções do `deploy.ps1`

| Opção | Padrão | O que faz |
|---|---|---|
| `-SkipBuild` | desligado | **Não** roda `npm run build`; publica o `dist/` que já existe. Útil quando você buildou manualmente. |
| `-RemoteRoot '<caminho>'` | valor de `remoteRoot` no config | Muda o destino no FTP (ex.: publicar em `/wsengenhariadigital.com.br/htdocs/outra-pasta`). |
| `-LocalRoot '<pasta>'` | `.\dist` | Pasta local de origem a enviar. |
| `-ConfigPath '<arquivo>'` | `.\deploy.config.json` | Caminho alternativo do arquivo de credenciais. |

### Exemplos

```powershell
# Publicar sem rebuildar (usa o dist/ atual)
.\deploy.ps1 -SkipBuild

# Publicar em outra pasta do servidor
.\deploy.ps1 -RemoteRoot '/wsengenhariadigital.com.br/htdocs/promo'

# Usar um arquivo de credenciais específico
.\deploy.ps1 -ConfigPath 'C:\creds\ftp.json'
```

---

## Credenciais: `deploy.config.json`

O script lê as credenciais FTP deste arquivo (na mesma pasta). Formato:

```json
{
  "host": "ftpupload.net",
  "port": 21,
  "tls": true,
  "user": "if0_43389193",
  "password": "********",
  "remoteRoot": "/wsengenhariadigital.com.br/htdocs"
}
```

Regras de resolução (nesta ordem):

1. `-ConfigPath` (se informado);
2. `.\deploy.config.json` (padrão, ao lado do script);
3. `F:\codigos\015\tools\deploy.config.json` (fallback — mesmo host/conta da Galeria Anima).

> **Segurança:** `deploy.config.json` está no `.gitignore` (contém senha). **Não** faça commit dele.
> Se trocar a senha FTP no painel da hospedagem, atualize este arquivo.

---

## Build detalhado (o que o `deploy.ps1` automatiza)

```powershell
npm install        # só na primeira vez / após mudar dependências
npm run build      # gera dist/
```

- `index.html`, `assets/` (JS/CSS com hash) e imagens vão para `dist/`.
- Arquivos em **`public/`** são copiados **como estão** para a raiz do `dist/` — é onde ficam
  `robots.txt`, `sitemap.xml`, `favicon.svg` e as imagens (`hero.webp`, `logo-300.webp`, etc.).
- O site usa caminhos absolutos (`/assets/...`), por isso é publicado na **raiz** do domínio.

---

## SEO

- `public/robots.txt` — libera tudo e aponta o sitemap.
- `public/sitemap.xml` — lista a página inicial com o domínio correto
  (`https://wsengenhariadigital.com.br/`).

Ao mudar o domínio do site, atualize a URL nos dois arquivos.

---

## Publicação manual (sem o script)

Caso precise enviar manualmente por um cliente FTP (FileZilla, etc.), envie o conteúdo de `dist/`
**para dentro** de `/wsengenhariadigital.com.br/htdocs`:

```
dist/index.html          -> htdocs/index.html
dist/assets/…            -> htdocs/assets/…
dist/*.webp, favicon.svg -> htdocs/
dist/robots.txt          -> htdocs/robots.txt
dist/sitemap.xml         -> htdocs/sitemap.xml
```

Não mexa na pasta `htdocs/anima/`.

---

## Solução de problemas

- **Página abre mas sem estilo/imagem (404 em `/assets/...` ou `/hero.webp`):**
  o upload foi parcial — rode `.\deploy.ps1` de novo.
- **Ainda mostra a página antiga ("só o nome"):**
  cache do navegador — recarregue com `Ctrl + F5`.
- **Erro de conexão FTP (`530` / `Login failed`):**
  credenciais erradas ou senha trocada no painel — ajuste `deploy.config.json`.
- **`npm` não reconhecido:**
  instale o Node.js (LTS) e reabra o terminal.
- **Tela 500 no `/anima`:** não é deste projeto (é o backend PHP da Galeria Anima); reverta para o
  suporte do projeto `F:\codigos\015`.

---

## Resumo

| Ação | Comando |
|---|---|
| Buildar e publicar | `.\deploy.ps1` |
| Só publicar o que já está em `dist/` | `.\deploy.ps1 -SkipBuild` |
| Só buildar (sem enviar) | `npm run build` |
| Rodar localmente (dev) | `npm run dev` |
