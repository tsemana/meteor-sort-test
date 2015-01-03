Package.describe({
	name: "velocity:test-proxy",
	summary: "Dynamically created package to expose test files to mirrors",
	version: "0.0.4",
	debugOnly: true
});

Package.on_use(function (api) {
	api.use("coffeescript", ["client", "server"]);
	api.add_files("tests/jasmine/client/integration/lib/wait_for_router_helper.js",["client"]);
	api.add_files("tests/jasmine/client/integration/smoke_spec.js",["client"]);
});