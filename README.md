# Monorepo

## Commands

### Install and 'build'

Run `yarn install` install the dependencies of **all** workspaces, including the root project.

Subsequently, run `yarn workspaces run build` to transpile all custom libraries' typescript code into javascript code to their `dist` folders.

### Testing

Run `npx jest` to run all jest projects.

Jest project names can be found in the jest.config.ts file of the respective project. The property is 'displayName'.

Run `npx jest --selectProjects <projectname>` to run a specific jest project only

Run `npx jest --ignoreProjects <projectname>` to exclude jest projects from running
