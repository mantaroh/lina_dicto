const config = require('./package.json');

// process.on('unhandledRejection', console.dir);

module.exports =
{
	dir: './',
	out: '../release',

	'app-bundle-id': 'com.michinari_nukazawa/lina_dicto',

	'app-version': config.version,

	overwrite: true,  // 上書き

	'helper-bundle-id': 'com.michinari_nukazawa/lina_dicto',
	overwrite: true,
	asar: true,
	prune: true,
	ignore: "node_modules/(electron-packager|electron-prebuilt|\\.bin)"
		+ "|node_modules/(babel.*|intelli-espower-loader|power-assert.*|mocha)"
		// + "|.*\\.txt"
		+ "|work/.*|test/.*"
		+ "|w_dict/.*"
		+ "|data/.*\\.(zip|sh)"
		+ "|release\\.js",
	'version-string': {
		CompanyName: 'daisy_bell',
		FileDescription: 'Dictionary Application, Japanese to Esperanto',
		OriginalFilename: config.name,
		FileVersion: config.version,
		ProductVersion: config.version,
		ProductName: config.name,
		InternalName: config.name
	}
};

