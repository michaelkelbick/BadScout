# Stack Details

Sveltekit is used for backend and frontend, as well as communication between the two. Tailwind is used for styling. better-auth is used for authentication, and connects with Kysely, which is used for the ORM. Prisma is used for migration handling and database structure, while Postgres is the actual ran database.

# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
pnpm dlx sv@0.16.1 create --template minimal --types ts --add prettier eslint tailwindcss="plugins:none" sveltekit-adapter="adapter:node" experimental="versions:none+features:async,remoteFunctions,explicitEnvironmentVariables,handleRenderingErrors" --install pnpm bad-scout
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
