module.exports = {
    files : ['src/lazy-image.js'],
    options : {
    	devel: true,
        jshintrc : '.jshintrc',
        jshintignore : '.jshintignore',
        reporter : require('jshint-junit-reporter'),
        reporterOutput : 'target/reports/jshint-result.xml'
    }
};