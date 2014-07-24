Package.describe({
    summary: "Moment + Timezones + Data 2010-2020"
});

Package.on_use(function (api) {
	api.use();
    api.add_files("moment.js", "client");
});
