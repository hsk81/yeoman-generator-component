const assert = require('yeoman-assert');
const { run } = require('yeoman-test');
const { join } = require('path');

describe('generator-module:sub-typescript', function () {
    const generator = join(__dirname, '../generators/app');
    it('yo @dizmo/component --typescript', () => {
        return run(generator).withOptions({
            'author': 'Dizmo Developer',
            'email': 'developer@dizmo.com',
            'typescript': true,
            'url': 'https://www.dizmo.com/developer'
        }).then(() => {
            assert.file([
                'babel.config.js',
                'cli',
                'cli/run-build.js',
                'cli/run-clean.js',
                'cli/run-docs.js',
                'cli/run-lint.js',
                'cli/run-prepack.js',
                'cli/run-test.js',
                'cli/run-utils.js',
                'docs/.gitignore',
                'dist',
                'dist/.gitignore',
                'dist/.npmignore',
                '.eslintrc.json',
                'lib',
                'lib/index.ts',
                'LICENSE',
                '.npmignore',
                'package.json',
                'README.md',
                'test',
                'test/test.ts',
                '.travis.yml',
                'tsconfig.json',
                'typedoc.json',
                'webpack.config.js',
                '.yo-rc.json'
            ]);
            assert.jsonFileContent('package.json', {
                'author': {
                    'name': 'Dizmo Developer',
                    'email': 'developer@dizmo.com',
                    'url': 'https://www.dizmo.com/developer'
                },
                'contributors': [
                    {
                        'name': 'Dizmo Developer',
                        'email': 'developer@dizmo.com',
                        'url': 'https://www.dizmo.com/developer'
                    }
                ],
                'dependencies': {},
                'description': 'web component',
                'devDependencies': {
                    '@babel/cli': '^7.12.10',
                    '@babel/core': '^7.12.10',
                    '@babel/plugin-transform-runtime': '^7.12.10',
                    '@babel/preset-env': '^7.12.11',
                    '@types/chai': '^4.2.14',
                    '@types/mocha': '^8.2.0',
                    '@typescript-eslint/eslint-plugin': '4.12.0',
                    '@typescript-eslint/parser': '4.12.0',
                    'chai': '^4.2.0',
                    'coveralls': '^3.1.0',
                    'eslint': '^7.17.0',
                    'minami': '^1.2.3',
                    'mocha': '^8.2.1',
                    'nyc': '^15.1.0',
                    'source-map-loader': '^2.0.0',
                    'typedoc': '^0.20.13',
                    'typescript': '^4.1.3',
                    'webpack': '^5.11.1',
                    'webpack-cli': '^4.3.1',
                    'yargs': '^16.2.0'
                },
                'files': [
                    'dist/lib'
                ],
                'keywords': [
                    'component', 'module'
                ],
                'license': 'ISC',
                'main': 'dist/lib/index.js',
                'name': '@dizmo/my-component',
                'repository': {
                    'type': 'git',
                    'url': ''
                },
                'scripts': {
                    'build': 'node ./cli/run-build.js',
                    'clean': 'node ./cli/run-clean.js',
                    'cover': 'node ./cli/run-test.js --cover',
                    'docs': 'node ./cli/run-docs.js',
                    'lint': 'node ./cli/run-lint.js',
                    'prepack': 'node ./cli/run-prepack.js',
                    'test': 'node ./cli/run-test.js'
                },
                'types': 'dist/lib/index.d.ts',
                'version': '1.0.0'
            });
        });
    });
    it('yo @dizmo/component --typescript --git', () => {
        return run(generator).withOptions({
            'author': 'Dizmo Developer',
            'email': 'developer@dizmo.com',
            'git': true,
            'typescript': true
        }).then(() => {
            assert.file([
                '.gitignore'
            ]);
            assert.noFile([
                '.npmignore'
            ]);
        });
    });
});
