const assert = require('yeoman-assert');
const { run } = require('yeoman-test');
const { join } = require('path');

describe('generator-component:sub-coffeescript', function () {
    const generator = join(__dirname, '../generators/app');
    it('yo @dizmo/component --coffeescript', () => {
        return run(generator).withOptions({
            'author': 'Dizmo Developer',
            'coffeescript': true,
            'email': 'developer@dizmo.com',
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
                'coffeelint.json',
                'docs/.gitignore',
                'dist',
                'dist/.gitignore',
                'dist/.npmignore',
                'jsdoc.json',
                'lib',
                'lib/index.coffee',
                'lib/styles',
                'lib/styles/styles.scss',
                'LICENSE',
                '.npmignore',
                'package.json',
                'README.md',
                'test',
                'test/test.coffee',
                '.travis.yml',
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
                    'chai': '^4.2.0',
                    'coffeelint': '2.1.0',
                    'coffeescript': '^2.5.1',
                    'coveralls': '^3.1.0',
                    'css-loader': '^5.0.1',
                    'fs-extra': '^9.0.1',
                    'ignore-styles': '^5.0.1',
                    'jsdoc': '^3.6.6',
                    'jsdom': '16.4.0',
                    'jsdom-global': '3.0.2',
                    'minami': '^1.2.3',
                    'mocha': '^8.2.1',
                    'nyc': '^15.1.0',
                    'sass': '^1.32.0',
                    'sass-loader': '^10.1.0',
                    'source-map-loader': '^2.0.0',
                    'style-loader': '^2.0.0',
                    'tmp': '^0.2.1',
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
                'version': '1.0.0'
            });
        });
    });
    it('yo @dizmo/component --git --coffeescript', () => {
        return run(generator).withOptions({
            'author': 'Dizmo Developer',
            'email': 'developer@dizmo.com',
            'git': true
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
