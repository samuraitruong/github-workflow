# github-workflow

## Login to github package

Update yarnrc to change your scopes

```sh
yarn npm login --scope [yourscope]

```

## Publish packages

```
yarn workspaces foreach --exclude "." run publish
```

https://npm.pkg.github.com

## Secret

NPM_CONFIG

```
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```
